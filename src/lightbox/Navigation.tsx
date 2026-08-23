import { SvgElement } from "../helpers";

interface NavigationProps {
  changeSlide: (direction: -1 | 1) => void;
  showControls: boolean;
}

export function Navigation({ changeSlide, showControls }: NavigationProps) {
  return (
    <>
      <button
        aria-label="Previous image"
        className="cs-rigg-modal-slide-btn cs-rigg-nav-prev"
        onClick={() => changeSlide(-1)}
        style={{ opacity: showControls ? 1 : 0 }}
        title="Previous image"
        type="button"
      >
        {SvgElement(
          <path
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            fillRule="evenodd"
          />,
        )}
      </button>
      <button
        aria-label="Next image"
        className="cs-rigg-modal-slide-btn cs-rigg-nav-next"
        onClick={() => changeSlide(1)}
        style={{ opacity: showControls ? 1 : 0 }}
        title="Next image"
        type="button"
      >
        {SvgElement(
          <path
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            fillRule="evenodd"
          />,
        )}
      </button>
    </>
  );
}
