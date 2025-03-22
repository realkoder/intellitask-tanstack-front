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

export const Route = createFileRoute('/_layout')({
  component: AiChatLayout,
});

export default function AiChatLayout() {
  return (
    <SidebarProvider>
      <SidebarApp />
      <SidebarInset className="flex flex-col h-screen overflow-y-auto">
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="h-full overflow-y-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
