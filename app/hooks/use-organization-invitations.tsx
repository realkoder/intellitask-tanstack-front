
import { useSession } from "~/lib/getBetterAuthRequestClient";
import { useEffect } from "react";
import getRequestClient from "../lib/getRequestClient";
import { useAtom } from "jotai";
import { organizationInvitationsAtom } from "../lib/atoms/organizationInvitations/atom";


export const useOrganizationInvitation = () => {
  const { data: sessionData } = useSession();
  const [organizationInvitations, setOrganizationInvitations] = useAtom(organizationInvitationsAtom);

  useEffect(() => {
    if (organizationInvitations.length > 0) return;

    (async () => {
      const { data: invitations } = await getRequestClient().auth.getOrganizationInvitationsByEmail();

      if (invitations) {
        setOrganizationInvitations(invitations);
      }
    })();

  }, [sessionData?.user.id]);

  const refetchInvitations = async () => {
    const { data: fetchedInvitations } = await getRequestClient().auth.getOrganizationInvitationsByEmail();
    if (fetchedInvitations) {
      setOrganizationInvitations(fetchedInvitations);
    }
  }

  return { organizationInvitations, refetchInvitations };
}
