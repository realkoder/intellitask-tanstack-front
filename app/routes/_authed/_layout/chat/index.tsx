import { createFileRoute } from '@tanstack/react-router';
import { ComponentPropsWithoutRef, useState } from 'react';
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from '~/components/ui/chat-input';
import getRequestClient, { getRequestClientWithAuth } from '~/lib/getRequestClient';
import { generateChatroomMembers } from '~/utils/chatroom-utilities';
import { useAtomValue, useSetAtom } from 'jotai';
import { chatroomsAtom, currentChatroomAtom, currentProjectIdAtom, currentTeamspaceIdAtom, teamspacesAtom } from '~/lib/atoms/teamspace/atom';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/_layout/chat/')({
  component: AiChat,
});

function AiChat({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const navigate = useNavigate();
  const teamspaces = useAtomValue(teamspacesAtom);
  const setChatrooms = useSetAtom(chatroomsAtom);

  const state = Route.useRouteContext()
  const [userID] = useState<string>(state.userId)
  const [userInput, setUserInput] = useState('');
  const currentTeamspaceId = useAtomValue(currentTeamspaceIdAtom);
  const currentProjectId = useAtomValue(currentProjectIdAtom);
  const currentTeamspace = teamspaces?.find(teamspace => teamspace.id === currentTeamspaceId);
  const currentProject = currentTeamspace?.projects?.find(project => project.id === currentProjectId);
  const setCurrentChatroom = useSetAtom(currentChatroomAtom);


  const sendMessage = async () => {
    if ((!userInput.trim())) return;

    try {
      // Generate chatroom members - will be just the current user if no teamspace/project
      const chatroomMembers = generateChatroomMembers({
        currentUserId: userID,
        project: currentProject,
        teamspace: currentTeamspace
      });

      // Create a new chatroom - this works even without teamspace/project
      const { data: createdChatroom } = await getRequestClient().chatrooms.createChatroom({
        chatroomCreatorId: userID,
        chatroomMembers: chatroomMembers,
        isPrivate: currentProject?.isPrivate || false,
        projectId: currentProject?.id, // Will be undefined if no project selected
        name: 'New Chat Conversation',
        teamIds: [],
        type: 'CHATROOM'
      });

      if (currentProject) {
        currentProject.chatrooms?.push(createdChatroom);
      } else {
        setChatrooms(cur => [...cur, createdChatroom]);
      }


      console.log('New chatroom created:', createdChatroom);
      setCurrentChatroom(createdChatroom);
      localStorage.setItem('pendingMessage', userInput)

      navigate({ to: '/chat/$chatroomId', params: { chatroomId: createdChatroom.id } })

      // Connect to the new chatroom before sending a message
    } catch (error) {
      console.error('Error creating chatroom:', error);
      return;
    }
  }


  // Render chat input component to avoid code duplication
  const chatInput = (
    <ChatInput
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onSubmit={sendMessage}
      hasMessages={false} // Pass this to control placeholder animation
    >
      <ChatInputTextArea
        placeholder={"Type a message..."}
        autoFocus
        disabled={false}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <ChatInputSubmit disabled={!userInput.trim()} />
    </ChatInput>
  );

  // If no messages, display input in the middle

  return (
    <div className="flex-1 flex flex-col h-full" {...props}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div>
          <h3 className="text-2xl font-bold mb-6 font-mono">What are we solving today?</h3>
        </div>
        <div className="px-2 py-4 max-w-4xl mx-auto w-full">{chatInput}</div>
      </div>
    </div>
  );
}

export default AiChat;
