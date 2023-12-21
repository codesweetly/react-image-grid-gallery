import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import uniqid from "uniqid";

interface ImageGalleryPropsType {
  imgArray: Array<{
    alt: string;
    caption?: string;
    src: string;
  }>;
  columnWidth?: number;
  gapSize?: number;
}

class ImageGalleryStyles {
  imageContainerStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  imageCaptionStyle: React.CSSProperties;

  constructor(gapSize?: number) {
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
  imgArray,
  columnWidth = 230,
  gapSize = 24,
}: ImageGalleryPropsType) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const imageContainerStyle = new ImageGalleryStyles(gapSize)
    .imageContainerStyle;
  const imageStyle = new ImageGalleryStyles().imageStyle;
  const imageCaptionStyle = new ImageGalleryStyles().imageCaptionStyle;

  const imgElementArray = imgArray.map((item, index) => (
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
    <div style={{ columnWidth: `${columnWidth}px`, columnGap: `${gapSize}px` }}>
      {imgElementArray}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={imgArray.map((item) => item.src)}
      />
    </div>
  );
}
