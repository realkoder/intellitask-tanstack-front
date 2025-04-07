import { ChevronRight, MessageSquareIcon, SparklesIcon, UserIcon } from "lucide-react";
import { ChatMessage, ChatMessageAvatar, ChatMessageContent } from "~/components/ui/chat-message";
import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "~/components/ui/button";
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from "~/components/ui/chat-input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "~/components/ui/sheet";
import { types } from "../../lib/client";
import MessageActions from "../MessageActions";
import { useAtom } from "jotai";
import { currentChatroomAtom, } from "../../lib/atoms/teamspace/atom";
import { v4 as uuidv4 } from 'uuid';
import getRequestClient from "~/lib/getRequestClient";
import { toast } from "sonner";
import { chats } from "~/lib/client";
import { ChatMessageArea } from "~/components/ui/chat-message-area";

type MessageComponentProps = {
  message: types.ChunkDataResponse;
  userID: string;
  userImage: string | undefined;
  stream?: Awaited<ReturnType<typeof chats.ServiceClient.prototype.chat>>;
  allMessages?: types.ChunkDataResponse[]; // Add this to access all messages
};

// Standard message component without memo
const StandardMessageComponent = ({
  messageData,
  isLastChunk = true,
  userID,
  userImage,
  onReply,
  chatroom  // Add chatroom parameter
}: {
  messageData: types.ChunkDataResponse;
  isLastChunk?: boolean,
  userID: string,
  userImage?: string,
  onReply?: () => void,
  chatroom?: any  // Add chatroom parameter type
}) => {
  // Only use console.log for debugging, remove in production
  // console.log('user image', userImage);

  const [showActions, setShowActions] = useState(false);
  const isCurrentUser = messageData.data.senderId === userID;
  const [currentChatroom] = useAtom(currentChatroomAtom);
  const isTeamChat = currentChatroom?.members.length !== 1;

  // No need for refs or effects, just use the prop directly
  // const contentRef = useRef(messageData.data.content);
  // const [shouldUpdate, setShouldUpdate] = useState(false);

  // useEffect(() => {
  //   if (contentRef.current !== messageData.data.content) {
  //     contentRef.current = messageData.data.content;
  //     setShouldUpdate(!shouldUpdate);
  //   }
  // }, [messageData.data.content]);

  if (!isCurrentUser) {
    // Get sender's image from chatroom members if available
    const senderImage = chatroom?.members?.find(
      (member: any) => member.user.id === messageData.data.senderId
    )?.user.image;

    return (
      <div
        className={`relative group py-3 ${isTeamChat ? 'hover:bg-gray-100 px-2 rounded-lg' : ''} `}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <ChatMessage
          key={messageData.data.id || messageData.identifier}
          id={messageData.data.id || messageData.identifier}
          className="w-full overflow-hidden"
        >
          <ChatMessageAvatar
            icon={messageData.data.isAiGenerated ? <SparklesIcon /> : <UserIcon />}
            imageSrc={messageData.data.isAiGenerated ? undefined : senderImage}
            className="flex-shrink-0"
          />
          <ChatMessageContent
            content={messageData.data.content} // Use prop directly
            showCursor={!isLastChunk && messageData.data.isAiGenerated}
            reasoning={messageData.data.reasoning}
            isReasoning={!!messageData.data.reasoning && messageData.data.reasoning.length > 0}
            sources={messageData.data.sources}
            className="break-words overflow-hidden"
          />
        </ChatMessage>

        {isTeamChat && (
          <div className={`absolute -top-7 -right-2 transition-opacity duration-200 ${showActions ? 'opacity-100' : 'opacity-0'}`}>
            <MessageActions
              messageData={messageData}
              onReply={onReply}
            />
          </div>
        )}

      </div>
    );
  }

  return (
    <div
      className="relative group py-2"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <ChatMessage
        key={messageData.data.id || messageData.identifier}
        id={messageData.data.id || messageData.identifier}
        variant="bubble"
        type="outgoing"
        className="w-full overflow-hidden"
      >
        <ChatMessageContent
          content={messageData.data.content} // Use prop directly
          sources={messageData.data.sources}
          className="break-words overflow-hidden"
        />
        {userImage && <ChatMessageAvatar imageSrc={userImage} className="flex-shrink-0" />}
      </ChatMessage>
    </div>
  );
};

