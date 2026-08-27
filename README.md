# React Image Grid Gallery

A responsive React image gallery component with an optional lightbox carousel for displaying image grids in React applications.

[![npm](https://img.shields.io/npm/v/react-image-grid-gallery)](https://www.npmjs.com/package/react-image-grid-gallery) [![NPM](https://img.shields.io/npm/l/react-image-grid-gallery)](https://github.com/codesweetly/react-image-grid-gallery/tree/main?tab=MIT-1-ov-file) [![Release](https://github.com/codesweetly/react-image-grid-gallery/actions/workflows/release.yml/badge.svg)](https://github.com/codesweetly/react-image-grid-gallery/actions/workflows/release.yml)

## Features

- SEO friendly
- Full-screen support
- Keyboard accessible
- Keyboard navigation
- Mobile responsive
- Swipe and gesture navigation
- Carousel-style lightbox
- Lightbox with translucent background
- Thumbnail navigation
- Image captions
- Lazy loading support
- Set column numbers dynamically or manually
- Resolution switching compatible
- Customizable styles

## Live Demo and Tutorial

Live demo, installation guide, and walkthrough:

https://codesweetly.com/react-image-grid-gallery

## Installation

Install the package with your preferred package manager.

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

Import the library and its stylesheet, then use it like this:

```js
import { ImageGallery } from "react-image-grid-gallery";
import "react-image-grid-gallery/style.css";

const imagesData = [
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
    cta: {
      href: "https://example.com",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "Learn more",
    },
    src: "http://example.com/image3.webp?w=2400",
    gridSrc: "http://example.com/image3.webp?w=1280",
    thumbSrc: "http://example.com/image3.webp?w=640",
    srcSet:
      "http://example.com/image3.webp?w=2400 2400w, http://example.com/image3.webp?w=1280 1280w, http://example.com/image3.webp?w=640 640w",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
  },
];

function App() {
  return <ImageGallery imagesData={imagesData} gapSize={24} />;
}
```

### Why import the stylesheet?

The components rely on predefined CSS classes for styling. Importing the stylesheet once ensures consistent styling across the gallery components.

## Lightbox Navigation

When the default lightbox is enabled, the gallery provides a carousel-style image viewing experience.

Users can navigate between images using:

- Previous and next controls
- Thumbnail navigation
- Keyboard arrow keys
- Swipe and gesture navigation on supported devices

The current image position is displayed in the lightbox, and the active thumbnail remains synchronized with the displayed image.

Swipe navigation is built into the default lightbox and requires no additional configuration.

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
<td><code>imagesData</code></td>
<td>array</td>
<td><code>undefined</code></td>
<td>

(**Required**) An array of objects containing the following properties:

- `id`: (**Required** - string or number) Each image's [unique identifying key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).
- `alt`: (**Required** - string) The image's [alternative text](https://webaim.org/techniques/alttext).
- `caption`: (**Optional** - string) The [image's description](https://www.studysmarter.co.uk/explanations/english/blog/image-caption).
- `cta`: (**Optional** - object) Adds a call-to-action link to the image's caption in the lightbox. The `cta` object accepts:
  - `href` (string, required): Destination URL.
  - `rel` (string): Link relationship between the current and the linked document (e.g., `noopener noreferrer` for security reasons when using `_blank`).
  - `target` (string): Where to open the linked document (e.g., `_blank` for a new tab).
  - `text` (string, required): CTA label.
- `src`: (**Required** - string) Default image [URL](https://codesweetly.com/web-address-url).
- `gridSrc`: (**Optional** - string) Preferred grid image's URL.
- `thumbSrc`: (**Optional** - string) Preferred thumbnail image's URL.
- `srcSet`: (**Optional** - string) [Resolution switching](https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes) image URLs and sizes.
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
<td><code>customizeImageClickAction</code></td>
<td>function</td>
<td><code>() => {}</code></td>
<td>

(**Optional**) A function to be executed when an image is clicked, if `enableDefaultLightbox` is `false`. This allows you to implement your own custom lightbox or any other action on image click.

The `customizeImageClickAction` function receives two arguments, `imageData` and `index`, which are automatically provided. These arguments give you access to the data of the clicked image.

**Example 1:**

```jsx
<ImageGallery
  imagesData={imagesData}
  enableDefaultLightbox={false}
  customizeImageClickAction={() => {
    console.log("Image clicked!");
  }}
/>
```

**Example 2:**

```jsx
<ImageGallery
  imagesData={imagesData}
  enableDefaultLightbox={false}
  customizeImageClickAction={(imageData, index) => {
    console.log("Image clicked:", imageData, index);
  }}
/>
```

**note:** The `customizeImageClickAction` feature is not compatible with the Astro framework, as [Astro does not support passing functions to hydrated components](https://docs.astro.build/en/guides/framework-components/#passing-props-to-framework-components).

</td>
</tr>

<tr>
<td><code>enableDefaultLightbox</code></td>
<td>boolean</td>
<td><code>true</code></td>
<td>

(**Optional**) Specify whether to use the package’s default lightbox. If set to `false`, you can use the `customizeImageClickAction` prop to implement your own lightbox or any other action when an image is clicked.

</td>
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
<td>

[`gapSize`](https://codesweetly.com/css-gap-property)

</td>
<td>number</td>
<td><code>24</code></td>
<td>(<strong>Optional</strong>) The gallery's gap size.</td>
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
<td><code>thumbnailBorder</code></td>
<td>string</td>
<td><code>"3px solid #fff"</code></td>
<td>(<strong>Optional</strong>) The thumbnail's border style.</td>
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
import "react-image-grid-gallery/style.css";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";
```

The `"use client"` directive tells NextJS to consider all modules imported into the page as part of the Client Component module graph.

The `ImageGallery` package works _only_ as a Client Component because it uses React's State and Lifecycle effects, such as `useState()` and `useEffect()`.

## Browser-Only APIs and Static Rendering

If your `imagesData` uses browser-only APIs such as the Web Crypto API (for example, `crypto.randomUUID()` to generate image IDs), you may need to ensure that the code generating those values runs only in the browser when using a framework or static site generator that performs server-side rendering (SSR) or static rendering (SSG).

**Example:**

```jsx
const imagesData = [
  {
    id: crypto.randomUUID(),
    alt: "A beautiful landscape",
    src: "/images/landscape.jpg",
  },
];
```

If your framework attempts to evaluate browser-only APIs during server-side rendering or the build process, you may encounter errors such as `ReferenceError: crypto is not defined`.

In such cases, follow your framework's recommended approach for deferring browser-only code to client-side execution.

**Note:** `react-image-grid-gallery` does not require the Web Crypto API. This consideration applies only when your application uses browser-only APIs while creating or processing the data passed to the gallery.

## Build

```bash
npm run build
```

## YouTube Demo

[React Image Grid Gallery Demo](https://youtu.be/WoqO2AFxEMY)

## Contributing

Contributions, bug reports, and suggestions are welcome and appreciated.

If you find an issue or have an improvement to propose, please open an issue or submit a pull request.

For larger changes, it is helpful to open an issue first so we can discuss the proposed direction before implementation.

## Need help?

Need help integrating this package, customizing the gallery, or solving a frontend implementation issue?

See [Let's build on CodeSweetly](https://codesweetly.com/work-with-me).

## Support

🍵 [Buy me a coffee](https://www.buymeacoffee.com/codesweetly)
