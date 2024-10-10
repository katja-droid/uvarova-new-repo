import React, { useEffect, useState } from 'react';
import './FixedNavbar.css';  // Similar styling to your Navbar
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink for smooth scrolling

const FixedNavbar = ({ sections, onSelectSection_, activeSection_ }) => {
  const [activeLink_, setActiveLink_] = useState(activeSection_); // Start with the default active section from props

  useEffect(() => {
    // Sync the state with the prop in case the prop changes externally
    setActiveLink_(activeSection_);
  }, [activeSection_]);

  // Function to handle scroll and update active link
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveLink_(section.id); // Update the active link
            onSelectSection_(section.id); // Notify parent of the change
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, onSelectSection_]);

  // Handle manual click on a link
  const handleLinkClick_ = (sectionId) => {
    setActiveLink_(sectionId); // Manually set active link
    onSelectSection_(sectionId); // Notify parent of the change
  };

  return (
    <nav className="fixedNavbar">
      <ul className="navbar-list">
        {sections.map((section) => (
          <li key={section.id} className={`navbar-item ${activeLink_ === section.id ? 'active' : ''}`}>
            <ScrollLink
              to={section.id}
              smooth={true}
              offset={-70}  // Adjust for fixed header height
              duration={500}
              onClick={() => handleLinkClick_(section.id)}  // Handle click to update active link
              className={`navbar-link ${activeLink_ === section.id ? 'active' : ''}`}
            >
              {section.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FixedNavbar;
