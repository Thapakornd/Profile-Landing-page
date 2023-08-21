import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Thapakorn.<span>GUS</span></h1>
        </div>
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li className='contact'><a href="#">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Navbar