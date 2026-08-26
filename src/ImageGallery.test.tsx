import { expect, test, beforeAll, jest } from "@jest/globals";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ImageGallery } from "./ImageGallery";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = true;
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = jest.fn(function mock(
    this: HTMLDialogElement,
  ) {
    this.open = false;
    this.removeAttribute("open");
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  Element.prototype.scrollIntoView = jest.fn();
  Element.prototype.setPointerCapture = jest.fn();
  Element.prototype.releasePointerCapture = jest.fn();

  class MockPointerEvent extends Event {
    clientX: number;
    clientY: number;
    isPrimary: boolean;
    pointerId: number;
    constructor(type: string, props: any) {
      super(type, props);
      this.clientX = props?.clientX || 0;
      this.clientY = props?.clientY || 0;
      this.isPrimary = props?.isPrimary || false;
      this.pointerId = props?.pointerId || 0;
    }
  }
  window.PointerEvent = MockPointerEvent as any;
});

const imagesArray = [
  {
    id: crypto.randomUUID(),
    alt: "Image1's alt text",
    caption: "Image1's description",
    cta: {
      href: "https://example.com",
      rel: "noopener noreferrer",
      target: "_blank",
      text: "Learn more",
    },
    src: "https://cdn.pixabay.com/photo/2023/05/25/22/07/river-8018379_1280.jpg",
  },
  {
    id: crypto.randomUUID(),
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2400",
    gridSrc:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1280",
    thumbSrc:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=640",
    srcSet:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2400 2400w, https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1280 1280w, https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=640 640w",
    mediaSizes: "(max-width: 640px) 640w, (max-width: 1024px) 1280w, 2400px",
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
    alt: "Image13's alt text",
    caption: "Image13's description",
    src: "https://cdn.pixabay.com/photo/2023/09/29/12/38/winter-8283735_640.jpg",
  },
];

test("image gallery renders correctly", () => {
  render(
    <ImageGallery
      imagesData={imagesArray}
      columnCount={1}
      columnWidth={300}
      gapSize={2}
    />,
  );
});

test("image gallery works with only the imagesData prop", () => {
  render(<ImageGallery imagesData={imagesArray} />);
});

test("image gallery works with fixed caption", () => {
  render(
    <ImageGallery
      imagesData={imagesArray}
      columnCount={1}
      columnWidth={300}
      gapSize={2}
      fixedCaption={true}
    />,
  );
});

test("image gallery works with custom thumbnail border", () => {
  render(
    <ImageGallery
      imagesData={imagesArray}
      thumbnailBorder="medium dashed pink"
    />,
  );
});

test("image gallery works with lazy loading", () => {
  render(
    <ImageGallery imagesData={imagesArray} lazy={true} lazyFromIndex={6} />,
  );
});

test("image gallery works without lightbox", () => {
  render(
    <ImageGallery imagesData={imagesArray} enableDefaultLightbox={false} />,
  );
});

test("customizing image click action without using the built-in imageData and index parameters works", () => {
  render(
    <ImageGallery
      imagesData={imagesArray}
      enableDefaultLightbox={false}
      customizeImageClickAction={() => console.log("You clicked an image!")}
    />,
  );
});

test("customizing image click action with the built-in imageData and index parameters works", () => {
  render(
    <ImageGallery
      imagesData={imagesArray}
      enableDefaultLightbox={false}
      customizeImageClickAction={(imageData, index) =>
        console.log("You clicked an image!", imageData, index)
      }
    />,
  );
});

test("lightbox navigation updates counter and loops correctly", async () => {
  render(<ImageGallery imagesData={imagesArray} />);

  // Open lightbox on image 9
  const img9 = screen.getAllByAltText("Image9's alt text")[0];
  fireEvent.click(img9);

  // Initial state should be 9 / 13
  expect(await screen.findByText("9 / 13")).toBeTruthy();

  // Click next button
  const nextBtn = screen.getByTitle("Next image");
  act(() => {
    fireEvent.click(nextBtn);
  });
  expect(await screen.findByText("10 / 13")).toBeTruthy();

  // Click previous button twice to go to 8
  const prevBtn = screen.getByTitle("Previous image");
  act(() => {
    fireEvent.click(prevBtn);
  });
  act(() => {
    fireEvent.click(prevBtn);
  });
  expect(await screen.findByText("8 / 13")).toBeTruthy();
});

