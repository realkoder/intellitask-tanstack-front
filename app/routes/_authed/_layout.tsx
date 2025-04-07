import { createFileRoute, Outlet } from '@tanstack/react-router';
import { SidebarApp } from '~/components/sidebar-app';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from '~/components/ui/breadcrumb';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '~/components/ui/sidebar';
import { Separator } from '~/components/ui/separator';
import OrganizationNavIcon from '../../components/OrganizationNavIcon';
import { useAtomValue, useSetAtom } from 'jotai';
import { chatroomsAtom, currentChatroomAtom, teamspacesAtom } from '../../lib/atoms/teamspace/atom';
import { useEffect } from 'react';
import { createServerFn } from '@tanstack/react-start';
import { getRequestClientWithAuth } from '../../lib/getRequestClient';
import { useEventStream } from '../../hooks/use-event-stream';

export const getTeamspaces = createServerFn()
  .handler(async () => {
    try {
      const client = getRequestClientWithAuth();
      const { data: teamspaces } = await client.chatrooms.getParticipatingTeamspaces();
      return teamspaces;
    } catch (error) {
      return ([])
    }
  })


export const getChatrooms = createServerFn()
  .handler(async () => {
    const client = getRequestClientWithAuth();
    const { data: chatrooms } = await client.chatrooms.getParticipatingChatroomsWithLatestMessages();
    console.log('chatrooms', chatrooms);
    return chatrooms;
  })


export const Route = createFileRoute('/_authed/_layout')({
  component: AiChatLayout,
});

export default function AiChatLayout() {
  const currentChatroom = useAtomValue(currentChatroomAtom);
  const setTeamspaces = useSetAtom(teamspacesAtom);
  const setChatrooms = useSetAtom(chatroomsAtom);
  const { userId } = Route.useRouteContext();
  useEventStream(userId);

  useEffect(() => {
    const fetchTeamspaces = async () => {
      const teamspaces = await getTeamspaces();
      setTeamspaces(teamspaces);
    };

    const fetchChatrooms = async () => {
      const chatrooms = await getChatrooms();
      setChatrooms(chatrooms);
    };

    Promise.all([fetchTeamspaces(), fetchChatrooms()]);
  }, []);

  return (
    <SidebarProvider>
      <SidebarApp />
      <SidebarInset className="flex flex-col h-screen overflow-y-auto">
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {currentChatroom?.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <OrganizationNavIcon />
        </header>
        <div className="h-full overflow-y-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
