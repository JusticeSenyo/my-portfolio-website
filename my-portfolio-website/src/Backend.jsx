import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import "./ServicesOpened.css";

function Backend() {
  return (
    <main>
    <div className="web-development-section">
      <div className="image">
      <img className='service-image' src="src\assets\backend-utvikling-toaarig-2024.jpg" alt="" />
        
      </div>
      <div className="Content">
        <h3>Backend development</h3>
        <p>
Experience seamless performance and reliability with expert backend development. I specialize in creating robust server-side applications that power your web and mobile projects. Utilizing the latest technologies and best practices, I ensure that your application's backend architecture is scalable, secure, and efficient. From database management to API integrations, I handle all aspects of backend development to support your front-end needs. By focusing on performance and maintainability, I deliver backend solutions that not only meet your current requirements but also adapt to future growth
        </p>
                <Link to="/WebDesign/Appointment">
        <button>Schedule Appointment</button>
        </Link>
      </div>
    </div>
    </main>
  );
}

export default Backend;
