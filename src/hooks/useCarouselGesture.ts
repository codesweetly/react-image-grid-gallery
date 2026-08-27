import { useCallback, useEffect, useRef } from "react";

interface DragResult {
  action: "next" | "prev" | "cancel";
}

interface UseCarouselGestureProps {
  trackRef: React.RefObject<HTMLElement | null>;
  onDragEnd: (result: DragResult) => void;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
}

export function useCarouselGesture({
  trackRef,
  onDragEnd,
  canNavigatePrev,
  canNavigateNext,
}: UseCarouselGestureProps) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const startTime = useRef(0);
  const isHorizontalIntent = useRef<boolean | null>(null);
  const rafId = useRef<number | null>(null);
  const trackWidth = useRef(0);

  const resetRefs = useCallback(() => {
    isDragging.current = false;
    isHorizontalIntent.current = null;
    currentX.current = 0;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const updateTransform = useCallback(
    (x: number) => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
      }
    },
    [trackRef],
  );

  const trackGesture = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!e.isPrimary) return;

      if (trackRef.current) {
        trackRef.current.style.transition = "";
        trackWidth.current = trackRef.current.getBoundingClientRect().width;
        if (typeof (e.target as HTMLElement).setPointerCapture === "function") {
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        }
      }

      isDragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
      currentX.current = 0;
      startTime.current = performance.now();
      isHorizontalIntent.current = null;

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    },
    [trackRef],
  );

  const trackDragOffset = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!isDragging.current || !e.isPrimary) return;

      const deltaX = e.clientX - startX.current;
      const deltaY = e.clientY - startY.current;

      if (isHorizontalIntent.current === null) {
        if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
          isHorizontalIntent.current = Math.abs(deltaX) > Math.abs(deltaY);
        }
      }

      if (isHorizontalIntent.current === false) {
        return;
      }

      if (isHorizontalIntent.current) {
        e.preventDefault();

        let newX = deltaX;

        if (newX > 0 && !canNavigatePrev) {
          newX = newX * 0.25;
        } else if (newX < 0 && !canNavigateNext) {
          newX = newX * 0.25;
        }

        currentX.current = newX;

        if (rafId.current === null) {
          rafId.current = requestAnimationFrame(() => {
            updateTransform(currentX.current);
            rafId.current = null;
          });
        }
      }
    },
    [canNavigateNext, canNavigatePrev, updateTransform],
  );

  const evaluateAndCommitSwipe = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!isDragging.current || !e.isPrimary) return;

      const duration = performance.now() - startTime.current;
      const deltaX = currentX.current;
      const absDeltaX = Math.abs(deltaX);
      const velocity = absDeltaX / duration;

      const threshold = trackWidth.current * 0.2;
      const isFastFlick = velocity > 0.5 && duration < 250;
      const passedThreshold = absDeltaX > threshold;

      const wasHorizontal = isHorizontalIntent.current;

      resetRefs();

      if (trackRef.current) {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      }

      if (wasHorizontal) {
        let action: "next" | "prev" | "cancel" = "cancel";
        if ((passedThreshold || isFastFlick) && deltaX > 0 && canNavigatePrev) {
          action = "prev";
        } else if (
          (passedThreshold || isFastFlick) &&
          deltaX < 0 &&
          canNavigateNext
        ) {
          action = "next";
        }
        onDragEnd({ action });
      }
    },
    [canNavigateNext, canNavigatePrev, onDragEnd, resetRefs, trackRef],
  );

  const cancelGesture = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!isDragging.current || !e.isPrimary) return;

      resetRefs();
      if (trackRef.current) {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      }
      onDragEnd({ action: "cancel" });
    },
    [onDragEnd, resetRefs, trackRef],
  );

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return {
    onPointerDown: trackGesture,
    onPointerMove: trackDragOffset,
    onPointerUp: evaluateAndCommitSwipe,
    onPointerCancel: cancelGesture,
    onLostPointerCapture: cancelGesture,
  };
}
