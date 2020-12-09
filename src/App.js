import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./Input";
import Square from "./Square";

const App = () => {
  const [GetNbr, setGetNbr] = useState();

  const [ArrayNbr, setArrayNbr] = useState([]);

  useEffect(() => {
    getRandomInt();
  }, [GetNbr]);

  const getRandomInt = () => {
    let arr = [...ArrayNbr];
    for (let i = 1; i <= GetNbr; i++) {
      let y = Math.floor(Math.random() * 201) - 100;
      arr = [...arr, y];
    }
    setArrayNbr([...arr]);
    setGetNbr(0);
  };

  return (
    <div className="App">
      <Input setGetNbr={setGetNbr} />
      <Square SquareNumbers={ArrayNbr} />
    </div>
  );
};

export default App;
