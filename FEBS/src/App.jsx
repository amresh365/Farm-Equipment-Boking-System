import { useState } from "react";
import "./App.css";
import HomePage from "./screen/HomePageScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-layout">
        <HomePage />
      </div>
    </>
  );
}

export default App;
