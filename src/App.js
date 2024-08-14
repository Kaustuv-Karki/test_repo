import "./App.css";
import Counter from "./component/Counter";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forex from "./component/Forex";
import Home from "./component/Home";

function App() {
  const [count, setCount] = useState(5);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/counter"
            element={<Counter count={count} setCount={setCount} />}
          />
          <Route path="/forex" element={<Forex />} />
        </Routes>
        {/* <Counter count={count} setCount={setCount} /> */}
      </Router>
    </div>
  );
}

export default App;
