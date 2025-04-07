import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Globe, BrainCircuit, Split, Telescope, Settings } from "lucide-react"
import { useIsMobile } from "../../hooks/use-mobile"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ToolIconProps {
  icon: React.ReactNode
  label: string
  description: string
  onClick: () => void
  active: boolean
}

const ToolIcon = ({ icon, label, description, onClick, active }: ToolIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className={`h-8 px-4 rounded-full flex items-center gap-2 ${active ? "bg-gray-300 text-gray-800 hover:bg-gray-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          onClick={onClick}
        >
          {icon}
          <span className="text-xs font-medium">{label}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default function GeneralToolIcons() {
  const [activeTools, setActiveTools] = useState<Set<number>>(new Set())
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const toggleTool = (index: number) => {
    setActiveTools((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const tools = [
    { icon: <Globe className="h-4 w-4" />, label: "Web-Search", description: "Quick web look-up" },
    { icon: <Telescope className="h-4 w-4" />, label: "Deep-Research", description: "Deep web research, on specific input" },
    { icon: <Split className="h-4 w-4" />, label: "Multi-prompt", description: "Prompt multiple agents simultaneously" },
    { icon: <BrainCircuit className="h-4 w-4" />, label: "Reasoning", description: "Think deeply, before answering" },
  ]

  // On mobile, show a dropdown menu
  if (isMobile) {
    const activeToolsCount = activeTools.size;

    return (
      <div className="flex items-center justify-center py-3 px-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 px-4 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <Settings className="h-4 w-4" />
              <span className="text-xs font-medium">
                Tools {activeToolsCount > 0 && `(${activeToolsCount})`}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {tools.map((tool, index) => (
              <DropdownMenuCheckboxItem
                key={tool.label}
                checked={activeTools.has(index)}
                onCheckedChange={() => toggleTool(index)}
                onSelect={(e) => e.preventDefault()} // Prevent menu from closing when selecting item
              >
                <div className="flex items-center gap-2">
                  {tool.icon}
                  <span>{tool.label}</span>
                </div>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  // On desktop, show all tools in a row
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2 py-3 px-2">
        {tools.map((tool, index) => (
          <ToolIcon
            key={tool.label}
            icon={tool.icon}
            label={tool.label}
            description={tool.description}
            active={activeTools.has(index)}
            onClick={() => toggleTool(index)}
          />
        ))}
      </div>
    </TooltipProvider>
  )
}

