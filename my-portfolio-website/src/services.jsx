import React, { useState, useEffect, useRef } from 'react';
import './services.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Services (){

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when content comes into view
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

return(
<section className='services' id='services' ref={sectionRef}>
  <h2 className={`services-title scroll-animate ${isVisible ? 'visible' : ''}`}>
          innovative solutions
          </h2>
          <h3 className={`services-subtitle scroll-animate ${isVisible ? 'visible' : ''}`}>
        Tailored applications for your needs
        </h3>

  <div className="services-container">

<Link to="WebDesign">
  <div className={`service-card scroll-animate ${isVisible ? 'visible' : ''}`}>
      <img className='service-image' src="src\assets\fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >Frontend Development &gt;</h4>
      <p >
        Create engaging and interactive web applications tailored to your needs.
      </p>
      </div>
    </div>
    </Link>
    <Link to="UIdesign">
      <div className={`service-card scroll-animate ${isVisible ? 'visible' : ''}`}>
      <img className='service-image' src="src\assets\fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg" alt="" />
      <div className="service-content">
      <h4 >FullStack Development &gt;</h4>
      <p >
       Building dynamic, scalable web applications with full-stack expertise.
      </p>
      </div>
    </div>
    </Link>
      <Link to="/Backend">
        <div className={`service-card scroll-animate ${isVisible ? 'visible' : ''}`}>
      <img className='service-image' src="src\assets\backend-utvikling-toaarig-2024.jpg" alt="" />
      <div className="service-content">
      <h4 >Backend development &gt;</h4>
      <p>
       Build robust and efficient server-side applications with backend expertise.
      </p>
      </div>
    </div>
    </Link>
</div>
</section>
)
};
export default Services;