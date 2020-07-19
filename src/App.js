import React from "react";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/About/About";
import ParallaxQuality from "./components/ParallaxQuality/ParallaxQuality";
import Menu from "./components/Menu/Menu";
import Opinions from "./components/Opinions/Opinions";
import Map from "./components/Map/Map";
import Contact from "./components/Contact/Contact";
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
      <Contact />
      <div style={{ height: "300vh" }}></div>
      {/* div to test parallax and page behaviour*/}
    </div>
  );
}

export default App;
