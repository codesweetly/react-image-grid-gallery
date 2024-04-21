export class ImageGalleryStyles {
  galleryContainerStyle: React.CSSProperties;
  imageContainerStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  imageCaptionStyle: React.CSSProperties;
  modalMainContainerStyle: React.CSSProperties;
  modalNavSectionStyle: React.CSSProperties;
  modalNavSlideNumberStyle: React.CSSProperties;
  modalNavToolbarStyle: React.CSSProperties;
  modalNavBtnStyle: React.CSSProperties;
  modalSlideShowSectionStyle: React.CSSProperties;
  modalSlideArrowsStyle: React.CSSProperties;

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
      zIndex: 7000000000,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.73)",
      WebkitBackdropFilter: "blur(5px)",
      backdropFilter: "blur(5px)",
    };
    this.modalNavSectionStyle = {
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "inherit",
    };
    this.modalNavSlideNumberStyle = {
      padding: "13px",
      fontSize: "0.93rem",
    };
    this.modalNavToolbarStyle = {
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(35, 35, 35, 0.65)",
    };
    this.modalNavBtnStyle = {
      padding: "13px",
      cursor: "pointer",
    };
    this.modalSlideShowSectionStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "inherit",
      height: "inherit",
      backgroundImage: `url(${imageSrc})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
    };
    this.modalSlideArrowsStyle = {
      marginInline: "7px",
      padding: "10px 15px",
      backgroundColor: "rgba(35, 35, 35, 0.65)",
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
    };
  }
}

// Ref:
// - https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types
// - https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
