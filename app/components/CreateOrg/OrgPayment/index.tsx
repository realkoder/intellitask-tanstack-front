import { Check, Users, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { OrganizationInvitee } from "../../../../types/better-auth.types"

export type PaymentPlan = "starter" | "pro" | "enterprise";

type OrgPaymentProps = {
  invitees: OrganizationInvitee[];
  paymentPlan?: PaymentPlan;
  setPaymentPlan: (selectedPlan: PaymentPlan) => void;
  setCurrentStep: (currentStep: number) => void;
}

type PlanFeature = {
  name: string
  included: boolean
}

type PlanOption = {
  id: PaymentPlan
  name: string
  description: string
  price: string
  billingPeriod: string
  features: PlanFeature[]
  popular?: boolean
}

const OrgPayment = ({ invitees, paymentPlan, setPaymentPlan, setCurrentStep }: OrgPaymentProps) => {


  const plans: PlanOption[] = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: "$9",
      billingPeriod: "per month",
      features: [
        { name: "Up to 3 team members", included: true },
        { name: "5 projects", included: true },
        { name: "Basic analytics", included: true },
        { name: "24-hour support", included: false },
        { name: "Advanced security", included: false },
      ],
    },
    {
      id: "pro",
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      price: "$29",
      billingPeriod: "per month",
      features: [
        { name: "Up to 10 team members", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24-hour support", included: true },
        { name: "Advanced security", included: false },
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: "$99",
      billingPeriod: "per month",
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24-hour priority support", included: true },
        { name: "Advanced security", included: true },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Choose your plan</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Final step! Select a payment plan for your organization. You can invite team members to collaborate on your
          projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <Card key={plan.id} onClick={() => setPaymentPlan(plan.id)} className={`relative hover:cursor-pointer ${paymentPlan === plan.id ? "border-primary" : ""}`}>
            {plan.popular && <Badge className="absolute -top-2 right-4 bg-primary">Most Popular</Badge>}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.billingPeriod}</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                14-day free trial included
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    ) : (
                      <div className="h-5 w-5 mr-2" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <RadioGroup value={paymentPlan || ""} onValueChange={setPaymentPlan} className="w-full">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={plan.id} id={plan.id} />
                  <Label htmlFor={plan.id} className="cursor-pointer w-full">
                    <Button
                      onClick={() => setPaymentPlan(plan.id)}
                      variant={paymentPlan === plan.id ? "default" : "outline"}
                      className="w-full hover:cursor-pointer"
                    >
                      {paymentPlan === plan.id ? "Selected" : "Select Plan"}
                    </Button>
                  </Label>
                </div>
              </RadioGroup>
            </CardFooter>
          </Card>
        ))}
      </div>

      {paymentPlan !== "enterprise" &&
        <div>
          <div className="bg-muted p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Organization members</h3>
                <p className="text-sm text-muted-foreground">
                  You can invite team members to your organization now or later. Team members will have access based on
                  their assigned roles.
                </p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Learn more about roles and permissions
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm">
                      <p>
                        Organization members can have different roles like Admin, Member, or Collaborator with varying
                        levels of access to projects and settings. [^1][^2]
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{invitees ? invitees?.length : 0} members invited</span>
            </div>
            <div className="flex gap-4">
              <Button onClick={() => setCurrentStep(3)} className="hover:cursor-pointer" variant="outline">Invite Team Members</Button>
              <Button className="hover:cursor-pointer">Continue to Payment</Button>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default OrgPayment;
