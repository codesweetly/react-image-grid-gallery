export interface ImageGalleryStylesType {
  galleryContainerStyle?: React.CSSProperties;
  imageBtnStyle?: React.CSSProperties;
  imageContainerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  imageCaptionStyle?: React.CSSProperties;
  modalContainerStyle?: React.CSSProperties;
  modalSlideNumberStyle?: React.CSSProperties;
  modalToolbarStyle?: React.CSSProperties;
  modalToolbarBtnStyle?: React.CSSProperties;
  modalSlideShowSectionStyle?: React.CSSProperties;
  modalImageStyle?: React.CSSProperties;
  modalSlideBtnStyle?: React.CSSProperties;
}

export interface ImageGalleryPropsType {
  imagesInfoArray: Array<{
    id: string | number;
    alt: string;
    caption?: string;
    src: string;
  }>;
  columnCount?: string | number;
  columnWidth?: string | number;
  gapSize?: number;
  fixedCaption?: boolean;
  customStyles?: ImageGalleryStylesType;
}
