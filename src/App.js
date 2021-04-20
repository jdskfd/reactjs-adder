import React from "react";
import "./styles.css";
const { useState } = React;

const Sub = (props) => {
  return <div onClick={() => props.SetAns(props.Ans - props.Input)}>Sub</div>;
};

const Counter = () => {
  const adder = (ans, input) => {
    let i = parseInt(input, 10);
    let result = ans + i;
    console.log(result);
    setAns(result);
  };

  let [ans, setAns] = useState(0);
  let [input, setInput] = useState(0);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div onClick={() => adder(ans, input)}>plus</div>

      {ans > 0 ? (
        <Sub Ans={ans} SetAns={setAns} Input={input}></Sub>
      ) : (
        // <div onClick={() => minos(ans, input)}>minos</div>
        console.log("yes")
      )}

      <h1>answer:{ans}</h1>
    </div>
  );
};

export default Counter;
