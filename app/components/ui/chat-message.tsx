import { type VariantProps, cva } from "class-variance-authority";
import { SparklesIcon, UserIcon } from "lucide-react";
import React, { type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { MarkdownContent } from "./markdown-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { LinkPreview } from "./link-preview";

const chatMessageVariants = cva("flex gap-4 w-full", {
	variants: {
		variant: {
			default: "",
			bubble: "",
			full: "p-5",
		},
		type: {
			incoming: "justify-start mr-auto",
			outgoing: "justify-end ml-auto",
		},
	},
	compoundVariants: [
		{
			variant: "full",
			type: "outgoing",
			className: "bg-muted",
		},
		{
			variant: "full",
			type: "incoming",
			className: "bg-background",
		},
	],
	defaultVariants: {
		variant: "default",
		type: "incoming",
	},
});

interface MessageContextValue extends VariantProps<typeof chatMessageVariants> {
	id: string;
}

const ChatMessageContext = React.createContext<MessageContextValue | null>(
	null,
);

const useChatMessage = () => {
	const context = React.useContext(ChatMessageContext);
	return context;
};

// Root component
interface ChatMessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof chatMessageVariants> {
	children?: React.ReactNode;
	id: string;
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
	(
		{
			className,
			variant = "default",
			type = "incoming",
			id,
			children,
			...props
		},
		ref,
	) => {
		return (
			<ChatMessageContext.Provider value={{ variant, type, id }}>
				<div
					ref={ref}
					className={cn(chatMessageVariants({ variant, type, className }))}
					{...props}
				>
					{children}
				</div>
			</ChatMessageContext.Provider>
		);
	},
);
ChatMessage.displayName = "ChatMessage";

// Avatar component

const chatMessageAvatarVariants = cva(
	"w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden",
	{
		variants: {
			type: {
				incoming: "ring-border",
				outgoing: "ring-muted-foreground/30",
			},
		},
		defaultVariants: {
			type: "incoming",
		},
	},
);

interface ChatMessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	imageSrc?: string;
	icon?: ReactNode;
}

const ChatMessageAvatar = React.forwardRef<
	HTMLDivElement,
	ChatMessageAvatarProps
>(({ className, icon: iconProps, imageSrc, ...props }, ref) => {
	const context = useChatMessage();
	const type = context?.type ?? "incoming";
	const icon =
		iconProps ?? (type === "incoming" ? <SparklesIcon /> : <UserIcon />);
	return (
		<div
			ref={ref}
			className={cn(chatMessageAvatarVariants({ type, className }))}
			{...props}
		>
			{imageSrc ? (
				<img
					src={imageSrc}
					alt="Avatar"
					className="h-full w-full object-cover"
				/>
			) : (
				<div className="translate-y-px [&_svg]:size-4 [&_svg]:shrink-0">
					{icon}
				</div>
			)}
		</div>
	);
});
ChatMessageAvatar.displayName = "ChatMessageAvatar";

// Content component

const chatMessageContentVariants = cva("flex flex-col gap-2", {
	variants: {
		variant: {
			default: "",
			bubble: "rounded-xl px-3 py-2",
			full: "",
		},
		type: {
			incoming: "",
			outgoing: "",
		},
	},
	compoundVariants: [
		{
			variant: "bubble",
			type: "incoming",
			className: "bg-secondary text-secondary-foreground",
		},
		{
			variant: "bubble",
			type: "outgoing",
			className: "bg-primary text-primary-foreground",
		},
	],
	defaultVariants: {
		variant: "default",
		type: "incoming",
	},
});

interface ChatMessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
	id?: string;
	content: string;
	showCursor?: boolean;
	reasoning?: string;
	isReasoning?: boolean;
	sources?: Array<{ id: string; url: string; title?: string }>;
}

// Add this new component for the animated text
const ThinkingText = () => (
	<div className="relative overflow-hidden">
		<span className="text-sm text-muted-foreground">View thinking process</span>
		<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
	</div>
);

const ChatMessageContent = React.forwardRef<
	HTMLDivElement,
	ChatMessageContentProps
>(({ className, content, id: idProp, showCursor = false, reasoning = "", isReasoning = false, sources = [], children, ...props }, ref) => {
	const context = useChatMessage();
	const [isOpen, setIsOpen] = React.useState(false);

	const variant = context?.variant ?? "default";
	const type = context?.type ?? "incoming";
	const id = idProp ?? context?.id ?? "";

	return (
		<div
			ref={ref}
			className={cn(chatMessageContentVariants({ variant, type, className }))}
			{...props}
		>
			{reasoning && reasoning.length > 0 && (
				<div className="w-full mt-2 border rounded-md overflow-hidden">
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="w-full flex items-center justify-between px-3 py-4 text-sm text-muted-foreground bg-[#F8FAFC] hover:cursor-pointer transition-colors"
					>
						<span>{content === '' ? <ThinkingText /> : "View thinking process"}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
					{isOpen && (
						<div className="bg-[#F8FAFC] px-3 py-4 text-sm whitespace-pre-wrap">
							<MarkdownContent id={`${id}-reasoning`} content={reasoning} />
						</div>
					)}
				</div>
			)}
			{content.length > 0 && (
				<>
					<MarkdownContent id={id} content={content} />
					{showCursor && (
						<span className="ml-1 inline-block h-4 w-2 animate-pulse bg-current" />
					)}
				</>
			)}

			{sources && sources.length > 0 && (
				<div className="mt-3 border-t pt-2 text-sm">
					<p className="font-medium text-muted-foreground mb-2">Sources:</p>
					<div className="space-y-2">
						{sources.map((source, index) => (
							<div key={source.id} className="flex items-start gap-2">
								<span className="text-xs text-muted-foreground mt-1">[{index + 1}]</span>
								<LinkPreview
									url={source.url}
									className="text-primary hover:underline flex-1"
								>
									{source.title || source.url}
								</LinkPreview>
							</div>
						))}
					</div>
				</div>
			)}

			{children}
		</div>
	);
});
ChatMessageContent.displayName = "ChatMessageContent";

export { ChatMessage, ChatMessageAvatar, ChatMessageContent };
