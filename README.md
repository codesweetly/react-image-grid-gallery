# React Image Grid Gallery

A simple, easy-to-use, and responsive image gallery component with a lightbox for displaying a grid of images in React apps.

![npm](https://img.shields.io/npm/v/react-image-grid-gallery) ![NPM](https://img.shields.io/npm/l/react-image-grid-gallery)

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
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={"auto"}
      columnWidth={230}
      gapSize={24}
    />
  );
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

- `alt`: (**Required**) The image's [alternative text](https://webaim.org/techniques/alttext).
- `caption`: (**Optional**) The [image's description](https://www.studysmarter.co.uk/explanations/english/blog/image-caption).
- `src`: (**Required**) The image's [URL](https://codesweetly.com/web-address-url).

</td>
</tr>
<tr>
<td>

[`columnCount`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-count-property)

</td>
<td>number or keyword (string)</td>
<td><code>"auto"</code></td>
<td>

(**Optional**) The number of columns.

</td>
</tr>
<tr>
<td>

[`columnWidth`](https://codesweetly.com/css-multi-column-layout-explained#what-is-a-css-column-width-property)

</td>
<td>number or keyword (string)</td>
<td><code>230</code></td>
<td>

(**Optional**) The minimum width of the gallery's columns.

</td>
</tr>
<tr>
<td>

[`gapSize`](https://codesweetly.com/css-gap-property)

</td>
<td>number</td>
<td><code>24</code></td>
<td>

(**Optional**) The gallery's gap size.

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

The `<BrowserOnly>` component tells Docusaurus to render the `ImageGallery` library only in the browser.

> **Note:** This process is essential because the `ImageGallery` package uses the Web Crypto API. Therefore, `BrowserOnly` ensures that the Crypto API runs only in CSR (Client-Side Rendering) rather than during build or SSR (Server-Side Rendering).

## Build

```bash
npm run build
```

## YouTube Demo

[React Image Grid Gallery Demo](https://youtu.be/WoqO2AFxEMY)

## Support

🍵 [Buy me a coffee](https://www.buymeacoffee.com/codesweetly)
