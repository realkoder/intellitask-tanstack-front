// ~/pages/team-chat/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from '~/components/ui/chat-input';
import { ChatMessageArea } from '~/components/ui/chat-message-area';
import MessageComponent from '~/components/MessageComponent';
import { mockmessages } from '../../../../lib/constants/mock-messages';


export const Route = createFileRoute('/_authed/_layout/team-chat/')({
  component: TeamChat,
})

function TeamChat({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const state = Route.useRouteContext()

  // Generate a unique user ID if not already available from the context
  // This ensures each user has a different ID for the chat
  const [userID] = useState<string>(state.userId)

  const [loading, setLoading] = useState(false); // Changed to false since we're using mock data
  const [userInput, setUserInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mockmessages]);

  const chatInput = (
    <ChatInput
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      hasMessages={mockmessages.length > 0}
    >
      <ChatInputTextArea
        placeholder={loading ? "Connecting..." : "Type a message..."}
        autoFocus
        disabled={loading}
      />
      <ChatInputSubmit disabled={loading || !userInput.trim()} />
    </ChatInput>
  );

  // Type assertion to tell TypeScript that our mock data conforms to the MockMessage type
  const typedMessages = mockmessages as any;

  const mainMessages = typedMessages.filter((message: any) =>
    // Include non-AI messages
    (!message.data.isAiGenerated ||
      // Or include AI messages that have a parent (replies)
      (message.data.isAiGenerated && message.data.parentMessageId)) &&
    // Exclude messages that are part of a thread
    !message.data.parentMessageId
  );

  if (mockmessages.length === 0) {
    return (
      <div className="flex-1 flex flex-col h-full justify-center" {...props}>
        <div className="px-2 py-4 max-w-4xl mx-auto w-full">{chatInput}</div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto" {...props}>
      <ChatMessageArea scrollButtonAlignment="center" className="overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full px-4 py-8 space-y-4">
          {mainMessages.map((message: any) => (
            <MessageComponent
              key={message.data.id}
              message={message}
              userID={userID}
              userImage={state.user?.image}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ChatMessageArea>
      <div className="px-2 py-4 max-w-4xl mx-auto w-full overflow-y-hidden">{chatInput}</div>
    </div>
  );
}
