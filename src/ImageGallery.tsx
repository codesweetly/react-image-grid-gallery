import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import uniqid from "uniqid";
import "./ImageGallery.css";

interface ImgArryProps {
  imgArray: Array<{
    alt: string;
    caption?: string;
    src: string;
  }>;
}

export default function ImageGallery({ imgArray }: ImgArryProps) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const imgElementArray = imgArray.map((item, index) => (
    <figure className="image-figure" key={uniqid()}>
      <img
        alt={item.alt}
        src={item.src}
        className="codesweetly-img"
        onClick={() => openLightboxOnSlide(index + 1)}
      />
      {item.caption ? <figcaption>{item.caption}</figcaption> : ""}
    </figure>
  ));

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="codesweetly-imgs-container">
      {imgElementArray}
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={imgArray.map((item) => item.src)}
      />
    </div>
  );
}
