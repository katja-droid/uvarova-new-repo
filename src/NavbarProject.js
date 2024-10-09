import React from 'react';
import './NavbarProject.css';
import { Box } from '@mui/material';

const NavbarProject = ({ sections, onSelectSection, activeLink }) => {
  return (
    <Box className='navbarProject' sx={{py: {lg: '47px', sm: '32px'}, mb: '16px'}}>
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
