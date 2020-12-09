import React from "react";
import Icon from "./Icon";

const Square = ({ SquareNumbers }) => {
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
};
export default Square;
