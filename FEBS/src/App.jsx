import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./screen/HomePageScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-layout">
        <HomePage />
      </div>
    </>
  );
}

export default App;
