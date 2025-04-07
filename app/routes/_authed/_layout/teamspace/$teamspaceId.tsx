import { createFileRoute } from '@tanstack/react-router'
import { useAtom, useAtomValue } from 'jotai'
import { teamspacesAtom } from '~/lib/atoms/teamspace/atom'
import { Button } from '~/components/ui/button'
import { PlusCircle, FolderPlus, FileText, Settings, RefreshCw, User, Users, Briefcase, ChevronRight, Home, Lock, ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Link } from '@tanstack/react-router'
import { cn } from '~/lib/utils'
import { z } from 'zod'
import { Skeleton } from '~/components/ui/skeleton'
import CreateProjectModal from '~/components/CreateProjectModal'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import ManageMembersModal from '~/components/ManageMembersModal'
import { Badge } from '~/components/ui/badge'
import { Avatar } from '~/components/ui/avatar'
import { types } from '~/lib/client'
import getRequestClient from '~/lib/getRequestClient'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '~/components/ui/collapsible'

// Get role badge color function
const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'OWNER':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'ADMIN':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'CONTRIBUTOR':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'VIEWER':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const Route = createFileRoute('/_authed/_layout/teamspace/$teamspaceId')({
  params: z.object({
    teamspaceId: z.string(),
  }),
  component: TeamspacePage,
})

