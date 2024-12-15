// import React, {useState} from 'react';
// import './header.css';
// function Header(){

//   const [isOpen, setIsOpen] = useState(false);

//   const close = {
//     cursor:"pointer"
//   }

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   }

//   return(
//   <header >
//    <p className='Name' >SENYO JUSTICE KWABENA</p>
//    <div className={`sidebar ${isOpen ? "open" : ""}`}>
//    <ul className="navs">
//     <p onClick={toggleMenu} style={close}>close</p>
//      <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//      <li><a href="#about" onClick={toggleMenu}>About</a></li>
//      <li><a href="#services" onClick={toggleMenu}>Services</a></li>
//      <li><a href="/Projects" onClick={toggleMenu}>Work</a></li>
//      <li className='contact-border' onClick={toggleMenu}><a href="#contact" className='contact'>Contact</a></li>
//    </ul>
//    </div>
//    <div className="hamburger" onClick={toggleMenu}>
//     <div className="bar"></div>
//     <div className="bar"></div>
//     <div className="bar"></div>
//    </div>

//       <ul className="navs">
//      <li><a href="#home">Home</a></li>
//      <li><a href="#about">About</a></li>
//      <li><a href="#services">Services</a></li>
//      <li><a href="/Projects">Work</a></li>
//      <li className='contact-border'><a href="#contact" className='contact'>Contact</a></li>
//    </ul>

//   </header>);
// };
// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

    const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const close = {
    cursor: "pointer",
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <p className="Name">SENYO JUSTICE KWABENA</p>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="navs">
          <p onClick={toggleMenu} style={close}>close</p>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link> {/* Home route */}
          </li>
          <li>
            <Link to="/#about" onClick={toggleMenu}>About</Link> {/* About route */}
          </li>
          <li>
            <Link to="/#skills" onClick={toggleMenu}>Skills</Link> {/* About route */}
          </li>
          <li>
            <Link to="/#services" onClick={toggleMenu}>Services</Link> {/* Services route */}
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link> {/* Projects route */}
          </li>
          <li className="contact-border" onClick={toggleMenu}>
            <Link to="/contact" className="contact">Contact</Link> {/* Contact route */}
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className="navs">
        <li>
          <Link to="/" onClick={scrollToHome}>Home</Link> 
        </li>

        <li>
          <Link to="/#about">About</Link>
          {/* <a href="#about">About</a> */}
        </li>

        <li>
          <Link to="/#skills">Skills</Link>
       </li>

        <li>
          <Link to="/#services">Services</Link>
       </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="contact-border">
          <Link to="/#contact" className="contact">Contact</Link> 
        </li>
      {/* <li className='contact-border'><a href="#contact" className='contact'>Contact</a></li> */}

      </ul>
    </header>
  );
}

export default Header;
