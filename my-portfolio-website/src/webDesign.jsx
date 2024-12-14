import React from "react";
import { Link } from 'react-router-dom';

import "./ServicesOpened.css";

function WebDesign() {
  return (
    <main>
    <div className="web-development-section">
      <div className="image">
        <img
          src="/src/assets/backgroundimage.jpg" 
          alt="Web Development"
        />
      </div>
      <div className="Content">
        <h3>Web application development</h3>
        <p>
          Transform your ideas into reality with exceptional web application
          development. Every application is crafted with meticulous attention
          to detail, ensuring a user-friendly experience that captivates your
          audience. From concept to deployment, I leverage cutting-edge
          technologies and frameworks to build scalable and responsive
          applications. Whether you need a simple site or a complex platform, I
          focus on delivering high-quality solutions that meet your specific
          requirements. Let’s collaborate to create innovative applications
          that not only function flawlessly but also resonate with your users
          and drive engagement.
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
