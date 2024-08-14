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
      <button style={styles.buttonStyles} onClick={add}>
        Increase Count
      </button>
      <button style={styles.buttonStyles} onClick={subtract}>
        Decrease Count
      </button>
      <button style={styles.buttonStyles} onClick={submitValue}>
        Submit
      </button>
      <button style={styles.buttonStyles} onClick={reset}>
        Reset
      </button>
      {show && <h1>Final Value : {count}</h1>}
    </div>
  );
};

export default Counter;

const styles = {
  buttonStyles: {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    color: "#333",
    cursor: "pointer",
  },
};
