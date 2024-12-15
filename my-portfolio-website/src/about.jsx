import React, { useState, useEffect, useRef } from 'react';
import './about.css'
function About(){

    const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when content comes into view
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return(

  <div className='about-section' id='about'>
      <div
        className={`about scroll-animate ${isVisible ? 'visible' : ''}`}
        ref={contentRef}
      >
      <h4>Crafting Digital Solutions</h4>
       <h1>Innovative, User-Centric Applications</h1>
       <p>
    I am a dedicated full-stack developer, driven by a passion for creating innovative and user-centric applications. With expertise in both front-end and back-end technologies, I build seamless digital experiences that engage and inspire. My portfolio showcases a range of projects that highlight my skills and creativity, featuring futuristic designs, engaging animations, and a user-friendly interface. Explore my work and see how I can help transform your ideas into reality from my location.
    </p>
    <a href="#contact" className='btn-link'>Get in touch</a>
    </div>
    <div className="about-image">
    <img src="src\assets\backgroundimage.jpg" alt="books on a table" />
    </div>
  
  </div>

  )
};

export default About;