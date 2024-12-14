import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash part of the URL (e.g. '#project1')
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null; // This component doesn't render anything, just handles scrolling
}

export default ScrollToElement;

