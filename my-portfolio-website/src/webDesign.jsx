import React from "react";
import { Link } from 'react-router-dom';

import "./ServicesOpened.css";

function WebDesign() {
  return (
    <main>
    <div className="web-development-section">
      <div className="image">
        <img
        src="src\assets\fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="Web Development" />
      </div>
      <div className="Content">
        <h3>Front-End development</h3>
        <p>
          As developer, I prioritize crafting visually captivating and user-friendly websites that provide seamless, intuitive experiences. I focus on designing responsive interfaces that perform flawlessly across all devices, ensuring that users have a smooth and engaging interaction with your site. Whether working on a simple landing page or a complex, interactive web application, I prioritize clean design, fast load times, and optimized performance to create a product that aligns perfectly with your brand and user needs. My goal is to transform your ideas into an engaging online experience that leaves a lasting impression.
        </p>
        <Link to="/WebDesign/Appointment">
        <button>Schedule Appointment</button>
        </Link>
      </div>
    </div>
    </main>
  );
}

export default WebDesign;
