import { useState, useRef, useEffect } from "react"
import { Smile, MessageSquare, Edit } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { types } from "~/lib/client"

interface MessageActionsProps {
  onReact?: (emoji: string) => void
  onReply?: () => void
  onEdit?: () => void
  className?: string
  messageData: types.ChunkDataResponse;
}

export default function MessageActions({
  onReact,
  onReply,
  onEdit,
  className,
  messageData
}: MessageActionsProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const emojiPickerRef = useRef<HTMLDivElement>(null)
  const emojiButtonRef = useRef<HTMLButtonElement>(null)

  // Common emojis for quick reactions
  const quickEmojis = ["👍", "❤️", "😂", "🎉", "🙌", "👀"]

  const handleReact = (emoji: string) => {
    if (onReact) onReact(emoji)
    setShowEmojiPicker(false)
  }

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative w-[7.5rem] ${className}`}>
      {/* Pill-shaped actions toolbar */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center px-1 relative">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              ref={emojiButtonRef}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              aria-label="Add reaction"
            >
              <Smile className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>
            Add reaction
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
              onClick={onReply}
              aria-label="Reply"
            >
              <MessageSquare className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>
            Reply
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
              onClick={onEdit}
              aria-label="Edit"
            >
              <Edit className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>
            Edit
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Emoji picker */}
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-2 z-10"
        >
          <div className="flex gap-1">
            {quickEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleReact(emoji)}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-lg"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

