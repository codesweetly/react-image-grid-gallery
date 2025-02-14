import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { ImageGallery } from "./ImageGallery";

const imagesArray = [
  {
    id: crypto.randomUUID(),
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_1280.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2400",
    gridSrc:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1920",
    thumbSrc:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=640",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_1280.png",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image4's alt text",
    caption: "Image4's description",
    src: "https://cdn.pixabay.com/photo/2021/05/06/16/13/children-6233868_1280.png",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image5's alt text",
    caption: "Image5's description",
    src: "https://images.unsplash.com/photo-1519016871193-d90e3a64d0f5?q=80&w=1974",
    gridSrc:
      "https://images.unsplash.com/photo-1519016871193-d90e3a64d0f5?q=80&w=1494",
    thumbSrc:
      "https://images.unsplash.com/photo-1519016871193-d90e3a64d0f5?q=80&w=214",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image6's alt text",
    caption: "Image6's description",
    src: "https://cdn.pixabay.com/photo/2023/04/17/00/06/vietnam-7931381_1280.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image7's alt text",
    src: "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_1280.jpg",
    thumbSrc:
      "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_640.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image8's alt text",
    src: "https://cdn.pixabay.com/photo/2023/05/21/11/45/flowers-8008392_1280.jpg",
    thumbSrc:
      "https://cdn.pixabay.com/photo/2023/05/21/11/45/flowers-8008392_640.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image9's alt text",
    caption: "Image9's description",
    src: "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_1280.png",
    thumbSrc:
      "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_640.png",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image10's alt text",
    caption: "Image10's description",
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974",
    gridSrc:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1494",
    thumbSrc:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=214",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image11's alt text",
    caption: "Image11's description",
    src: "https://cdn.pixabay.com/photo/2023/05/09/17/20/flowers-7982037_1280.jpg",
    thumbSrc:
      "https://cdn.pixabay.com/photo/2023/05/09/17/20/flowers-7982037_640.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image12's alt text",
    caption: "Image12's description",
    src: "https://cdn.pixabay.com/photo/2023/04/17/00/06/vietnam-7931381_1280.jpg",
    thumbSrc:
      "https://cdn.pixabay.com/photo/2023/04/17/00/06/vietnam-7931381_640.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "13's alt text",
    caption: "Image13's description",
    src: "https://cdn.pixabay.com/photo/2023/09/29/12/38/winter-8283735_640.jpg",
  },
];

test("image gallery renders correctly", () => {
  render(
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={1}
      columnWidth={300}
      gapSize={2}
    />
  );
});

test("image gallery works with only the imagesInfoArray prop", () => {
  render(<ImageGallery imagesInfoArray={imagesArray} />);
});

test("image gallery works with custom styles and fixed caption", () => {
  const imageContainerStyle: React.CSSProperties = {
    margin: `0 0 0`,
    position: "relative",
  };

  const imageBtnStyle: React.CSSProperties = {
    border: "4px solid purple",
  };

  render(
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={1}
      columnWidth={300}
      gapSize={2}
      fixedCaption={true}
      customStyles={{ imageContainerStyle, imageBtnStyle }}
    />
  );
});

test("image gallery works with custom thumbnail border", () => {
  render(
    <ImageGallery
      imagesInfoArray={imagesArray}
      thumbnailBorder="medium dashed pink"
    />
  );
});
