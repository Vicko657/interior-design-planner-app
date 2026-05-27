import React from "react";

export default function SVG({ path, viewbox, cn }) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      aria-hidden="true"
      className={cn}
    >
      <use href={`/imgs/${path}.svg`}></use>
    </svg>
  );
}
