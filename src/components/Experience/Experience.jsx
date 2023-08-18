import React from "react";
import "./Experience.scss";
import Card from "../Card/Card";

const data = [
  {
    title: "Beautiplex, IT Supoort Solution",
    description:
      "I've worked in beauty clinic in IT support internship position. For 2 mouth ago (SUMMER)",
  },
];

const Experience = () => {
  return (
    <div className="experience">
        <div className="box"></div>
      <div className="header-name">
        <span>WORK EXPERIENCE</span>
        <h1>Companies I have worked for in the past.</h1>
      </div>
      <div className="content">
        <img
          src="https://img.wongnai.com/p/1920x0/2014/10/01/5c40926675be4fdb94052df4fda2b795.jpg"
          alt=""
        />
        {data.map((val, i) => (
          <Card data={val} index={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
