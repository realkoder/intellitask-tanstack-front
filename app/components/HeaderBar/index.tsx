import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, LogOut, Users, ChevronDown, Server } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Link, useNavigate } from '@tanstack/react-router';
import { types } from '../../lib/client';
import { organization, signOut } from '~/lib/getBetterAuthRequestClient';

const HeaderBar = () => {
  const [currentOrg, setCurrentOrg] = useState<types.Organization | null>(null);
  const [organizations, setOrganizations] = useState<types.Organization[]>([]);
  const [userInitial, setUserInitial] = useState('U');
  const navigate = useNavigate();

  const currentOrganization = organization.getFullOrganization();

  useEffect(() => {
    // Get current organization
    const orgId = localStorage.getItem('currentOrgId');
    const orgs = JSON.parse(localStorage.getItem('organizations') || '[]');

    setOrganizations(orgs);

    if (orgId) {
      const org = orgs.find((o: types.Organization) => o.id === orgId);
      if (org) {
        setCurrentOrg(org);
      }
    }

    // Get user initial - in a real app, this would come from the user profile
    const email = localStorage.getItem('userEmail');
    if (email && email.length > 0) {
      setUserInitial(email[0].toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    signOut();
    navigate({
      to: '/',
      viewTransition: true,
    });
  };

  const switchOrganization = (orgId: string) => {
    localStorage.setItem('currentOrgId', orgId);
    window.location.reload(); // Reload to update organization context
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link to="/chat" className="text-xl font-bold">
            AICollaborate
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 p-1">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{userInitial}</AvatarFallback>
                </Avatar>
                {currentOrg && (
                  <div className="flex items-center gap-1">
                    <span className="hidden md:inline-block">{currentOrg.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Organizations</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {organizations.map((org) => (
                        <DropdownMenuItem
                          key={org.id}
                          onClick={() => switchOrganization(org.id)}
                          className={org.id === currentOrg?.id ? 'bg-accent' : ''}
                        >
                          {org.name}
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/chat">Manage Organizations</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem asChild>
                  <Link to="/chat">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/chat">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team Members</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/chat">
                    <Server className="mr-2 h-4 w-4" />
                    <span>AI Providers</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
