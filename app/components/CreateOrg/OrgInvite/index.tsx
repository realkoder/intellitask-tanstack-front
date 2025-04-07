import { useState } from "react";
import OrganizationInvite from "../../ui/organization-invite";
import { OrganizationInvitee, OrganizationRole } from "../../../../types/better-auth.types";

type OrgInviteProps = {
  invitees: OrganizationInvitee[]
  setInvitees: (invitees: OrganizationInvitee[]) => void
}

const OrgInvite = ({ invitees, setInvitees }: OrgInviteProps) => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddInvitee = (email: string, role: OrganizationRole) => {
    setInvitees([
      ...invitees,
      {
        email,
        role,
        id: crypto.randomUUID(),
      },
    ])
  }

  const handleRemoveInvitee = (id: string) => {
    setInvitees(invitees.filter((invitee) => invitee.id !== id))
  }

  return (
    <div>
      <OrganizationInvite
        invitees={invitees}
        onAddInvitee={handleAddInvitee}
        onRemoveInvitee={handleRemoveInvitee}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default OrgInvite;
