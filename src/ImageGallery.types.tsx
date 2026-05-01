export interface ImageInfoType {
  id: string | number;
  alt: string;
  caption?: string;
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
    imageInfo?: ImageInfoType,
    index?: number,
  ) => void;
  enableDefaultLightbox?: boolean;
  fixedCaption?: boolean;
  gapSize?: number;
  imagesData: Array<ImageInfoType>;
  lazy?: boolean;
  lazyFromIndex?: number;
  thumbnailBorder?: string;
}

export interface ImgSrcInfoType {
  mediaSizes: string | undefined;
  src: string;
  srcSet: string | undefined;
}
