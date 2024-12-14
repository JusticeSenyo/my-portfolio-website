import React, { useState,useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './appointment.css';

const AppointmentBooking = () => {

  const formRef = useRef(null);

  const initialFormData ={
    name: '',
    email: '',
    service: 'Fullstack Development',
    date: '',
    time: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', formData);
    setSubmitted(true);
  };

   const handleReset = () => {
     setSubmitted(false); 
    setFormData(initialFormData); 
  };

  return (
    <div className="appointment-container" id='Appointment' ref={formRef}>
      <h2>Book an Appointment</h2>
      {!submitted ? (
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name <span>*</span> </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
              />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Service <span>*</span></label>
            <div className="radio-group">
              <label className={formData.service === 'Fullstack Development' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="service"
                  value="Fullstack Development"
                  checked={formData.service === 'Fullstack Development'}
                  onChange={handleChange}
                  />
                  Fullstack Development
              </label>
              <label className={formData.service === 'Frontend Development' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="service"
                  value="Frontend Development"
                  checked={formData.service === 'Frontend Development'}
                  onChange={handleChange}
                  />
                  Frontend Development
              </label>
              <label className={formData.service === 'Backend Development' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="service"
                  value="Backend Development"
                  checked={formData.service === 'Backend Development'}
                  onChange={handleChange}
                  />
                  Backend Development
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date <span>*</span></label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time <span>*</span></label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button 
          type="submit"
           className="btn"
           disabled={!formData.name || !formData.email || !formData.date || !formData.time}
           >
            Book Appointment
          </button>
        </form>
      ) : (
        <div className="confirmation" role="alert">
          <h3>Thank you for booking!</h3>
          <p>
            Your appointment for <strong>{formData.service}</strong> has been scheduled on{' '}
            <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
          </p>
          <p>We'll reach out to you at <strong>{formData.email}</strong>.</p>
      <button onClick={handleReset} className="btn">
  Book Another Appointment
</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
