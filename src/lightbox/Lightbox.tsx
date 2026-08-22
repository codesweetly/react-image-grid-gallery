import { useRef, useEffect, useState } from "react";
import { CarouselTrack, CarouselTrackRef } from "./CarouselTrack";
import { Navigation } from "./Navigation";
import { ThumbnailStrip } from "./ThumbnailStrip";
import { Toolbar } from "./Toolbar";
import { ImageDataType } from "../ImageGallery.types";

interface LightboxProps {
  imagesData: Array<ImageDataType>;
  initialSlideNumber: number;
  isOpen: boolean;
  lazy: boolean;
  onClose: () => void;
  setShowThumbnails: (show: boolean) => void;
  showThumbnails: boolean;
  thumbnailBorder: string;
}

export function Lightbox({
  imagesData,
  initialSlideNumber,
  isOpen,
  lazy,
  onClose,
  setShowThumbnails,
  showThumbnails,
  thumbnailBorder,
}: LightboxProps) {
  const [fullscreen, setFullscreen] = useState(false);
  const [showModalControls, setShowModalControls] = useState(false);
  const [slideNumber, setSlideNumber] = useState(initialSlideNumber);

  const carouselRef = useRef<CarouselTrackRef>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lightboxRef = useRef<HTMLElement | null>(null);

  function switchFullScreen(on: boolean) {
    if (on) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(
          `Error while attempting to switch into fullscreen mode: ${error.message}`,
        );
      });
    } else {
      document.exitFullscreen().catch((error) => console.error(error));
    }
  }

  function handleKeyboardShortcut(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "ArrowLeft") {
      carouselRef.current?.navigate(-1);
    } else if (e.key === "ArrowRight") {
      carouselRef.current?.navigate(1);
    } else if (e.key === "f") {
      switchFullScreen(!fullscreen);
    } else if (e.key === "Escape") {
      e.preventDefault(); // Prevent default dialog closing so we can run our cleanup
      exitFullScreenAndDialog();
    }
  }

  function exitFullScreenAndDialog() {
    if (fullscreen) switchFullScreen(false);
    dialogRef.current?.close();
    onClose();
  }

  function goToClickedThumbnail(index: number) {
    carouselRef.current?.goToSlide(index + 1);
  }

  // Sync initial slide
  useEffect(() => {
    setSlideNumber(initialSlideNumber);
  }, [initialSlideNumber]);

  // Handle open/close and scroll lock
  useEffect(() => {
    if (!isOpen) {
      if (dialogRef.current?.open) dialogRef.current.close();
      return;
    }

    if (dialogRef.current && !dialogRef.current.open)
      dialogRef.current.showModal();

    const html = document.documentElement;
    const originalHtmlOverflow = html.style.overflow;

    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen]);

  // Keep track of fullscreen state
  useEffect(() => {
    if (!isOpen) return;

    function syncFullscreenState() {
      setFullscreen(Boolean(document.fullscreenElement));
      lightboxRef.current?.focus();
    }

    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () =>
      document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="cs-rigg-dialog"
      onCancel={(e) => {
        e.preventDefault();
        exitFullScreenAndDialog();
      }}
    >
      <article
        autoFocus
        className="cs-rigg-modal-container"
        data-backdrop="true"
        onKeyDown={handleKeyboardShortcut}
        onMouseEnter={() => setShowModalControls(true)}
        onMouseLeave={() => setShowModalControls(false)}
        // We use pointer down to close when clicking the backdrop
        onPointerDown={(e) => {
          if (
            (e.target as HTMLElement).getAttribute("data-backdrop") === "true"
          ) {
            exitFullScreenAndDialog();
          }
        }}
        ref={lightboxRef}
        tabIndex={-1}
      >
        <Toolbar
          showControls={showModalControls}
          slideNumber={slideNumber}
          totalImages={imagesData.length}
          onToggleThumbnails={() => setShowThumbnails(!showThumbnails)}
          fullscreen={fullscreen}
          onToggleFullscreen={switchFullScreen}
          onClose={exitFullScreenAndDialog}
        />
        <section
          className="cs-rigg-modal-slide-show-section"
          data-backdrop="true"
        >
          <CarouselTrack
            ref={carouselRef}
            imagesData={imagesData}
            slideNumber={slideNumber}
            onSlideChange={setSlideNumber}
            showThumbnails={showThumbnails}
            lazy={lazy}
          />
          <Navigation
            onNavigate={(dir) => carouselRef.current?.navigate(dir)}
            showControls={showModalControls}
          />
        </section>
        <ThumbnailStrip
          imagesData={imagesData}
          slideNumber={slideNumber}
          showThumbnails={showThumbnails}
          onThumbnailClick={goToClickedThumbnail}
          thumbnailBorder={thumbnailBorder}
          lazy={lazy}
        />
      </article>
    </dialog>
  );
}
