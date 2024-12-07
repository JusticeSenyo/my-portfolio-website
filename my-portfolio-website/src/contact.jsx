import React, { useState } from 'react';
import './contact.css';

function Contact()  {

  const styles={
    color : "red"
  }
  const style = {
    fontSize: "1rem",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: 400,
  lineHeight: 1.25,
  letterSpacing: "0px",
  textTransform: "none",
  // paddingLeft: "25px",
  minHeight: "18px",
  // position: "relative",
  // margin: 0,
  // marginTop: "0px",
  fontWeight: "normal",
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="container" id='contact'>
      <div className="form-section">
        <h1>Let's discuss your project!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name <span style={styles}>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email address <span style={styles}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@website.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone number <span style={styles}>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="555-555-5555"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="checkbox">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label htmlFor="consent" style={style}>
              I allow this website to store my submission so they can respond to my inquiry. <span style={styles}>*</span>
              </label>
          </div>

          <button type="submit" className='sbt-button'>Submit</button>
        </form>
      </div>

      <div className="info-section">
        <h2>Get in touch</h2>
        <p><span>📧</span> senyojustice36@gmail.com</p>
        <h3>Hours</h3>
        <ul>
          <li>Monday: 9:00am – 10:00pm</li>
          <li>Tuesday: 9:00am – 10:00pm</li>
          <li>Wednesday: 9:00am – 10:00pm</li>
          <li>Thursday: 9:00am – 10:00pm</li>
          <li>Friday: 9:00am – 10:00pm</li>
          <li>Saturday: 9:00am – 6:00pm</li>
          <li>Sunday: 9:00am – 12:00pm</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
