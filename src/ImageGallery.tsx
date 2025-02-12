import React, { ReactElement, useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import { imageGalleryStyles } from "./ImageGalleryStyles";

export function ImageGallery({
  imagesInfoArray,
  columnCount = "auto",
  columnWidth = 230,
  gapSize = 24,
  fixedCaption = false,
  thumbnailBorder = "3px solid #fff",
  customStyles = {},
}: ImageGalleryPropsType) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [slideNumber, setSlideNumber] = useState(1);
  const [showModalControls, setShowModalControls] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lightboxRef = useRef<HTMLElement | null>(null);
  const activeThumbImgRef = useRef<HTMLImageElement | null>(null);
  const defaultStyles = imageGalleryStyles(
    columnCount,
    columnWidth,
    gapSize,
    fixedCaption
  );
  const galleryStyles = { ...defaultStyles, ...customStyles };
  const galleryContainerStyle = galleryStyles.galleryContainerStyle;
  const imageContainerStyle = galleryStyles.imageContainerStyle;
  const imageBtnStyle = galleryStyles.imageBtnStyle;
  const imageStyle = galleryStyles.imageStyle;
  const imageCaptionStyle = galleryStyles.imageCaptionStyle;
  const modalContainerStyle = galleryStyles.modalContainerStyle;
  const modalSlideNumberStyle = galleryStyles.modalSlideNumberStyle;
  const modalToolbarStyle = galleryStyles.modalToolbarStyle;
  const modalToolbarBtnStyle = galleryStyles.modalToolbarBtnStyle;
  const modalSlideShowSectionStyle = galleryStyles.modalSlideShowSectionStyle;
  const modalThumbnailSectionStyle = galleryStyles.modalThumbnailSectionStyle;
  const modalImageStyle = galleryStyles.modalImageStyle;
  const modalSlideBtnStyle = galleryStyles.modalSlideBtnStyle;

  function handleImageContainerMouseEnter(
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const figcaption = e.currentTarget.querySelector("figcaption");
    figcaption && (figcaption.style.opacity = "1");
  }

  function handleImageContainerMouseLeave(
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const figcaption = e.currentTarget.querySelector("figcaption");
    figcaption && (figcaption.style.opacity = "0");
  }

  function openLightboxOnSlide(imgSrc: string | undefined, number: number) {
    setImageSrc(imgSrc);
    setSlideNumber(number);
    dialogRef.current?.showModal();
  }

  function changeSlide(directionNumber: number) {
    const totalImages = imagesInfoArray.length;
    let newSlideNumber = slideNumber + directionNumber;

    newSlideNumber < 1 && (newSlideNumber = totalImages);
    newSlideNumber > totalImages && (newSlideNumber = 1);

    if (newSlideNumber <= totalImages && newSlideNumber > 0) {
      setSlideNumber(newSlideNumber);
      setImageSrc(imagesInfoArray[newSlideNumber - 1].src);
    }
  }

  function scrollActiveThumbImgIntoView() {
    activeThumbImgRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function switchFullScreen(on: boolean) {
    if (on) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(
          `Error while attempting to switch into fullscreen mode: ${error.message} (${error.name})`
        );
      });
    }
    if (!on) {
      document.exitFullscreen().catch((error) => console.error(error));
    }
  }

  function handleKeyDownOnModal(e: React.KeyboardEvent<HTMLElement>) {
    e.key === "ArrowLeft" && changeSlide(-1);
    e.key === "ArrowRight" && changeSlide(1);
    e.key === "f" && fullscreen && switchFullScreen(false);
    e.key === "f" && !fullscreen && switchFullScreen(true);
  }

  function exitFullScreenAndDialog() {
    fullscreen && switchFullScreen(false);
    dialogRef.current?.close();
  }

  function SvgElement(pathElement: ReactElement) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        {pathElement}
      </svg>
    );
  }

  function showImageCards() {
    const imageElementsArray = imagesInfoArray.map((item, index) => {
      if (item.id) {
        return (
          <button
            type="button"
            style={imageBtnStyle}
            key={item.id}
            onKeyDown={(e) =>
              e.key === "Enter" && openLightboxOnSlide(item.src, index + 1)
            }
          >
            <figure
              style={imageContainerStyle}
              onMouseEnter={(e) =>
                fixedCaption ? undefined : handleImageContainerMouseEnter(e)
              }
              onMouseLeave={(e) =>
                fixedCaption ? undefined : handleImageContainerMouseLeave(e)
              }
            >
              <img
                alt={item.alt}
                src={item.src}
                onClick={() => openLightboxOnSlide(item.src, index + 1)}
                style={imageStyle}
              />
              {item.caption ? (
                <figcaption style={imageCaptionStyle}>
                  {item.caption}
                </figcaption>
              ) : (
                ""
              )}
            </figure>
          </button>
        );
      }
      return (
        <div>
          <strong>Error:</strong> Each item in the `imagesArray` needs a unique
          `id`
        </div>
      );
    });
    return imageElementsArray;
  }

  const lightBoxElement = (
    <dialog ref={dialogRef} style={{ margin: "auto" }}>
      <article
        autoFocus
        tabIndex={-1}
        ref={lightboxRef}
        style={modalContainerStyle}
        onKeyDown={(e) => handleKeyDownOnModal(e)}
        onMouseEnter={() => setShowModalControls(true)}
        onMouseLeave={() => setShowModalControls(false)}
        onClick={(e) =>
          (e.target as HTMLElement).tagName === "SECTION" &&
          exitFullScreenAndDialog()
        }
      >
        <span
          style={{
            opacity: showModalControls ? 1 : 0,
            ...modalSlideNumberStyle,
          }}
        >{`${slideNumber} / ${imagesInfoArray.length}`}</span>
        <span
          style={{
            opacity: showModalControls ? 1 : 0,
            ...modalToolbarStyle,
          }}
        >
          <button
            type="button"
            aria-label="Go full screen (Keyboard shortcut f)"
            style={{
              display: fullscreen ? "none" : "block",
              ...modalToolbarBtnStyle,
            }}
            title="Go full screen (f)"
            onClick={() => switchFullScreen(true)}
          >
            {SvgElement(
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
            )}
          </button>
          <button
            type="button"
            aria-label="Exit full screen"
            style={{
              display: fullscreen ? "block" : "none",
              ...modalToolbarBtnStyle,
            }}
            title="Exit full screen"
            onClick={() => switchFullScreen(false)}
          >
            {SvgElement(
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
            )}
          </button>
          <button
            type="button"
            aria-label="Close lightbox"
            style={modalToolbarBtnStyle}
            title="Close lightbox"
            onClick={() => exitFullScreenAndDialog()}
          >
            {SvgElement(
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            )}
          </button>
        </span>
        <section style={modalSlideShowSectionStyle}>
          <button
            type="button"
            aria-label="Previous image"
            style={{
              opacity: showModalControls ? 1 : 0,
              left: 0,
              ...modalSlideBtnStyle,
            }}
            title="Previous image"
            onClick={() => {
              flushSync(() => changeSlide(-1));
              scrollActiveThumbImgIntoView();
            }}
          >
            {SvgElement(
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            )}
          </button>
          <img
            src={imageSrc}
            alt={imagesInfoArray[slideNumber - 1].alt}
            style={modalImageStyle}
          />
          <button
            type="button"
            aria-label="Next image"
            style={{
              opacity: showModalControls ? 1 : 0,
              right: 0,
              ...modalSlideBtnStyle,
            }}
            title="Next image"
            onClick={() => {
              flushSync(() => changeSlide(1));
              scrollActiveThumbImgIntoView();
            }}
          >
            {SvgElement(
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            )}
          </button>
        </section>
        <section style={modalThumbnailSectionStyle}>
          {imagesInfoArray.map((imageInfo, index) => (
            <img
              ref={slideNumber - 1 === index ? activeThumbImgRef : null}
              style={{
                border: slideNumber - 1 === index ? thumbnailBorder : "",
              }}
              key={imageInfo.id}
              src={imageInfo.src}
              alt={imageInfo.alt}
            />
          ))}
        </section>
      </article>
    </dialog>
  );

  useEffect(() => {
    function handleFullscreenChange() {
      setFullscreen(Boolean(document.fullscreenElement));
      lightboxRef.current?.focus();
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    dialogRef.current?.open &&
      (document.documentElement.style.overflow = "hidden");
    !dialogRef.current?.open && (document.documentElement.style.overflow = "");
  });

  return (
    <div style={galleryContainerStyle}>
      {showImageCards()}
      {lightBoxElement}
    </div>
  );
}
