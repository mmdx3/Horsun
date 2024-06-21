import React from "react";

const BrandIcon = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5384 12.1185L12.2546 21.506L2.9707 12.1185L12.2546 2.73096C14.8179 0.138961 18.975 0.138961 21.5384 2.72825C24.1045 5.32566 24.1045 9.52648 21.5384 12.1185Z"
        fill="#D51F26"
        stroke="black"
        stroke-width="0.916208"
        stroke-miterlimit="10"
      />
      <path
        d="M7.61273 14.0664C11.2385 14.0664 14.1778 11.0943 14.1778 7.42798C14.1778 3.76168 11.2385 0.789551 7.61273 0.789551C3.98691 0.789551 1.04761 3.76168 1.04761 7.42798C1.04761 11.0943 3.98691 14.0664 7.61273 14.0664Z"
        fill="#FFCB05"
        stroke="black"
        stroke-width="0.916208"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default BrandIcon;
