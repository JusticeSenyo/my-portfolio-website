import React, { useEffect, useRef } from "react";
import './hero.css'


function Hero(){
   const contentRef = useRef(null); // Reference for the content to animate on scroll

  useEffect(() => {
    // Scroll Animation Logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add visible class when in view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  const link = {
    color: "white",
     textDecoration: "none",
  }

  
  return(
  <div className='hero-section' id='home'>
    <div className="content" ref={contentRef}>
    <h1 className='name'>Senyo Justice Kwabena</h1>
    <p className='p'>innovative full-stack solutions</p>
    <button> <a href="#services" style={link}> View Services</a></button>
    </div>
    <div className="fakecontent">

    </div>
    </div>
    
    )};
export default Hero;