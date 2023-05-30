# React Image Grid Gallery

A simple, easy-to-use, and responsive image gallery component for displaying a grid of images in React apps.

![npm](https://img.shields.io/npm/v/react-image-grid-gallery) ![NPM](https://img.shields.io/npm/l/react-image-grid-gallery)

## Installation

Using npm:

```
npm install react-image-grid-gallery
```

Using yarn:

```
yarn add react-image-grid-gallery
```

Using pnpm:

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

function App() {
  return <ImageGallery imgArray={imagesArray} columnWidth={300} gapSize={7} />;
}
```

## Required Props

<table>
<thead>
<tr>
<th>Props</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>imgArray</code></td>
<td>

Required. The `imgArray` prop is an array of objects containing the following properties:

- `alt`: Required. The image's [alternative text](https://webaim.org/techniques/alttext/).
- `caption`: Optional. A [description of the image](https://www.studysmarter.co.uk/explanations/english/blog/image-caption/).
- `src`: Required. The [URL](https://codesweetly.com/web-address-url) of the image.

</td>
</tr>
<tr>
<td><code>columnWidth</code></td>
<td>

Optional. The `columnWidth` prop is a number specifying the minimum width of the gallery's columns.

`230` is the default value.

</td>
</tr>
<tr>
<td><code>gapSize</code></td>
<td>

Optional. The `gapSize` prop is a number specifying the gallery [gap's size](https://codesweetly.com/css-gap-property).

`24` is the default value.

</td>
</tr>
</tbody>
</table>
