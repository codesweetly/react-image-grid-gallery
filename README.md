# React Image Grid Gallery

A simple, easy-to-use, and responsive image gallery component with a lightbox for displaying a grid of images in React apps.

![npm](https://img.shields.io/npm/v/react-image-grid-gallery) ![NPM](https://img.shields.io/npm/l/react-image-grid-gallery)

## Features

- SEO friendly
- Fullscreen support
- Keyboard accessible
- Mobile responsive
- Lightbox with translucent background
- Thumbnails
- Image captions
- Lazy loading support
- Set column numbers dynamically or manually
- Resolution switching compatible
- Customizable styles

## Live Demo and Tutorial

Available at: https://codesweetly.com/react-image-grid-gallery

## Installation

This section shows how to install the React Image Grid Gallery package.

### Using npm

```
npm install react-image-grid-gallery --save
```

### Using yarn

```
yarn add react-image-grid-gallery
```

### Using pnpm

```
pnpm add react-image-grid-gallery
```

## Usage

```js
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    id: "uniqueid111",
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: "http://example.com/image1.jpg",
  },
  {
    id: "uniqueid222",
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "http://example.com/image2.png",
    thumbSrc: "http://example.com/image2_640.png",
  },
  {
    id: "uniqueid333",
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: "http://example.com/image3.webp?w=2400",
    gridSrc: "http://example.com/image3.webp?w=1280",
    thumbSrc: "http://example.com/image3.webp?w=640",
    srcSet:
      "http://example.com/image3.webp?w=2400 2400w, http://example.com/image3.webp?w=1280 1280w, http://example.com/image3.webp?w=640 640w",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
];

function App() {
  return <ImageGallery imagesInfoArray={imagesArray} gapSize={24} />;
}
```

## Props

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
<td><code>imagesInfoArray</code></td>
<td>array</td>
<td><code>undefined</code></td>
<td>

(**Required**) An array of objects containing the following properties:

- `id`: (**Required** - string or number) Each image's [unique identifying key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).
- `alt`: (**Required** - string) The image's [alternative text](https://webaim.org/techniques/alttext).
- `caption`: (**Optional** - string) The [image's description](https://www.studysmarter.co.uk/explanations/english/blog/image-caption).
- `src`: (**Required** - string) The image's default [URL](https://codesweetly.com/web-address-url).
- `gridSrc`: (**Optional** - string) The preferred grid image's URL.
- `thumbSrc`: (**Optional** - string) The preferred thumbnail image's URL.
- `srcSet`: (**Optional** - string) The set of images' URLs and sizes for [resolution switching](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes).
- [`mediaSizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes): (**Optional** - string) The media conditions and image sizes that hint the browser on the specific `srcSet` to display when a media condition is true.

</td>
</tr>
<tr>
<td>

[`columnCount`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-count-property)

</td>
<td>number or keyword (string)</td>
<td><code>"auto"</code></td>
<td>(<strong>Optional</strong>) The number of columns.</td>
</tr>
<tr>
<td>

[`columnWidth`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-width-property)

</td>
<td>number or keyword (string)</td>
<td><code>230</code></td>
<td>(<strong>Optional</strong>) The minimum width of the gallery's columns.</td>
</tr>
<tr>
<td>

[`gapSize`](https://codesweetly.com/css-gap-property)

</td>
<td>number</td>
<td><code>24</code></td>
<td>(<strong>Optional</strong>) The gallery's gap size.</td>
</tr>
<tr>
<td><code>fixedCaption</code></td>
<td>boolean</td>
<td><code>false</code></td>
<td>

(**Optional**) Specify whether to display the image captions permanently (`true`) or to hide them by default and ease them in on mouse hover (`false`).

</td>
</tr>
<tr>
<td><code>thumbnailBorder</code></td>
<td>string</td>
<td><code>"3px solid #fff"</code></td>
<td>(<strong>Optional</strong>) The thumbnail's border style.</td>
</tr>
<tr>
<td><code>lazy</code></td>
<td>boolean</td>
<td><code>true</code></td>
<td>(<strong>Optional</strong>) Specify whether to lazy load images.</td>
</tr>
<tr>
<td><code>lazyFromIndex</code></td>
<td>number</td>
<td><code>6</code></td>
<td>

(**Optional**) The image's [index](https://codesweetly.com/web-tech-terms-i/#index) to begin the grid's lazy loading. 

**tip:** Use a negative number to lazy load all the images.

</td>
</tr>
<tr>
<td><code>customStyles</code></td>
<td>ImageGalleryStylesType</td>
<td><code>{}</code></td>
<td>

(**Optional**) Custom styles to override the following element's default styles:

- Gallery container: `galleryContainerStyle`
- Gallery image button: `imageBtnStyle`
- Gallery image container: `imageContainerStyle`
- Gallery image element: `imageStyle`
- Gallery image caption: `imageCaptionStyle`
- Modal container: `modalContainerStyle`
- Modal slide number: `modalSlideNumberStyle`
- Modal toolbar: `modalToolbarStyle`
- Modal toolbar button: `modalToolbarBtnStyle`
- Modal slideshow section: `modalSlideShowSectionStyle`
- Modal thumbnail section: `modalThumbnailSectionStyle`
- Modal image element: `modalImageStyle`
- Modal slide button: `modalSlideBtnStyle`

</td>
</tr>

</tbody>
</table>

## Note for Remix Users

[Remix](https://remix.run/docs/en/1.19.0) users should add `"react-image-grid-gallery"` to their `remix.config.js` file:

```diff
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
+ serverDependenciesToBundle: ["react-image-grid-gallery"],
  serverModuleFormat: "cjs",
};
```

The [`serverDependenciesToBundle`](https://remix.run/docs/en/1.19.0/file-conventions/remix-config#serverdependenciestobundle) field tells Remix to transpile and include the `"react-image-grid-gallery"` package in the server bundle.

## Note for NextJS users

[NextJS](https://nextjs.org/) users should declare the [`"use client"`](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) directive at the top of their file. It should sit above all other `import` statements like so:

```diff
+ "use client";
import { ImageGallery } from "react-image-grid-gallery";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
```

The `"use client"` directive tells NextJS to consider all modules imported into the page as part of the Client Component module graph.

The `ImageGallery` package works _only_ as a Client Component because it uses React's State and Lifecycle effects, such as `useState()` and `useEffect()`.

## Note for Docusaurus users

Did you get a `ReferenceError: crypto is not defined` error during the build step? If so, this note is for you.

Wrap the `ImageGallery` component in [`<BrowserOnly>`](https://docusaurus.io/docs/next/advanced/ssg#browseronly) if you get a `ReferenceError: crypto is not defined` error during your build step.

```jsx
import BrowserOnly from "@docusaurus/BrowserOnly";

function YourComponent() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const ImageGallery = require("react-image-grid-gallery").ImageGallery;
        return (
          <ImageGallery
            imagesInfoArray={imagesArray}
            columnCount={"auto"}
            columnWidth={230}
            gapSize={24}
          />
        );
      }}
    </BrowserOnly>
  );
}
```

This process is essential if your `imagesArray` uses the Web Crypto API. The `<BrowserOnly>` component tells Docusaurus to render the `ImageGallery` library only in the browser. It ensures that the Crypto API runs only in CSR (Client-Side Rendering) rather than during build or SSR (Server-Side Rendering).

## Build

```bash
npm run build
```

## YouTube Demo

[React Image Grid Gallery Demo](https://youtu.be/WoqO2AFxEMY)

## Support

🍵 [Buy me a coffee](https://www.buymeacoffee.com/codesweetly)
