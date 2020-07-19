import React from "react";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/About/About";
import ParallaxQuality from "./components/ParallaxQuality/ParallaxQuality";
import Menu from "./components/Menu/Menu";
import Opinions from "./components/Opinions/Opinions";
import Map from "./components/Map/Map";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Parallax />
      <About />
      <ParallaxQuality />
      <Menu />
      <Opinions />
      <Map />
      <div style={{ height: "300vh" }}></div>
    </div>
  );
}

export default App;
