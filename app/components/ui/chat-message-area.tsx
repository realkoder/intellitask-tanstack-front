import { Button } from "./button";
import { ScrollArea } from "./scroll-area";
import { cn } from "../../lib/utils"
import { useScrollToBottom } from "../../hooks/use-scroll-to-bottom";
import { ChevronDown } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

type ScrollButtonAlignment = "left" | "center" | "right";

interface ScrollButtonProps {
  onClick: () => void;
  alignment?: ScrollButtonAlignment;
  className?: string;
}

export function ScrollButton({
  onClick,
  alignment = "right",
  className,
}: ScrollButtonProps) {
  const alignmentClasses = {
    left: "left-4",
    center: "left-1/2 -translate-x-1/2",
    right: "right-4",
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "absolute bottom-4 rounded-full shadow-lg hover:bg-secondary",
        alignmentClasses[alignment],
        className,
      )}
      onClick={onClick}
    >
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
}

interface ChatMessageAreaProps {
  children: ReactNode;
  className?: string;
  scrollButtonAlignment?: ScrollButtonAlignment;
}


export const ChatMessageArea = forwardRef<HTMLDivElement, ChatMessageAreaProps>(
  ({ children, className, scrollButtonAlignment = "right" }, ref) => {
    const [containerRef, showScrollButton, scrollToBottom] =
      useScrollToBottom<HTMLDivElement>();

    return (
      <ScrollArea className="flex-1 relative" ref={ref}>

        <div ref={containerRef}>
          <div className={cn(className, "min-h-0 z-10")}>{children}</div>
        </div>
        {showScrollButton && (
          <ScrollButton
            onClick={scrollToBottom}
            alignment={scrollButtonAlignment}
            className="absolute bottom-4 rounded-full shadow-lg hover:bg-secondary"
          />
        )}

      </ScrollArea>
    );
  }
);

ChatMessageArea.displayName = "ChatMessageArea";
