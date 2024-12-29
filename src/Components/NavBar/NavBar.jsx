import React from 'react';
import './NavBar.css';
import github from './github.svg'
import linkedin from './linkein.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

<nav className="navbar">
<div className="navbar-left">
    <a href="/" className="logo">
      Illia Volchetskyi Website
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Skills">Skills</a>
      </li>
      <li>
        <a href="/Projects">Projects</a>
      </li>
      <li>
        <a href="/AboutMe">About me</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <span>  
      <a target="_blank" href="https://www.linkedin.com/in/illia-volchetskyi-b69a21209/"><img src={linkedin} alt="github" height={50}/> </a>
    </span>
    <span>
      <a target="_blank" href="https://github.com/Ank1r0"><img src={github} alt="github" height={50}/> </a>
    </span>
  </div>
</nav>
);
};

export default Navbar;