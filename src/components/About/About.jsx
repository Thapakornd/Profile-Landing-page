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
          I'm a student of <span>Computer Engineering</span> at Bangkok University.
          I'm a person who passionate with computer and how to improve <span>Software Performance.</span>
        </p>
        <p>
          I speak Thai and also a little bit in English. I love to research new technology or tech news.
          I've always wanted to improve my <span>Algorithm</span> to solve problems and English for more communication.
          <br /><br /> I'm open to <span>Job opportunities</span> where I can contribute, learn and grow.
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
