import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxQuality.scss";

function ParallaxQuality() {
  return (
    <section>
      <Parallax
        blur={0}
        bgImage={require("../../assets/pizza-4952509_1920.jpg")}
        strength={600}
      >
        <div className="parallax-quality">
          <div className="parallax-quality__info">
            <h3 className="parallax-quality__text">
              Highest quality ingrediens and special recipe are our secret
            </h3>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default ParallaxQuality;
