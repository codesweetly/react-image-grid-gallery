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
  modalThumbnailSectionStyle?: React.CSSProperties;
  modalImageContainerStyle?: React.CSSProperties;
  modalImageStyle?: React.CSSProperties;
  modalSlideBtnStyle?: React.CSSProperties;
}

export interface ImageGalleryPropsType {
  imagesInfoArray: Array<{
    id: string | number;
    alt: string;
    caption?: string;
    src: string;
    gridSrc?: string;
    thumbSrc?: string;
    srcSet?: string;
    mediaSizes?: string;
  }>;
  columnCount?: string | number;
  columnWidth?: string | number;
  gapSize?: number;
  fixedCaption?: boolean;
  thumbnailBorder?: string;
  lazy?: boolean;
  lazyFromIndex?: number;
  customStyles?: ImageGalleryStylesType;
}

export interface ImgSrcInfoType {
  src: string;
  srcSet: string | undefined;
  mediaSizes: string | undefined;
}
