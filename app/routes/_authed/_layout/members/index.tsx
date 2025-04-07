import { createFileRoute } from '@tanstack/react-router'

import { MoreHorizontal, Settings, Trash2, UserPlus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '@/components/ui/table';
import { organization, useActiveOrganization } from '@/lib/getBetterAuthRequestClient';

import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import OrgInvite from '@/components/CreateOrg/OrgInvite';
import { FullOrganization, OrganizationInvitee } from '@/types/better-auth.types';


const ToggleGroup = ({
  viewMode,
  onChange
}: {
  viewMode: "grid" | "table",
  onChange: (value: "grid" | "table") => void
}) => {
  return (
    <div className="border rounded-md p-1 flex">
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        className="rounded-sm"
        onClick={() => onChange("grid")}
      >
        <div className="grid grid-cols-2 gap-0.5 h-3 w-3 mr-2">
          <div className="bg-current rounded-sm"></div>
          <div className="bg-current rounded-sm"></div>
          <div className="bg-current rounded-sm"></div>
          <div className="bg-current rounded-sm"></div>
        </div>
        Grid
      </Button>
      <Button
        variant={viewMode === "table" ? "default" : "ghost"}
        size="sm"
        className="rounded-sm"
        onClick={() => onChange("table")}
      >
        <div className="flex flex-col justify-between h-3 w-3 mr-2">
          <div className="bg-current h-0.5 w-full rounded-sm"></div>
          <div className="bg-current h-0.5 w-full rounded-sm"></div>
          <div className="bg-current h-0.5 w-full rounded-sm"></div>
        </div>
        Table
      </Button>
    </div>
  );
};

interface MemberOrInvitee {
  id: string | undefined;
  invitationId: string | undefined;
  email: string;
  name: string;
  status: string;
  role: string;
  models: AIModel[]
}

interface AIModel {
  id: string;
  name: string;
  enabled: boolean;
}

const defaultModels: AIModel[] = [
  { id: "gpt-4o", name: "GPT-4o", enabled: true },
  { id: "gpt-4o-mini", name: "GPT-4o Mini", enabled: true },
  { id: "claude-3.5-sonnet", name: "Claude 3.5 Sonnet", enabled: false },
  { id: "claude-3-opus", name: "Claude 3 Opus", enabled: false },
  { id: "claude-3-haiku", name: "Claude 3 Haiku", enabled: false },
  { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", enabled: false },
  { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", enabled: false },
];

export const Route = createFileRoute('/_authed/_layout/members/')({
  component: OrganizationMgmt,
})

function OrganizationMgmt() {
  const { data: dataOrganization, isRefetching } = useActiveOrganization();
  const activeOrganization = dataOrganization as FullOrganization;
  const [invitees, setInvitees] = useState<OrganizationInvitee[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isModelsDialogOpen, setIsModelsDialogOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<MemberOrInvitee | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const membersAndInvites: MemberOrInvitee[] = useMemo(() => {
    const members = activeOrganization?.members.map(member => ({ id: member.id, invitationId: undefined, email: member.user.email, name: member.user.name, status: "accepted", role: member.role, models: defaultModels }))
    const pendingInvites = activeOrganization?.invitations.filter(invitee => invitee.status === "pending");
    const invites = pendingInvites?.map(invitee => ({ id: undefined, invitationId: invitee.id, email: invitee.email, name: invitee.email.split("@")[0] ?? "Unkown Name", status: invitee.status, role: invitee.role, models: defaultModels }))
    return [...members ?? [], ...invites ?? []];
  }, [activeOrganization]);

  const handleAddMember = async () => {
    const doubleInvitees = invitees.filter(newInv => activeOrganization.invitations.some(inv => inv.email.toLowerCase() === newInv.email.toLowerCase() && inv.status === "pending") || activeOrganization.members.some(mem => mem.user.email.toLowerCase() === newInv.email.toLowerCase()));
    if (doubleInvitees.length > 0) {
      let doubleInvEmails = doubleInvitees.map(inv => inv.email + ", ").toString();
      doubleInvEmails = doubleInvEmails.substring(0, doubleInvEmails.length - 2);
      toast.error(`You have already invited ${doubleInvEmails}.`);
      return;
    }

    setIsLoading(true);

    await Promise.all(invitees.map(async (invite) => {
      await organization.inviteMember({
        email: invite.email,
        role: invite.role,
        organizationId: activeOrganization.id,
      });
    }));

    toast.success(`${invitees.length} new invitations have been sent succesfully - wait for their acceptantance.`);

    setIsLoading(false);
    setIsAddDialogOpen(false);
  };

  const handleDeleteMember = async ( memberEmail: string | undefined, invitationId: string | undefined) => {
    if (memberEmail && !invitationId) {
      await organization.removeMember(
        { memberIdOrEmail: memberEmail, organizationId: activeOrganization.id }
      );
    } else if (invitationId) {
      await organization.cancelInvitation(
        { invitationId: invitationId }
      );
    }
  };

  const handleModelToggle = (modelId: string) => {
    if (!currentMember) return;

    // setCurrentMember({
    //   ...currentMember,
    //   models: currentMember.models.map(model =>
    //     model.id === modelId ? { ...model, enabled: !model.enabled } : model
    //   )
    // });
  };

  const handleUpdateMemberModels = () => {
    // if (!activeOrganization || !currentMember) return;

    // const updatedOrg = {
    //   ...activeOrganization,
    //   members: activeOrganization.members.map(member =>
    //     member.id === currentMember.id ? currentMember : member
    //   )
    // };

    // setActiveOrganization(updatedOrg);
    // saveOrganization(updatedOrg);
    // setIsModelsDialogOpen(false);
    // toast.success(`AI models updated for ${currentMember.user.name}`);
  };

  const openModelsDialog = (member: MemberOrInvitee) => {
    setCurrentMember({ ...member });
    setIsModelsDialogOpen(true);
  };

  if (!activeOrganization) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 m-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{activeOrganization?.name + " - "} Team Members</h1>
          <p className="text-muted-foreground mt-1">
            Manage your organization's team members and their permissions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup viewMode={viewMode} onChange={setViewMode} />
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent className='min-w-1/3 flex flex-col items-center'>
              <DialogTitle className='text-center'>Invite new members</DialogTitle>
              <OrgInvite invitees={invitees} setInvitees={setInvitees} />
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddMember} disabled={invitees.length === 0 || isLoading}>
                  {isLoading ? "Sending..." : "Send Invitation"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Dialog open={isModelsDialogOpen} onOpenChange={setIsModelsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>AI Model Access</DialogTitle>
            <DialogDescription>
              Configure which AI models {currentMember?.name} can access
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2 max-h-[60vh] overflow-y-auto">
            {currentMember?.models.map((model) => (
              <div key={model.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`model-${model.id}`}
                    checked={model.enabled}
                    onCheckedChange={() => handleModelToggle(model.id)}
                  />
                  <Label htmlFor={`model-${model.id}`} className="cursor-pointer">
                    {model.name}
                  </Label>
                </div>
                {model.enabled ? (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Enabled
                  </span>
                ) : (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    Disabled
                  </span>
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModelsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateMemberModels}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {viewMode === "grid" ? (
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Your organization has {activeOrganization.members.length} members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
              {membersAndInvites.map((member) => (
                <Card key={member.email} className="overflow-hidden border bg-background">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium">{member.name} - {member.email}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{member.role}</span>
                              {member.status === "pending" && (
                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                  Pending
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => openModelsDialog(member)}>
                              <Settings className="mr-2 h-4 w-4" />
                              Configure AI Models
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => handleDeleteMember(member.email, member.invitationId)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              {member.status === "accepted" ? "Remove Member" : "Cancel invitation"}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="border-t p-4 bg-muted/40">
                        <div className="flex justify-between">
                          <span className="text-xs text-muted-foreground">AI Models</span>
                          <span className="text-xs font-medium">
                            {member.models.filter(m => m.enabled).length} of {member.models.length} enabled
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {member.models.filter(m => m.enabled).slice(0, 3).map(model => (
                            <span key={model.id} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {model.name}
                            </span>
                          ))}
                          {member.models.filter(m => m.enabled).length > 3 && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              +{member.models.filter(m => m.enabled).length - 3} more
                            </span>
                          )}
                          {member.models.filter(m => m.enabled).length === 0 && (
                            <span className="text-xs text-muted-foreground">No models enabled</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Your organization has {activeOrganization.members.length} members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>AI Models</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {membersAndInvites.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                          {member.name.charAt(0).toUpperCase()}
                        </div>
                        <span>{member.name} - {member.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      {member.status === "accepted" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-1"></span>
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-1"></span>
                          Pending
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium">
                          {member.models.filter(m => m.enabled).length}
                        </span>
                        <span className="text-sm text-muted-foreground">enabled</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openModelsDialog(member)}
                        >
                          <Settings className="h-4 w-4" />
                          <span className="sr-only">Configure AI Models</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteMember(member.email, member.invitationId)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
