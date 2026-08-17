import { useEffect, useRef } from "react";
import { ImageDataType } from "../ImageGallery.types";

interface ThumbnailStripProps {
  imagesData: Array<ImageDataType>;
  slideNumber: number;
  showThumbnails: boolean;
  onThumbnailClick: (index: number) => void;
  thumbnailBorder: string;
  lazy: boolean;
}

export function ThumbnailStrip({
  imagesData,
  slideNumber,
  showThumbnails,
  onThumbnailClick,
  thumbnailBorder,
  lazy,
}: ThumbnailStripProps) {
  const activeThumbImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (showThumbnails && activeThumbImgRef.current) {
      activeThumbImgRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [slideNumber, showThumbnails]);

  return (
    <section
      className="cs-rigg-modal-thumbnail-section"
      style={{
        display: showThumbnails ? "block" : "none",
        opacity: showThumbnails ? 1 : 0,
        pointerEvents: showThumbnails ? "auto" : "none",
      }}
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
            onClick={() => onThumbnailClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
