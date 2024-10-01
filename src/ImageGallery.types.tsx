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

export interface ImageGalleryImageType {
    alt: string;
    caption?: string;
    src: string;
    key?: string;
}

export interface ImageGalleryPropsType {
  imagesInfoArray: ImageGalleryImageType[];
  columnCount?: string | number;
  columnWidth?: string | number;
  gapSize?: number;
  styles?: ImageGalleryStylesType;
  captionVisible?: boolean;
}
