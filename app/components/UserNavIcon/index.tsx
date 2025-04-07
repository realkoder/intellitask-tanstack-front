import { Button } from '@/components/ui/button';
import { Settings, LogOut, Users, Server } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Link } from '@tanstack/react-router';
import { useSignOut } from '../../hooks/useSignOut';
import { useActiveOrganization, useSession } from '~/lib/getBetterAuthRequestClient';
import { AvatarImage } from '@radix-ui/react-avatar';

const UserNavIcon = () => {
  const { data } = useSession()
  const { data: activeOrganization } = useActiveOrganization();
  const signOut = useSignOut();

  return (
    <div className="flex items-center gap-4">
      <span>{activeOrganization?.name.split(' ')[0]}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 p-1">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{data?.user?.name[0].toUpperCase()}</AvatarFallback>
              <AvatarImage src={data?.user?.image ?? ""} alt={data?.user?.name.split(' ')[0]} className="h-8 w-8" />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="/chat">
                <Settings className="mr-2 h-4 w-4" />
                <span>Profile</span>
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
          <DropdownMenuItem onClick={signOut} className="text-red-500 focus:text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNavIcon;
