import { useState } from "react";
import Header from "./components/Header.jsx";
import { Button } from "@/components/ui/button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Button variant="default">Click me </Button>
    </>
  );
}

export default App;
