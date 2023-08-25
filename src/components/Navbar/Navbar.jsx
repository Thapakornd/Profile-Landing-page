import React, { useEffect, useState } from "react";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Thapakorn.<span>GUS</span>
        </h1>
        <div className="check-btn">
          <ViewStreamIcon sx={{ fontSize: "2.5rem"}}/>
        </div>
      </div>
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="contact">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
