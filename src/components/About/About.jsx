import React from "react";
import "./About.scss";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="head">
        <h1>ABOUT ME</h1>
        <p>
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="r-1">
        <h3>Get to know me!</h3>
        <p>
          I'm a student of computer engineering at Bangkok University,
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At esse
          commodi, aut temporibus quidem a rerum? Quos soluta at suscipit eum
          sunt quo, officiis porro adipisci possimus voluptatem excepturi
          quaerat.
        </p>
        <div className="btn-contact">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
      <div className="r-2">
        <h3>My Skills</h3>
        <div className="content-skill">
          <div className="box">HTML</div>
          <div className="box">CSS</div>
          <div className="box">JavaScript</div>
          <div className="box">React</div>
          <div className="box">SASS</div>
          <div className="box">GIT</div>
          <div className="box">Github</div>
          <div className="box">Responsive Design</div>
          <div className="box">Express</div>
          <div className="box">SQL</div>
          <div className="box">Python</div>
          <div className="box">Java</div>
          <div className="box">C</div>
          <div className="box">C#</div>
        </div>
      </div>
    </div>
  );
};

export default About;
