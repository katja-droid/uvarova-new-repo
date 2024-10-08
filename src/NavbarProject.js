import React from 'react';
import './NavbarProject.css';

const NavbarProject = ({ sections, onSelectSection, activeLink }) => {
  return (
    <div className='navbarProject'>
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
    </div>
  );
};

export default NavbarProject;
