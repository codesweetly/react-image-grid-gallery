export interface ImageDataType {
  id: string | number;
  alt: string;
  caption?: string;
  cta?: {
    href: string;
    target: string;
    rel: string;
    text: string;
  };
  src: string;
  gridSrc?: string;
  thumbSrc?: string;
  srcSet?: string;
  mediaSizes?: string;
}

export interface ImageGalleryPropsType {
  columnCount?: string | number;
  columnWidth?: string | number;
  customizeImageClickAction?: (
    imageData?: ImageDataType,
    index?: number,
  ) => void;
  enableDefaultLightbox?: boolean;
  fixedCaption?: boolean;
  gapSize?: number;
  imagesData: Array<ImageDataType>;
  lazy?: boolean;
  lazyFromIndex?: number;
  thumbnailBorder?: string;
}

export interface ImgSrcInfoType {
  mediaSizes: string | undefined;
  src: string;
  srcSet: string | undefined;
}
