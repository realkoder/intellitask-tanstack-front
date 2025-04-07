import { Button } from '@/components/ui/button';
import { Settings, Users, ChevronDown, Server, Factory } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Link } from '@tanstack/react-router';
import { useListOrganizations, useSession } from '~/lib/getBetterAuthRequestClient';
import { AvatarImage } from '@radix-ui/react-avatar';
import BuildingIcon from '@/assets/icons/Building.svg'
import { useOrganization } from '../../hooks/use-organization';

const OrganizationNavIcon = () => {
  const { activeOrganization, changeActiveOrganization } = useOrganization();
  const { data: organizations } = useListOrganizations();
  const user = useSession().data?.user;
  const isOwnerOrAdmin = activeOrganization?.members.some(mem => mem.user.email === user?.email && (mem.role === 'owner' || mem.role === "admin"));


  const switchOrganization = async (orgId: string) => {
    await changeActiveOrganization(orgId);
  };

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 p-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activeOrganization?.logo || BuildingIcon} alt={user?.name} className="h-8 w-8" />
            </Avatar>
            {activeOrganization && (
              <div className="flex items-center gap-1">
                <span className="">{activeOrganization.name}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Link className='flex' to="/organizations">
                  <Factory className="mr-2 h-4 w-4" />
                  <span>Organizations</span>
                </Link>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {organizations && organizations.map((org) => (
                    <DropdownMenuItem
                      key={org.id}
                      onClick={() => switchOrganization(org.id)}
                      className={org.id === activeOrganization?.id ? 'bg-accent' : ''}
                    >
                      {org.name}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/organizations">Manage Organizations</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuItem asChild disabled={!isOwnerOrAdmin}>
              <Link to="/members">
                <Users className="mr-2 h-4 w-4" />
                <span>Team Members</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild disabled={!isOwnerOrAdmin}>
              <Link to="/organization-settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild disabled={!isOwnerOrAdmin}>
              <Link to="/chat">
                <Server className="mr-2 h-4 w-4" />
                <span>AI Providers</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div >
  );
};

export default OrganizationNavIcon;
