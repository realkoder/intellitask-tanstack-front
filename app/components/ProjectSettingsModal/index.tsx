import { useState, useEffect } from 'react';
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
import { AlertCircle, Lock, Settings, Trash2 } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import getRequestClient from '~/lib/getRequestClient';
import { Alert, AlertDescription } from '../ui/alert';
import { types } from '../../lib/client';
import { useNavigate } from '@tanstack/react-router';
import { useSetAtom } from 'jotai';
import { teamspacesAtom } from '../../lib/atoms/teamspace/atom';

interface ProjectSettingsModalProps {
  project: types.ProjectDto;
  onProjectUpdated: (updatedProject: types.ProjectDto) => void;
  trigger?: React.ReactNode;
  userId: string;
}

export default function ProjectSettingsModal({
  project,
  onProjectUpdated,
  trigger,
  userId
}: ProjectSettingsModalProps) {
  const navigate = useNavigate();
  const setTeamspaces = useSetAtom(teamspacesAtom);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [confirmProjectName, setConfirmProjectName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPrivate: false,
  });

  // Track if this user is the only member
  const [isOnlyMember, setIsOnlyMember] = useState(true);

  useEffect(() => {
    if (open) {
      // Initialize form data when modal opens
      setFormData({
        name: project.name || '',
        description: project.description || '',
        isPrivate: project.isPrivate || false,
      });

      // Check if user is the only member
      const memberCount = project.members?.length || 0;
      setIsOnlyMember(memberCount <= 1);

      // Reset delete confirmation state
      setShowDeleteConfirm(false);
      setConfirmProjectName('');
    }
  }, [open, project]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePrivacyChange = (checked: boolean) => {
    setFormData({
      ...formData,
      isPrivate: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project.id) {
      toast.error('Project not found');
      return;
    }

    if (!formData.name.trim()) {
      toast.error('Project name is required');
      return;
    }

    // Prevent making a project private if it has multiple members
    if (formData.isPrivate && !isOnlyMember && !project.isPrivate) {
      toast.error('Cannot make a project private when it has multiple members');
      return;
    }

    setLoading(true);

    try {
      const { data: updatedProject } = await getRequestClient().chatrooms.updateProject(project.id, {
        teamspaceId: project.teamspaceId,
        context: project.context,
        creatorId: userId,
        name: formData.name,
        description: formData.description,
        isPrivate: formData.isPrivate,
        members: formData.isPrivate ? [] : project.members?.map((member) => ({
          projectId: project.id,
          userId: member.user.id,
          role: member.role,
          invitedByUserId: userId,
        })),
      });

      onProjectUpdated(updatedProject);
      toast.success('Project settings updated successfully');
      setOpen(false);
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Failed to update project');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async () => {
    if (confirmProjectName !== project.name) {
      toast.error('Project name does not match');
      return;
    }

    setDeleteLoading(true);

    try {
      await getRequestClient().chatrooms.deleteProject(project.id);
      toast.success('Project deleted successfully');
      setOpen(false);

      // Navigate back to teamspace page
      if (project.teamspaceId) {
        setTeamspaces(teamspaces => {
          const filteredOutProjects = teamspaces.map(teamspace => ({
            ...teamspace,
            projects: teamspace.projects.filter(p => p.id !== project.id)
          }));
          return filteredOutProjects;
        });

        navigate({ to: '/teamspace/$teamspaceId', params: { teamspaceId: project.teamspaceId } });
      } else {
        navigate({ to: '/chat' });
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" variant="outline" className="hover:cursor-pointer">
            <Settings className="h-4 w-4 mr-2" /> Project Settings
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {!showDeleteConfirm ? (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <div className="h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" />
              <DialogTitle className="text-xl mt-2">Project Settings</DialogTitle>
              <DialogDescription>
                Update the details and settings of your project
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Project Name <span className="text-red-500">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Marketing Campaign"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="What is this project about?"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isPrivate"
                  checked={formData.isPrivate}
                  onCheckedChange={handlePrivacyChange}
                  disabled={!isOnlyMember && !project.isPrivate}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="isPrivate"
                    className={`text-sm font-medium leading-none flex items-center ${!isOnlyMember && !project.isPrivate ? 'text-muted-foreground' : ''}`}
                  >
                    <Lock className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                    Make project private
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Private projects are only visible to invited members
                  </p>
                </div>
              </div>

              {!isOnlyMember && !project.isPrivate && (
                <Alert variant="warning" className="bg-amber-50 text-amber-800 border-amber-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Projects with multiple members cannot be made private
                  </AlertDescription>
                </Alert>
              )}

              <div className="border-t pt-4 mt-2">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-red-600">Danger Zone</h3>
                  <p className="text-xs text-muted-foreground">
                    Once you delete a project, there is no going back. This action cannot be undone.
                  </p>
                  <Button
                    type="button"
                    variant="destructive"
                    className="mt-2 bg-red-600 hover:bg-red-700"
                    onClick={() => setShowDeleteConfirm(true)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" /> Delete Project
                  </Button>
                </div>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div>
            <DialogHeader>
              <div className="h-1.5 bg-red-500 w-full absolute top-0 left-0 rounded-t-lg" />
              <DialogTitle className="text-xl mt-2 text-red-600 flex items-center">
                <Trash2 className="h-5 w-5 mr-2" /> Delete Project
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete the project and remove all associated chats and data.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <div className="flex items-center">
                  <span className="text-xl mr-2">💩</span>
                  <p className="text-sm text-red-800">
                    Are you absolutely sure you want to delete <strong>{project.name}</strong>? This action is irreversible!
                  </p>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmName" className="text-sm font-medium">
                  To confirm, type <span className="font-bold">{project.name}</span> below:
                </Label>
                <Input
                  id="confirmName"
                  value={confirmProjectName}
                  onChange={(e) => setConfirmProjectName(e.target.value)}
                  placeholder={`Type "${project.name}" to confirm`}
                />
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={deleteLoading}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={handleDeleteProject}
                  disabled={confirmProjectName !== project.name || deleteLoading}
                >
                  {deleteLoading ? 'Deleting...' : 'Permanently Delete Project'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
