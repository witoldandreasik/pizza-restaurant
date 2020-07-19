import React from "react";
import "./Map.scss";

function Map() {
  return (
    <section className="map__container">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d82057.96331863137!2d21.918415523777664!3d50.00551920315985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x473cfae3cc14d449%3A0xd2240d31b33eb2ed!2zUnplc3rDs3c!3m2!1d50.0411867!2d21.9991196!5e0!3m2!1spl!2spl!4v1595181849635!5m2!1spl!2spl"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  );
}
export default Map;
