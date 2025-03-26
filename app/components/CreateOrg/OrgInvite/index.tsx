import { useState } from "react";
import OrganizationInvite, { Invitee, InviteeRole } from "../../ui/organization-invite";

type OrgInviteProps = {
  invitees: Invitee[]
  setInvitees: (invitees: Invitee[]) => void
}

const OrgInvite = ({ invitees, setInvitees }: OrgInviteProps) => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddInvitee = (email: string, role: InviteeRole) => {
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

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
     

      // Make API Call to invite users


      // Clear the list after successful submission
      setInvitees([])
      alert("Invitations sent successfully!")
    } catch (error) {
      console.error("Error sending invitations:", error)
      alert("Failed to send invitations. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <OrganizationInvite
        invitees={invitees}
        onAddInvitee={handleAddInvitee}
        onRemoveInvitee={handleRemoveInvitee}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default OrgInvite;
