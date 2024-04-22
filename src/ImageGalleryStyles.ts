export function imageGalleryStyles(
  gapSize?: number,
  columnWidth?: number,
  showModal?: boolean,
  imageSrc?: string
) {
  const galleryContainerStyle: React.CSSProperties = {
    columnWidth: `${columnWidth}px`,
    columnGap: `${gapSize}px`,
  };
  const imageContainerStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: `${gapSize}px`,
    position: "relative",
  };
  const imageStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    cursor: "pointer",
  };
  const imageCaptionStyle: React.CSSProperties = {
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
  const modalContainerStyle: React.CSSProperties = {
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
  const modalNavSectionStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "inherit",
  };
  const modalNavSlideNumberStyle: React.CSSProperties = {
    padding: "13px",
    fontSize: "0.93rem",
  };
  const modalNavToolbarStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(35, 35, 35, 0.65)",
  };
  const modalNavBtnStyle: React.CSSProperties = {
    padding: "13px",
    cursor: "pointer",
  };
  const modalSlideShowSectionStyle: React.CSSProperties = {
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
  const modalSlideArrowsStyle: React.CSSProperties = {
    marginInline: "7px",
    padding: "10px 15px",
    backgroundColor: "rgba(35, 35, 35, 0.65)",
    cursor: "pointer",
    userSelect: "none",
    WebkitUserSelect: "none",
  };

  return {
    galleryContainerStyle,
    imageContainerStyle,
    imageStyle,
    imageCaptionStyle,
    modalContainerStyle,
    modalNavSectionStyle,
    modalNavSlideNumberStyle,
    modalNavToolbarStyle,
    modalNavBtnStyle,
    modalSlideShowSectionStyle,
    modalSlideArrowsStyle,
  };
}
