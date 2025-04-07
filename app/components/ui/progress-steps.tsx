import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import { PaymentPlan } from "../CreateOrg/OrgPayment"

interface Step {
  id: number | string
  label: string
  completed?: boolean
}

interface ProgressStepsProps {
  steps: Step[]
  currentStep: number
  paymentPlan?: PaymentPlan;
  onStepClick?: (stepId: number | string) => void
  className?: string
  showLabels?: boolean
  variant?: "default" | "minimal"
}

export function ProgressSteps({
  steps,
  currentStep,
  paymentPlan,
  onStepClick,
  className,
  showLabels = true,
}: ProgressStepsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative flex items-center justify-center w-full">
        {steps.map((step, index) => {
          if (paymentPlan === "enterprise" && step.id == "3") return;

          const isActive = step.id === currentStep
          const isCompleted = step.completed || index < steps.findIndex((s) => s.id === currentStep)

          return (
            <div key={step.id} className="relative flex flex-col items-center flex-1">
              {/* Line before */}
              {index > 0 && (
                <div
                  className={cn(
                    "absolute top-1/2 w-full h-[2px] -translate-y-1/2 -left-1/2",
                    isCompleted ? "bg-primary" : "bg-muted",
                  )}
                />
              )}

              {/* Circle */}
              <button
                type="button"
                onClick={() => onStepClick?.(step.id)}
                disabled={!onStepClick}
                className={cn(
                  "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all",
                  isActive && "ring-4 ring-primary/20",
                  isCompleted
                    ? "bg-primary border-primary text-primary-foreground"
                    : isActive
                      ? "border-primary bg-background text-primary"
                      : "border-muted bg-white text-muted-foreground",
                  onStepClick && "cursor-pointer hover:opacity-80",
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-sm font-medium">{index + 1}</span>}
              </button>

              {/* Label */}
              {showLabels && (
                <div
                  className={cn(
                    "mt-2 text-xs font-medium text-center",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
