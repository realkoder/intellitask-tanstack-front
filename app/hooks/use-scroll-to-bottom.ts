import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';

export function useScrollToBottom<T extends HTMLElement>(): [
  RefObject<T | null>,
  boolean,
  () => void,
] {
  const containerRef = useRef<T>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true); // Start as true for initial scroll
  const hasUserScrolled = useRef(false); // Track if user has scrolled manually
  const isUserScrolling = useRef(false);
  const isGrowing = useRef(false);
  const hasInitiallyScrolled = useRef(false);

  const getViewport = useCallback((element: HTMLElement | null) => {
    return element?.closest('[data-radix-scroll-area-viewport]') as HTMLElement;
  }, []);

  const isAtBottom = useCallback((viewport: HTMLElement) => {
    const { scrollTop, scrollHeight, clientHeight } = viewport;
    return Math.abs(scrollHeight - scrollTop - clientHeight) < 10;
  }, []);

  const scrollToBottomImmediate = useCallback((viewport: HTMLElement) => {
    if (!viewport) return;
    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: 'instant',
    });
  }, []);

  const updateScrollState = useCallback(
    (viewport: HTMLElement) => {
      const { scrollHeight, clientHeight } = viewport;
      const hasScrollableContent = scrollHeight > clientHeight;
      const atBottom = isAtBottom(viewport);

      setShowScrollButton(hasScrollableContent && !atBottom);

      if (!isUserScrolling.current) {
        setShouldAutoScroll(atBottom);
      }
    },
    [isAtBottom]
  );

  // Initial scroll to bottom on mount - with a single retry
  useEffect(() => {
    const container = containerRef.current;
    const viewport = getViewport(container);

    if (!container || !viewport) return;

    // First attempt immediately
    scrollToBottomImmediate(viewport);

    // One additional attempt after a short delay to catch any late-loading content
    const timeoutId = setTimeout(() => {
      if (!hasUserScrolled.current) {
        scrollToBottomImmediate(viewport);
        hasInitiallyScrolled.current = true;
      }
    }, 200);

    // Add a resize observer for initial layout changes
    const resizeObserver = new ResizeObserver(() => {
      if (!hasInitiallyScrolled.current && !hasUserScrolled.current) {
        scrollToBottomImmediate(viewport);
      }
    });

    resizeObserver.observe(container);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, [getViewport, scrollToBottomImmediate]);

  useEffect(() => {
    const container = containerRef.current;
    const viewport = getViewport(container);

    if (!container || !viewport) {
      return;
    }

    updateScrollState(viewport);

    const handleScroll = () => {
      if (!hasInitiallyScrolled.current) {
        hasInitiallyScrolled.current = true;
      }

      // If this is user-initiated scroll
      if (!isGrowing.current) {
        hasUserScrolled.current = true;
      }

      if (!isUserScrolling.current) {
        updateScrollState(viewport);
      }
    };

    const handleTouchStart = () => {
      isUserScrolling.current = true;
      hasUserScrolled.current = true;
    };

    const handleTouchEnd = () => {
      isUserScrolling.current = false;
      updateScrollState(viewport);
    };

    // Also capture mouse wheel events to detect user scrolling
    const handleWheel = () => {
      isUserScrolling.current = true;
      hasUserScrolled.current = true;

      // Reset after a short delay
      setTimeout(() => {
        isUserScrolling.current = false;
        updateScrollState(viewport);
      }, 200);
    };

    let growthTimeout: number;
    const observer = new MutationObserver(() => {
      isGrowing.current = true;
      window.clearTimeout(growthTimeout);

      // Only auto-scroll if the user hasn't scrolled manually OR they've explicitly requested it
      if (
        (shouldAutoScroll && !hasUserScrolled.current) ||
        (shouldAutoScroll && hasInitiallyScrolled.current && !isUserScrolling.current)
      ) {
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: 'instant',
        });
      }
      updateScrollState(viewport);

      growthTimeout = window.setTimeout(() => {
        isGrowing.current = false;
      }, 100);
    });

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    viewport.addEventListener('touchstart', handleTouchStart);
    viewport.addEventListener('touchend', handleTouchEnd);
    viewport.addEventListener('wheel', handleWheel, { passive: true });

    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      window.clearTimeout(growthTimeout);
      observer.disconnect();
      viewport.removeEventListener('scroll', handleScroll);
      viewport.removeEventListener('touchstart', handleTouchStart);
      viewport.removeEventListener('touchend', handleTouchEnd);
      viewport.removeEventListener('wheel', handleWheel);
    };
  }, [getViewport, updateScrollState, shouldAutoScroll]);

  const scrollToBottom = () => {
    const viewport = getViewport(containerRef.current);
    if (!viewport) {
      return;
    }

    setShouldAutoScroll(true);
    hasUserScrolled.current = false; // Reset this flag when user explicitly scrolls
    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: isGrowing.current ? 'instant' : 'smooth',
    });
  };

  return [containerRef, showScrollButton, scrollToBottom];
}
