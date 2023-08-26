import React, { useEffect, useState } from "react";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Thapakorn.<span>GUS</span>
        </h1>
        <div className="check-btn" onClick={() => setActive(!active)}>
          <ViewStreamIcon sx={{ fontSize: "2.5rem"}}/>
        </div>
      </div>
      <div className="drop-down">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
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
