import Counter from "./components/counter";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts.jsx";
import { useCounter } from "./store/counterStore.js";

export default function App() {
  const { count, increase, decrease, reset } = useCounter();
  return (
    <div>
      <h1>Zustand State Management </h1>
      <Counter />

      <p>Count Value : {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <Navbar />
      <Posts />
    </div>
  );
}
