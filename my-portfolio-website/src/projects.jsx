// import React, {useState} from 'react';
import './project.css';
import Card from './Pcard'
import React, {useState, useEffect, useRef } from "react";

import ecommerceImage from './assets/moviebuzzfeed.jpg'
import portfolioImage from './assets/personal.avif'
function Projects(){


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
      { threshold: 0.2 } // Trigger when 30% of the element is visible
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
  const link = {
    color: "white"
  }

const back = {
  backgroundImage: "url('./assets/backgroundimage.jpg')",
};


  return(
    <div>

    
  <div className='project-section' id='home' >
    <div className="content" ref={contentRef}>
    <h1 className='name'>innovative development</h1>
    <p className='p'>crafting user-centric applications</p>
    </div>
    <div className="fakecontent">

    </div>
    </div>

    <div className="showcase" ref={sectionRef}>
      <p className='pp'>innovative projects</p>
      <h2 className="showcase-title"> 
        Showcasing my development skills 
      </h2>
        <div className={`card-container scroll-animate ${isVisible ? 'visible' : ''}`}>
        <Card
          image={ecommerceImage}
          title="Movie Feed website"
          description="Discover a powerful movie search platform offering comprehensive details on your favorite movies."
          modalTitle="Movie Feed website"
          modalContent="Movie buzzfeed is a dynamic and user-friendly movie database designed for film enthusiasts. It allows users to explore a vast collection of movies, offering detailed insights like cast members, plot summaries, high-quality images, production budgets, box office earnings, and release dates. The website ensures real-time updates, delivering accurate and comprehensive information at your fingertips. Whether you’re researching your favorite classics or discovering new blockbusters, MVU provides all the information you need in a sleek, easy-to-navigate interface. Perfect for anyone who loves the magic of cinema!"
          modalImage={ecommerceImage}
          link="https://moviebuzzfeed.vercel.app/"
          />
        <Card
          image={portfolioImage}
          title="Personal portfolio website"
          description="Check out a striking personal portfolio designed to showcase creativity and skills."
          modalTitle="Personal portfolio website"
          modalContent="The personal portfolio website project highlights the importance of showcasing skills and achievements in a visually appealing manner. This site features a sleek design with smooth transitions and animations that captivate visitors. Users can easily navigate through sections that detail projects, skills, and experiences. The inclusion of a downloadable resume adds convenience for potential clients and employers. Interactive elements engage users, encouraging them to reach out and connect. This project demonstrates how a well-designed portfolio can effectively communicate professionalism and creativity."
          modalImage={portfolioImage}
          link="#"
        />
      </div>
    </div>

    </div>
    
    )};
export default Projects;