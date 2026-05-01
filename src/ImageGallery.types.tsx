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
}

export interface ImgSrcInfoType {
  src: string;
  srcSet: string | undefined;
  mediaSizes: string | undefined;
}
