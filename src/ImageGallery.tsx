import React, { useState } from "react";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import FsLightbox from "fslightbox-react";
import uniqid from "uniqid";

class ImageGalleryStyles {
  galleryContainerStyle: React.CSSProperties;
  imageContainerStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  imageCaptionStyle: React.CSSProperties;

  constructor(gapSize?: number, columnWidth?: number) {
    this.galleryContainerStyle = {
      columnWidth: `${columnWidth}px`,
      columnGap: `${gapSize}px`,
    };
    this.imageContainerStyle = {
      marginBottom: `${gapSize}px`,
      margin: 0,
      position: "relative",
    };
    this.imageStyle = {
      display: "block",
      width: "100%",
      cursor: "pointer",
    };
    this.imageCaptionStyle = {
      opacity: 0,
      position: "absolute",
      bottom: 0,
      zIndex: "1000",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      background:
        "linear-gradient(180deg, rgba(25, 27, 38, 0), rgba(25, 27, 38, 1))",
      padding: "16px",
      fontSize: "0.85rem",
      textAlign: "center",
      color: "#fff",
    };
  }
}

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
