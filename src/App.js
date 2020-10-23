import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const handleClick = function (value) {
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
  };
  const calculate = function () {
    const result = evaluate(expression);
    setExpression(result);
  };
  const clear = function () {
    setExpression("");
  };
  const [expression, setExpression] = React.useState("65564");
  return (
    <>
      <div className="screen">{expression}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*"].map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}

      <button onClick={calculate}>=</button>
      <button onClick={clear}>clear</button>
    </>
  );
}
