import { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Plus, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import getRequestClient from '~/lib/getRequestClient';
import { currentTeamspaceIdAtom, currentProjectIdAtom, teamspacesAtom } from '../../lib/atoms/teamspace/atom';
import { useSetAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { types } from '../../lib/client';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar } from '../ui/avatar';
import { PlusCircle } from 'lucide-react';
import { useActiveOrganization } from '../../lib/getBetterAuthRequestClient';

// Step interface for the wizard
interface Step {
  id: number;
  label: string;
  completed?: boolean;
}

// Extended interfaces for UI purposes
interface UITeamspaceMember {
  id?: string;  // Used as local identifier for UI
  userId: string;
  role: types.MemberRole;
  invitedByUserId: string;
  teamspaceId?: string;
  email?: string;
  name?: string;
  image?: string;
}

interface UIProjectMember {
  id?: string;  // Used as local identifier for UI
  projectId: string;
  userId: string;
  role: types.MemberRole;
  invitedByUserId: string;
  email?: string;
  name?: string;
  image?: string;
}

// Teamspace Creation Modal
export default function CreateTeamspaceModal() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setTeamspaces = useSetAtom(teamspacesAtom);
  const setCurrentTeamspaceId = useSetAtom(currentTeamspaceIdAtom);
  const setCurrentProjectId = useSetAtom(currentProjectIdAtom);
  const activeOrganization = useActiveOrganization();

  // Add modal open state
  const [isOpen, setIsOpen] = useState(false);

  // State for tracking the current step
  const [currentStepId, setCurrentStepId] = useState(1);
  const steps: Step[] = [
    { id: 1, label: 'Teamspace Details' },
    { id: 2, label: 'Teamspace Members' },
    { id: 3, label: 'Project Details' },
    { id: 4, label: 'Project Members' },
  ];

  // State for form data
  const [teamspaceData, setTeamspaceData] = useState({
    name: '',
    description: '',
    context: '',
  });

  const [projectData, setProjectData] = useState({
    name: 'Default Project',
    description: '',
    context: '',
    isPrivate: false,
  });

  // State for members
  const [teamspaceMembers, setTeamspaceMembers] = useState<UITeamspaceMember[]>([]);
  const [projectMembers, setProjectMembers] = useState<UIProjectMember[]>([]);
  const [role, setRole] = useState<types.MemberRole>('CONTRIBUTOR');

  // Mock user search functionality - in a real application, this would call an API
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle user search from active organization members
  const handleUserSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);

    const { data: orgData } = activeOrganization;

    if (!orgData || !orgData.members) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Get the current user's information
    getRequestClient().auth.handler().then(({ user }) => {
      const currentUserEmail = user?.email;

      setTimeout(() => {
        if (query.trim() === '') {
          setSearchResults([]);
        } else {
          try {
            console.log("Organization members:", orgData.members);

            // Filter organization members based on search query, excluding the current user
            const results = orgData.members
              .filter((member: any) => {
                // Make sure user object and its properties exist
                if (!member?.user) return false;

                // Filter by search query if name or email properties exist
                const nameMatch = member.user.name &&
                  member.user.name.toLowerCase().includes(query.toLowerCase());
                const emailMatch = member.user.email &&
                  member.user.email.toLowerCase().includes(query.toLowerCase());

                // Exclude current user by email (more reliable than ID in some cases)
                const isCurrentUser = currentUserEmail &&
                  member.user.email === currentUserEmail;

                return (nameMatch || emailMatch) && !isCurrentUser;
              })
              .map((member: any) => {
                // IMPORTANT: Correctly map the user object with all necessary fields
                console.log("Processing member:", member);
                return {
                  memberId: member.id,              // The member's ID in the organization
                  userId: member.user.id,           // CRITICAL: The actual user ID
                  name: member.user.name || 'Unknown',
                  email: member.user.email || '',
                  image: member.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.user.name || 'Unknown')}`,
                  role: 'CONTRIBUTOR'  // Default role for newly added members
                };
              });

            console.log("Search results:", results);
            setSearchResults(results);
          } catch (error) {
            console.error('Error filtering organization members:', error);
            setSearchResults([]);
          }
        }
        setIsSearching(false);
      }, 300);
    }).catch(err => {
      console.error('Error getting current user:', err);
      setIsSearching(false);
      setSearchResults([]);
    });
  };

  // Add a user from search results to teamspace members
  const handleAddUserToTeamspace = (user: any) => {
    console.log("Adding user to teamspace:", user);

    if (teamspaceMembers.some(member => member.email === user.email)) {
      toast.error('This user has already been added');
      return;
    }

    // Create a new member with the correct user ID
    const newMember: UITeamspaceMember = {
      id: uuidv4(),                  // Local ID for the UI
      userId: user.userId,           // CRITICAL: The actual user ID from the org member
      role: role,
      invitedByUserId: '',           // Will be set during API call
      teamspaceId: '',               // Will be set during API call
      email: user.email,
      name: user.name || 'Unknown',
      image: user.image
    };

    console.log("Created new teamspace member:", newMember);

    // Add to teamspace members list
    setTeamspaceMembers(prev => [...prev, newMember]);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle form changes
  const handleTeamspaceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTeamspaceData({ ...teamspaceData, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setProjectData({ ...projectData, isPrivate: checked });
  };

  // Email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRemoveTeamspaceMember = (id: string | undefined) => {
    if (!id) return;
    setTeamspaceMembers(teamspaceMembers.filter((member) => member.id !== id));
    // Also remove from project members if present
    setProjectMembers(projectMembers.filter((member) => member.id !== id));
  };

  const handleAddProjectMember = (member: UITeamspaceMember) => {
    console.log("Adding member to project:", member);

    // Check if the member is already added to the project
    if (projectMembers.some((m) => m.id === member.id)) {
      console.log("Member already in project");
      return;
    }

    // Create a project member with the SAME USER ID as the teamspace member
    const projectMember: UIProjectMember = {
      id: member.id,                 // Use same ID for easy tracking in UI
      projectId: '',                 // Will be set by API
      userId: member.userId,         // CRITICAL: Use the same user ID
      role: member.role,             // Keep the same role
      invitedByUserId: '',           // Will be set during API call
      email: member.email,
      name: member.name,
      image: member.image
    };

    console.log("Created new project member:", projectMember);

    // Add to project members list
    setProjectMembers(prev => [...prev, projectMember]);
  };

  const handleRemoveProjectMember = (id: string | undefined) => {
    if (!id) return;
    setProjectMembers(projectMembers.filter((member) => member.id !== id));
  };

  // Navigation between steps
  const goToNextStep = () => {
    // Validate current step before proceeding
    if (currentStepId === 1 && !teamspaceData.name.trim()) {
      toast.error('Teamspace name is required');
      return;
    }

    if (currentStepId === 2) {
      // When going from step 2 to 3, log teamspace members for debugging
      console.log("Teamspace members before going to step 3:", teamspaceMembers);
    }

    if (currentStepId === 3 && !projectData.name.trim()) {
      toast.error('Project name is required');
      return;
    }

    setCurrentStepId(currentStepId + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStepId(currentStepId - 1);
  };

  // Role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'OWNER':
        return 'bg-green-100 text-green-800';
      case 'ADMIN':
        return 'bg-red-100 text-red-800';
      case 'MEMBER':
        return 'bg-blue-100 text-blue-800';
      case 'VIEWER':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Clear project members when re-entering step 4
  useEffect(() => {
    if (currentStepId === 4) {
      console.log("Entering step 4 - Project Members selection");
      // Clear project members to avoid stale state
      setProjectMembers([]);
    }
  }, [currentStepId]);

  // Improved checkbox handler for project members
  const toggleProjectMember = (member: UITeamspaceMember, isChecked: boolean) => {
    console.log("Toggle project member:", member.name, isChecked);

    if (isChecked) {
      // Add to project members
      const projectMember: UIProjectMember = {
        id: member.id,
        projectId: '',
        userId: member.userId,
        role: member.role,
        invitedByUserId: '',
        email: member.email,
        name: member.name,
        image: member.image
      };

      console.log("Adding to project members:", projectMember);
      setProjectMembers(prev => [...prev, projectMember]);
    } else {
      // Remove from project members
      console.log("Removing from project members:", member.id);
      setProjectMembers(prev => prev.filter(m => m.id !== member.id));
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const client = getRequestClient();
      const { session, userID, user } = await client.auth.handler();

      console.log("Current user:", {
        userID,
        email: user.email
      });

      // IMPORTANT: Log the full teamspace members list to debug
      console.log("All teamspace members before filtering:", teamspaceMembers);

      // Create teamspace with non-current-user members
      const teamspaceMembersList = teamspaceMembers
        .filter(member => member.email && member.email !== user.email)
        .map(member => {
          console.log("Adding member to teamspace API request:", member);
          return {
            userId: member.userId,     // CRITICAL: Use the correct user ID
            role: member.role,
            invitedByUserId: userID,
            teamspaceId: ''  // Required by API
          };
        });

      console.log("Final teamspace members list for API:", teamspaceMembersList);

      // Create teamspace
      console.log("Creating teamspace:", teamspaceData.name);
      const { data: createdTeamspace } = await client.chatrooms.createTeamspace({
        name: teamspaceData.name,
        description: teamspaceData.description,
        context: teamspaceData.context,
        creatorId: userID,
        members: teamspaceMembersList
      });

      console.log("Teamspace created:", createdTeamspace);

      // IMPORTANT: Log the full project members list to debug
      console.log("All project members before filtering:", projectMembers);

      // Create project with non-current-user members
      const projectMembersList = projectMembers
        .filter(member => member.email && member.email !== user.email)
        .map(member => {
          console.log("Adding member to project API request:", member);
          return {
            projectId: '',            // Will be set by the API
            userId: member.userId,    // CRITICAL: Use the correct user ID
            role: member.role,
            invitedByUserId: userID,
          };
        });

      console.log("Final project members list for API:", projectMembersList);

      // Create project
      console.log("Creating project:", projectData.name);
      const { data: createdProject } = await client.chatrooms.createProject({
        teamspaceId: createdTeamspace.id,
        name: projectData.name,
        description: projectData.description,
        context: projectData.context,
        creatorId: userID,
        isPrivate: projectData.isPrivate,
        members: projectMembersList
      });

      console.log("Project created:", createdProject);

      // Update local state and navigate
      createdTeamspace.projects.push(createdProject);
      setTeamspaces(currentTeamspaces => [...currentTeamspaces, createdTeamspace]);
      setCurrentTeamspaceId(createdTeamspace.id);
      setCurrentProjectId(createdProject.id);

      toast.success('Teamspace and project created successfully');
      setIsOpen(false);

      setTimeout(() => {
        navigate({
          to: '/teamspace/$teamspaceId',
          params: { teamspaceId: createdTeamspace.id },
          viewTransition: true
        });
      }, 100);

    } catch (error) {
      console.error('Error creating teamspace:', error);
      toast.error('Failed to create teamspace');
    } finally {
      setLoading(false);
    }
  };

  // Function to reset all state
  const resetState = () => {
    setCurrentStepId(1);
    setTeamspaceData({
      name: '',
      description: '',
      context: '',
    });
    setProjectData({
      name: 'Default Project',
      description: '',
      context: '',
      isPrivate: false,
    });
    setTeamspaceMembers([]);
    setProjectMembers([]);
    setRole('CONTRIBUTOR');
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  // Reset state when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      resetState();
    }
  }, [isOpen]);

  // Render the current step content
  const renderStepContent = () => {
    switch (currentStepId) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-medium text-lg flex items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2">
                <span className="text-xs font-semibold">1</span>
              </div>
              Teamspace Details
            </h3>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="teamspace-name">Teamspace Name <span className="text-red-500">*</span></Label>
                <Input
                  id="teamspace-name"
                  name="name"
                  value={teamspaceData.name}
                  onChange={handleTeamspaceChange}
                  placeholder="e.g. Marketing Team"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="teamspace-description">Description</Label>
                <Textarea
                  id="teamspace-description"
                  name="description"
                  value={teamspaceData.description}
                  onChange={handleTeamspaceChange}
                  placeholder="What is this teamspace for?"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="teamspace-context">Context</Label>
                <Textarea
                  id="teamspace-context"
                  name="context"
                  value={teamspaceData.context}
                  onChange={handleTeamspaceChange}
                  placeholder="Any additional context for AI assistants"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-medium text-lg flex items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2">
                <span className="text-xs font-semibold">2</span>
              </div>
              Teamspace Members
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Search for users</Label>
                <div className="flex items-center gap-2">
                  <Label htmlFor="member-role" className="text-sm">Role:</Label>
                  <select
                    id="member-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as types.MemberRole)}
                    className="px-3 py-1 text-sm border rounded-md"
                  >
                    <option value="OWNER">Owner</option>
                    <option value="ADMIN">Admin</option>
                    <option value="CONTRIBUTOR">Contributor</option>
                    <option value="VIEWER">Viewer</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput
                    placeholder="Search users by name or email..."
                    value={searchQuery}
                    onValueChange={handleUserSearch}
                  />
                  <CommandList>
                    {isSearching ? (
                      <div className="py-6 text-center text-sm">
                        Searching...
                      </div>
                    ) : searchResults.length === 0 && searchQuery ? (
                      <CommandEmpty>No users found.</CommandEmpty>
                    ) : (
                      <CommandGroup heading="Users">
                        <ScrollArea className="h-[200px]">
                          {searchResults.map((user) => (
                            <CommandItem
                              key={user.memberId}
                              value={user.email}
                              className="flex items-center justify-between cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <Avatar>
                                  <img src={user.image} alt={user.name} />
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAddUserToTeamspace(user)}
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </div>

              {teamspaceMembers.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Selected Members</h4>
                  <ScrollArea className="h-[200px]">
                    <div className="border rounded-md divide-y">
                      {teamspaceMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-3">
                          <div className="flex items-center gap-3">
                            {member.image && (
                              <Avatar className="h-8 w-8">
                                <img src={member.image} alt={member.name || member.email || ''} />
                              </Avatar>
                            )}
                            <div>
                              {member.name && <p className="text-sm font-medium">{member.name}</p>}
                              <p className="text-xs text-muted-foreground">{member.email}</p>
                            </div>
                            <Badge className={getRoleBadgeColor(member.role)}>{member.role}</Badge>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => handleRemoveTeamspaceMember(member.id)} className="h-8 w-8 p-0">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}

              {teamspaceMembers.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2">No members added yet. You will be added as an Owner automatically.</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-medium text-lg flex items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2">
                <span className="text-xs font-semibold">3</span>
              </div>
              Project Details
            </h3>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="project-name">Project Name <span className="text-red-500">*</span></Label>
                <Input
                  id="project-name"
                  name="name"
                  value={projectData.name}
                  onChange={handleProjectChange}
                  placeholder="e.g. General"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  name="description"
                  value={projectData.description}
                  onChange={handleProjectChange}
                  placeholder="What is this project about?"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-context">Context</Label>
                <Textarea
                  id="project-context"
                  name="context"
                  value={projectData.context}
                  onChange={handleProjectChange}
                  placeholder="Any specific context for this project"
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="isPrivate"
                  checked={projectData.isPrivate}
                  onCheckedChange={handleCheckboxChange}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="isPrivate"
                    className="text-sm font-medium leading-none flex items-center"
                  >
                    Make project private
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Private projects are only visible to invited members
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="font-medium text-lg flex items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2">
                <span className="text-xs font-semibold">4</span>
              </div>
              Project Members
            </h3>
            <p className="text-sm text-muted-foreground">Select which teamspace members to include in this project:</p>

            <div className="text-xs text-muted-foreground mb-2">
              Available members: {teamspaceMembers.length}, Selected for project: {projectMembers.length}
            </div>

            {teamspaceMembers.length > 0 ? (
              <ScrollArea className="h-[300px] border rounded-md">
                <div className="divide-y">
                  {teamspaceMembers.map((member) => {
                    // Check if this member is in the project
                    const isSelected = projectMembers.some(m => m.id === member.id);

                    return (
                      <div key={member.id} className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={`project-member-${member.id}`}
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              toggleProjectMember(member, !!checked);
                            }}
                          />
                          <div className="flex items-center gap-2">
                            {member.image && (
                              <Avatar className="h-8 w-8">
                                <img src={member.image} alt={member.name || member.email || ''} />
                              </Avatar>
                            )}
                            <div>
                              {member.name && <p className="text-sm font-medium">{member.name}</p>}
                              <p className="text-xs text-muted-foreground">{member.email}</p>
                              <p className="text-xs text-muted-foreground">User ID: {member.userId?.slice(0, 6)}...</p>
                            </div>
                          </div>
                          <Badge className={getRoleBadgeColor(member.role)}>{member.role}</Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            ) : (
              <p className="text-sm">No teamspace members to select from. You will be added as an Owner automatically.</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Render step indicators
  const renderStepIndicators = () => {
    return (
      <div className="flex justify-center mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.id === currentStepId
                ? step.id <= 2
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-emerald-600 bg-emerald-600 text-white'
                : step.id < currentStepId
                  ? step.id <= 2
                    ? 'border-indigo-600 bg-indigo-100 text-indigo-600'
                    : 'border-emerald-600 bg-emerald-100 text-emerald-600'
                  : 'border-gray-300 bg-white text-gray-500'
                }`}
            >
              {step.id < currentStepId ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-xs">{step.id}</span>
              )}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`w-10 h-1 ${step.id < currentStepId
                  ? step.id <= 1
                    ? 'bg-indigo-600'
                    : 'bg-emerald-600'
                  : 'bg-gray-300'
                  }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Dialog open={isOpen} onOpenChange={(open) => {
            // Don't allow closing the dialog during submission
            if (loading && !open) return;
            setIsOpen(open);
          }}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0 ml-1 rounded-full hover:cursor-pointer">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Create Teamspace</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <form onSubmit={(e) => {
                // Prevent default form submission behavior
                e.preventDefault();
                // Only handle submit if we're on the final step
                if (currentStepId === 4) {
                  handleSubmit(e);
                }
              }}>
                <DialogHeader>
                  <div className={`h-1.5 w-full absolute top-0 left-0 rounded-t-lg ${currentStepId <= 2 ? 'bg-indigo-500' : 'bg-emerald-500'
                    }`} />
                  <DialogTitle className="text-xl mt-2">Create New Teamspace</DialogTitle>
                  <DialogDescription>
                    Create a teamspace with a default project to organize your work.
                  </DialogDescription>
                </DialogHeader>

                {renderStepIndicators()}

                <div className="py-4">
                  {renderStepContent()}
                </div>

                <DialogFooter className="flex justify-between">
                  <div>
                    {currentStepId > 1 && (
                      <Button type="button" variant="outline" onClick={goToPreviousStep} disabled={loading}>
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <DialogClose asChild>
                      <Button variant="outline" type="button" disabled={loading} onClick={resetState}>
                        Cancel
                      </Button>
                    </DialogClose>

                    {currentStepId < 4 ? (
                      <Button
                        type="button"
                        onClick={goToNextStep}
                        className={`${currentStepId <= 2
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                          }`}
                        disabled={loading}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                        className="bg-emerald-600 hover:bg-emerald-700"
                        disabled={loading}
                      >
                        {loading ? 'Creating...' : 'Create Teamspace & Project'}
                      </Button>
                    )}
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create Teamspace</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
