import React from 'react';
import { Link } from 'react-router-dom';
import cross from './assets/cross.svg';
import './NavbarOverlay.css';

const NavbarOverlay = ({ closeOverlay }) => {
  return (
    <div className="nav-links-overlay">
      {/* Cross Icon */}
      <div className="cross">
        <img onClick={closeOverlay} src={cross} alt="Close" />
      </div>

      {/* Navigation Links */}
      <div item justifyContent="center" alignItems="center" zIndex="2">
        <ul className="nav-links-overlay-ul">
          <li>
            <Link to="/" onClick={closeOverlay}>Projects</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeOverlay}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeOverlay}>Contact</Link>
          </li>
          <li>
            {/* Open CV link in a new tab */}
            <a
              href="https://drive.google.com/drive/folders/1IdpNu4_5jlqhojdv3gsfVszO5V0u1vpY"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeOverlay}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarOverlay;
