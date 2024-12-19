import React from 'react';
import HamzaImage from '../assets/images/Hamza.png';
import useDownloadCV from '../hooks/useDownloadCV'; 
const Hero = () => {
  const downloadCV = useDownloadCV('/cv/HamzaZaitoun-fullstackdeveloper.pdf', 'Hamza Zaitoun-full stack developer.pdf');
  return (
    <section id="hero" className="hero section">
      <div className="parent">
        <div className="div1">
          <h1 className="job-title">
            Full Stack Web Developer <span>🚀</span>
          </h1>
          <p className="quote">
            Translating ideas into code for a pixel-perfect world...
          </p>
          <button className="btn-download"onClick={downloadCV} >
            Download My CV
          </button>
        </div>
        
        <div className="div2">
          <img src={HamzaImage} alt="My picture" className="pfp" />
          <div className="socials flex">
            <a href="https://github.com/HamzasZaitoun" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/hamza-zaitoun-9ab8512b1/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
