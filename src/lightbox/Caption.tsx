import { ImageDataType } from "../ImageGallery.types";

interface CaptionProps {
  imageData: ImageDataType;
}

export function Caption({ imageData }: CaptionProps) {
  if (!imageData.caption) return null;

  return (
    <figcaption className="cs-rigg-image-caption">
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
