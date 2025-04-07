import { useState } from "react"
import { Mail, X, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useSession } from "@/lib/getBetterAuthRequestClient"
import { OrganizationInvitee, OrganizationRole } from "../../../types/better-auth.types"

export interface OrganizationInviteProps {
  invitees: OrganizationInvitee[];
  onAddInvitee: (email: string, role: OrganizationRole) => void;
  onRemoveInvitee: (id: string) => void;
  isSubmitting?: boolean;
}

export default function OrganizationInvite({
  invitees,
  onAddInvitee,
  onRemoveInvitee,
  isSubmitting = false,
}: OrganizationInviteProps) {
  const { data: sessionData } = useSession();
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<OrganizationRole>("member")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleAddInvitee = () => {
    if (email.toLowerCase() === sessionData?.user.email.toLowerCase()) {
      setEmailError("Not allowed to use your own email here");
      return;
    }

    if (!email) {
      setEmailError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Check if email already exists in the list
    if (invitees.some((invitee) => invitee.email.toLowerCase() === email.toLowerCase())) {
      setEmailError("This email has already been added")
      return
    }

    setEmailError("")
    onAddInvitee(email, role)
    setEmail("")
  }

  const getRoleBadgeColor = (role: OrganizationRole) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "member":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "owner":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Organization Setup</CardTitle>
        <CardDescription>Invite team members to your organization</CardDescription>
        <CardDescription>Members can always be invited when Organization is created</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  className={emailError ? "border-red-500" : ""}
                />
                {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
              </div>
              <Select value={role} onValueChange={(value) => setRole(value as OrganizationRole)}>
                <SelectTrigger className="w-[180px] hover:cursor-pointer">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="hover:cursor-pointer" value="owner">Owner</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="admin">Admin</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="member">Member</SelectItem>
                </SelectContent>
              </Select>
              <Button className="hover:cursor-pointer" type="button" onClick={handleAddInvitee}>
                <UserPlus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </div>

      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">
        {invitees.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Pending Invitations</h3>
            <div className="border rounded-md divide-y">
              {invitees.map((invitee) => (
                <div key={invitee.id} className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{invitee.email}</span>
                    <Badge className={getRoleBadgeColor(invitee.role)}>{invitee.role}</Badge>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => onRemoveInvitee(invitee.id)} className="h-8 w-8 p-0 hover:cursor-pointer">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        {invitees.length === 0 && <p>No members selected for the organization</p>}
      </CardFooter>
    </Card>
  )
}

