"use client"

import React from 'react';
import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Fix reference to context and React.Children methods
const { Children, isValidElement, cloneElement } = React;

// Components
import { Button } from './button';
import { GlowingEffect } from './glowing-effect';
import { Textarea } from './textarea';
import AgentSelector from './agent-selector';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

// Hooks and utils
import { cn } from '../../lib/utils';
import { useTextareaResize } from '../../hooks/use-textarea-resize';
import { useIsMobile } from '../../hooks/use-mobile';

// Icons
import { ArrowUpIcon, Globe, BrainCircuit, Split, Telescope, Settings, Bot, Star } from 'lucide-react';
import { AudioLines } from 'lucide-react';

// Define AI model types
type AIModel = {
  id: string
  name: string
  description?: string
  icon?: React.ReactNode
}

// Define AI provider and agent types for the selector
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

// Default model icons
const getModelIcon = (modelId: string) => {
  if (modelId.includes("gpt")) return <BrainCircuit className="h-5 w-5" />
  if (modelId.includes("claude")) return <Bot className="h-5 w-5" />
  if (modelId.includes("llama")) return <Star className="h-5 w-5" />
  return <BrainCircuit className="h-5 w-5" />
}

// Default model
const defaultModel: AIModel = { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" }

// Track all @ mentions in the input
interface MentionPosition {
  start: number
  end: number
  consumed: boolean
}

interface ChatInputContextValue {
  value?: string;
  audio?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit?: () => void;
  loading?: boolean;
  onStop?: () => void;
  variant?: 'default' | 'unstyled';
  rows?: number;
  placeholder?: string;
  hasMessages?: boolean;
  onAISelect?: () => void;
  onMentionSelectionChange?: (isSelecting: boolean) => void;
}

const ChatInputContext = createContext<ChatInputContextValue>({});

interface ChatInputProps extends Omit<ChatInputContextValue, 'variant'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'unstyled';
  rows?: number;
  hasMessages?: boolean;
  onAISelect?: () => void;
  onMentionSelectionChange?: (isSelecting: boolean) => void;
}

const placeholders = [
  "What's the first rule of Fight Club?",
  'Who is Tyler Durden?',
  'Where is Andrew Laeddis Hiding?',
  'Write a Javascript method to reverse a string',
  'How to assemble your own PC?',
  'Explain quantum computing in simple terms',
  'Write a short story about a robot that falls in love',
  'What are the ethical implications of AI?',
  'Design a database schema for a social media app',
  'Explain how blockchain works to a 5-year-old',
  'Create a regex for validating email addresses',
  "What's the difference between REST and GraphQL?",
  'Suggest five names for my tech startup',
  'How would you implement a binary search tree?',
  'Explain the concept of recursion with an example',
  'Write a haiku about coding at midnight',
  "What's the significance of P vs NP problem?",
  'How does natural language processing work?',
  'Explain the CAP theorem in distributed systems',
  'Design a simple chatbot algorithm',
  'What are the pros and cons of microservices?',
  'How would you optimize a slow-loading website?',
  'Explain neural networks without technical jargon',
  'What is technical debt and how do you manage it?',
  'Write a function to detect a palindrome',
];

// Sample data for AI providers and agents (same as in AgentSelector)
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
];

