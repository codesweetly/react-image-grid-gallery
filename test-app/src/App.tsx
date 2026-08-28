import { ImageGallery } from "react-image-grid-gallery";
import "react-image-grid-gallery/dist/style.css";

function App() {
  const imagesData = [
    {
      id: "1",
      alt: "Image1",
      src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2400",
      caption: "Image 1",
    },
    {
      id: "2",
      alt: "Image2",
      src: "https://cdn.pixabay.com/photo/2020/09/14/15/10/birch-tree-5571242_1280.png",
      caption: "Image 2",
    },
    {
      id: "3",
      alt: "Image3",
      src: "https://images.unsplash.com/photo-1519016871193-d90e3a64d0f5?q=80&w=1974",
      caption: "Image 3",
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <h1>Test App</h1>
      <ImageGallery imagesData={imagesData} />
    </div>
  );
}

export default App;
