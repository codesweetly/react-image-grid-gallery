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
