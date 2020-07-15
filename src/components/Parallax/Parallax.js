import React from "react";
import { Parallax } from "react-parallax";
import "./Parallax.scss";

function Jarallax() {
  return (
    <section>
      <Parallax
        blur={0}
        bgImage={require("../../assets/pizza-4812083_1920.jpg")}
        strength={600}
      >
        <div className="parallax">
          <div className="parallax__container">
            <div className="parallax__info">
              <div className="parallax__info-place">
                <h1 className="parallax__title">Welcome</h1>
                <h4 className="parallax__subtitle">To Pizza Restaurant</h4>
                <p className="parallax__description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam at repellat ea suscipit sit culpa minus corrupti
                  ratione libero iste maxime nihil reiciendis ullam minima in
                  saepe, sed animi quidem.
                </p>
                <a href="#">
                  <button className="parallax__button-round">About us</button>
                </a>
                <a href="#">
                  <button className="parallax__button-round">Our food</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
export default Jarallax;