const MessageComponent = ({ message, userID, userImage, stream, allMessages = [] }: MessageComponentProps) => {
  // State for the thread sidebar
  const [threadOpen, setThreadOpen] = useState(false);
  const [replyInput, setReplyInput] = useState("");
  const [replySending, setReplySending] = useState(false);
  const [currentChatroom] = useAtom(currentChatroomAtom);

  // Get the message ID for easier reference
  const messageId = message.data.id || message.identifier;

  // Find thread messages directly from allMessages
  const threadMessages = useMemo(() => {
    return allMessages
      .filter(msg => msg.data.parentMessageId === messageId)
      .map(msg => msg.data);
  }, [allMessages, messageId]);

  // Check if this message has any replies
  const hasThreadMessages = threadMessages.length > 0;

  // Explicitly check if this is a thread message (has a parentMessageId)
  const isThreadMessage = !!message.data.parentMessageId;

  // If this is a thread message itself, it shouldn't show thread UI controls
  const shouldShowThreadUI = !isThreadMessage && (hasThreadMessages || message.data.isThreadStarter);

  // Function to handle sending a reply
  const sendReply = async () => {
    if (!replyInput.trim() || !currentChatroom || replySending) return;

    setReplySending(true);
    try {
      // Get the parent message ID
      const parentMessageId = messageId;
      const replyMessageId = uuidv4();

      // Use the stream from the parent component if available
      if (stream) {
        // Send the message through the existing WebSocket connection
        await stream.send({
          data: {
            chatroomId: currentChatroom.id,
            parentMessageId: parentMessageId,
            isAiGenerated: false,
            senderId: userID,
            content: replyInput.trim(),
            attachments: [],
            isReasoning: false,
            reasoning: '',
            sources: []
          },
          identifier: replyMessageId,
          isLastChunk: true,
          startIndex: 0,
          totalChunks: 1,
        });
      } else {
        // Fallback to creating a new stream if not provided by parent
        const client = getRequestClient();
        const newStream = await client.chats.chat({
          userId: userID,
          chatroomId: currentChatroom.id,
        });

        await newStream.send({
          data: {
            chatroomId: currentChatroom.id,
            parentMessageId: parentMessageId,
            isAiGenerated: false,
            senderId: userID,
            content: replyInput.trim(),
            attachments: [],
            isReasoning: false,
            reasoning: '',
            sources: []
          },
          identifier: replyMessageId,
          isLastChunk: true,
          startIndex: 0,
          totalChunks: 1,
        });

        // Close the temporary stream
        newStream.close();
      }

      // Clear the input
      setReplyInput("");
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("Failed to send reply. Please try again.");
    } finally {
      setReplySending(false);
    }
  };

  // Function to check if a message is from the current user
  const ThreadButton = () => {
    const previewMessage = threadMessages[threadMessages.length - 1];
    const replyCount = threadMessages.length;
    const [showArrow, setShowArrow] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    // Get unique participants in the thread
    const participants = useMemo(() => {
      // Create a Set of unique sender IDs
      const uniqueSenders = new Set(threadMessages.map(msg => msg.senderId));
      // Convert to array and return sender info
      return Array.from(uniqueSenders).map(senderId => {
        // Find the sender in the chatroom members
        const member = currentChatroom?.members?.find(
          (m: any) => m.user.id === senderId
        );

        return {
          id: senderId,
          isAi: threadMessages.find(msg => msg.senderId === senderId)?.isAiGenerated || false,
          name: member?.user.name || 'User',
          image: member?.user.image
        };
      });
    }, [threadMessages, currentChatroom]);

    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-full sm:w-[90%] md:w-[80%] flex items-center justify-start gap-1 py-1 text-xs text-muted-foreground bg-white relative"
        onClick={() => setThreadOpen(true)}
        onMouseEnter={() => {
          setShowArrow(true);
          setShowPreview(true);
        }}
        onMouseLeave={() => {
          setShowArrow(false);
          setShowPreview(false);
        }}
      >
        <div className="flex items-center min-w-[80px] z-10">
          <MessageSquareIcon size={12} className="mr-1" />
          <span>
            {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
          </span>
        </div>

        <div className="relative h-6 flex-1 overflow-hidden">
          {/* Participants View */}
          <div
            className={`absolute left-0 flex transition-all duration-500 ease-in-out ${showPreview ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
              }`}
          >
            {participants.slice(0, 3).map((participant, index) => (
              <div key={index} className="w-6 h-6 rounded-md flex items-center justify-center ml-2 bg-gray-100">
                {participant.isAi ?
                  <SparklesIcon size={12} /> :
                  (participant.image ?
                    <img src={participant.image} className="w-6 h-6 rounded-md" alt="user" /> :
                    <UserIcon size={12} />)
                }
              </div>
            ))}
            {participants.length > 3 && (
              <div className="w-5 h-5 rounded-md flex items-center justify-center ml-2 bg-gray-100">
                <span className="text-xs">+{participants.length - 3}</span>
              </div>
            )}
          </div>

          {/* Preview Message View */}
          <div
            className={`absolute left-0 h-6 flex items-center transition-all duration-500 ease-in-out ${showPreview ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
              }`}
          >
            <div className="ml-2 flex items-center w-full overflow-hidden">
              {previewMessage?.isAiGenerated ? (
                <SparklesIcon size={12} className="flex-shrink-0" />
              ) : (
                (() => {
                  // Find the sender's information in the chatroom members
                  const member = currentChatroom?.members?.find(
                    (member: any) => member.user.id === previewMessage?.senderId
                  );
                  const senderImage = member?.user.image;

                  return senderImage ?
                    <img src={senderImage} className="w-6 h-6 rounded-md flex-shrink-0" alt={member?.user.name || 'User'} /> :
                    <UserIcon size={12} className="flex-shrink-0" />;
                })()
              )}
              {previewMessage && (
                <span className="ml-2 truncate text-muted-foreground/70 w-full max-w-[calc(100%-24px)]">
                  {previewMessage.content?.substring(0, 70) || ''}
                  {previewMessage.content?.length > 70 ? '...' : ''}
                </span>
              )}
            </div>
          </div>
        </div>

        <ChevronRight className={`ml-auto transition-all duration-300 ease-in-out z-10 ${showArrow ? 'opacity-100 text-black' : 'opacity-0'}`} />
      </Button>
    );
  };

  // Use a ref to store the message content
  const messageContentRef = useRef(message.data.content);

  // Update the ref when message content changes
  useEffect(() => {
    messageContentRef.current = message.data.content;
  }, [message.data.content]);

  // Add a function to open the thread sidebar
  const openThread = () => {
    setThreadOpen(true);
  };

  return (
    <div className={`relative w-full ${hasThreadMessages ? 'hover:bg-gray-100 px-2 rounded-lg' : ''}`}>
      {/* Main message */}
      <StandardMessageComponent
        messageData={{
          ...message,
          data: {
            ...message.data,
            content: messageContentRef.current
          }
        }}
        isLastChunk={message.isLastChunk}
        userID={userID}
        userImage={userImage}
        onReply={openThread}
        chatroom={currentChatroom}
      />

      {/* Thread button if there are thread messages */}
      {shouldShowThreadUI && (
        <div className="pl-4 sm:pl-8 pb-1">
          <ThreadButton />
        </div>
      )}

      {/* Thread reply sheet - always available */}
      <Sheet open={threadOpen} onOpenChange={setThreadOpen}>
        <SheetContent
          side="right"
          className="p-0 flex flex-col w-full sm:min-w-[600px] md:min-w-[750px] lg:min-w-[800px] xl:min-w-[900px] max-w-[95vw]"
        >
          <SheetHeader className="px-3 sm:px-4 py-3 border-b sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center">
              <SheetTitle className="text-base sm:text-lg">
                {hasThreadMessages
                  ? `Thread (${threadMessages.length} ${threadMessages.length === 1 ? 'reply' : 'replies'})`
                  : 'Reply to message'}
              </SheetTitle>
              <SheetClose className="hover:cursor-pointer" />
            </div>
          </SheetHeader>

          {/* Main content area with auto height */}
          <div className="flex-1 flex flex-col h-[calc(100vh-140px)] overflow-hidden">
            {/* Use ChatMessageArea component which already has the ScrollArea and scroll button */}
            <ChatMessageArea scrollButtonAlignment="right" className="flex-1 px-1 sm:px-2 py-4">
              <div className="space-y-4">
                {/* Parent message */}
                <div className="w-full border-b border-gray-200 mb-6 p-2 sm:p-3 hover:bg-gray-100" style={{ maxWidth: "95%" }}>
                  <StandardMessageComponent
                    messageData={{
                      ...message,
                      data: {
                        ...message.data,
                        content: messageContentRef.current
                      }
                    }}
                    isLastChunk={message.isLastChunk}
                    userID={userID}
                    userImage={userImage}
                    onReply={openThread}
                    chatroom={currentChatroom}
                  />
                </div>

                {/* Thread messages */}
                {threadMessages.map((threadMessage: types.ChatMessage) => (
                  <div className="w-full border-b border-gray-200 mb-4 hover:bg-gray-100 p-2 sm:p-3" key={threadMessage.id} style={{ maxWidth: "95%" }}>
                    <StandardMessageComponent
                      messageData={{
                        identifier: threadMessage.id,
                        data: threadMessage,
                        startIndex: 0,
                        totalChunks: 1,
                        isLastChunk: true
                      }}
                      isLastChunk={true}
                      userID={userID}
                      userImage={userImage}
                      onReply={openThread}
                      chatroom={currentChatroom}
                    />
                  </div>
                ))}
              </div>
            </ChatMessageArea>

            {/* Reply input - fixed at bottom */}
            <div className="p-2 sm:p-3 border-t mt-auto bg-white">
              <ChatInput
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                onSubmit={sendReply}
                hasMessages={true}
              >
                <ChatInputTextArea
                  placeholder={replySending ? "Sending..." : "Reply in thread..."}
                  autoFocus
                  disabled={replySending}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendReply();
                    }
                  }}
                />
                <ChatInputSubmit disabled={!replyInput.trim() || replySending} />
              </ChatInput>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MessageComponent;
