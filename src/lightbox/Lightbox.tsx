import { useRef, useEffect, useState } from "react";
import { CarouselTrack, CarouselTrackRef } from "./CarouselTrack";
import { Navigation } from "./Navigation";
import { ThumbnailStrip } from "./ThumbnailStrip";
import { Toolbar } from "./Toolbar";
import { ImageDataType } from "../ImageGallery.types";

interface LightboxProps {
  exitLightbox: () => void;
  imagesData: Array<ImageDataType>;
  initialSlideNumber: number;
  isOpen: boolean;
  lazy: boolean;
  setShowThumbnails: (show: boolean) => void;
  showThumbnails: boolean;
  thumbnailBorder: string;
}

export function Lightbox({
  exitLightbox,
  imagesData,
  initialSlideNumber,
  isOpen,
  lazy,
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

  function exitFullScreenAndDialog() {
    if (fullscreen) switchFullScreen(false);
    dialogRef.current?.close();
    exitLightbox();
  }

  function closeLightbox(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    const isBackdropClick =
      target.tagName === "SECTION" ||
      target.tagName === "ARTICLE" ||
      target.tagName === "FIGURE" ||
      target.classList.contains("cs-rigg-carousel-slide") ||
      target.classList.contains("cs-rigg-carousel-track-container") ||
      target.classList.contains("cs-rigg-carousel-track");

    if (isBackdropClick) exitFullScreenAndDialog();
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
        onClick={closeLightbox}
        onKeyDown={handleKeyboardShortcut}
        onMouseEnter={() => setShowModalControls(true)}
        onMouseLeave={() => setShowModalControls(false)}
        ref={lightboxRef}
        tabIndex={-1}
      >
        <Toolbar
          fullscreen={fullscreen}
          showControls={showModalControls}
          slideNumber={slideNumber}
          toggleFullscreen={switchFullScreen}
          toggleThumbnails={() => setShowThumbnails(!showThumbnails)}
          totalImages={imagesData.length}
          exitFullScreenAndDialog={exitFullScreenAndDialog}
        />
        <section className="cs-rigg-modal-slide-show-section">
          <CarouselTrack
            changeSlide={setSlideNumber}
            imagesData={imagesData}
            lazy={lazy}
            showThumbnails={showThumbnails}
            slideNumber={slideNumber}
            ref={carouselRef}
          />
          <Navigation
            changeSlide={(dir) => carouselRef.current?.navigate(dir)}
            showControls={showModalControls}
          />
        </section>
        <ThumbnailStrip
          goToClickedThumbnail={goToClickedThumbnail}
          imagesData={imagesData}
          lazy={lazy}
          showThumbnails={showThumbnails}
          slideNumber={slideNumber}
          thumbnailBorder={thumbnailBorder}
        />
      </article>
    </dialog>
  );
}
