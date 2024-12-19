import React from 'react';


const NavBar = () => {
  return (
    
      <ul className="nav-bar flex">
        <li className="nav-item "><a className="section-link" href="#hero">Home</a></li>
        <li className="nav-item"><a className="section-link" href="#about">About me</a></li>
        <li className="nav-item "><a className="section-link" href="#skills">Skills</a></li>
        <li className="nav-item "><a className="section-link" href="#services">Services</a></li>
        <li className="nav-item"><a className="section-link" href="#projects">Projects</a></li>
        <li className="nav-item "><a  className="section-link" href="#testimonials">Testimonials</a></li>
        <li className="nav-item"><a className="section-link" href="#contact">Contact me</a></li>
      </ul>
   
  );
};

export default NavBar;
