import "./App.css";
import Counter from "./component/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
