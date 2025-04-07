import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { getSession, organization, useSession } from '~/lib/getBetterAuthRequestClient';
import { toast } from 'sonner';
import { z } from 'zod';
import { useSignOut } from '../../hooks/useSignOut';


export const Route = createFileRoute('/accept-invitation/$invitationId/$invitationEmail')({
  params: z.object({
    invitationId: z.string().min(10),
    invitationEmail: z.string().email()
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { data: userSession } = useSession();
  const { invitationId, invitationEmail } = Route.useParams()
  const [status, setStatus] = useState<"initial" | "loading" | "success" | "error" | "must-signin" | "must-change-account">("initial");
  const navigate = useNavigate();
  const signOut = useSignOut();
  const cardDescription = status === "loading" ? "Processing your invitation..." : status === "success" ? "Your invitation has been accepted!" : status === "error" ? "There was a problem with your invitation" : ""

  useEffect(() => {
    if (!invitationEmail || !invitationId) {
      navigate({ to: "/sign-in", reloadDocument: true });
      return;
    }
  }, []);

  const acceptInvitation = async () => {
    setStatus("loading");

    if (!userSession?.user.id) {
      localStorage.setItem('invitationEmail', invitationEmail);

      toast.error("You have to sign in before we can make you join an organization");
      setStatus("must-signin");
      return;
    }

    if (userSession.user.email !== invitationEmail) {
      toast.error(`You must sign in using the email: ${invitationEmail}`);
      localStorage.setItem('invitationEmail', invitationEmail);
      setStatus("must-change-account");
      return;
    }

    const { data, error } = await organization.acceptInvitation({
      invitationId
    });


    if (data?.invitation) {
      toast.info('You have joined the organization');
      setStatus('success');
      await organization.setActive({ organizationId: data?.member.organizationId });
      await getSession({ query: { disableCookieCache: true } });

      setTimeout(() => navigate({ to: "/chat" }), 1000);
    } else {
      setStatus('error');
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Organization Invitation</CardTitle>
          <CardDescription className={`${status === "error" ? " text-destructive" : ""}`}>{cardDescription}</CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          {status === "initial" ? <div>
            <p className="font-medium">You have been invited to join an organization</p>
          </div> : status === "loading" ? (
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
              <p className="text-sm text-muted-foreground">Please wait while we process your invitation</p>
            </div>
          ) : status === "success" ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium">You have successfully joined the organization</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You now have access to all resources shared with you
                </p>
              </div>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="font-medium">This invitation is invalid or has expired</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Please contact your organization admin for a new invitation
                </p>
              </div>
            </div>
          ) : <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <X className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="font-medium">This invitation could not be accepted you have to sign in or switch your account</p>
            </div>
          </div>}
        </CardContent>

        <CardFooter className="flex justify-center">
          {status === "initial" ? (
            <Button onClick={() => acceptInvitation()}>
              Accept invitation
            </Button>
          ) : status === "error" ? (
            <Button onClick={() => navigate({ to: "/sign-up" })}>
              Return to Home
            </Button>
          ) : status === "must-signin" ? <Button onClick={() => navigate({ to: '/sign-in' })}>
            sign me in
          </Button> : status === "must-change-account" ? <Button onClick={() => signOut()}>
            switch account
          </Button> : <></>}
        </CardFooter>
      </Card>
    </div >
  );
}
