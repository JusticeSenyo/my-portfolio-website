import React, {useState} from 'react';
import './header.css';
function Header(){

  const [isOpen, setIsOpen] = useState(false);

  const close = {
    cursor:"pointer"
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
  <header >
   <p className='Name' >SENYO JUSTICE KWABENA</p>
   <div className={`sidebar ${isOpen ? "open" : ""}`}>
   <ul className="navs">
    <p onClick={toggleMenu} style={close}>close</p>
     <li><a href="#home" onClick={toggleMenu}>Home</a></li>
     <li><a href="#about" onClick={toggleMenu}>About</a></li>
     <li><a href="#services" onClick={toggleMenu}>Services</a></li>
     <li><a href="#work" onClick={toggleMenu}>Work</a></li>
     <li className='contact-border' onClick={toggleMenu}><a href="#contact" className='contact'>Contact</a></li>
   </ul>
   </div>
   <div className="hamburger" onClick={toggleMenu}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
   </div>

      <ul className="navs">
     <li><a href="#home">Home</a></li>
     <li><a href="#about">About</a></li>
     <li><a href="#services">Services</a></li>
     <li><a href="#work">Work</a></li>
     <li className='contact-border'><a href="#contact" className='contact'>Contact</a></li>
   </ul>

  </header>);
};
export default Header;