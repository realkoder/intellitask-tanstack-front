import { Check, Users, Building, BuildingIcon as BuildingSkyscraper } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the type for seat size options
interface SeatSizeOption {
  id: string
  label: string
  description: string
  icon: keyof typeof iconMap
}

// Map of icon names to their components
const iconMap = {
  small: Users,
  medium: Building,
  large: BuildingSkyscraper,
}

interface SeatSizeSelectorProps {
  options: SeatSizeOption[];
  seatSize?: string;
  defaultSelected?: string;
  onSelect?: (optionId: string) => void;
  className?: string;
}

export default function SeatSizeSelector({ options, defaultSelected, onSelect, className, seatSize }: SeatSizeSelectorProps) {
  const selectedOption = seatSize || defaultSelected || options[0]?.id || "";

  const handleSelect = (optionId: string) => {
    if (onSelect) {
      onSelect(optionId);
    }
  };

  return (
    <div className={cn("grid gap-4 w-full", className)}>
      {options.map((option) => {
        const Icon = iconMap[option.icon] || Users
        const isSelected = selectedOption === option.id

        return (
          <div
            key={option.id}
            className={cn(
              "relative flex items-center gap-4 p-2 rounded-lg border cursor-pointer transition-all",
              isSelected ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border hover:border-primary/50",
            )}
            onClick={() => handleSelect(option.id)}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
              <Icon className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <h4 className="font-medium">{option.label}</h4>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>

            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full border",
                isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground",
              )}
            >
              {isSelected && <Check className="h-3 w-3" />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

