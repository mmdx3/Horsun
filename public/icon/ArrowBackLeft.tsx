import React from "react";
interface Iprops {
  width?: string;
  height?: string;
  smWidth?: string;
  smHeight?: string;
}

const ArrowBackLeft = ({ width, height , smWidth}: Iprops) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={smWidth ? `arrowbackletf` : ''}
    >
      <path
        d="M7.1775 4.44727L2.625 8.99977L7.1775 13.5523"
        stroke="#313131"
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.375 9H2.7525"
        stroke="#313131"
        stroke-width="1.125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowBackLeft;
