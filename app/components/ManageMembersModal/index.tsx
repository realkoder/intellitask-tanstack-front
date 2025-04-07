import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { X, Users, Plus, Search } from 'lucide-react';
import { types } from '../../lib/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import getRequestClient from '~/lib/getRequestClient';
import { useSetAtom } from 'jotai';
import { teamspacesAtom } from '../../lib/atoms/teamspace/atom';

interface BaseProps {
  userId: string;
  children?: React.ReactNode;
}

interface TeamspaceMembersProps extends BaseProps {
  type: 'teamspace';
  teamspaceId: string;
  members: types.TeamspaceMemberDto[];
  onMembersChanged?: () => void;
}

interface ProjectMembersProps extends BaseProps {
  type: 'project';
  projectId: string;
  teamspaceId: string;
  members: types.ProjectMemberDto[];
  onMembersChanged?: () => void;
}

type ManageMembersModalProps = TeamspaceMembersProps | ProjectMembersProps;

export default function ManageMembersModal(props: ManageMembersModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const setTeamspaces = useSetAtom(teamspacesAtom);

  // Create a filtered list of members based on search query
  const filteredMembers = props.type === 'teamspace'
    ? (props.members as types.TeamspaceMemberDto[])
      .filter(member =>
        member.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      // Remove duplicates based on user.id
      .filter((member, index, self) =>
        index === self.findIndex(m => m.user?.id === member.user?.id)
      )
    : (props.members as types.ProjectMemberDto[])
      .filter(member =>
        member.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      // Remove duplicates based on user.id
      .filter((member, index, self) =>
        index === self.findIndex(m => m.user?.id === member.user?.id)
      );

  // Sort members so active ones appear first
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    // First sort by has left status - active members first
    if (a.hasLeft !== b.hasLeft) {
      return a.hasLeft ? 1 : -1;
    }

    // Then sort by role importance
    const roleOrder = {
      'OWNER': 0,
      'ADMIN': 1,
      'CONTRIBUTOR': 2,
      'VIEWER': 3
    };
    return (roleOrder[a.role as keyof typeof roleOrder] || 4) - (roleOrder[b.role as keyof typeof roleOrder] || 4);
  });

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

  // Handle removing or re-inviting a member
  const handleMemberStatus = async (memberId: string) => {
    if (loading) return;

    setLoading(true);
    try {
      const client = getRequestClient();

      if (props.type === 'teamspace') {
        const memberToKick = (props.members as types.TeamspaceMemberDto[]).find(m => m.id === memberId);
        if (!memberToKick) {
          toast.error('Member not found');
          return;
        }

        const isReinviting = memberToKick.hasLeft;

        await client.chatrooms.changeTeamspaceMemberStatus(props.teamspaceId, memberId, {
          kickStatus: !isReinviting
        });

        // Update local state to reflect the change immediately
        setTeamspaces(currentTeamspaces => {
          return currentTeamspaces.map(teamspace => {
            // Find the correct teamspace
            if (teamspace.id === props.teamspaceId) {
              // Update the member's hasLeft status
              const updatedMembers = teamspace.members?.map(member => {
                if (member.id === memberId) {
                  return { ...member, hasLeft: !memberToKick.hasLeft };
                }
                return member;
              }) || [];

              // Also update any projects and chatrooms where this user participated
              const updatedProjects = teamspace.projects?.map(project => {
                // Update project members if this user is a member
                const updatedProjectMembers = project.members?.map(projectMember => {
                  if (projectMember.user?.id === memberToKick.user?.id) {
                    return { ...projectMember, hasLeft: !memberToKick.hasLeft };
                  }
                  return projectMember;
                }) || [];

                // Update chatroom members in this project
                const updatedChatrooms = project.chatrooms?.map(chatroom => {
                  const updatedChatroomMembers = chatroom.members?.map(chatroomMember => {
                    if (chatroomMember.user?.id === memberToKick.user?.id) {
                      return { ...chatroomMember, hasLeft: !memberToKick.hasLeft };
                    }
                    return chatroomMember;
                  }) || [];

                  return { ...chatroom, members: updatedChatroomMembers };
                }) || [];

                return {
                  ...project,
                  members: updatedProjectMembers,
                  chatrooms: updatedChatrooms
                };
              }) || [];

              return {
                ...teamspace,
                members: updatedMembers,
                projects: updatedProjects
              };
            }
            return teamspace;
          });
        });

        // Show appropriate success message
        if (isReinviting) {
          toast.success('Member re-invited successfully');
        } else {
          toast.success('Member removed successfully');
        }

      } else {
        // Find the member to get the userId and current status before updating
        const memberToUpdate = (props.members as types.ProjectMemberDto[]).find(m => m.id === memberId);
        if (!memberToUpdate) {
          toast.error('Member not found');
          return;
        }

        const isReinviting = memberToUpdate.hasLeft;

        // Make the API call to update the member status
        await client.chatrooms.changeProjectMemberStatus(props.projectId, memberId, {
          kickStatus: !isReinviting
        });

        // Update local state to reflect the change immediately
        setTeamspaces(currentTeamspaces => {
          return currentTeamspaces.map(teamspace => {
            // Find the correct teamspace
            if (teamspace.id === props.teamspaceId) {
              // Update projects within this teamspace
              const updatedProjects = teamspace.projects?.map(project => {
                // Find the correct project
                if (project.id === props.projectId) {
                  // Update the member's hasLeft status
                  const updatedMembers = project.members?.map(member => {
                    if (member.id === memberId) {
                      return { ...member, hasLeft: !memberToUpdate.hasLeft };
                    }
                    return member;
                  }) || [];

                  // Also update any chatroom members where this user participated
                  const updatedChatrooms = project.chatrooms?.map(chatroom => {
                    const updatedChatroomMembers = chatroom.members?.map(chatroomMember => {
                      if (chatroomMember.user?.id === memberToUpdate.user?.id) {
                        return { ...chatroomMember, hasLeft: !memberToUpdate.hasLeft };
                      }
                      return chatroomMember;
                    }) || [];

                    return { ...chatroom, members: updatedChatroomMembers };
                  }) || [];

                  return {
                    ...project,
                    members: updatedMembers,
                    chatrooms: updatedChatrooms
                  };
                }
                return project;
              }) || [];

              return { ...teamspace, projects: updatedProjects };
            }
            return teamspace;
          });
        });

        // Close the modal after successful action
        setTimeout(() => setIsOpen(false), 500);

        // Show appropriate success message
        if (isReinviting) {
          toast.success('Member re-invited successfully');
        } else {
          toast.success('Member removed successfully');
        }
      }
    } catch (error) {
      console.error('Error updating member status:', error);
      toast.error('Failed to update member status');
    } finally {
      setLoading(false);
    }
  };

  // Check if current user is owner or admin
  const isUserOwnerOrAdmin = () => {
    const { userId } = props;

    if (props.type === 'teamspace') {
      const userMember = (props.members as types.TeamspaceMemberDto[])
        .find(member => member.user.id === userId);
      return userMember?.role === 'OWNER' || userMember?.role === 'ADMIN';
    } else {
      const userMember = (props.members as types.ProjectMemberDto[])
        .find(member => member.user.id === userId);
      return userMember?.role === 'OWNER' || userMember?.role === 'ADMIN';
    }
  };

  const canManageMembers = isUserOwnerOrAdmin();

  // Update the UI to show when a member has left
  const renderMemberItem = (member: any) => {
    const hasLeft = member.hasLeft;

    return (
      <div key={member.id} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className={`h-8 w-8 ${hasLeft ? 'opacity-50' : ''}`}>
            {member.user?.image ? (
              <img
                src={member.user.image}
                alt={member.user?.name || 'User'}
                className={hasLeft ? 'grayscale' : ''}
              />
            ) : (
              <div className={`bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 ${hasLeft ? 'bg-gray-100' : ''}`}>
                {(member.user?.name || 'U').charAt(0)}
              </div>
            )}
          </Avatar>
          <div>
            <div className={`font-medium flex items-center ${hasLeft ? 'text-muted-foreground' : ''}`}>
              {member.user?.name || 'Unknown User'}
              {hasLeft && (
                <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                  Left
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">{member.user?.email || ''}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={`${getRoleBadgeColor(member.role)} ${hasLeft ? 'opacity-50' : ''}`}>
            {member.role}
          </Badge>
          {canManageMembers && member.user.id !== props.userId && (
            <Button
              variant={hasLeft ? "outline" : "ghost"}
              size="icon"
              disabled={loading}
              onClick={() => handleMemberStatus(member.id)}
              className={`h-8 w-8 ${hasLeft ? "border-green-200 hover:bg-green-50 hover:text-green-700" : ""}`}
              title={hasLeft ? "Re-invite member" : "Remove member"}
            >
              {hasLeft ? <Plus className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {props.children || (
          <Button
            size="sm"
            variant="outline"
            className="w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50"
          >
            <Users className="h-4 w-4 mr-2" /> Manage Members
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Manage {props.type === 'teamspace' ? 'Teamspace' : 'Project'} Members</DialogTitle>
          <DialogDescription>
            View and manage who has access to this {props.type}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Members</TabsTrigger>
            <TabsTrigger value="invite" disabled={!canManageMembers}>Invite Members</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="mt-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search members..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <ScrollArea className="h-[320px] rounded-md border p-4">
              <div className="space-y-4">
                {sortedMembers.length > 0 ? (
                  <>
                    {/* Active members section */}
                    {sortedMembers.some(m => !m.hasLeft) && (
                      <div className="mb-3">
                        <h3 className="text-sm font-medium mb-2">Active Members</h3>
                        <div className="space-y-3">
                          {sortedMembers.filter(m => !m.hasLeft).map(renderMemberItem)}
                        </div>
                      </div>
                    )}

                    {/* Inactive members section */}
                    {sortedMembers.some(m => m.hasLeft) && (
                      <div className="mt-4">
                        <div className="mb-2 flex items-center text-xs text-muted-foreground">
                          <div className="h-px bg-border flex-grow mr-2"></div>
                          <span>Former Members</span>
                          <div className="h-px bg-border flex-grow ml-2"></div>
                        </div>
                        <div className="space-y-3 mt-3">
                          {sortedMembers.filter(m => m.hasLeft).map(renderMemberItem)}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No members found
                  </div>
                )}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="invite" className="mt-4">
            <div className="bg-muted/40 rounded-md p-8 text-center">
              <h3 className="font-medium mb-2">Invite Members</h3>
              <p className="text-muted-foreground mb-6">This feature is coming soon</p>
              <Button variant="outline" onClick={() => setActiveTab('current')}>
                Back to Current Members
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
