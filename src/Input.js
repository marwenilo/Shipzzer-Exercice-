import React, { useState } from "react";

const Input = ({ setGetNbr }) => {
  const [InputValue, setInputValue] = useState();

  const handelInput = () => {
    if (InputValue >= 0) {
      setGetNbr(Number(InputValue));
      setInputValue(0);
    } else {
      setInputValue(0);
      alert("Please put a positive Number");
    }
  };

  return (
    <div className="input-container">
      <input
        type="number"
        value={InputValue}
        defaultValue="0"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handelInput}>Load</button>
    </div>
  );
};

export default Input;
