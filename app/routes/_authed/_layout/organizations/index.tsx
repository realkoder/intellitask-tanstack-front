import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner';
import { Check, Plus, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { organization, useActiveOrganization, useListOrganizations } from '~/lib/getBetterAuthRequestClient';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';

export const Route = createFileRoute('/_authed/_layout/organizations/')({
  component: Organizations,
})

function Organizations() {
  const { data: organizations } = useListOrganizations();
  const { data: activeOrganization, error } = useActiveOrganization();
  const navigate = useNavigate();
  const [orgMemberMapLength, setOrgMemberMapLength] = useState(new Map<string, number>());
  
  useEffect(() => {
    if (!organizations) return;
    const fix = async () => {
      const orgMemberMap = await Promise.all(
        organizations?.map(async (org) => {
          const fullOrg = await organization.getFullOrganization({
            query: {
              organizationId: org.id,
            },
          });
          return { id: org.id, memberCount: (fullOrg.data?.members || []).length };
        })
      );
      const memberMap = new Map<string, number>(
        orgMemberMap.map(({ id, memberCount }) => [id, memberCount])
      );

      setOrgMemberMapLength(memberMap);
    }
    fix();
  }, [organizations]);

  const handleCreateOrganization = () => {
    navigate({ to: "/create-organization" });
  };

  const handleSelectOrganization = async (orgId: string) => {
    await organization.setActive({ organizationId: orgId });
    toast.success("Organization switched successfully");
    navigate({ to: "/chat", reloadDocument: true });
  };

  return (
    <div className="space-y-8 m-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground mt-1">
            Manage your organizations and teams
          </p>
        </div>
        <Button onClick={handleCreateOrganization}>
          <Plus className="mr-2 h-4 w-4" />
          New Organization
        </Button>
      </div>

      {organizations?.length === 0 ? (
        <Card className='m-4'>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="mb-4 text-muted-foreground text-center">
              You don't have any organizations yet
            </p>
            <Button onClick={handleCreateOrganization}>
              <Plus className="mr-2 h-4 w-4" />
              Create your first organization
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 m-8 sm:grid-cols-2 lg:grid-cols-3">
          {organizations?.map((org) => (
            <Card key={org.id} className={`transition-all ${activeOrganization?.id === org.id ? 'border-primary' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{org.name}</CardTitle>
                  {activeOrganization?.id === org.id && (
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
                <CardDescription>
                  Created on {new Date(org.createdAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {org.description || "No description provided"}
                </p>
                <div className="mt-4 flex items-center text-sm">
                  <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{orgMemberMapLength.get(org.id)} members</span>
                </div>
              </CardContent>
              <CardFooter>
                {activeOrganization?.id === org.id ? (
                  <Button variant="outline" className="w-full" disabled>
                    Current Organization
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => handleSelectOrganization(org.id)}
                  >
                    Switch to this organization
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
