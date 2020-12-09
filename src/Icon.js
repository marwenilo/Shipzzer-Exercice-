import React from "react";

export default function Icon({ fill, el }) {
  let brightness;
  if (el < 0) {
    brightness = -el + 10;
  } else {
    brightness = el + 10;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="77px" height="70px">
      <filter id="blurMe"></filter>
      <g>
        <rect
          x="0"
          y="0"
          width="70"
          height="70"
          fill={fill}
          stroke="blue"
          filter="blurMe"
          fill-opacity={`${brightness}%`}
        ></rect>
        <text x="20" y="40" font-family="Verdana" font-size="20" fill="black">
          {el}
        </text>
      </g>
    </svg>
  );
}
