import { useEffect, useRef, useState } from "react";
import { useOrganizationInvitation } from "../../hooks/use-organization-invitations";
import { Badge, Bell, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";


interface NotificationProps {
  className?: string;
}

const Notifications = ({ className }: NotificationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { organizationInvitations: invitations } = useOrganizationInvitation();
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={notificationRef}>
      <button
        onClick={toggleNotifications}
        className="relative p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6 text-gray-700 hover:text-gray-900" />
        {invitations.length > 0 && (
          <div className="absolute -top-2 -right-1 h-4 w-4 flex items-center justify-center bg-blue-500 rounded-full">
            <span className="text-white text-sm">{invitations.length}</span>
          </div>
        )}
      </button>

      {isOpen && (
        <Card className="absolute top-full right-0 mt-2 w-80 shadow-md z-50">
          <CardContent className="p-0">
            <div className="p-3 border-b">
              <h3 className="font-medium">Notifications</h3>
            </div>
            {invitations.length > 0 ? (
              <ScrollArea className="max-h-[300px]">
                <div className="divide-y">
                  {invitations.map((invitation, index) => (
                    <div key={index} className="p-3 hover:bg-muted/40">
                      <div className="flex items-start gap-2">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {invitation.organization.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Invitation from {invitation.organization.name}</p>
                          <p className="text-xs text-muted-foreground">You've been invited to join this organization</p>
                          <div className="mt-2 flex space-x-2">
                            <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                              <Link to={"/accept-invitation/$invitationId/$invitationEmail"} params={{ invitationId: invitation.id, invitationEmail: invitation.email }}>
                                <ExternalLink className="h-3 w-3 mr-1" /> Accept invitation
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <div className="p-6 text-center">
                <p className="text-muted-foreground text-sm">No new notifications</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Notifications;
