import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

export default function Square({ SquareNumbers }) {
  console.log(SquareNumbers, "SquareNumbers");
  return (
    <div className="square-container">
      {SquareNumbers &&
        SquareNumbers.map((el) => {
          if (el >= 0) {
            return <Icon fill="#FF0000" nbr={el} />;
          }
          if (el < 0) {
            return <Icon fill="#00FF00" nbr={el} />;
          }
        })}
    </div>
  );
}
