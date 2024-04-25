export function imageGalleryStyles(
  columnCount?: string | number,
  columnWidth?: string | number,
  gapSize?: number,
  showModal?: boolean
) {
  const galleryContainerStyle: React.CSSProperties = {
    columnCount,
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
    outline: "none",
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
  const modalSlideNumberStyle: React.CSSProperties = {
    zIndex: 1,
    position: "absolute",
    left: 0,
    padding: "13px",
    fontSize: "0.93rem",
    userSelect: "none",
    WebkitUserSelect: "none",
  };
  const modalToolbarStyle: React.CSSProperties = {
    zIndex: 1,
    position: "absolute",
    right: 0,
    alignItems: "center",
    backgroundColor: "rgba(35, 35, 35, 0.65)",
    cursor: "pointer",
  };
  const modalToolbarBtnStyle: React.CSSProperties = {
    border: "none",
    background: "none",
    padding: "13px",
    cursor: "pointer",
  };
  const modalSlideShowSectionStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "inherit",
    height: "inherit",
  };
  const modalSlideBtnStyle: React.CSSProperties = {
    border: "none",
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
    modalSlideNumberStyle,
    modalToolbarStyle,
    modalToolbarBtnStyle,
    modalSlideShowSectionStyle,
    modalSlideBtnStyle,
  };
}
