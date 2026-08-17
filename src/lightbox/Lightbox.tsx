import { useRef, useEffect, useState } from "react";
import { ImageDataType } from "../ImageGallery.types";
import { Toolbar } from "./Toolbar";
import { Navigation } from "./Navigation";
import { CarouselTrack, CarouselTrackRef } from "./CarouselTrack";
import { ThumbnailStrip } from "./ThumbnailStrip";

interface LightboxProps {
  isOpen: boolean;
  imagesData: Array<ImageDataType>;
  initialSlideNumber: number;
  onClose: () => void;
  showThumbnails: boolean;
  setShowThumbnails: (show: boolean) => void;
  thumbnailBorder: string;
  lazy: boolean;
}

export function Lightbox({
  isOpen,
  imagesData,
  initialSlideNumber,
  onClose,
  showThumbnails,
  setShowThumbnails,
  thumbnailBorder,
  lazy,
}: LightboxProps) {
  const [slideNumber, setSlideNumber] = useState(initialSlideNumber);
  const [showModalControls, setShowModalControls] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lightboxRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<CarouselTrackRef>(null);

  // Sync initial slide
  useEffect(() => {
    setSlideNumber(initialSlideNumber);
  }, [initialSlideNumber]);

  // Handle open/close
  useEffect(() => {
    if (isOpen) {
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
        document.documentElement.style.overflow = "hidden";
      }
    } else {
      if (dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
        document.documentElement.style.overflow = "";
      }
    }
  }, [isOpen]);

  function switchFullScreen(on: boolean) {
    if (on) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(`Error while attempting to switch into fullscreen mode: ${error.message}`);
      });
    } else {
      document.exitFullscreen().catch((error) => console.error(error));
    }
  }

  useEffect(() => {
    function handleFullscreenChange() {
      setFullscreen(Boolean(document.fullscreenElement));
      lightboxRef.current?.focus();
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
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
    if (fullscreen) {
      switchFullScreen(false);
    }
    dialogRef.current?.close();
    onClose();
  }

  function handleThumbnailClick(index: number) {
    carouselRef.current?.goToSlide(index + 1);
  }

  return (
    <dialog ref={dialogRef} className="cs-rigg-dialog" onCancel={(e) => {
      e.preventDefault();
      exitFullScreenAndDialog();
    }}>
      <article
        autoFocus
        tabIndex={-1}
        ref={lightboxRef}
        className="cs-rigg-modal-container"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setShowModalControls(true)}
        onMouseLeave={() => setShowModalControls(false)}
        // We use pointer down to close when clicking the backdrop
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).tagName === "ARTICLE") {
            exitFullScreenAndDialog();
          }
        }}
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
        
        <section className="cs-rigg-modal-slide-show-section">
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
          onThumbnailClick={handleThumbnailClick}
          thumbnailBorder={thumbnailBorder}
          lazy={lazy}
        />
      </article>
    </dialog>
  );
}
