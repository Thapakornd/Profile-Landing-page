import React, { useEffect, useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Thapakorn.<span>GUS</span></h1>
        </div>
        <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li className='contact'><a href="#contact">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Navbar