import { useState, ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';
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
import { FolderPlus, Lock } from 'lucide-react';
import { currentProjectIdAtom, teamspacesAtom } from '../../lib/atoms/teamspace/atom';
import { useSetAtom } from 'jotai';
import { Checkbox } from '../ui/checkbox';
import getRequestClient from '../../lib/getRequestClient';


interface CreateProjectModalProps {
  teamspaceId: string;
  children?: ReactNode;
}

export default function CreateProjectModal({ teamspaceId, children }: CreateProjectModalProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setTeamspaces = useSetAtom(teamspacesAtom);
  const setCurrentProjectId = useSetAtom(currentProjectIdAtom);

  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    context: '',
    isPrivate: false,
  });

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setProjectData({ ...projectData, isPrivate: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectData.name.trim()) {
      toast.error('Project name is required');
      return;
    }

    setLoading(true);
    try {
      const client = getRequestClient();

      // Get current user ID
      const auth = await client.auth.handler();
      const userId = auth.userID;

      // Create project in the teamspace
      const { data: project } = await client.chatrooms.createProject({
        teamspaceId,
        name: projectData.name,
        description: projectData.description,
        context: projectData.context,
        creatorId: userId,
        isPrivate: projectData.isPrivate,
        members: [{
          projectId: '', // Will be set by the API
          userId,
          role: 'OWNER' as const,
          invitedByUserId: userId,
          hasAccepted: true
        }]
      });

      setCurrentProjectId(project.id);

      setTeamspaces((cur) => {
        const updatedTeamspaces = cur.map(teamspace => {
          if (teamspace.id === teamspaceId) {
            return { ...teamspace, projects: [...teamspace.projects, project] };
          }
          return teamspace;
        });
        return updatedTeamspaces;
      });

      toast.success('Project created successfully');

      // Navigate to the new project
      navigate({
        to: '/project/$projectId',
        params: { projectId: project.id },
        viewTransition: true
      });
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error('Failed to create project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white hover:cursor-pointer">
            <FolderPlus className="h-4 w-4 mr-2" /> New Project
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" />
            <DialogTitle className="text-xl mt-2">Create New Project</DialogTitle>
            <DialogDescription>
              Create a project in this teamspace to organize your work.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">Project Name <span className="text-red-500">*</span></Label>
              <Input
                id="project-name"
                name="name"
                value={projectData.name}
                onChange={handleProjectChange}
                placeholder="e.g. Marketing Campaign"
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
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isPrivate"
                checked={projectData.isPrivate}
                onCheckedChange={handleCheckboxChange}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="isPrivate"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <Lock className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                  Make project private
                </Label>
                <p className="text-xs text-muted-foreground">
                  Private projects are only visible to invited members
                </p>
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
              {loading ? 'Creating...' : 'Create Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
