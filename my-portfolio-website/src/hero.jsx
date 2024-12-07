import React from 'react';
import './hero.css'

function Hero(){
  const link = {
    color: "white"
  }

  return(
  <div className='hero-section' id='home'>
    <div className="content">
    <h1 className='name'>Senyo Justice Kwabena</h1>
    <p className='p'>innovative full-stack solutions</p>
    <button> <a href="#services" style={link}> View Services</a></button>
    </div>
    <div className="fakecontent">

    </div>
    </div>
    
    )};
export default Hero;