import React from "react";

import Parallax from "./components/Parallax/Parallax";
import "./App.scss";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <Parallax />
      <About />
    </div>
  );
}

export default App;