function ChatInput({
  children,
  className,
  variant = 'default',
  value,
  onChange,
  onSubmit,
  loading,
  onStop,
  rows = 1,
  hasMessages = false,
  onAISelect,
  onMentionSelectionChange,
}: ChatInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Tool selection state
  const [activeTools, setActiveTools] = useState<Set<number>>(new Set());
  const [toolDropdownOpen, setToolDropdownOpen] = useState(false);

  // Agent selection state
  const [selectedModels, setSelectedModels] = useState<AIModel[]>([defaultModel]);
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [isMultipromptMode, setIsMultipromptMode] = useState(false);

  // @ mention tracking
  const [mentionSearch, setMentionSearch] = useState<string | null>(null);
  const mentionsRef = useRef<MentionPosition[]>([]);
  const activeMentionRef = useRef<number>(-1);
  const [internalValue, setInternalValue] = useState(value || "");
  const [focusedAgentIndex, setFocusedAgentIndex] = useState(0);

  // Selector position state
  const [selectorPosition, setSelectorPosition] = useState({ top: 0, left: 10 });

  // Store a reference to the available agents - not used directly but kept for tracking state changes
  const [allVisibleAgents, setAllVisibleAgents] = useState<Array<{ id: string; name: string; description?: string }>>([]);

  // This function was needed with direct agent list access, but we'll remove it now
  // and rely on the AgentSelector's onAgentSelect callback

  // Handle keyboard events for @ mention navigation and selection
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If we have an active mention and the selector is open, we need to prevent message submission
    if (mentionSearch !== null && isModelSelectorOpen) {
      if (e.key === "Enter") {
        // CRITICAL: Prevent form submission when selector is open
        e.preventDefault();
        // The Enter key handling will be delegated to the AgentSelector
        return;
      } else if (e.key === "Escape") {
        // Close the selector on Escape
        e.preventDefault();
        setIsModelSelectorOpen(false);
        setMentionSearch(null);
        activeMentionRef.current = -1;

        // Notify parent that we're no longer selecting
        if (onMentionSelectionChange) {
          onMentionSelectionChange(false);
        }

        return;
      }
    }

    // Normal submission handling when no mentions are active
    if (e.key === 'Enter' && !e.shiftKey && onSubmit) {
      if (typeof internalValue !== 'string' || internalValue.trim().length === 0) {
        return;
      }

      // Don't submit if there's an active mention
      if (mentionSearch !== null) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      onSubmit();
    }
  };

  // Update selector position when it opens
  useEffect(() => {
    if (isModelSelectorOpen && inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect();

      // Position it above the input with a fixed offset
      setSelectorPosition({
        top: rect.top - 370, // Fixed height of 350px + 20px margin
        left: rect.left + 10
      });

      // Add resize listener to update position if window size changes
      const handleResize = () => {
        if (inputContainerRef.current) {
          const updatedRect = inputContainerRef.current.getBoundingClientRect();

          setSelectorPosition({
            top: updatedRect.top - 370, // Fixed height of 350px + 20px margin
            left: updatedRect.left + 10
          });
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isModelSelectorOpen]);

  // Handle placeholder cycling
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 4000);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== 'visible' && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === 'visible' && !hasMessages) {
      // Only start animation if there are no messages
      startAnimation();
    }
  };

  useEffect(() => {
    // Only start animation if there are no messages
    if (!hasMessages) {
      startAnimation();
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasMessages]);

  // Stop animation when messages appear
  useEffect(() => {
    if (hasMessages && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (!hasMessages && !intervalRef.current) {
      startAnimation();
    }
  }, [hasMessages]);

  // Sync internal value with external value if provided
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // Tools configuration
  const tools = [
    { icon: <Globe className="h-4 w-4" />, label: "Web-Search", description: "Quick web look-up" },
    { icon: <Telescope className="h-4 w-4" />, label: "Deep-Research", description: "Deep web research, on specific input" },
    { icon: <BrainCircuit className="h-4 w-4" />, label: "Reasoning", description: "Think deeply, before answering" },
  ];

  const toggleTool = (index: number) => {
    setActiveTools((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Handle opening the model selector
  const openModelSelector = (multiprompt: boolean) => {
    setIsMultipromptMode(multiprompt);
    setIsModelSelectorOpen(true);
  };

  // Handle the multiprompt button click
  const handleMultipromptClick = () => {
    if (isMultipromptMode) {
      // If already in multiprompt mode, toggle it off and reset to default model
      setIsMultipromptMode(false);
      setSelectedModels([defaultModel]);
      setIsModelSelectorOpen(false);
    } else {
      // Enter multiprompt mode and open the selector
      openModelSelector(true);
    }
  };

  // Update allVisibleAgents to be synced with AgentSelector's data
  useEffect(() => {
    if (isModelSelectorOpen && mentionSearch !== null) {
      // When search term changes, get all visible agents from aiProviders that match the search
      const agents: AIAgent[] = [];

      // Use the same filtering logic that AgentSelector would use
      aiProviders.forEach(provider => {
        const filteredAgents = provider.agents.filter(agent =>
          mentionSearch ? agent.name.toLowerCase().includes(mentionSearch.toLowerCase()) : true
        );

        agents.push(...filteredAgents.map(agent => ({
          id: agent.id,
          name: agent.name,
          description: agent.description
        })));
      });

      setAllVisibleAgents(agents);

      // Reset focused index to first item when search term changes
      setFocusedAgentIndex(agents.length > 0 ? 0 : -1);
    }
  }, [mentionSearch, isModelSelectorOpen]);

  // Find all @ mentions in the input
  const findMentions = (text: string): MentionPosition[] => {
    const mentions: MentionPosition[] = [];
    let index = 0;

    while (index < text.length) {
      const atIndex = text.indexOf("@", index);
      if (atIndex === -1) break;

      // Check if this is a valid mention start (beginning of text or after space)
      const isValidStart = atIndex === 0 || text[atIndex - 1] === " ";
      if (!isValidStart) {
        index = atIndex + 1;
        continue;
      }

      // Find the end of this mention (space or end of text)
      let endIndex = text.indexOf(" ", atIndex + 1);
      if (endIndex === -1) endIndex = text.length;

      mentions.push({
        start: atIndex,
        end: endIndex,
        consumed: false,
      });

      index = endIndex;
    }

    return mentions;
  };

  // Handle text changes to detect @ mentions
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);

    // Call the external onChange handler if provided
    if (onChange) {
      onChange(e);
    }

    // Find all mentions in the text
    const currentMentions = findMentions(newValue);

    // Update our mentions tracking
    mentionsRef.current = currentMentions;

    // If we have no mentions, clear everything
    if (currentMentions.length === 0) {
      setMentionSearch(null);
      if (isModelSelectorOpen && !isMultipromptMode) {
        setIsModelSelectorOpen(false);
      }
      activeMentionRef.current = -1;

      // Notify parent that we're no longer selecting
      if (onMentionSelectionChange) {
        onMentionSelectionChange(false);
      }
      return;
    }

    // Find the active mention (the last one that doesn't have a space after it)
    const lastMention = currentMentions[currentMentions.length - 1];
    const isActiveMention = lastMention.end === newValue.length;

    if (isActiveMention) {
      // This is an active mention, extract the search term
      const searchTerm = newValue.slice(lastMention.start + 1, lastMention.end);
      setMentionSearch(searchTerm);
      activeMentionRef.current = currentMentions.length - 1;

      // Open the selector
      if (!isModelSelectorOpen) {
        setIsModelSelectorOpen(true);
        setIsMultipromptMode(false);
      }

      // Notify parent that we're now selecting
      if (onMentionSelectionChange) {
        onMentionSelectionChange(true);
      }
    } else {
      // No active mentions, close the selector if it was opened by mention
      if (mentionSearch !== null) {
        setMentionSearch(null);
        if (isModelSelectorOpen && !isMultipromptMode) {
          setIsModelSelectorOpen(false);
        }
        activeMentionRef.current = -1;

        // Notify parent that we're no longer selecting
        if (onMentionSelectionChange) {
          onMentionSelectionChange(false);
        }
      }
    }
  };

  // Handle model selection from @ mention
  const handleMentionModelSelect = (agent: { id: string; name: string; description?: string }) => {
    // Convert to AIModel type
    const model: AIModel = {
      id: agent.id,
      name: agent.name,
      description: agent.description,
      icon: getModelIcon(agent.id)
    };

    // Replace the @mention with the selected model name
    if (mentionSearch !== null && activeMentionRef.current >= 0) {
      const activeMention = mentionsRef.current[activeMentionRef.current];

      if (activeMention && textareaRef.current) {
        const beforeMention = internalValue.substring(0, activeMention.start);
        const afterMention = internalValue.substring(activeMention.end);
        const newValue = beforeMention + `@${model.name}` + (afterMention.startsWith(" ") ? "" : " ") + afterMention;

        // Update the internal value
        setInternalValue(newValue);

        // Also update external value if onChange is provided
        if (onChange && textareaRef.current) {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            "value"
          )?.set;

          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(textareaRef.current, newValue);
            const event = new Event('input', { bubbles: true });
            textareaRef.current.dispatchEvent(event);
          }
        }

        // Set the selected model
        setSelectedModels([model]);

        // Close the selector and clear mention search
        setIsModelSelectorOpen(false);
        setMentionSearch(null);
        activeMentionRef.current = -1;

        // Notify parent that we're no longer selecting
        if (onMentionSelectionChange) {
          onMentionSelectionChange(false);
        }

        // Update mentions to mark this one as consumed
        const updatedMentions = findMentions(newValue);
        mentionsRef.current = updatedMentions;

        // Focus back on the textarea and place cursor at the end
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.focus();
            const cursorPos = beforeMention.length + `@${model.name} `.length;
            textareaRef.current.selectionStart = cursorPos;
            textareaRef.current.selectionEnd = cursorPos;
          }
        }, 0);
      }
    }
  };

  const contextValue: ChatInputContextValue = {
    value: internalValue,
    onChange: handleTextChange,
    onSubmit,
    loading,
    onStop,
    variant,
    rows,
    placeholder: hasMessages ? 'Type a message...' : placeholders[currentPlaceholder],
    hasMessages,
    onAISelect,
    onMentionSelectionChange,
  };

  // Render the tool selection component based on mobile/desktop
  const renderToolSelection = () => {
    const activeToolsCount = activeTools.size;

    if (isMobile) {
      return (
        <div className="flex items-center justify-center py-3 px-2">
          <DropdownMenu open={toolDropdownOpen} onOpenChange={setToolDropdownOpen}>
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

    // Desktop view - show all tools in a row
    return (
      <div className="flex flex-wrap items-center gap-2 py-3 px-2">
        {tools.map((tool, index) => (
          <Button
            key={tool.label}
            variant="ghost"
            className={`h-8 px-4 rounded-full flex items-center gap-2 ${activeTools.has(index)
              ? "bg-gray-300 text-gray-800 hover:bg-gray-300"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            onClick={() => toggleTool(index)}
          >
            {tool.icon}
            <span className="text-xs font-medium">{tool.label}</span>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <ChatInputContext.Provider value={contextValue}>
      <div className="relative w-full">
        {/* Agent selector rendered in a portal-like approach to avoid clipping */}
        {isModelSelectorOpen && (
          <div
            className="fixed z-[999] shadow-lg"
            style={{
              top: `${selectorPosition.top}px`,
              left: `${selectorPosition.left}px`,
            }}
          >
            <AgentSelector
              selectedAgents={selectedModels.map(model => ({
                id: model.id,
                name: model.name,
                description: model.description
              }))}
              onSelectAgents={(agents) => {
                // Only use this for direct selection, not for @ mentions
                if (!mentionSearch) {
                  setSelectedModels(agents.map(agent => ({
                    id: agent.id,
                    name: agent.name,
                    description: agent.description,
                    icon: getModelIcon(agent.id)
                  })));
                }
              }}
              isOpen={isModelSelectorOpen}
              onClose={() => {
                setIsModelSelectorOpen(false);
                setMentionSearch(null);
                activeMentionRef.current = -1;

                // Notify parent that we're no longer selecting
                if (onMentionSelectionChange) {
                  onMentionSelectionChange(false);
                }
              }}
              multiSelectMode={isMultipromptMode}
              maxSelections={4}
              searchTerm={mentionSearch || ""}
              onAgentSelect={mentionSearch !== null ? handleMentionModelSelect : undefined}
              keyboardNavigation={mentionSearch !== null}
            />
          </div>
        )}

        <div
          ref={inputContainerRef}
          className={cn(
            'relative',
            variant === 'default' &&
            'flex flex-col items-end w-full p-2 rounded-2xl border border-input bg-transparent focus-within:ring-1 focus-within:ring-slate-300 focus-within:outline-none',
            variant === 'unstyled' && 'flex items-start gap-2 w-full',
            className
          )}
        >
          <GlowingEffect
            blur={0}
            borderWidth={1.7}
            spread={25}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex flex-col items-end w-full z-10">
            <div className="flex w-full items-end">
              {/* AI model selector button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-gray-100 mr-2"
                onClick={handleMultipromptClick}
              >
                {getModelIcon(selectedModels[0].id)}
              </Button>

              {/* Override internal ref for textarea to track it */}
              {Children.map(children, child => {
                if (isValidElement(child)) {
                  // Check based on displayName or other properties instead of direct type comparison
                  const childType = (child.type as any);
                  const isTextarea = childType &&
                    (childType.displayName === 'ChatInputTextArea' ||
                      childType === ChatInputTextArea);

                  if (isTextarea) {
                    return cloneElement(child as React.ReactElement<any>, {
                      ref: (node: HTMLTextAreaElement) => {
                        textareaRef.current = node;
                        // Handle existing ref if any
                        const originalRef = (child as any).ref;
                        if (typeof originalRef === 'function') {
                          originalRef(node);
                        } else if (originalRef && 'current' in originalRef) {
                          originalRef.current = node;
                        }
                      },
                      placeholder: mentionSearch !== null ? "Type model name..." : contextValue.placeholder,
                      onKeyDown: handleKeyDown
                    });
                  }
                }
                return child;
              })}
            </div>

            {/* Bottom row with tools and controls */}
            <div className="flex w-full items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                {/* Multiprompt indicator */}
                {isMultipromptMode && selectedModels.length > 1 && (
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                      {selectedModels.slice(0, 2).map((model, index) => (
                        <div
                          key={model.id}
                          className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center border border-white"
                        >
                          {model.icon || getModelIcon(model.id)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{selectedModels.length} models</span>
                  </div>
                )}

                {/* Multiprompt button */}
                <Button
                  type="button"
                  variant="ghost"
                  className={cn(
                    "h-8 rounded-full px-3 flex items-center gap-1.5 text-xs font-normal",
                    isMultipromptMode ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-gray-100 hover:bg-gray-100",
                  )}
                  onClick={handleMultipromptClick}
                >
                  <Split className="h-4 w-4" />
                  <span>Multiprompt</span>
                </Button>
                {renderToolSelection()}
              </div>
            </div>
          </div>
        </div>

        {/* Tools selection */}

      </div>
    </ChatInputContext.Provider>
  );
}

ChatInput.displayName = 'ChatInput';

interface ChatInputTextAreaProps extends React.ComponentProps<typeof Textarea> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit?: () => void;
  variant?: 'default' | 'unstyled';
}

function ChatInputTextArea({
  onSubmit: onSubmitProp,
  value: valueProp,
  onChange: onChangeProp,
  className,
  variant: variantProp,
  ...props
}: ChatInputTextAreaProps) {
  const context = useContext(ChatInputContext);
  const [internalValue, setInternalValue] = useState('');
  const value = valueProp ?? context.value ?? internalValue;
  const onChange = onChangeProp ?? context.onChange;
  const onSubmit = onSubmitProp ?? context.onSubmit;
  const rows = context.rows ?? 1;
  const placeholder = context.placeholder || '';
  const hasMessages = context.hasMessages || false;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Convert parent variant to textarea variant unless explicitly overridden
  const variant = variantProp ?? (context.variant === 'default' ? 'unstyled' : 'default');

  const resizeRef = useTextareaResize(value, rows);

  // Set the ref to both the resize ref and our textareaRef
  const setRefs = useCallback(
    (element: HTMLTextAreaElement) => {
      // Call the original ref from useTextareaResize
      if (resizeRef) {
        if (typeof resizeRef === 'function') {
          (resizeRef as (node: HTMLTextAreaElement) => void)(element);
        } else if ('current' in resizeRef) {
          resizeRef.current = element;
        }
      }
      textareaRef.current = element;
    },
    [resizeRef]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!onSubmit) {
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      if (typeof value !== 'string' || value.trim().length === 0) {
        return;
      }
      e.preventDefault();
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  return (
    <div className="relative w-full">
      <Textarea
        ref={setRefs}
        {...props}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          'max-h-[400px] min-h-0 resize-none overflow-x-hidden',
          variant === 'unstyled' &&
          'border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none',
          className
        )}
        rows={rows}
        placeholder={undefined} // Remove default placeholder
      />

      {/* Add animated placeholder, but only animate if there are no messages */}
      {!value && (
        <div className="absolute pointer-events-none top-0 left-0 right-0 bottom-0 flex items-center px-3 py-2">
          <AnimatePresence mode="wait">
            {!hasMessages ? (
              <motion.span
                key={placeholder}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 0.5, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground truncate"
              >
                {placeholder}
              </motion.span>
            ) : (
              <span className="text-muted-foreground truncate">{placeholder}</span>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

ChatInputTextArea.displayName = 'ChatInputTextArea';

interface ChatInputSubmitProps extends React.ComponentProps<typeof Button> {
  onSubmit?: () => void;
  loading?: boolean;
  onStop?: () => void;
}

function ChatInputSubmit({
  onSubmit: onSubmitProp,
  loading: loadingProp,
  onStop: onStopProp,
  className,
  ...props
}: ChatInputSubmitProps) {
  const context = useContext(ChatInputContext);
  const loading = loadingProp ?? context.loading;
  const onStop = onStopProp ?? context.onStop;
  const onSubmit = onSubmitProp ?? context.onSubmit;

  if (loading && onStop) {
    return (
      <Button
        onClick={onStop}
        className={cn(
          'shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer',
          className
        )}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Stop"
        >
          <title>Stop</title>
          <rect x="6" y="6" width="12" height="12" />
        </svg>
      </Button>
    );
  }

  const isDisabled = typeof context.value !== 'string' || context.value.trim().length === 0;
  const isAudio = context.audio;

  return (
    <div className="flex gap-1">
      <Button
        className={cn(
          'shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer',
          className
        )}
        disabled={isDisabled}
        onClick={(event) => {
          event.preventDefault();
          if (!isDisabled) {
            onSubmit?.();
          }
        }}
        {...props}
      >
        <ArrowUpIcon />
      </Button>
      <Button
        className={cn(
          'shrink-0 rounded-full p-1.5 h-fit border bg-red-500 hover:bg-red-600/95! dark:border-zinc-600 hover:cursor-pointer',
          className
        )}
        disabled={isAudio}
        onClick={(event) => {
          event.preventDefault();
          if (!isDisabled) {
            onSubmit?.();
          }
        }}
        {...props}
      >
        <AudioLines />
      </Button>
    </div>
  );
}

ChatInputSubmit.displayName = 'ChatInputSubmit';

export { ChatInput, ChatInputSubmit, ChatInputTextArea };
