import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './header';
import Hero from './hero';
import About from './about';
import Services from './services'
import Contact from './contact'
import Projects from './projects'
import ScrollToElement from './ScrollToElement';
import Backend from './Backend';
import UIdesign from './uiDeisign';
import WebDesign from './webDesign'
import Footer from './footer';
import AppointmentBooking from './appointment'

function App() {

  return (
    <Router>

    <Header/>
    <ScrollToElement/>

    <Routes>
      <Route path="/" element={<>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
      </>}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/Backend" element={<Backend />} />
      <Route path="/UIdesign" element={<UIdesign />} />
      <Route path="/WebDesign" element={<WebDesign />} />
      <Route path="/WebDesign/Appointment" element={<AppointmentBooking />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App
