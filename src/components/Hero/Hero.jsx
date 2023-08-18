import React from "react";
import "./Hero.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="back-1">
        <div></div>
      </div>
      <div className="hero">
        <div className="r-1">
          <div className="head-name">
            <p>Hello!</p>
            <h1>
              I'm <span>Thapakorn Meethan</span>
            </h1>
            <h3>Bangkok University Student</h3>
            <span>Computer Engineering</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            porro quasi quaerat aliquam autem id, dignissimos commodi harum
            fugit sit laborum, voluptatum, soluta placeat veniam dolores
            temporibus. Placeat, dignissimos inventore.
          </div>
          <div className="btn-contact">
            <a href="#" className="contact">
              Contact Me
            </a>
            <div className="service">
              <KeyboardDoubleArrowRightIcon fontSize="large" className="icon" />
              <a href="#">About Service</a>
            </div>
          </div>
        </div>
        <div className="r-2">
          <div className="profile">
            <img src="/public/profile/profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
