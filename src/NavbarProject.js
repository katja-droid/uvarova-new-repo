import React, { useEffect, useRef, useState } from 'react';
import './NavbarProject.css';
import { Box } from '@mui/material';

const NavbarProject = ({ sections, onSelectSection, activeLink }) => {
  const navbarRef = useRef(null); // Create a ref for the navbar container
  const [isOverflowing, setIsOverflowing] = useState(false); // State to track if navbar is overflowing

  // Function to check if the navbar content is overflowing
  const checkOverflow = () => {
    if (navbarRef.current) {
      const isOverflow = navbarRef.current.scrollWidth > navbarRef.current.clientWidth;
      setIsOverflowing(isOverflow);
    }
  };

  // Use effect to check for overflow on component mount and window resize
  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <Box
      className='navbarProject'
      ref={navbarRef} // Attach the ref to the navbar container
      sx={{
        py: { lg: '47px', sm: '32px' },
        mb: '16px',
      
        justifyContent: isOverflowing ? 'flex-start' : 'center', // Dynamic justification based on overflow
      }}
    >
      <nav className="navbarProject-scroll">
        <ul className='navbarProject-scroll'>
          {sections.map((section) => (
            <li key={section.id} className='navbarProject-item'>
              <a
                href="#"
                className={`navbarProject-link ${activeLink === section.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  onSelectSection(section.id); // Pass the selected section's id to the parent component
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  );
};

export default NavbarProject;