test("lightbox looping boundary 13 -> 1 and 1 -> 13", async () => {
  render(<ImageGallery imagesData={imagesArray} />);

  // Open lightbox on last image
  const img13 = screen.getAllByAltText("Image13's alt text")[0];
  fireEvent.click(img13);
  expect(await screen.findByText("13 / 13")).toBeTruthy();

  // Click next -> should loop to 1
  const nextBtn = screen.getByTitle("Next image");
  act(() => {
    fireEvent.click(nextBtn);
  });
  expect(screen.getByText("1 / 13")).toBeTruthy();

  // Click prev -> should loop back to 13
  const prevBtn = screen.getByTitle("Previous image");
  act(() => {
    fireEvent.click(prevBtn);
  });
  expect(screen.getByText("13 / 13")).toBeTruthy();
});

test("lightbox gesture navigation threshold and state update", async () => {
  render(<ImageGallery imagesData={imagesArray} />);

  // Open lightbox on image 1
  const img1 = screen.getAllByAltText("Image1's alt text")[0];
  fireEvent.click(img1);
  expect(await screen.findByText("1 / 13")).toBeTruthy();

  // Find the track container
  const track = document.querySelector(
    ".cs-rigg-carousel-track",
  ) as HTMLElement;
  if (!track) throw new Error("Track not found");

  // Mock getBoundingClientRect for trackWidth
  track.getBoundingClientRect = () => ({ width: 1000 }) as any;

  const originalNow = performance.now;
  let currentTime = 0;
  jest.spyOn(performance, "now").mockImplementation(() => currentTime);

  // 1. Short slow drag (should cancel) - deltaX < 200, duration > 250
  act(() => {
    currentTime = 0;
    fireEvent.pointerDown(track, {
      isPrimary: true,
      clientX: 500,
      clientY: 500,
      pointerId: 1,
    });
  });
  act(() => {
    currentTime = 500;
    fireEvent.pointerMove(track, {
      isPrimary: true,
      clientX: 450,
      clientY: 500,
      pointerId: 1,
    }); // deltaX = -50
  });
  act(() => {
    currentTime = 510;
    fireEvent.pointerUp(track, { isPrimary: true, pointerId: 1 });
  });
  expect(await screen.findByText("1 / 13")).toBeTruthy(); // Cancelled

  // 2. Long slow drag (should commit next) - deltaX < -200, duration > 250
  act(() => {
    currentTime = 1000;
    fireEvent.pointerDown(track, {
      isPrimary: true,
      clientX: 500,
      clientY: 500,
      pointerId: 1,
    });
  });
  act(() => {
    currentTime = 1500;
    fireEvent.pointerMove(track, {
      isPrimary: true,
      clientX: 200,
      clientY: 500,
      pointerId: 1,
    }); // deltaX = -300
  });
  act(() => {
    currentTime = 1510;
    fireEvent.pointerUp(track, { isPrimary: true, pointerId: 1 });
  });
  expect(await screen.findByText("2 / 13")).toBeTruthy();

  // 3. Short fast flick (should commit next) - deltaX < 200, duration < 250
  act(() => {
    currentTime = 2000;
    fireEvent.pointerDown(track, {
      isPrimary: true,
      clientX: 500,
      clientY: 500,
      pointerId: 1,
    });
  });
  act(() => {
    currentTime = 2050; // 50ms duration
    fireEvent.pointerMove(track, {
      isPrimary: true,
      clientX: 450,
      clientY: 500,
      pointerId: 1,
    }); // deltaX = -50
  });
  act(() => {
    currentTime = 2060;
    fireEvent.pointerUp(track, { isPrimary: true, pointerId: 1 });
  });
  expect(await screen.findByText("3 / 13")).toBeTruthy();

  performance.now = originalNow;
});

