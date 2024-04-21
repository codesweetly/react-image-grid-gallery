import React, { useEffect, useState } from "react";
import { ImageGalleryPropsType } from "./ImageGallery.types";
import { ImageGalleryStyles } from "./ImageGalleryStyles";
// import FsLightbox from "fslightbox-react";

export function ImageGallery({
  imagesInfoArray,
  columnWidth = 230,
  gapSize = 24,
}: ImageGalleryPropsType) {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [slideNumber, setSlideNumber] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

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
  const modalNavSectionStyle = new ImageGalleryStyles().modalNavSectionStyle;
  const modalNavSlideNumberStyle = new ImageGalleryStyles()
    .modalNavSlideNumberStyle;
  const modalNavToolbarStyle = new ImageGalleryStyles().modalNavToolbarStyle;
  const modalNavBtnStyle = new ImageGalleryStyles().modalNavBtnStyle;
  const modalSlideShowSectionStyle = new ImageGalleryStyles(
    undefined,
    undefined,
    undefined,
    imageSrc
  ).modalSlideShowSectionStyle;
  const modalSlideArrowsStyle = new ImageGalleryStyles().modalSlideArrowsStyle;

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
    <article id="codesweetly-lightbox" style={modalMainContainerStyle}>
      <section style={modalNavSectionStyle}>
        <span
          style={modalNavSlideNumberStyle}
        >{`${slideNumber} / ${imagesInfoArray.length}`}</span>
        <span style={modalNavToolbarStyle}>
          <span
            style={{
              display: fullscreen ? "none" : "block",
              ...modalNavBtnStyle,
            }}
            title="Enter fullscreen"
            onClick={() => enterFullscreen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
            </svg>
          </span>
          <span
            style={{
              display: fullscreen ? "block" : "none",
              ...modalNavBtnStyle,
            }}
            title="Exit fullscreen"
            onClick={() => enterFullscreen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
            </svg>
          </span>
          <span
            style={modalNavBtnStyle}
            title="Close"
            onClick={() => closeLightbox()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </span>
        </span>
      </section>
      <section style={modalSlideShowSectionStyle}>
        <span
          style={modalSlideArrowsStyle}
          title="Previous"
          onClick={() => changeSlide(-1)}
        >
          &#129120;
        </span>
        <span
          style={modalSlideArrowsStyle}
          title="Next"
          onClick={() => changeSlide(1)}
        >
          &#129122;
        </span>
      </section>
      {/*
      <section>
        <p>Caption</p>
        <img src="" alt="" />
      </section> */}
    </article>
  );

  function openLightboxOnSlide(imgSrc: string, number: number) {
    setShowModal(true);
    setImageSrc(imgSrc);
    setSlideNumber(number);
    // setLightboxController({
    //   toggler: !lightboxController.toggler,
    //   slide: number,
    // });
  }

  function enterFullscreen(mode: boolean) {
    setFullscreen(mode);
  }

  function closeLightbox() {
    setShowModal(false);
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

  useEffect(() => {
    showModal
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "");
  }, [showModal]);

  useEffect(() => {
    fullscreen &&
      document.getElementById("codesweetly-lightbox")?.requestFullscreen();
    document.fullscreenElement && document.exitFullscreen();
  }, [fullscreen]);

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
