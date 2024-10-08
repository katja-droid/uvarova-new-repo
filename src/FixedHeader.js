import React, { useEffect, useState } from 'react';
import './FixedHeader.css';  // Similar styling to NavbarProject

const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll and visibility
  const handleScroll = () => {
    const firstSection = document.getElementById('first-section'); // Add ID to your first section
    const lastSection = document.getElementById('last-section');   // Add ID to your last section
    const scrollPosition = window.scrollY;
    
    // Check if we've scrolled past the first section and not yet reached the last section
    if (firstSection && lastSection) {
      const firstSectionTop = firstSection.getBoundingClientRect().top + window.scrollY;
      const lastSectionBottom = lastSection.getBoundingClientRect().bottom + window.scrollY;

      if (scrollPosition >= firstSectionTop && scrollPosition <= lastSectionBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-header ${isVisible ? 'visible' : ''}`}>
      <nav className="navbar-fixed">
        <ul className="navbar-fixed-list">
          <li className="navbar-fixed-item">Section 1</li>
          <li className="navbar-fixed-item">Section 2</li>
          <li className="navbar-fixed-item">Section 3</li>
          {/* Add more items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default FixedHeader;
