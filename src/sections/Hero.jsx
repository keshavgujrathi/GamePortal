import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="text-section">
        <h1 className="hero-title">Arena</h1>
        <p className="hero-paragraph">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
        </p>
      </div>
      <div className="hero-image-container">
        <img
          src="/assets/foxl.png"
          alt="Polygonal fox"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
