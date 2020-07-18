import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Opinions.scss";

import { Parallax } from "react-parallax";

function Opinions() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Parallax
        blur={0}
        bgImage={require("../../assets/9-design-ideas-for-small-dark-rooms-from tonchin-new-york.jpg")}
        strength={600}
      >
        <div className="carousel">
          <div className="carousel__container">
            <Slider {...settings}>
              <div className="carousel__item">
                <p className="carousel__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime molestias ad repudiandae id quae numquam, repellat
                  tempore sequi saepe eligendi odio, labore eum velit! Nostrum
                  quo obcaecati delectus voluptatibus quaerat?
                </p>
                <p className="carousel__customer">Alan Pietrzak</p>
              </div>
              <div className="carousel__item">
                <p className="carousel__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam tempore veniam distinctio aspernatur quae? Delectus
                  repudiandae praesentium ipsum neque enim? Ad sint in
                  asperiores optio pariatur quidem. Dolores, voluptatem
                  voluptatum.
                </p>
                <p className="carousel__customer">Irena Dąbrowska</p>
              </div>
              <div className="carousel__item">
                <p className="carousel__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima atque, ut nulla sapiente voluptatibus delectus unde
                  reiciendis id dolore facilis soluta. Nobis temporibus illo
                  asperiores non sint dicta obcaecati accusantium!
                </p>
                <p className="carousel__customer">Norbert Stępień</p>
              </div>
            </Slider>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default Opinions;
