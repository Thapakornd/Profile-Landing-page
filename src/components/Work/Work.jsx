import React from "react";
import "./Work.scss";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

const Work = () => {
  return (
    <div className="work" id="projects">
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
              <h3>Game 2D with unity</h3>
              <p>
                I created game 2D with unity in free time at end of semester.
                This project create for myself desire. I want to understand
                sample logic to create sample game and try unity for create this.
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
              <h3>Python Selenium for Automate Website</h3>
              <p>
                I created this web automate for myself to automate website.
                This project create for automate website of line store to add
                item whatever I want in automate system with selenium, 
                This is for case study only.
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
              <h3>Least Frequency Used Desktop Application</h3>
              <p>
                I created my LFU simulation for a mini project in operation system class.
                This project create to test my algorithm used in project. I created algorithm with
                Python and used WinForm to create desktop application link with IronPython Lib.
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
              <h3>Cafe Management With Java (Desktop Application)</h3>
              <p>
                I create my cafe management application with Java and Netbean for desktop application.
                This project created for myself desire. Its can add coffee to bill and print invoice.
                This project for case study.
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
              <h3>MERN Stack Project Auth with jsonwebtoken</h3>
              <p>
                I created my MERN stack for myself desire and for know how jsonwebtoken work.
                This project can use auth with login and register page. When you login if you are admin
                you will see other user in admin page. If not, you can only access blog page.
                In this page you can post blog and delete only your blog you created.
              </p>
            </div>
          </a>
        </div>
        <div className="btn-github">
            <a href="https://github.com/Thapakornd?tab=repositories" target="noreferrer">VIEW ALL PROJECTS ON GITHUB</a>
        </div>
      </div>
    </div>
  );
};

export default Work;
