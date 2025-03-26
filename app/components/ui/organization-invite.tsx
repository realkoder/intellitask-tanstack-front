"use client"

import { useState } from "react"
import { Mail, X, UserPlus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export type InviteeRole = "Admin" | "Member" | "Developer" | "Viewer"

export interface Invitee {
  email: string
  role: InviteeRole
  id: string
}

interface OrganizationInviteProps {
  invitees: Invitee[]
  onAddInvitee: (email: string, role: InviteeRole) => void
  onRemoveInvitee: (id: string) => void
  onSubmit: () => Promise<void>
  isSubmitting?: boolean
}

export default function OrganizationInvite({
  invitees,
  onAddInvitee,
  onRemoveInvitee,
  onSubmit,
  isSubmitting = false,
}: OrganizationInviteProps) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<InviteeRole>("Member")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleAddInvitee = () => {
    if (!email) {
      setEmailError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Check if email already exists in the list
    if (invitees.some((invitee) => invitee.email === email)) {
      setEmailError("This email has already been added")
      return
    }

    setEmailError("")
    onAddInvitee(email, role)
    setEmail("")
  }

  const getRoleBadgeColor = (role: InviteeRole) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "Member":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Developer":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Viewer":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? "border-red-500" : ""}
                />
                {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
              </div>
              <Select value={role} onValueChange={(value) => setRole(value as InviteeRole)}>
                <SelectTrigger className="w-[180px] hover:cursor-pointer">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="hover:cursor-pointer" value="Admin">Admin</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="Member">Member</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="Developer">Developer</SelectItem>
                  <SelectItem className="hover:cursor-pointer" value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Button className="hover:cursor-pointer" type="button" onClick={handleAddInvitee}>
                <UserPlus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </div>

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
      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">

        <Button onClick={onSubmit} disabled={invitees.length === 0 || isSubmitting} className="gap-2 hover:cursor-pointer">
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <Check className="h-4 w-4" />
              Send Invitations
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

