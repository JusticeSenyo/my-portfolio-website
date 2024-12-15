import React, {useEffect, useRef } from 'react';

import './footer.css'

function Footer(){

  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 }); // Trigger when 50% of the element is in view

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  return(
<footer className="portfolio-footer" ref={contactRef}>
  <div className="footer-contact">
    <h4>Contact Me</h4>
    <p>Email: senyojustice36@gmail.com</p>
    <p>Phone: +223 550 7475 66</p>
    <p>Location: Accra, Ghana</p>
  </div>
  
  <div className="footer-socials">
    <h4>Follow Me</h4>
    <a href="https://www.linkedin.com/in/justice-senyo/" target="_blank">LinkedIn</a>
    <a href="https://github.com/JusticeSenyo" target="_blank">GitHub</a>
    <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
  </div>
  
  <div className="footer-copyright">
    <p>© 2024 Senyo Justice Kwabena. All rights reserved.</p>
    {/* <p>Built with ❤️ and HTML, CSS, and JavaScript</p> */}
  </div>
</footer>

  );
}
export default Footer;