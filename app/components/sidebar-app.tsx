import { Button } from './ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from './ui/sidebar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { MessageSquare, SquarePen } from 'lucide-react';
import type { ComponentProps } from 'react';
import { TeamspaceNav } from './ui/teamspace-nav';
import { useNavigate } from '@tanstack/react-router';
import IntelliOptimaLogo from '@/assets/img/IntelliOptima-Black-Text-Logo.webp';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import CreateTeamspaceModal from './CreateTeamspaceModal';
import { useMemo } from 'react';
import { NavUser } from './nav-user';
import { teamspacesAtom, chatroomsAtom, currentChatroomAtom, currentTeamspaceIdAtom, currentProjectIdAtom } from '../lib/atoms/teamspace/atom';
import { types } from '../lib/client';
import { sortChatroomsByLastMessage, getLatestMessageTime } from '../utils/chatroom-utilities';

export function SidebarApp({ ...props }: ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const teamspaces = useAtomValue(teamspacesAtom);
  const chatrooms = useAtomValue(chatroomsAtom);

  const [currentChatroom, setCurrentChatroom] = useAtom(currentChatroomAtom);
  const setCurrentTeamspaceId = useSetAtom(currentTeamspaceIdAtom)
  const setCurrentProjectId = useSetAtom(currentProjectIdAtom)

  // Sort chatrooms by the most recent message
  const sortedChatrooms = useMemo(() => {
    return sortChatroomsByLastMessage(chatrooms || []);
  }, [chatrooms]);

  // Group chatrooms by recency, but with simpler logic
  const categorizedChatrooms = useMemo(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Get the 5 most recent chatrooms
    const recent = sortedChatrooms.slice(0, 5);

    // Get chatrooms from the last week (excluding recent ones)
    const previousWeek = sortedChatrooms.filter(chatroom => {
      const latestMessageTime = getLatestMessageTime(chatroom);
      return latestMessageTime >= oneWeekAgo &&
        !recent.some(r => r.id === chatroom.id);
    }).slice(0, 5);

    // Get chatrooms from the last month
    const previousMonth = sortedChatrooms.filter(chatroom => {
      const latestMessageTime = getLatestMessageTime(chatroom);
      return latestMessageTime < oneWeekAgo && latestMessageTime >= oneMonthAgo;
    }).slice(0, 5);

    // Get older chatrooms
    const previous = sortedChatrooms.filter(chatroom => {
      const latestMessageTime = getLatestMessageTime(chatroom);
      return latestMessageTime < oneMonthAgo;
    }).slice(0, 5);

    return {
      recent,
      previousWeek,
      previousMonth,
      previous
    };
  }, [sortedChatrooms]);

  const handleChatroomClick = (chatroom: types.ChatroomDto) => {
    setCurrentChatroom(chatroom);
    // If the chatroom has a project, set that too
    if (chatroom.projectId) {
      const relatedTeamspace = teamspaces?.find(teamspace =>
        teamspace.projects?.some(project => project.id === chatroom.projectId)
      );

      if (relatedTeamspace) {
        setCurrentTeamspaceId(relatedTeamspace.id);
        const relatedProject = relatedTeamspace.projects?.find(project =>
          project.id === chatroom.projectId
        );
        if (relatedProject) {
          setCurrentProjectId(relatedProject.id);
        }
      }
    } else {
      setCurrentTeamspaceId(undefined);
      setCurrentProjectId(undefined);
    }

    // Navigate to the chat route
    navigate({ to: '/chat/$chatroomId', params: { chatroomId: chatroom.id }, viewTransition: true });
  };

  const handleClearSelection = () => {
    // Immediately clear all selections
    setCurrentChatroom(undefined);
    setCurrentProjectId(undefined);
    setCurrentTeamspaceId(undefined);
    // Navigate to the chat route
    setTimeout(() => {
      navigate({ to: '/chat', viewTransition: true });
    }, 100);
  };

  // Simplified chatroom item renderer
  const renderChatroomItem = (chatroom: types.ChatroomDto) => (
    <SidebarMenuItem key={chatroom.id}>
      <SidebarMenuButton
        className="max-w-full text-left"
        onClick={() => handleChatroomClick(chatroom)}
      >
        <div className="flex items-center w-full overflow-hidden">
          <MessageSquare className={`h-4 w-4 flex-shrink-0 ${currentChatroom?.id === chatroom.id ? 'text-orange-500' : ''}`} />
          <span className="ml-2 truncate">{chatroom.name.length > 20 ? chatroom.name.slice(0, 20) + '...' : chatroom.name}</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className="border-r-0 overflow-hidden" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between p-2">
          <button
            className="flex items-start hover:cursor-pointer"
            onClick={handleClearSelection}
          >
            <img
              src={IntelliOptimaLogo}
              alt="IntelliOptima"
              className="h-8 object-contain object-left"
            />
          </button>
          {/* New Chat Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost" onClick={handleClearSelection}>
                  <SquarePen className="h-5 w-5" />
                  <span className="sr-only">New Chat</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SidebarHeader>
      { /**
       *
       */}
      <SidebarContent className="overflow-hidden">
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Teamspaces */}
          <SidebarGroup>
            <div className="flex items-center justify-between">
              <SidebarGroupLabel>Teamspaces</SidebarGroupLabel>
              <CreateTeamspaceModal />
            </div>
            <SidebarMenu>
              <TeamspaceNav items={teamspaces} />
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />

          {/* Recent Chats - simplified UI */}
          <SidebarGroup>
            <SidebarGroupLabel>Recent</SidebarGroupLabel>
            <SidebarMenu>
              {categorizedChatrooms.recent.map(renderChatroomItem)}
            </SidebarMenu>
          </SidebarGroup>

          {/* Previous 7 Days - simplified */}
          {categorizedChatrooms.previousWeek.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Previous 7 Days</SidebarGroupLabel>
              <SidebarMenu>
                {categorizedChatrooms.previousWeek.map(renderChatroomItem)}
              </SidebarMenu>
            </SidebarGroup>
          )}

          {/* Previous 30 Days - simplified */}
          {categorizedChatrooms.previousMonth.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Previous 30 Days</SidebarGroupLabel>
              <SidebarMenu>
                {categorizedChatrooms.previousMonth.map(renderChatroomItem)}
              </SidebarMenu>
            </SidebarGroup>
          )}

          {/* Previous - simplified */}
          {categorizedChatrooms.previous.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Previous</SidebarGroupLabel>
              <SidebarMenu>
                {categorizedChatrooms.previous.map(renderChatroomItem)}
              </SidebarMenu>
            </SidebarGroup>
          )}

          {/* Show a message if no chatrooms exist - keep this helpful feature */}
          {!sortedChatrooms.length && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No recent chats. Start a new conversation using the button above.
            </div>
          )}
        </div>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="flex items-center">{<NavUser />}</SidebarFooter>
    </Sidebar>
  );
}
