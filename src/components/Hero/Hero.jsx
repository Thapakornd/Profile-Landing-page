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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            excepturi rem. Ratione porro dignissimos suscipit quibusdam a,
            deserunt quam veniam. Laudantium, id commodi? Reiciendis quod
            perspiciatis cupiditate impedit nisi dignissimos.
          </p>
          <div className="btn-project">
            <a href="#" >
              PROJECTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
