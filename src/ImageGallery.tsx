import React, { useState } from "react";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import { ImageGalleryStyles } from "./ImageGalleryStyles";
import FsLightbox from "fslightbox-react";
import uniqid from "uniqid";

export function ImageGallery({
  imagesInfoArray,
  columnWidth = 230,
  gapSize = 24,
}: ImageGalleryPropsType) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const galleryContainerStyle = new ImageGalleryStyles(gapSize, columnWidth)
    .galleryContainerStyle;
  const imageContainerStyle = new ImageGalleryStyles(gapSize)
    .imageContainerStyle;
  const imageStyle = new ImageGalleryStyles().imageStyle;
  const imageCaptionStyle = new ImageGalleryStyles().imageCaptionStyle;

  const imageElementsArray = imagesInfoArray.map((item, index) => (
    <figure style={imageContainerStyle} key={uniqid()}>
      <img
        alt={item.alt}
        src={item.src}
        onClick={() => openLightboxOnSlide(index + 1)}
        style={imageStyle}
      />
      {item.caption ? (
        <figcaption
          style={imageCaptionStyle}
          onMouseOver={() => "this.style.opacity=1"}
          onMouseOut={() => "this.style.opacity=0"}
        >
          {item.caption}
        </figcaption>
      ) : (
        ""
      )}
    </figure>
  ));

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div style={galleryContainerStyle}>
      {imageElementsArray}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={imagesInfoArray.map((item) => item.src)}
      />
    </div>
  );
}