test("direct thumbnail navigation completely resets state", async () => {
  render(<ImageGallery imagesData={imagesArray} />);

  // Open lightbox on image 1
  const img1 = screen.getAllByAltText("Image1's alt text")[0];
  fireEvent.click(img1);
  expect(await screen.findByText("1 / 13")).toBeTruthy();

  // Show thumbnails and click thumbnail for image 4
  const toggleThumbBtn = screen.getByTitle("Show thumbnails");
  fireEvent.click(toggleThumbBtn);

  const thumbs = document.querySelectorAll(".cs-rigg-modal-thumb-imgs-pod img");
  expect(thumbs.length).toBe(13);

  act(() => {
    fireEvent.click(thumbs[3]); // index 3 is image 4
  });

  // Counter should instantly be 4 / 13
  expect(await screen.findByText("4 / 13")).toBeTruthy();

  // Ensure Next button goes to 5, meaning state is perfectly synced
  const nextBtn = screen.getByTitle("Next image");
  act(() => {
    fireEvent.click(nextBtn);
  });
  expect(await screen.findByText("5 / 13")).toBeTruthy();

  // Click thumbnail 10
  act(() => {
    fireEvent.click(thumbs[9]); // index 9 is image 10
  });
  expect(await screen.findByText("10 / 13")).toBeTruthy();

  // Previous button goes to 9
  const prevBtn = screen.getByTitle("Previous image");
  act(() => {
    fireEvent.click(prevBtn);
  });
  expect(await screen.findByText("9 / 13")).toBeTruthy();
});

test("backdrop click closes lightbox, but content click does not", async () => {
  render(<ImageGallery imagesData={imagesArray} />);

  // Open lightbox
  fireEvent.click(screen.getAllByAltText("Image1's alt text")[0]);
  expect(await screen.findByText("1 / 13")).toBeTruthy();

  // Click the image - should not close
  const modalImg = document.querySelector(
    ".cs-rigg-modal-image",
  ) as HTMLElement;
  fireEvent.click(modalImg);
  expect(screen.queryByText("1 / 13")).toBeTruthy(); // still open

  // Click toolbar button - should not close
  const nextBtn = screen.getByTitle("Next image");
  fireEvent.click(nextBtn);
  expect(screen.queryByText("2 / 13")).toBeTruthy(); // still open, just moved to slide 2

  // Click the backdrop area (the track container empty space)
  const backdrop = document.querySelector(
    ".cs-rigg-carousel-track-container",
  ) as HTMLElement;
  act(() => {
    fireEvent.click(backdrop);
  });

  // Should close
  const dialog = document.querySelector(".cs-rigg-dialog") as HTMLDialogElement;
  expect(dialog.open).toBe(false);
});

test("scroll lock lifecycle correctly restores exactly previous styles", async () => {
  // Set initial overflow to something custom
  document.documentElement.style.overflow = "scroll";

  const { unmount } = render(<ImageGallery imagesData={imagesArray} />);

  expect(document.documentElement.style.overflow).toBe("scroll");

  // Open lightbox
  fireEvent.click(screen.getAllByAltText("Image1's alt text")[0]);
  expect(await screen.findByText("1 / 13")).toBeTruthy();

  // Should be locked
  expect(document.documentElement.style.overflow).toBe("hidden");

  // Close via escape
  act(() => {
    const dialog = document.querySelector(
      ".cs-rigg-dialog",
    ) as HTMLDialogElement;
    fireEvent(dialog, new Event("cancel"));
  });

  expect(
    (document.querySelector(".cs-rigg-dialog") as HTMLDialogElement).open,
  ).toBe(false);

  // Should exact restore previous style
  expect(document.documentElement.style.overflow).toBe("scroll");

  // Test unmount cleanup
  fireEvent.click(screen.getAllByAltText("Image1's alt text")[0]);
  expect(await screen.findByText("1 / 13")).toBeTruthy();
  expect(document.documentElement.style.overflow).toBe("hidden");

  unmount();
  expect(document.documentElement.style.overflow).toBe("scroll");
});
