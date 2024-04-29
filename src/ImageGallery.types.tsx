export interface ImageGalleryPropsType {
  imagesInfoArray: Array<{
    alt: string;
    caption?: string;
    src: string;
  }>;
  columnCount?: string | number;
  columnWidth?: string | number;
  gapSize?: number;
}
