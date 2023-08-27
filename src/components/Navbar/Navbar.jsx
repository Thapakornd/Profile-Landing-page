import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
          {active
            ? (
                <CloseIcon sx={{ fontSize: "2.5rem"}} />
              )
              : (
                <MenuIcon sx={{ fontSize: "2.5rem"}} />
                ) 
          }
        </div>
      </div>
      <div className={`drop-down ${active ? "active" : "deactive"}`}>
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
