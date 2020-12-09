import React from "react";

const Icon = ({ fill, nbr }) => {
  let brightness;
  if (nbr < 0) {
    brightness = -nbr + 10;
  } else {
    brightness = nbr + 10;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77px"
      height="70px"
      margin="20px"
    >
      <g>
        <rect
          x="0"
          y="0"
          width="70"
          height="70"
          fill={fill}
          fill-opacity={`${brightness}%`}
        ></rect>
        <text x="20" y="40" font-family="Verdana" font-size="20" fill="black">
          {nbr}
        </text>
      </g>
    </svg>
  );
};
export default Icon;
