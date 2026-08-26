import { useState } from "react";
import { updateCaptionOpacity } from "./helpers.ts";
import { Lightbox } from "./lightbox/Lightbox.tsx";
import { ImageDataType } from "./ImageGallery.types";

interface ImageGalleryPropsType {
  columnCount?: string | number;
  columnWidth?: string | number;
  customizeImageClickAction?: (
    imageData?: ImageDataType,
    index?: number,
  ) => void;
  enableDefaultLightbox?: boolean;
  fixedCaption?: boolean;
  gapSize?: number;
  imagesData: Array<ImageDataType>;
  lazy?: boolean;
  lazyFromIndex?: number;
  thumbnailBorder?: string;
}

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(1);
  const [showThumbnails, setShowThumbnails] = useState(false);

  function openLightboxOnSlide(number: number) {
    setSlideNumber(number);
    setLightboxOpen(true);
  }

  function showImageCards() {
    return imagesData.map((imageData, index) => {
      function handleImageClick() {
        enableDefaultLightbox
          ? openLightboxOnSlide(index + 1)
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
        <div key={index}>
          <strong>Error:</strong> Each item in the `imagesArray` needs a unique
          `id`
        </div>
      );
    });
  }

  return (
    <div
      style={{
        columnCount,
        columnWidth: `${columnWidth}px`,
        columnGap: `${gapSize}px`,
      }}
    >
      {showImageCards()}
      {enableDefaultLightbox && (
        <Lightbox
          exitLightbox={() => setLightboxOpen(false)}
          imagesData={imagesData}
          initialSlideNumber={slideNumber}
          isOpen={lightboxOpen}
          lazy={lazy}
          setShowThumbnails={setShowThumbnails}
          showThumbnails={showThumbnails}
          thumbnailBorder={thumbnailBorder}
        />
      )}
    </div>
  );
}
