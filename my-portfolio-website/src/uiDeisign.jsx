import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import "./ServicesOpened.css";

function UIdesign() {
  return (
    <main >
    <div className="web-development-section">
      <div className="image">
        <img
          src="/src/assets/backgroundimage.jpg" 
          alt="UI development"
        />
      </div>
      <div className="Content">
        <h3>UI/UX design</h3>
        <p>
          Elevate your project with stunning UI/UX design that prioritizes user experience. I specialize in creating intuitive interfaces that guide users seamlessly through your application. By understanding user behavior and preferences, I design visually compelling layouts that not only look great but also enhance functionality. My design process involves thorough research and prototyping, ensuring that each element serves a purpose. Collaborate with me to build designs that not only attract users but also keep them engaged, resulting in satisfied clients and increased conversions.
        </p>
                <Link to="/WebDesign/Appointment">
        <button>Schedule Appointment</button>
        </Link>
      </div>
    </div>
    </main>
  );
}

export default UIdesign;