function TeamspacePage() {
  const { teamspaceId } = Route.useParams();
  const [teamspaces, setTeamspaces] = useAtom(teamspacesAtom)
  const [showContextForm, setShowContextForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userID, setUserID] = useState<string>('');

  useEffect(() => {
    // Get current user ID
    getRequestClient().auth.handler().then(({ userID }) => {
      setUserID(userID);
    });
  }, []);

  const currentTeamspace = teamspaces
    .find(teamspace => teamspace.id === teamspaceId);

  useEffect(() => {
    if (currentTeamspace) {
      setIsLoading(false);
    }
  }, [currentTeamspace]);

  // Show loading skeleton while data is being fetched
  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="h-1.5 bg-gray-200 w-full" />
        <div className="p-6 max-w-5xl mx-auto w-full flex-1">
          <div className="mb-8 relative">
            <Skeleton className="h-10 w-60 mb-2" />
            <Skeleton className="h-4 w-full max-w-md mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Skeleton className="h-8 w-40" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton className="h-60 w-full" />
              <Skeleton className="h-60 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If no teamspace is selected, show a message
  if (!currentTeamspace) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">No teamspace selected</h2>
        <p className="text-muted-foreground mb-6">Select a teamspace from the sidebar to view its details and projects</p>
        <Button variant="outline">
          <PlusCircle className="h-4 w-4 mr-2" /> Create New Teamspace
        </Button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Teamspace accent banner */}
      <div className="h-1.5 bg-indigo-500 w-full" />

      <div className="p-6 max-w-5xl mx-auto w-full flex-1">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Link to="/chat" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-3.5 w-3.5 mr-1" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 mx-1.5" />
          <span className="font-medium text-foreground flex items-center">
            <Briefcase className="h-3.5 w-3.5 mr-1.5" />
            Teamspace
          </span>
        </div>

        {/* Teamspace Header */}
        <div className="mb-8 relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{currentTeamspace.name}</h1>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                  Teamspace
                </span>
                {currentTeamspace.members && currentTeamspace.members.length > 0 && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {currentTeamspace.members.length} member{currentTeamspace.members.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-muted-foreground">{currentTeamspace.description || 'No description provided'}</p>
          </div>
          <div className="absolute top-0 right-0">
            <Button size="sm" variant="outline">
              <Settings className="h-4 w-4 mr-2" /> Teamspace Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="md:col-span-2 space-y-6">
            {/* Projects Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Projects</h2>
                <CreateProjectModal teamspaceId={currentTeamspace.id} />
              </div>

              {currentTeamspace.projects && currentTeamspace.projects.length > 0 ? (
                <div className="space-y-3">
                  {currentTeamspace.projects.map(project => (
                    <Card
                      key={project.id}
                      className={cn(
                        "cursor-pointer transition-all border-l-4 border-l-transparent",
                        "hover:shadow-md hover:border-l-indigo-500 hover:bg-muted/30"
                      )}
                    >
                      <Link to={`/project/$projectId`} params={{
                        projectId: project.id
                      }} className="block">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            {project.name}
                            {project.isPrivate && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span>
                                      <Lock className="h-3 w-3 ml-2 text-red-500" />
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Private</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </CardTitle>
                          <CardDescription>{project.description || 'No description'}</CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-1" />
                              {project.chatrooms?.length || 0} chat{project.chatrooms?.length !== 1 ? 's' : ''}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {project.members?.length || 1} member{project.members?.length !== 1 ? 's' : ''}
                            </div>
                          </div>
                        </CardFooter>
                      </Link>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="border rounded-lg p-8 text-center bg-muted/20">
                  <h3 className="font-medium mb-2">No projects yet</h3>
                  <p className="text-muted-foreground mb-4">Start by creating your first project in this teamspace</p>
                  <CreateProjectModal teamspaceId={teamspaceId}>
                    <Button variant="outline">
                      <FolderPlus className="h-4 w-4 mr-2" /> Create Project
                    </Button>
                  </CreateProjectModal>
                </div>
              )}
            </div>

            {/* Recent Activity (placeholder) */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="border rounded-lg p-4 bg-muted/20 text-center">
                <p className="text-muted-foreground">Activity feed coming soon</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Teamspace Context */}
            <Card className="border-t-4 border-t-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Teamspace Context</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:cursor-pointer"
                    onClick={() => setShowContextForm(!showContextForm)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  Add context about what this teamspace is for
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showContextForm ? (
                  <div className="space-y-4">
                    <textarea
                      className="w-full min-h-[150px] p-3 border rounded-md"
                      placeholder="Describe what this teamspace is used for..."
                      value={currentTeamspace.context}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setShowContextForm(false)}>
                        Cancel
                      </Button>
                      <Button size="sm" onClick={() => setShowContextForm(false)}>
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm">
                    <p>{currentTeamspace.context}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Teamspace Members */}
            <Card className="border-t-4 border-t-indigo-500">
              <CardHeader>
                <CardTitle>Members</CardTitle>
                <CardDescription>
                  People with access to this teamspace
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentTeamspace.members && currentTeamspace.members.length > 0 ? (
                  <MembersList members={currentTeamspace.members} />
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Only you have access to this teamspace
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <ManageMembersModal
                  type="teamspace"
                  teamspaceId={currentTeamspace.id}
                  members={currentTeamspace.members || []}
                  userId={userID}
                  onMembersChanged={() => {
                    // Refresh teamspace data when members change
                    getRequestClient().chatrooms.getTeamspaces()
                      .then(({ data }) => {
                        if (data) {
                          setTeamspaces(data);
                        }
                      });
                  }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50 hover:cursor-pointer"
                  >
                    <Users className="h-4 w-4 mr-2" /> Manage Members
                  </Button>
                </ManageMembersModal>
              </CardFooter>
            </Card>

            {/* Teamspace Stats */}
            <Card className="border-t-4 border-t-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Teamspace Stats</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-medium">{currentTeamspace.projects?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-medium">{currentTeamspace.members?.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Created</span>
                    <span className="font-medium">
                      {new Date(currentTeamspace.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Update the MembersList function with an accordion for former members
function MembersList({ members }: { members: types.TeamspaceMemberDto[] }) {
  const [showAll, setShowAll] = useState(false);
  const [formerMembersOpen, setFormerMembersOpen] = useState(false);
  const MAX_VISIBLE = 5;

  // Deduplicate members based on user.id (in case there are duplicates)
  const deduplicatedMembers = members.filter((member, index, self) =>
    index === self.findIndex(m => m.user?.id === member.user?.id)
  );

  // Separate active and inactive members
  const activeMembers = deduplicatedMembers.filter(member => !member.hasLeft);
  const inactiveMembers = deduplicatedMembers.filter(member => member.hasLeft);

  // Sort each group by role importance
  const sortByRole = (a: types.TeamspaceMemberDto, b: types.TeamspaceMemberDto) => {
    const roleOrder = {
      'OWNER': 0,
      'ADMIN': 1,
      'CONTRIBUTOR': 2,
      'VIEWER': 3
    };
    return (roleOrder[a.role as keyof typeof roleOrder] || 4) - (roleOrder[b.role as keyof typeof roleOrder] || 4);
  };

  const sortedActiveMembers = [...activeMembers].sort(sortByRole);
  const sortedInactiveMembers = [...inactiveMembers].sort(sortByRole);

  // All active members are always visible
  const visibleActiveMembers = showAll ? sortedActiveMembers :
    sortedActiveMembers.slice(0, activeMembers.length >= MAX_VISIBLE ? MAX_VISIBLE : activeMembers.length);

  // We'll handle inactive members visibility separately with the accordion
  const hasMoreActiveMembers = activeMembers.length > MAX_VISIBLE && !showAll;

  return (
    <div className="space-y-3">
      {/* Active Members */}
      <div>
        {visibleActiveMembers.map((member) => (
          <div key={member.id} className="py-1.5">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  {member.user?.image ? (
                    <img
                      src={member.user.image}
                      alt={member.user?.name || 'User'}
                    />
                  ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs">
                      {(member.user?.name || 'U').charAt(0)}
                    </div>
                  )}
                </Avatar>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm font-medium truncate max-w-[120px]">
                        {member.user?.name || 'Unknown User'}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.user?.name || 'Unknown User'}</p>
                      <p className="text-xs text-muted-foreground">{member.user?.email}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <Badge className={getRoleBadgeColor(member.role)}>
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Show More for Active Members */}
      {hasMoreActiveMembers && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs h-7"
          onClick={() => setShowAll(true)}
        >
          <span className="flex items-center">
            Show {activeMembers.length - MAX_VISIBLE} More <ChevronDown className="ml-1 h-3 w-3" />
          </span>
        </Button>
      )}

      {/* Show Less for Active Members */}
      {showAll && activeMembers.length > MAX_VISIBLE && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-xs h-7"
          onClick={() => setShowAll(false)}
        >
          <span className="flex items-center">
            Show Less <ChevronUp className="ml-1 h-3 w-3" />
          </span>
        </Button>
      )}

      {/* Former Members Accordion */}
      {inactiveMembers.length > 0 && (
        <Collapsible
          open={formerMembersOpen}
          onOpenChange={setFormerMembersOpen}
          className="mt-3"
        >
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="h-px bg-border flex-grow mr-2"></div>
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors">
                <span>Former Members ({inactiveMembers.length})</span>
                {formerMembersOpen ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>
            </CollapsibleTrigger>
            <div className="h-px bg-border flex-grow ml-2"></div>
          </div>

          <CollapsibleContent className="pt-2">
            <div className="space-y-1.5">
              {sortedInactiveMembers.map((member) => (
                <div key={member.id}>
                  <div className="relative flex items-center justify-between group py-1.5">
                    <div className="absolute inset-0 rounded-md bg-muted/30 pointer-events-none"></div>

                    <div className="flex items-center gap-2 z-10">
                      <div className="relative">
                        <Avatar className="h-7 w-7">
                          {member.user?.image ? (
                            <img
                              src={member.user.image}
                              alt={member.user?.name || 'User'}
                              className="filter grayscale"
                            />
                          ) : (
                            <div className="bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs">
                              {(member.user?.name || 'U').charAt(0)}
                            </div>
                          )}
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center">
                          <span className="text-[8px]">×</span>
                        </div>
                      </div>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-sm font-medium truncate max-w-[120px] text-muted-foreground">
                              {member.user?.name || 'Unknown User'}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{member.user?.name || 'Unknown User'}</p>
                            <p className="text-xs text-muted-foreground">{member.user?.email}</p>
                            <p className="text-xs text-red-500 mt-1">No longer a member</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <Badge className={`${getRoleBadgeColor(member.role)} opacity-70`}>
                      {member.role}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}
