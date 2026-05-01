export interface ImageGalleryPropsType {
  columnCount?: string | number;
  columnWidth?: string | number;
  customizeImageClickAction?: (notUsed?: any) => void;
  enableDefaultLightbox?: boolean;
  fixedCaption?: boolean;
  gapSize?: number;
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
  lazy?: boolean;
  lazyFromIndex?: number;
  thumbnailBorder?: string;
}

export interface ImgSrcInfoType {
  mediaSizes: string | undefined;
  src: string;
  srcSet: string | undefined;
}
