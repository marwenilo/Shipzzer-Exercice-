import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

export default function Square({ SquareNumbers }) {
  console.log(SquareNumbers, "SquareNumbers");
  return (
    <div>
      {SquareNumbers &&
        SquareNumbers.map((el) => {
          if (el >= 0) {
            return <Icon fill="#FF0000" el={el} />;
          }
          if (el < 0) {
            return <Icon fill="#00FF00" el={el} />;
          }
        })}
    </div>
  );
}
