import { useState, useRef, useEffect } from "react"
import { Check, ChevronDown, ChevronRight, Folder, FileText, Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Define AI provider and agent types
type AIAgent = {
  id: string
  name: string
  description?: string
}

type AIProvider = {
  id: string
  name: string
  agents: AIAgent[]
  expanded?: boolean
}

// Sample data for AI providers and agents
const aiProviders: AIProvider[] = [
  {
    id: "openai",
    name: "OpenAI",
    expanded: true,
    agents: [
      { id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" },
      { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" },
      { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" },
    ],
  },
  {
    id: "anthropic",
    name: "Anthropic",
    agents: [
      { id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" },
      { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" },
      { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" },
    ],
  },
  {
    id: "meta",
    name: "Meta",
    agents: [
      { id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" },
      { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" },
    ],
  },
]

interface AgentSelectorProps {
  selectedAgents: AIAgent[]
  onSelectAgents: (agents: AIAgent[]) => void
  isOpen: boolean
  onClose: () => void
  multiSelectMode: boolean
  maxSelections?: number
  searchTerm?: string
  onAgentSelect?: (agent: AIAgent) => void
  keyboardNavigation?: boolean
}

export default function AgentSelector({
  selectedAgents,
  onSelectAgents,
  isOpen,
  onClose,
  multiSelectMode = false,
  maxSelections = 4,
  searchTerm = "",
  onAgentSelect,
  keyboardNavigation = false,
}: AgentSelectorProps) {
  const [providers, setProviders] = useState<AIProvider[]>(aiProviders)
  const [activeTab, setActiveTab] = useState<"provider" | "agent">("provider")
  const selectorRef = useRef<HTMLDivElement>(null)
  const [focusedAgentIndex, setFocusedAgentIndex] = useState<number>(0)
  const [allVisibleAgents, setAllVisibleAgents] = useState<AIAgent[]>([])
  const shouldCloseRef = useRef(false)
  const [internalSearchTerm, setInternalSearchTerm] = useState(searchTerm)

  // Handle clicking outside to close the selector
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Handle keyboard navigation - this needs to intercept Enter key before message submission
  useEffect(() => {
    if (!isOpen || !keyboardNavigation) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setFocusedAgentIndex((prev) => (prev < allVisibleAgents.length - 1 ? prev + 1 : prev))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setFocusedAgentIndex((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === "Enter" && focusedAgentIndex >= 0 && focusedAgentIndex < allVisibleAgents.length) {
        // This is critical - we must capture Enter key before message submission
        e.preventDefault()
        e.stopPropagation()

        // Select the agent
        const selectedAgent = allVisibleAgents[focusedAgentIndex]
        if (onAgentSelect) {
          onAgentSelect(selectedAgent)
        } else {
          toggleAgentSelection(selectedAgent)
        }
      }
    }

    // Use capture phase to ensure we get this event before the chat input
    document.addEventListener("keydown", handleKeyDown, { capture: true })
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true })
    }
  }, [isOpen, keyboardNavigation, focusedAgentIndex, allVisibleAgents, onAgentSelect])

  // Update internal search when external search term changes
  useEffect(() => {
    setInternalSearchTerm(searchTerm);
    // Only reset focused index if we have search results
    // This will be managed in the filtering effect
  }, [searchTerm]);

  // Process providers based on search term - this is critical for filtering
  useEffect(() => {
    if (!isOpen) return

    // Filter agents based on search term
    const searchQuery = searchTerm.toLowerCase()

    const updatedProviders = aiProviders
      .map((provider) => {
        // Check if provider name matches search
        const providerMatches = provider.name.toLowerCase().includes(searchQuery)

        // Filter agents that match search
        const filteredAgents = provider.agents.filter((agent) =>
          agent.name.toLowerCase().includes(searchQuery),
        )

        // If provider matches or has matching agents, expand it
        const shouldExpand = searchQuery ? providerMatches || filteredAgents.length > 0 : provider.expanded

        return {
          ...provider,
          expanded: shouldExpand,
          agents: filteredAgents,
        }
      })
      .filter(
        (provider) => provider.name.toLowerCase().includes(searchQuery) || provider.agents.length > 0,
      )

    setProviders(updatedProviders)

    // Collect all visible agents for keyboard navigation
    const agents: AIAgent[] = []
    updatedProviders.forEach((provider) => {
      if (provider.expanded) {
        agents.push(...provider.agents)
      }
    })
    setAllVisibleAgents(agents)

    // Reset focused index when search term changes and we have results
    if (agents.length > 0) {
      setFocusedAgentIndex(0)
    }

    // Close the selector if no matches found
    if (searchQuery && agents.length === 0) {
      onClose()
    }
  }, [searchTerm, isOpen, onClose])

  // Toggle provider expansion
  const toggleProvider = (providerId: string) => {
    setProviders(
      providers.map((provider) =>
        provider.id === providerId ? { ...provider, expanded: !provider.expanded } : provider,
      ),
    )
  }

  // Toggle agent selection
  const toggleAgentSelection = (agent: AIAgent) => {
    const isSelected = selectedAgents.some((a) => a.id === agent.id)

    if (multiSelectMode) {
      // Multi-select mode (up to maxSelections)
      if (isSelected) {
        // Remove agent if already selected
        onSelectAgents(selectedAgents.filter((a) => a.id !== agent.id))
      } else if (selectedAgents.length < maxSelections) {
        // Add agent if under the limit
        onSelectAgents([...selectedAgents, agent])
      }
    } else {
      // Single-select mode - always replace the current selection
      onSelectAgents([agent])
      // Close the selector after selection in single mode
      if (!onAgentSelect) {
        onClose()
      }
    }
  }

  // Count selected agents for each provider
  const getSelectedAgentCount = (providerId: string) => {
    const provider = providers.find((p) => p.id === providerId)
    if (!provider) return 0

    return selectedAgents.filter((selectedAgent) => provider.agents.some((agent) => agent.id === selectedAgent.id))
      .length
  }

  if (!isOpen) {
    return null
  }

  return (
    <div ref={selectorRef} className="w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 h-[350px] flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 flex-shrink-0">
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium",
            activeTab === "provider" ? "border-b-2 border-black" : "text-gray-500",
          )}
          onClick={() => setActiveTab("provider")}
        >
          AI Agents
        </button>
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium",
            activeTab === "agent" ? "border-b-2 border-black" : "text-gray-500",
          )}
          onClick={() => setActiveTab("agent")}
        >
          Agents
        </button>
      </div>

      {/* Search term indicator */}
      {searchTerm && (
        <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-200">Searching for: "{searchTerm}"</div>
      )}

      {/* Tree view */}
      <div className="overflow-y-auto flex-1">
        {providers.length === 0 && <div className="p-3 text-sm text-gray-500">No agents found</div>}

        {providers.map((provider) => {
          const selectedCount = getSelectedAgentCount(provider.id)

          return (
            <div key={provider.id} className="text-sm">
              {/* Provider row */}
              <div
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleProvider(provider.id)}
              >
                {selectedCount > 0 && (
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs font-medium mr-1">
                    {selectedCount}
                  </div>
                )}
                {provider.expanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-500 mr-1" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500 mr-1" />
                )}
                <Folder className="h-4 w-4 text-gray-500 mr-2" />
                <span>{provider.name}</span>
              </div>

              {/* Agents */}
              {provider.expanded &&
                provider.agents.map((agent) => {
                  const isSelected = selectedAgents.some((a) => a.id === agent.id)
                  const globalAgentIndex = allVisibleAgents.findIndex((a) => a.id === agent.id)
                  const isFocused = globalAgentIndex === focusedAgentIndex

                  return (
                    <div
                      key={agent.id}
                      className={cn(
                        "flex items-center pl-10 pr-3 py-2 cursor-pointer",
                        isFocused ? "bg-gray-200" : "hover:bg-gray-100",
                      )}
                      onClick={() => {
                        if (onAgentSelect) {
                          onAgentSelect(agent)
                        } else {
                          toggleAgentSelection(agent)
                        }
                      }}
                    >
                      <FileText className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="flex-1">{agent.name}</span>
                      {isSelected && <Check className="h-4 w-4 text-red-500" />}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

