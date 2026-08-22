import {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Caption } from "./Caption";
import { useCarouselGesture } from "../hooks/useCarouselGesture";
import { ImageDataType } from "../ImageGallery.types";

export interface CarouselTrackRef {
  navigate: (direction: -1 | 1) => void;
  goToSlide: (newSlideNumber: number) => void;
}

interface CarouselTrackProps {
  imagesData: Array<ImageDataType>;
  slideNumber: number; // 1-indexed
  onSlideChange: (newSlideNumber: number) => void;
  showThumbnails: boolean;
  lazy: boolean;
  ref: React.Ref<CarouselTrackRef>;
}

export function CarouselTrack({
  imagesData,
  slideNumber,
  onSlideChange,
  showThumbnails,
  lazy,
  ref,
}: CarouselTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const targetSlide = useRef(slideNumber);
  const [currentIndex, setCurrentIndex] = useState(slideNumber - 1);

  const totalImages = imagesData.length;

  // Determine the indices for prev and next slides, looping
  const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
  const nextIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;

  function executeNavigation(direction: -1 | 1 | 0, fromX: number = 0) {
    if (!trackRef.current) return;
    isAnimating.current = true;

    const track = trackRef.current;
    const trackWidth = track.getBoundingClientRect().width;
    const targetX =
      direction === 1 ? -trackWidth : direction === -1 ? trackWidth : 0;

    // If we are cancelling a drag, targetX is 0.
    // Ensure we start from currentX if provided (for smooth cancel)
    if (
      fromX !== 0 &&
      track.style.transform !== `translate3d(${fromX}px, 0px, 0px)`
    ) {
      track.style.transition = "";
      track.style.transform = `translate3d(${fromX}px, 0, 0)`;
      // Force layout
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      track.offsetHeight;
    }

    function finishTransition(direction: -1 | 1 | 0) {
      if (direction === 0) {
        // Just a cancel, reset animation state
        isAnimating.current = false;
        return;
      }

      let newSlideNumber = targetSlide.current;
      if (direction === 1) {
        newSlideNumber += 1;
      } else if (direction === -1) {
        newSlideNumber -= 1;
      }

      if (newSlideNumber > totalImages) newSlideNumber = 1;
      if (newSlideNumber < 1) newSlideNumber = totalImages;

      targetSlide.current = newSlideNumber;
      setCurrentIndex(newSlideNumber - 1);
      // Updating the state will trigger the useLayoutEffect which resets the track
      onSlideChange(newSlideNumber);
    }

    // Check if reduced motion is enabled
    const isReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) {
      // No animation, just update logical state immediately
      finishTransition(direction);
      return;
    }

    // Enable transition
    track.style.transition =
      "transform var(--cs-lightbox-transition-duration, 300ms) var(--cs-lightbox-transition-easing, cubic-bezier(0.22, 1, 0.36, 1))";
    track.style.transform = `translate3d(${targetX}px, 0, 0)`;

    let transitionFired = false;

    function onTransitionEnd(e: TransitionEvent) {
      if (e.target === track && e.propertyName === "transform") {
        transitionFired = true;
        track.removeEventListener("transitionend", onTransitionEnd);
        clearTimeout(fallbackTimeout);
        finishTransition(direction);
      }
    }

    track.addEventListener("transitionend", onTransitionEnd);

    // Fallback for interrupted transitions
    const fallbackTimeout = setTimeout(() => {
      if (!transitionFired) {
        track.removeEventListener("transitionend", onTransitionEnd);
        finishTransition(direction);
      }
    }, 400);
  }

  function navigate(direction: -1 | 1) {
    if (isAnimating.current || !trackRef.current || totalImages <= 1) return;
    executeNavigation(direction);
  }

  function goToSlide(newSlideNumber: number) {
    if (newSlideNumber === slideNumber || totalImages <= 1) return;

    // Direct navigation: completely reset visual state and instantly jump
    isAnimating.current = false;
    targetSlide.current = newSlideNumber;
    setCurrentIndex(newSlideNumber - 1);

    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = "translate3d(0px, 0, 0)";
    }

    onSlideChange(newSlideNumber);
  }

  function executeSwipeNavigation(result: {
    action: "next" | "prev" | "cancel";
  }) {
    if (!trackRef.current || totalImages <= 1) return;

    // Get current transform X from the track style to know where to animate from
    const style = trackRef.current.style.transform;
    const match = style.match(/translate3d\(([-\d.]+)px/);
    const currentX = match ? parseFloat(match[1]) : 0;

    if (result.action === "next") {
      executeNavigation(1, currentX);
    } else if (result.action === "prev") {
      executeNavigation(-1, currentX);
    } else {
      executeNavigation(0, currentX); // cancel / snap back
    }
  }

  const {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onLostPointerCapture,
  } = useCarouselGesture({
    trackRef,
    onDragEnd: executeSwipeNavigation,
    canNavigatePrev: totalImages > 1, // Currently looping is always enabled if > 1 slide
    canNavigateNext: totalImages > 1,
  });

  function renderSlide(index: number, position: "prev" | "curr" | "next") {
    const imageData = imagesData[index];
    if (!imageData) return null;

    const imageLoading =
      position === "curr" ? (lazy ? "lazy" : "eager") : "eager";

    // Stable keys based on imageData.id
    return (
      <div
        key={imageData.id}
        className={`cs-rigg-carousel-slide`}
        data-position={position}
      >
        <figure>
          <img
            loading={imageLoading}
            src={imageData.src}
            srcSet={imageData.srcSet}
            sizes={imageData.mediaSizes}
            alt={imageData.alt}
            className="cs-rigg-modal-image"
            style={{ maxHeight: showThumbnails ? "80vh" : "100vh" }}
            draggable={false}
          />
          <Caption imageData={imageData} />
        </figure>
      </div>
    );
  }

  useImperativeHandle(ref, () => ({
    navigate,
    goToSlide,
  }));

  // Keep targetSlide in sync with external changes (e.g. thumbnails)
  useEffect(() => {
    targetSlide.current = slideNumber;
    setCurrentIndex(slideNumber - 1);
  }, [slideNumber]);

  // Reset track position instantly after a logical slide change
  useLayoutEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = "translate3d(0px, 0, 0)";
      // Force layout recalculation
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      trackRef.current.offsetHeight;
      isAnimating.current = false;
    }
  }, [slideNumber]);

  return (
    <div
      className="cs-rigg-carousel-track-container"
      onLostPointerCapture={onLostPointerCapture}
      onPointerCancel={onPointerCancel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="cs-rigg-carousel-track" ref={trackRef}>
        {totalImages > 1 && renderSlide(prevIndex, "prev")}
        {totalImages > 0 && renderSlide(currentIndex, "curr")}
        {totalImages > 1 && renderSlide(nextIndex, "next")}
      </div>
    </div>
  );
}
