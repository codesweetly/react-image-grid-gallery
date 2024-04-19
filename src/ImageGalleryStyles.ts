export class ImageGalleryStyles {
  galleryContainerStyle: React.CSSProperties;
  imageContainerStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  imageCaptionStyle: React.CSSProperties;
  modalMainContainerStyle: React.CSSProperties;
  modalNavSectionStyle: React.CSSProperties;
  modalCloseBtnStyle: React.CSSProperties;
  modalSlideShowSectionStyle: React.CSSProperties;

  constructor(
    gapSize?: number,
    columnWidth?: number,
    showModal?: boolean,
    imageSrc?: string
  ) {
    this.galleryContainerStyle = {
      columnWidth: `${columnWidth}px`,
      columnGap: `${gapSize}px`,
    };
    this.imageContainerStyle = {
      margin: 0,
      marginBottom: `${gapSize}px`,
      position: "relative",
    };
    this.imageStyle = {
      display: "block",
      width: "100%",
      cursor: "pointer",
    };
    this.imageCaptionStyle = {
      opacity: 0,
      position: "absolute",
      bottom: 0,
      zIndex: "1000",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      background:
        "linear-gradient(180deg, rgba(25, 27, 38, 0), rgba(25, 27, 38, 1))",
      padding: "16px",
      fontSize: "0.85rem",
      textAlign: "center",
      color: "#fff",
    };
    this.modalMainContainerStyle = {
      position: "fixed",
      display: `${showModal ? "block" : "none"}`,
      zIndex: 2000,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.7)",
    };
    this.modalNavSectionStyle = {
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      paddingInline: "30px",
      width: "inherit",
    };
    this.modalCloseBtnStyle = {
      fontSize: "2.1rem",
      cursor: "pointer",
    };
    this.modalSlideShowSectionStyle = {
      display: "flex",
      width: "inherit",
      height: "inherit",
      backgroundImage: `url(${imageSrc})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
    };
  }
}

// Ref:
// - https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types
// - https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
