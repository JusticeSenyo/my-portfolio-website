// // Card.jsx
// import React, {useState} from "react";
// import "./Card.css";

// const Card = ({ image, title, description, link }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-text">
//         <h3 className="card-title">{title}</h3>
//         <p className="card-description">{description}</p>
//         <a  className="card-link">Learn more</a>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";
import "./Card.css";

const Card = ({ image, title, description, modalTitle, modalContent, modalImage , link}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card"  >
      <img src={image} alt={title} className="card-image" onClick={openModal}/>
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
                  <a 
          className = "card-link"
          href={link} 
          target="_blank" 
          // rel="noopener noreferrer" 
        >
          Visit Site
        </a>
        <p className="card-description">{description}</p>

        {/* <button onClick={openModal} className="card-link">
          Learn more
        </button> */}
        <a  className="card-link" onClick={openModal}>Learn more</a>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`}>
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <div className="imagediv">
            {modalImage && <img src={modalImage} alt={modalTitle} className="modal-image" />}
            </div>
            <div className="titlediv">
            <h2>{modalTitle}</h2>
            <p>{modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

