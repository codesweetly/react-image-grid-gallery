import { ImageDataType } from "../ImageGallery.types";

interface CaptionProps {
  fixedCaption?: boolean;
  imageData: ImageDataType;
  showControls: boolean;
}

export function Caption({
  fixedCaption,
  imageData,
  showControls,
}: CaptionProps) {
  if (!imageData.caption) return null;

  return (
    <figcaption
      className="cs-rigg-image-caption"
      style={{
        opacity: fixedCaption || showControls ? 1 : 0,
        pointerEvents: fixedCaption || showControls ? "auto" : "none",
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      <div>{imageData.caption}</div>
      {imageData.cta?.href && imageData.cta?.text && (
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
  );
}
