import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="block"></div>
      <div className="content-main">
        <div className="profile">
          <img src="/profile/profile.jpg" alt="" />
        </div>
        <div className="content-1">
          <h1>
            I'm Thapakorn Meethan.
            <br />
            <span>Computer Engineering </span>
          </h1>
          <p>
            I'm a person who passionate software developer.
            If you have great project that needs skills. I'm can be your guy.
          </p>
          <div className="btn-project">
            <a href="#projects" >
              PROJECTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
