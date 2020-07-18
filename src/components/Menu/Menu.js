import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import "./Menu.scss";

function Menu({ productsImages }) {
  const [toggler, setToggler] = useState(false);

  return (
    <section>
      <div className="menu">
        <div className="menu__all">
          <div className="menu__row">
            <div className="menu__info">
              <h2 className="menu__title">Discover</h2>
              <h4 className="menu__subtitle">OUR MENU</h4>
              <p className="menu__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                exercitationem enim nemo architecto, dolore consectetur quod
                ipsa expedita perspiciatis temporibus labore natus ut autem
                cupiditate, odio nulla maiores iste fuga.
              </p>
              <button
                className="menu__button-lightbox"
                onClick={() => setToggler(!toggler)}
              >
                Photos
              </button>
              <button className="menu__button-lightbox">Menu</button>
            </div>
            <div className="menu__images">
              <FsLightbox
                toggler={toggler}
                sources={[
                  require("../../assets/pizza-5001588_1920.jpg"),
                  require("../../assets/pizza-4215445_1920.jpg"),
                  require("../../assets/pizza-4205701_1920.jpg"),
                  require("../../assets/pizza-3525673_1920.jpg"),
                ]}
              />
              <img
                className="menu__img"
                src={require("../../assets/pizza-5001588_1920.jpg")}
                alt="Pizza 1"
              />
              <img
                className="menu__img"
                src={require("../../assets/pizza-4215445_1920.jpg")}
                alt="Pizza 2"
              />
              <img
                className="menu__img"
                src={require("../../assets/pizza-4205701_1920.jpg")}
                alt="Pizza 3"
              />
              <img
                className="menu__img"
                src={require("../../assets/pizza-3525673_1920.jpg")}
                alt="Pizza 4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Menu;
