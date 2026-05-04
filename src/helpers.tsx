import { ReactElement } from "react";

export function SvgElement(pathElement: ReactElement) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      {pathElement}
    </svg>
  );
}

export function updateCaptionOpacity(
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  range: string,
) {
  const figcaption = e.currentTarget.querySelector("figcaption");
  figcaption && (figcaption.style.opacity = range);
}
