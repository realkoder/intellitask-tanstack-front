import { createFileRoute } from '@tanstack/react-router';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from '~/components/ui/chat-input';
import { ChatMessage, ChatMessageAvatar, ChatMessageContent } from '~/components/ui/chat-message';
import { ChatMessageArea } from '~/components/ui/chat-message-area';
import { chats } from '~/lib/client';
import getRequestClient from '~/lib/getRequestClient';
import { useSession } from '~/lib/getBetterAuthRequestClient';
export const Route = createFileRoute('/_layout/chat/')({
  component: AiChat,
});

function AiChat({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const token = useSession().data?.session.token;

  const stream = useRef<Awaited<ReturnType<typeof chats.ServiceClient.prototype.chat>>>(undefined);

  const [userID] = useState<string>(uuidv4());
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<chats.ChunkDataResponse[]>([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (!stream.current || loading) return;
    stream.current
      .send({
        data: {
          chatroomId: 'general',
          parentMessageId: null,
          senderId: userID,
          content: userInput,
          attachments: [],
        },
        identifier: uuidv4(),
        isLastChunk: true,
        startIndex: 0,
        totalChunks: 1,
      })
      .catch(console.error);
    console.log('sent message', userInput);
    setUserInput('');
  };

  useEffect(() => {
    const connect = async () => {
      setLoading(true);
      stream.current = await getRequestClient(token ?? '').chats.chat({
        userId: userID,
        chatroomId: 'general',
      });
      stream.current.socket.on('close', connect);
      stream.current.socket.on('open', () => setLoading(false));

      for await (const msg of stream.current) {
        console.log('received message', msg);
        setMessages((prevState) => {
          return [...prevState, msg];
        });
      }
    };

    connect();
    return () => {
      stream.current?.socket.off('close', connect);
      stream.current?.close();
    };
  }, []);

  // Render chat input component to avoid code duplication
  const chatInput = (
    <ChatInput
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onSubmit={sendMessage}
      // onStop={stop}
      hasMessages={messages.length > 0} // Pass this to control placeholder animation
    >
      <ChatInputTextArea placeholder="Type a message..." autoFocus />
      <ChatInputSubmit />
    </ChatInput>
  );

  // If no messages, display input in the middle
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col h-full justify-center" {...props}>
        <div className="px-2 py-4 max-w-4xl mx-auto w-full">{chatInput}</div>
      </div>
    );
  }

  // Normal layout with messages and input at bottom
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto" {...props}>
      <ChatMessageArea scrollButtonAlignment="center" className="overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-4 py-8 space-y-4">
          {messages.map((message) => {
            if (message.data.senderId !== userID) {
              return (
                <ChatMessage key={message.data.id} id={message.data.id}>
                  <ChatMessageAvatar />
                  <ChatMessageContent content={message.data.content} />
                </ChatMessage>
              );
            }

            return (
              <ChatMessage
                key={message.data.id}
                id={message.data.id}
                variant="bubble"
                type="outgoing"
              >
                <ChatMessageContent content={message.data.content} />
              </ChatMessage>
            );
          })}
        </div>
      </ChatMessageArea>
      <div className="px-2 py-4 max-w-4xl mx-auto w-full overflow-y-hidden">{chatInput}</div>
    </div>
  );
}

export default AiChat;
