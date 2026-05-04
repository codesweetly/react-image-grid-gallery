import { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { SvgElement, updateCaptionOpacity } from "./helpers.ts";
import {
  ImageGalleryPropsType,
  ImgSrcInfoType,
} from "./ImageGallery.types.tsx";

export function ImageGallery({
  columnCount = "auto",
  columnWidth = 230,
  customizeImageClickAction = () => {},
  enableDefaultLightbox = true,
  fixedCaption = false,
  gapSize = 24,
  imagesData,
  lazy = true,
  lazyFromIndex = 6,
  thumbnailBorder = "3px solid #fff",
}: ImageGalleryPropsType) {
  const [imgSrcInfo, setImgSrcInfo] = useState<ImgSrcInfoType | null>(null);
  const [slideNumber, setSlideNumber] = useState(1);
  const [showModalControls, setShowModalControls] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lightboxRef = useRef<HTMLElement | null>(null);
  const activeThumbImgRef = useRef<HTMLImageElement | null>(null);

  function switchFullScreen(on: boolean) {
    if (on) {
      lightboxRef.current?.requestFullscreen().catch((error) => {
        alert(
          `Error while attempting to switch into fullscreen mode: ${error.message} (${error.name})`,
        );
      });
    }
    if (!on) {
      document.exitFullscreen().catch((error) => console.error(error));
    }
  }

  function openLightboxOnSlide(
    number: number,
    src: string,
    srcSet?: string,
    mediaSizes?: string,
  ) {
    setImgSrcInfo({ src, srcSet, mediaSizes });
    setSlideNumber(number);
    dialogRef.current?.showModal();
  }

  function showImageCards() {
    const imageElementsArray = imagesData.map((imageData, index) => {
      function handleImageClick() {
        enableDefaultLightbox
          ? openLightboxOnSlide(
              index + 1,
              imageData.src,
              imageData.srcSet,
              imageData.mediaSizes,
            )
          : customizeImageClickAction(imageData, index);
      }
      if (imageData.id) {
        return (
          <button
            type="button"
            className="cs-rigg-image-btn"
            key={imageData.id}
            onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
          >
            <figure
              className="cs-rigg-image-container"
              style={{ margin: `0 0 ${gapSize}px` }}
              onMouseEnter={(e) =>
                fixedCaption ? undefined : updateCaptionOpacity(e, "1")
              }
              onMouseLeave={(e) =>
                fixedCaption ? undefined : updateCaptionOpacity(e, "0")
              }
            >
              <img
                loading={lazy && index >= lazyFromIndex ? "lazy" : "eager"}
                alt={imageData.alt}
                src={imageData.gridSrc || imageData.src}
                onClick={() => handleImageClick()}
                className="cs-rigg-image"
              />
              {imageData.caption ? (
                <figcaption
                  className="cs-rigg-image-caption"
                  style={{
                    opacity: fixedCaption ? 1 : 0,
                    transition: fixedCaption
                      ? undefined
                      : "opacity 1s ease-in-out",
                  }}
                >
                  {imageData.caption}
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

  function changeSlide(thumbClick: boolean, step: number) {
    const totalImages = imagesData.length;
    let newSlideNumber = thumbClick ? step + 1 : slideNumber + step;

    newSlideNumber < 1 && (newSlideNumber = totalImages);
    newSlideNumber > totalImages && (newSlideNumber = 1);

    if (newSlideNumber <= totalImages && newSlideNumber > 0) {
      const imageData = imagesData[newSlideNumber - 1];
      setSlideNumber(newSlideNumber);
      setImgSrcInfo({
        src: imageData.src,
        srcSet: imageData.srcSet,
        mediaSizes: imageData.mediaSizes,
      });
    }
  }

  function scrollImage(
    thumbClick: boolean,
    direction: number,
    imgIndex: number,
  ) {
    const step = thumbClick ? imgIndex : direction;
    flushSync(() => changeSlide(thumbClick, step));
    activeThumbImgRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleKeyDownOnModal(e: React.KeyboardEvent<HTMLElement>) {
    e.key === "ArrowLeft" && scrollImage(false, -1, 0);
    e.key === "ArrowRight" && scrollImage(false, 1, 0);
    e.key === "f" && fullscreen && switchFullScreen(false);
    e.key === "f" && !fullscreen && switchFullScreen(true);
  }

  function exitFullScreenAndDialog() {
    fullscreen && switchFullScreen(false);
    dialogRef.current?.close();
  }

  function showLightBox() {
    const imageData = imagesData[slideNumber - 1];
    return (
      <dialog ref={dialogRef} className="cs-rigg-dialog">
        <article
          autoFocus
          tabIndex={-1}
          ref={lightboxRef}
          className="cs-rigg-modal-container"
          onKeyDown={(e) => handleKeyDownOnModal(e)}
          onMouseEnter={() => setShowModalControls(true)}
          onMouseLeave={() => setShowModalControls(false)}
          onClick={(e) =>
            (e.target as HTMLElement).tagName === "SECTION" &&
            exitFullScreenAndDialog()
          }
        >
          <span
            className="cs-rigg-modal-slide-number"
            style={{ opacity: showModalControls ? 1 : 0 }}
          >{`${slideNumber} / ${imagesData.length}`}</span>
          <span
            className="cs-rigg-modal-toolbar"
            style={{ opacity: showModalControls ? 1 : 0 }}
          >
            <button
              type="button"
              aria-label="Show thumbnails"
              className="cs-rigg-modal-toolbar-btn"
              title="Show thumbnails"
              onClick={() => setShowThumbnails(!showThumbnails)}
            >
              {SvgElement(
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />,
              )}
            </button>
            <button
              type="button"
              aria-label="Go full screen (Keyboard shortcut f)"
              className="cs-rigg-modal-toolbar-btn"
              style={{ display: fullscreen ? "none" : "block" }}
              title="Go full screen (f)"
              onClick={() => switchFullScreen(true)}
            >
              {SvgElement(
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />,
              )}
            </button>
            <button
              type="button"
              aria-label="Exit full screen"
              className="cs-rigg-modal-toolbar-btn"
              style={{ display: fullscreen ? "block" : "none" }}
              title="Exit full screen"
              onClick={() => switchFullScreen(false)}
            >
              {SvgElement(
                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />,
              )}
            </button>
            <button
              type="button"
              aria-label="Close lightbox"
              className="cs-rigg-modal-toolbar-btn"
              title="Close lightbox"
              onClick={() => exitFullScreenAndDialog()}
            >
              {SvgElement(
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />,
              )}
            </button>
          </span>
          <section
            className="cs-rigg-modal-slide-show-section"
            style={{ height: showThumbnails ? "80vh" : "100vh" }}
          >
            <button
              type="button"
              aria-label="Previous image"
              className="cs-rigg-modal-slide-btn"
              style={{ opacity: showModalControls ? 1 : 0, left: 0 }}
              title="Previous image"
              onClick={() => scrollImage(false, -1, 0)}
            >
              {SvgElement(
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />,
              )}
            </button>
            <figure
              onMouseEnter={(e) =>
                fixedCaption ? undefined : updateCaptionOpacity(e, "1")
              }
              onMouseLeave={(e) =>
                fixedCaption ? undefined : updateCaptionOpacity(e, "0")
              }
            >
              <img
                loading={lazy ? "lazy" : "eager"}
                src={imgSrcInfo?.src}
                srcSet={imgSrcInfo?.srcSet}
                sizes={imgSrcInfo?.mediaSizes}
                alt={imageData.alt}
                className="cs-rigg-modal-image"
                style={{ maxHeight: showThumbnails ? "80vh" : "100vh" }}
              />
              {imageData.caption ? (
                <figcaption className="cs-rigg-image-caption">
                  <div>{imageData.caption}</div>
                  {imageData?.cta?.href && imageData?.cta?.text && (
                    <div>
                      <a
                        href={imageData.cta.href}
                        target={imageData.cta.target}
                        rel={imageData.cta.rel}
                      >
                        {imageData.cta.text}
                      </a>
                    </div>
                  )}
                </figcaption>
              ) : (
                ""
              )}
            </figure>
            <button
              type="button"
              aria-label="Next image"
              className="cs-rigg-modal-slide-btn"
              style={{ opacity: showModalControls ? 1 : 0, right: 0 }}
              title="Next image"
              onClick={() => scrollImage(false, 1, 0)}
            >
              {SvgElement(
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />,
              )}
            </button>
          </section>
          <section
            className="cs-rigg-modal-thumbnail-section"
            style={{ opacity: showThumbnails ? 1 : 0 }}
          >
            <div className="cs-rigg-modal-thumb-imgs-pod">
              {imagesData.map((imageData, index) => (
                <img
                  loading={lazy ? "lazy" : "eager"}
                  ref={slideNumber - 1 === index ? activeThumbImgRef : null}
                  style={{
                    border: slideNumber - 1 === index ? thumbnailBorder : "",
                    cursor: "pointer",
                  }}
                  key={imageData.id}
                  src={imageData.thumbSrc || imageData.src}
                  alt={imageData.alt}
                  onClick={() => scrollImage(true, 0, index)}
                />
              ))}
            </div>
          </section>
        </article>
      </dialog>
    );
  }

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
    <div
      style={{
        columnCount,
        columnWidth: `${columnWidth}px`,
        columnGap: `${gapSize}px`,
      }}
    >
      {showImageCards()}
      {enableDefaultLightbox && showLightBox()}
    </div>
  );
}
