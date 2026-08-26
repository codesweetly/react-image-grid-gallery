export interface DragResult {
  action: "next" | "prev" | "cancel";
}

export interface ImageDataType {
  id: string | number;
  alt: string;
  caption?: string;
  cta?: {
    href: string;
    rel?: string;
    target?: string;
    text: string;
  };
  src: string;
  gridSrc?: string;
  thumbSrc?: string;
  srcSet?: string;
  mediaSizes?: string;
}

export interface ImgSrcInfoType {
  mediaSizes: string | undefined;
  src: string;
  srcSet: string | undefined;
}

export interface UseCarouselGestureProps {
  trackRef: React.RefObject<HTMLElement | null>;
  onDragEnd: (result: DragResult) => void;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
}
