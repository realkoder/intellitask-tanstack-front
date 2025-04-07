import { createFileRoute } from '@tanstack/react-router';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from '~/components/ui/chat-input';
import { ChatMessageArea } from '~/components/ui/chat-message-area';
import { chats } from '~/lib/client';
import { types } from '~/lib/client';
import getRequestClient, { getRequestClientWithAuth } from '~/lib/getRequestClient';
import { useSetAtom } from 'jotai';
import { currentChatroomAtom } from '~/lib/atoms/teamspace/atom';
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import MessageComponent from '~/components/MessageComponent';
import { getChatroomMember } from '~/utils/chatroom-utilities';

export const fetchChatroomWithMessages = createServerFn()
  .validator((d: any) => d as { chatroomId: string })
  .handler(async ({ data }) => {
    const { data: chatroom } = await getRequestClientWithAuth().chatrooms.getChatroom(data.chatroomId)
    return { chatroom }
  })

export const Route = createFileRoute('/_authed/_layout/chat/$chatroomId')({
  params: z.object({
    chatroomId: z.string(),
  }),

  beforeLoad: async (ctx) => {
    const { chatroomId } = ctx.params
    const response = await fetchChatroomWithMessages({ data: { chatroomId } })
    return { chatroom: response.chatroom }
  },
  component: AiChat,
})

export function AiChat({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const { userId, chatroom } = Route.useRouteContext()
  const { chatroomId } = Route.useParams()

  const stream = useRef<Awaited<ReturnType<typeof chats.ServiceClient.prototype.chat>>>(undefined);

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<types.ChunkDataResponse[]>([]);
  const [userInput, setUserInput] = useState('');

  // Use Jotai atoms for current selections
  const setCurrentChatroom = useSetAtom(currentChatroomAtom);

  // Keep track of scrolling state for fetching more messages when scrolling up
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (input?: string) => {
    if (loading || (!userInput.trim() && !input)) return;

    try {
      if (!stream.current) {
        // If no stream exists, try to create one
        await connect(chatroom.id);
        if (!stream.current) {
          console.error("Couldn't establish chat connection");
          return;
        }
      }

      await stream.current.send({
        data: {
          chatroomId: chatroom.id || '',
          parentMessageId: null,
          isThreadStarter: false,
          senderId: userId,
          content: input || userInput,
          attachments: [],
          isReasoning: false,
          reasoning: '',
          sources: []
        },
        identifier: uuidv4(),
        isLastChunk: true,
        startIndex: 0,
        totalChunks: 1,
      });

      setUserInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Connect to the chat when the current chatroom changes
  useEffect(() => {
    setCurrentChatroom(chatroom)

    // Transform existing messages to ChunkDataResponse format
    if (chatroom.messages?.length > 0) {
      const initialMessages: types.ChunkDataResponse[] = chatroom.messages.map(message => ({
        identifier: message.id,
        data: message,
        startIndex: 0,
        totalChunks: 1,
        isLastChunk: true
      }));

      setMessages(initialMessages);
    } else {
      setMessages([])
    }

    connect(chatroom.id)

    return () => {
      if (stream.current) {
        stream.current.close();
      }
    };
  }, [chatroomId]);

  const connect = async (chatroomId?: string) => {
    // Close existing connection if any
    if (stream.current) {
      stream.current.close();
    }

    setLoading(true);

    try {
      stream.current = await getRequestClient().chats.chat({
        userId: userId,
        chatroomId: chatroomId || chatroomId || '',
      });

      stream.current.socket.on('close', () => {
        console.log('Socket closed, will attempt to reconnect if needed');
      });

      stream.current.socket.on('open', async () => {
        setLoading(false);
        const pendingMessage = localStorage.getItem('pendingMessage')

        if (pendingMessage) {
          await sendMessage(pendingMessage)
          localStorage.removeItem('pendingMessage')
        }
      });

      for await (const msg of stream.current) {
        setMessages((prevState) => {
          // Check if this chunk belongs to an existing message
          const existingMessageIndex = prevState.findIndex(
            (m) => m.identifier === msg.identifier
          );

          // Check if this is a parent message update for a thread
          const isParentThreadUpdate = msg.identifier.startsWith('parent-');

          if (isParentThreadUpdate) {
            // Ignore any parent update messages - the component handles thread display
            return prevState;
          } else if (existingMessageIndex >= 0) {
            // This is a chunk for an existing message - update it
            const updatedMessages = [...prevState];
            const existingMessage = updatedMessages[existingMessageIndex];

            // If this is the last chunk, replace the entire message since it contains the complete content
            if (msg.isLastChunk) {
              updatedMessages[existingMessageIndex] = msg;
            } else {
              // Check if we need to append or replace content based on chunk index
              // If this chunk's startIndex is 0 or 1, it's likely a cumulative content type
              const isCumulativeContent = msg.startIndex <= 1;

              // Otherwise concatenate the content for streaming experience
              const updatedMessage = {
                ...existingMessage,
                data: {
                  ...existingMessage.data,
                  // If cumulative, replace content entirely. Otherwise append new content.
                  content: isCumulativeContent ? msg.data.content : existingMessage.data.content + msg.data.content,
                  reasoning: isCumulativeContent ? (msg.data.reasoning || '') : (existingMessage.data.reasoning || '') + (msg.data.reasoning || ''),
                  // Merge sources if they exist and deduplicate by ID
                  sources: msg.data.sources
                    ? [
                      ...(existingMessage.data.sources || []),
                      ...(msg.data.sources.filter(newSource =>
                        !(existingMessage.data.sources || []).some(existingSource =>
                          existingSource.id === newSource.id
                        )
                      ))
                    ]
                    : existingMessage.data.sources
                },
                isLastChunk: msg.isLastChunk,
                totalChunks: msg.totalChunks,
                startIndex: msg.startIndex
              };

              updatedMessages[existingMessageIndex] = updatedMessage;
            }

            return updatedMessages;
          } else {
            // This is a new message - add it
            return [...prevState, msg];
          }
        });
      }
    } catch (error) {
      console.error('Error connecting to chat:', error);
      setLoading(false);
    }
  };

  // Render chat input component to avoid code duplication
  const chatInput = (
    <ChatInput
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onSubmit={sendMessage}
      hasMessages={messages.length > 0} // Pass this to control placeholder animation
    >
      <ChatInputTextArea
        placeholder={loading ? "Connecting..." : "Type a message..."}
        autoFocus
        disabled={loading}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <ChatInputSubmit disabled={loading || !userInput.trim()} />
    </ChatInput>
  );

  // Normal layout with messages and input at bottom
  return (
    <div className="flex-1 flex flex-col h-full" {...props}>
      <ChatMessageArea scrollButtonAlignment="center" className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-4 py-8 space-y-4">
          {messages
            // Filter out messages that are replies in threads (have parentMessageId)
            .filter(message => !message.data.parentMessageId)
            .map((message) => (
              <MessageComponent
                key={message.identifier || message.data.id}
                message={message}
                userID={userId}
                userImage={getChatroomMember(chatroom, message.data.senderId)?.user.image}
                stream={stream.current}
                allMessages={messages}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>
      </ChatMessageArea>
      <div className="px-2 py-4 max-w-4xl mx-auto w-full">{chatInput}</div>
    </div>
  );
}

export default AiChat;
