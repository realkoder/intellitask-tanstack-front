import type React from 'react';
import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  Fragment,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import { Button } from './button';
import { GlowingEffect } from './glowing-effect';
import { Textarea } from './textarea';

// Hooks and utils
import { cn } from '../../lib/utils';
import { useTextareaResize } from '../../hooks/use-textarea-resize';

// Icons
import { ArrowUpIcon } from 'lucide-react';
import { AudioLines } from 'lucide-react';

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
  hasMessages?: boolean; // Add this property to track message state
}

const ChatInputContext = createContext<ChatInputContextValue>({});

interface ChatInputProps extends Omit<ChatInputContextValue, 'variant'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'unstyled';
  rows?: number;
  hasMessages?: boolean; // Add this prop to the ChatInput component
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
  hasMessages = false, // Default to false
}: ChatInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
  }, [hasMessages]); // Add hasMessages as dependency

  // Stop animation when messages appear
  useEffect(() => {
    if (hasMessages && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (!hasMessages && !intervalRef.current) {
      startAnimation();
    }
  }, [hasMessages]);

  const contextValue: ChatInputContextValue = {
    value,
    onChange,
    onSubmit,
    loading,
    onStop,
    variant,
    rows,
    placeholder: hasMessages ? 'Type a message...' : placeholders[currentPlaceholder],
    hasMessages, // Pass this to the context
  };

  return (
    <ChatInputContext.Provider value={contextValue}>
      <div
        className={cn(
          'relative', // Add relative positioning
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
        <div className="relative flex flex-col items-end w-full z-10">{children}</div>
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

  // Animation states and refs
  const [animating, setAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const newDataRef = useRef<any[]>([]);

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
    if (!onSubmit || animating) {
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      if (typeof value !== 'string' || value.trim().length === 0) {
        return;
      }
      e.preventDefault();
      vanishAndSubmit();
    }
  };

  const draw = useCallback(() => {
    if (!textareaRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(textareaRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue('font-size'));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = '#FFF';
    ctx.fillText(value as string, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    if (animating) {
      draw();
    }
  }, [animating, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          if (onChange) {
            const event = {
              target: { value: '' },
            } as React.ChangeEvent<HTMLTextAreaElement>;
            onChange(event);
          } else {
            setInternalValue('');
          }
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    if (value && textareaRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);

      // Call onSubmit after a small delay to let animation start
      if (onSubmit) {
        setTimeout(() => onSubmit(), 50);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (animating) return;

    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  return (
    <div className="relative w-full">
      <canvas
        className={cn(
          'absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 origin-top-left filter invert dark:invert-0',
          !animating ? 'opacity-0' : 'opacity-100'
        )}
        ref={canvasRef}
      />
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
          animating && 'text-transparent dark:text-transparent',
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
