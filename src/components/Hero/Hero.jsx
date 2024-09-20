import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import handicon from "../assests/hand_icon.png";
import arrowicon from "../assests/arrow.png";
import serum from "../assests/serum (3).jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>NEW</p>
            <img src={handicon} alt="HandIcon" className="hand-icon-img" />
          </div>
          <p>COLLECTION</p>
          <p>FOR EVERYONE</p>
        </div>
        <div className="hero-latest-btn">
          <div>LATEST COLLECTION</div>
          <img src={arrowicon} alt="ArrowIcon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={serum} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
