import React, { useEffect, useState } from "react";

const Counter = ({ count, setCount }) => {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    setCounter(count);
  }, [count]);

  const [show, setShow] = useState(false);
  const add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    setCounter(counter - 1);
  };

  const submitValue = () => {
    setCount(counter);
    setShow(true);
  };

  const reset = () => {
    setCounter(count);
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={add}>Increase Count</button>
      <button onClick={subtract}>Decrease Count</button>
      <button onClick={submitValue}>Submit</button>
      <button onClick={reset}>Reset</button>
      {show && <h1>Final Value : {count}</h1>}
    </div>
  );
};

export default Counter;
