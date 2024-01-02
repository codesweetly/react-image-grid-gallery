export interface ImageGalleryPropsType {
  imagesInfoArray: Array<{
    alt: string;
    caption?: string;
    src: string;
  }>;
  columnWidth?: number;
  gapSize?: number;
}
