import React from "react";
import "./Work.scss";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

const Work = () => {
  return (
    <div className="work">
      <div className="normal-wrapper">
        <div className="logo">
          <span>MY PROJECTS</span>
          <h1>Personal project that I've done containing its own case study</h1>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/non-preemtive-priority.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/unity-2D-game.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/python-selenium.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="normal-wrapper">
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/least-freq-used.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/cafe-management.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <div className="project-img">
              <img src="/public/project/mern-auth.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Non Preemtive Priority Desktop Application</h3>
              <p>
                I created my Non Preemtive Priority for mini project in
                operating system class. This project create for completely
                understand its algorithm with Python.
              </p>
            </div>
          </a>
        </div>
        <div className="btn-github">
            <a href="#">VIEW ALL PROJECTS ON GITHUB</a>
        </div>
      </div>
    </div>
  );
};

export default Work;
