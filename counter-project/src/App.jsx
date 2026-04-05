import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);

  return (
    <>
      <div className="center">
        <h1>Counter</h1>
      </div>

      <div>
        <p>Count : {count}</p>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>

      <div>
        <button style={{ margin: "5px 2px" }}>set count {count}</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
          style={{
            width: "100px",
            margin: "5px 2px",
            border: "1px solid white",
          }}
        />
      </div>
    </>
  );
}

export default App;
