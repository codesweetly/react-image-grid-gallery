# React Image Grid Gallery

A simple, easy-to-use, and responsive image gallery component for displaying a grid of images in React apps.

![npm](https://img.shields.io/npm/v/react-image-grid-gallery) ![NPM](https://img.shields.io/npm/l/react-image-grid-gallery)

## Live Demo and Tutorial

Available at: https://codesweetly.com/react-image-grid-gallery

## Installation

NPM:

```
npm install react-image-grid-gallery --save
```

Yarn:

```
yarn add react-image-grid-gallery
```

PNPM:

```
pnpm add react-image-grid-gallery
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

function Home() {
  return <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />;
}
```

## Required Props

<table>
<thead>
<tr>
<th>Props</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>imgArray</code></td>
<td>array</td>
<td><code>undefined</code></td>
<td>

_Required._ An array of objects containing the following properties:

- `alt`: The image's [alternative text](https://webaim.org/techniques/alttext/). _Required._
- `caption`: The [image's description](https://www.studysmarter.co.uk/explanations/english/blog/image-caption/). _Optional._
- `src`: The image's [URL](https://codesweetly.com/web-address-url). _Required._

</td>
</tr>
<tr>
<td><code>columnWidth</code></td>
<td>number</td>
<td><code>230</code></td>
<td>

_Optional._ The minimum width of the gallery's columns.

</td>
</tr>
<tr>
<td><code>gapSize</code></td>
<td>number</td>
<td><code>24</code></td>
<td>

_Optional._ The gallery's [gap size](https://codesweetly.com/css-gap-property).

</td>
</tr>
</tbody>
</table>
