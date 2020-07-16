import React from "react";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__row">
          <div className="about__img-wrapper">
            <img
              className="about__img"
              src={require("../../assets/outdoor-cafe-705881_640.jpg")}
              alt="restaurant"
            />
          </div>
          <div className="about__info">
            <h2 className="about__title">Discover</h2>
            <h4 className="about__subtitle">WHO WE ARE</h4>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              accusamus debitis quo voluptatem beatae, placeat dolor quam
              ratione amet aliquid praesentium quidem! Vitae quibusdam impedit
              quas ipsa rerum rem modi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
