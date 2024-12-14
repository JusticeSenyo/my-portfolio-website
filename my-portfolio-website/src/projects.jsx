// import React, {useState} from 'react';
import './hero.css';
import Card from './Pcard'
import ecommerceImage from './assets/backgroundimage.jpg'
import portfolioImage from './assets/train.png'
function Projects(){


  // const [showModal, setShowModal] = useState(false); 
  // const [modalContent, setModalContent] = useState({});


  //   const openModal = (content) => {
  //   setModalContent(content);
  //   setShowModal(true);
  // };

  //   const closeModal = () => {
  //   setShowModal(false); 
  // };
  const link = {
    color: "white"
  }

  return(
    <div>

    
  <div className='hero-section' id='home'>
    <div className="content">
    <h1 className='name'>innovative development</h1>
    <p className='p'>crafting user-centric applications</p>
    </div>
    <div className="fakecontent">

    </div>
    </div>

    <div className="showcase">
      <p className='pp'>innovative projects</p>
      <h2 className="showcase-title"> 
        Showcasing my development skills 
      </h2>
      <div className="card-container">
        <Card
          image={ecommerceImage}
          title="E-Commerce platform"
          description="Explore a dynamic e-commerce platform built for seamless shopping experiences."
          modalTitle="E-Commerce platform"
          modalContent="This project showcases a full-fledged e-commerce platform designed with both user experience and functionality in mind. It features a responsive layout that adapts seamlessly across devices, ensuring that customers can shop effortlessly from anywhere. The platform includes advanced filtering options, a secure checkout process, and real-time inventory management. With a vibrant design and smooth animations, users are guided through every step of their shopping journey. This application emphasizes speed and reliability, making it a go-to solution for online retailers looking to enhance their digital presence.."
          modalImage={ecommerceImage}
          link="#"
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