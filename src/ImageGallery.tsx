import React, { useState } from "react";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import { ImageGalleryStyles } from "./ImageGalleryStyles";
// import FsLightbox from "fslightbox-react";

export function ImageGallery({
  imagesInfoArray,
  columnWidth = 230,
  gapSize = 24,
}: ImageGalleryPropsType) {
  const [showModal, setShowModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(1);
  // const [lightboxController, setLightboxController] = useState({
  //   toggler: false,
  //   slide: 1,
  // });
  const galleryContainerStyle = new ImageGalleryStyles(gapSize, columnWidth)
    .galleryContainerStyle;
  const imageContainerStyle = new ImageGalleryStyles(gapSize)
    .imageContainerStyle;
  const imageStyle = new ImageGalleryStyles().imageStyle;
  const imageCaptionStyle = new ImageGalleryStyles().imageCaptionStyle;
  const modalMainContainerStyle = new ImageGalleryStyles(
    undefined,
    undefined,
    showModal
  ).modalMainContainerStyle;
  const modalNavContainerStyle = new ImageGalleryStyles()
    .modalNavContainerStyle;
  const modalCloseBtnStyle = new ImageGalleryStyles().modalCloseBtnStyle;

  function handleImageContainerMouseEnter(
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const figcaption = e.currentTarget.querySelector("figcaption");
    if (figcaption) figcaption.style.opacity = "1";
  }

  function handleImageContainerMouseLeave(
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    const figcaption = e.currentTarget.querySelector("figcaption");
    if (figcaption) figcaption.style.opacity = "0";
  }

  const imageElementsArray = imagesInfoArray.map((item, index) => (
    <figure
      style={imageContainerStyle}
      key={crypto.randomUUID()}
      onMouseEnter={(e) => handleImageContainerMouseEnter(e)}
      onMouseLeave={(e) => handleImageContainerMouseLeave(e)}
    >
      <img
        alt={item.alt}
        src={item.src}
        onClick={() => openLightboxOnSlide(index + 1)}
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
    <article style={modalMainContainerStyle}>
      <section style={modalNavContainerStyle}>
        <span>{`${slideNumber} / ${imagesInfoArray.length}`}</span>
        <span
          style={modalCloseBtnStyle}
          title="Close"
          onClick={() => closeLightbox()}
        >
          &times;
        </span>
      </section>
      {/*
      <section>
        <span>pre</span>
        <img src="" alt="" />
        <span>next</span>
      </section>
      <section>
        <p>Caption</p>
        <img src="" alt="" />
      </section> */}
    </article>
  );

  function openLightboxOnSlide(number: number) {
    setShowModal(true);
    setSlideNumber(number);
    // setLightboxController({
    //   toggler: !lightboxController.toggler,
    //   slide: number,
    // });
  }

  function closeLightbox() {
    setShowModal(false);
  }

  return (
    <div style={galleryContainerStyle}>
      {imageElementsArray}
      {lightBoxElement}
      {/* <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={imagesInfoArray.map((item) => item.src)}
      /> */}
    </div>
  );
}
