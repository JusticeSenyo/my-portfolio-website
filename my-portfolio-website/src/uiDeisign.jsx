import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import "./ServicesOpened.css";

function UIdesign() {
  return (
    <main >
    <div className="web-development-section">
      <div className="image">
      <img className='service-image' src="src\assets\fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg" alt="" />

      </div>
      <div className="Content">
        <h3>full-Stack Development</h3>
        <p>
As a Fullstack Developer, I offer end-to-end solutions, building dynamic, scalable web applications that seamlessly integrate both front-end and back-end technologies. I specialize in developing both the user-facing side and the server-side logic, ensuring a smooth and cohesive experience. From crafting engaging interfaces to building robust back-end systems, I focus on delivering efficient, high-performance applications that meet your specific needs and goals. Let me help bring your vision to life with tailored solutions that are both innovative and reliable.        </p>
                <Link to="/WebDesign/Appointment">
        <button>Schedule Appointment</button>
        </Link>
      </div>
    </div>
    </main>
  );
}

export default UIdesign;
