import React from 'react';
import './FixedNavbar.css';

const FixedNavbar = ({ sections, activeLink, onSelectSection }) => {

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixedNavbar'>
      <nav className="fixedNavbar-scroll">
        <ul className='fixedNavbar-scroll'>
          {sections.map((section) => (
            <li key={section.id} className='fixedNavbar-item'>
              <a
                href="#"
                className={`fixedNavbar-link ${activeLink === section.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  handleScrollToSection(section.id); // Scroll to the selected section by its id
                  onSelectSection(section.id); // Notify parent component of the selected section
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

export default FixedNavbar;