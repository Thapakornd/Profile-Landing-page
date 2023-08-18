import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const pageCurrent = useParams();

  useEffect(() => {}, []);

  return (
    <div className="navbar">
      <a href="#" className="logo">
        Thapa<span>korn</span>
      </a>
      <div className="r1">
        <ul className="link">
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li className="contact">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
