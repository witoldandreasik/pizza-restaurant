import React from "react";

import Parallax from "./components/Parallax/Parallax";
import "./App.scss";
import About from "./components/About/About";
import ParallaxQuality from "./components/ParallaxQuality/ParallaxQuality";

function App() {
  return (
    <div className="app">
      <Parallax />
      <About />
      <ParallaxQuality />
      <div style={{ height: "300vh" }}></div>
    </div>
  );
}

export default App;
