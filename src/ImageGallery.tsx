import React, { ReactElement, useEffect, useRef, useState } from "react";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import { imageGalleryStyles } from "./imageGalleryStyles";

export function ImageGallery({
  imagesInfoArray,
  columnCount = "auto",
  columnWidth = 230,
  gapSize = 24,
}: ImageGalleryPropsType) {
  const [showModalControls, setShowModalControls] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [slideNumber, setSlideNumber] = useState(1);
  const lightboxRef = useRef<HTMLElement>(null);
  const showLightBox = useRef(false);

  const galleryContainerStyle = imageGalleryStyles(
    columnCount,
    columnWidth,
    gapSize
  ).galleryContainerStyle;
  const imageContainerStyle = imageGalleryStyles(
    undefined,
    undefined,
    gapSize
  ).imageContainerStyle;
  const imageStyle = imageGalleryStyles().imageStyle;
  const imageCaptionStyle = imageGalleryStyles().imageCaptionStyle;
  const modalContainerStyle = imageGalleryStyles(
    undefined,
    undefined,
    undefined,
    showLightBox.current
  ).modalContainerStyle;
  const modalSlideNumberStyle = imageGalleryStyles().modalSlideNumberStyle;
  const modalToolbarStyle = imageGalleryStyles().modalToolbarStyle;
  const modalToolbarBtnStyle = imageGalleryStyles().modalToolbarBtnStyle;
  const modalSlideShowSectionStyle =
    imageGalleryStyles().modalSlideShowSectionStyle;
  const modalImageStyle = imageGalleryStyles().modalImageStyle;
  const modalSlideBtnStyle = imageGalleryStyles().modalSlideBtnStyle;

  const imageElementsArray = imagesInfoArray.map((item, index) => (
    <figure
      style={imageContainerStyle}
      key={crypto.randomUUID()}
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && openLightboxOnSlide(item.src, index + 1)
      }
      onMouseEnter={(e) => handleImageContainerMouseEnter(e)}
      onMouseLeave={(e) => handleImageContainerMouseLeave(e)}
    >
      <img
        alt={item.alt}
        src={item.src}
        onClick={() => openLightboxOnSlide(item.src, index + 1)}
        style={imageStyle}
      />
      {item.caption ? (
        <figcaption style={imageCaptionStyle}>{item.caption}</figcaption>
      ) : (
        ""
      )}
    </figure>
  ));

  const lightBoxElement = (
    <article
      ref={lightboxRef}
      style={modalContainerStyle}
      tabIndex={-1}
      onKeyDown={(e) => handleKeyDownOnModal(e)}
      onMouseEnter={() => setShowModalControls(true)}
      onMouseLeave={() => setShowModalControls(false)}
      onClick={(e) =>
        (e.target as HTMLElement).tagName === "SECTION" && showLightbox(false)
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
          onClick={() => setFullscreen(true)}
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
          onClick={() => setFullscreen(false)}
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
          onClick={() => showLightbox(false)}
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
          onClick={() => changeSlide(-1)}
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
          onClick={() => changeSlide(1)}
        >
          {SvgElement(
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          )}
        </button>
      </section>
    </article>
  );

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

  function openLightboxOnSlide(imgSrc: string, number: number) {
    showLightbox(true);
    setImageSrc(imgSrc);
    setSlideNumber(number);
  }

  function handleKeyDownOnModal(e: React.KeyboardEvent<HTMLElement>) {
    e.key === "ArrowLeft" && changeSlide(-1);
    e.key === "ArrowRight" && changeSlide(1);
    e.key === "Escape" && showLightbox(false);
    e.key === "f" && fullscreen && setFullscreen(false);
    e.key === "f" && !fullscreen && setFullscreen(true);
  }

  function changeSlide(directionNumber: number) {
    const totalImages = imagesInfoArray.length;
    let newSlideNumber = slideNumber + directionNumber;

    newSlideNumber < 1 && (newSlideNumber = imagesInfoArray.length);
    newSlideNumber > imagesInfoArray.length && (newSlideNumber = 1);

    if (newSlideNumber <= totalImages && newSlideNumber > 0) {
      setSlideNumber(newSlideNumber);
      setImageSrc(imagesInfoArray[newSlideNumber - 1].src);
    }
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

  function showLightbox(open: boolean) {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      lightboxRef.current?.focus();
      showLightBox.current = true;
    } else {
      document.documentElement.style.overflow = "";
      document.fullscreenElement &&
        document.exitFullscreen().catch((error) => console.error(error));
      showLightBox.current = false;
    }
  }

  useEffect(() => {
    if (fullscreen) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(
          `Error while attempting to switch into fullscreen mode: ${error.message} (${error.name})`
        );
      });
      lightboxRef.current?.focus();
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((error) => console.error(error));
      lightboxRef.current?.focus();
    }
  }, [fullscreen]);

  useEffect(() => {
    function handleFullscreenchange() {
      if (!document.fullscreenElement && fullscreen) {
        setFullscreen(false);
      }
    }
    lightboxRef.current?.addEventListener("fullscreenchange", () =>
      handleFullscreenchange()
    );
    return lightboxRef.current?.removeEventListener("fullscreenchange", () =>
      handleFullscreenchange()
    );
  }, [fullscreen]);

  return (
    <div style={galleryContainerStyle}>
      {imageElementsArray}
      {lightBoxElement}
    </div>
  );
}
