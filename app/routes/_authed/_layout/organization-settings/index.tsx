import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import { organization, useActiveOrganization, useListOrganizations } from '@/lib/getBetterAuthRequestClient';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FullOrganization, OrganizationMetaData } from '../../../../../types/better-auth.types';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '../../../../components/ui/dialog';
import { useOrganization } from '../../../../hooks/use-organization';

export const Route = createFileRoute('/_authed/_layout/organization-settings/')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const { data: dataOrganization, refetch } = useActiveOrganization();
  const activeOrganization = dataOrganization as FullOrganization;
  const { data: organizations } = useListOrganizations();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { changeActiveOrganizationIfAny } = useOrganization();

  useEffect(() => {
    if (!dataOrganization) return;
    setName(activeOrganization.name)
    setDescription((JSON.parse(activeOrganization.metadata!) as OrganizationMetaData).description)
    setIsLoading(false);
  }, [dataOrganization])

  const handleSaveChanges = async () => {
    if (!name || !description) {
      toast.error("Organization name is required");
      return;
    }

    setIsLoading(true);
    const { data, error } = await organization.update({ data: { name, metadata: { description } } });
    if (data) {
      toast.info("Organization credentials updated!")
    } else if (error) {
      toast.error("Organization credentials could not be updated!")
      console.error("Organization credentials could not be updated!", error);
    }
    refetch();
    setIsLoading(false);
  };

  const handleDeleteOrganization = async () => {
    await organization.delete({ organizationId: activeOrganization.id });
    changeActiveOrganizationIfAny();
  }


  if (!activeOrganization) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="space-y-8 m-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Organization Settings - {activeOrganization?.name}</h1>
        <p className="text-muted-foreground mt-1">
          Manage your organization preferences
        </p>
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <p>Are you sure you want to delete this organization? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => handleDeleteOrganization()}>
              Delete Organization
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className='flex flex-row justify-between'>
            <div>
              <CardTitle>General Information</CardTitle>
              <CardDescription>
                Update your organization's basic details.
              </CardDescription>
              <CardDescription>
                {activeOrganization?.name} has a total of {activeOrganization?.members.length ?? 0} members and {activeOrganization.invitations.filter((inv: any) => inv.status === "pending").length ?? 0} pending invitaitons.
              </CardDescription>
            </div>
            <div>
              <Button>
                <Link className='flex' to="/members">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Manage members</span>
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input
                id="org-name"
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-description">Description</Label>
              <Textarea
                id="org-description"
                value={description}
                maxLength={1000}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button
              onClick={handleSaveChanges}
              disabled={isLoading || (name === activeOrganization.name && description === JSON.parse(activeOrganization.metadata ?? "{description: ''}").description)}
            >
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription>
              Irreversible actions for your organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-destructive/20 p-4">
              <h3 className="font-medium text-destructive">Delete Organization</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This action cannot be undone. All data will be permanently deleted.
              </p>
              <Button
                variant="destructive"
                className="mt-4"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                Delete Organization
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
