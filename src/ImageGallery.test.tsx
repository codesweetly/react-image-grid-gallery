import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { ImageGallery } from "./ImageGallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_1280.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://cdn.pixabay.com/photo/2023/05/21/11/45/flowers-8008392_1280.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_1280.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2021/05/06/16/13/children-6233868_1280.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2023/05/09/17/20/flowers-7982037_1280.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2023/04/17/00/06/vietnam-7931381_1280.jpg",
  },
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_1280.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://cdn.pixabay.com/photo/2023/05/21/11/45/flowers-8008392_1280.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_1280.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2021/05/06/16/13/children-6233868_1280.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2023/05/09/17/20/flowers-7982037_1280.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2023/04/17/00/06/vietnam-7931381_1280.jpg",
  },
];

test("image gallery renders correctly", () => {
  render(
    <ImageGallery imagesArray={imagesArray} columnWidth={300} gapSize={2} />
  );
});
