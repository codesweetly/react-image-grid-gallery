# React Image Grid Gallery

It's here! A simple, easy-to-use, and responsive image gallery component for displaying a grid of images in React apps.

## Installation

Using npm:

```
npm install react-image-grid-gallery
```

Using yarn:

```
yarn add react-image-grid-gallery
```

## Usage

```js
import ImageGallery from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "http://example.com/image1.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "http://example.com/image2.png",
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "http://example.com/image3.webp",
  },
];

function App() {
  return <ImageGallery imgArray={imagesArray} />;
}
```

## Required Props

### `imgArray`

The `imgArray` props is an array of objects containing the following properties:

- `alt`: The image's [alternative text](https://webaim.org/techniques/alttext/). This property is required.
- `caption`: A [description of the image](https://www.studysmarter.co.uk/explanations/english/blog/image-caption/). This property is optional.
- `src`: The [URL](https://codesweetly.com/web-address-url) of the image. This property is required.
