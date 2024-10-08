import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.svg';
import menu_button from './assets/ic_round-menu.svg';
import TestLay from './TestLay';

function Navbar() {
  const burgerMenuRef = useRef(null);
  const navLinksRef = useRef(null);
  const overlayRef = useRef(null);
  const location = useLocation(); // Hook to get the current URL path
  const [activeLink, setActiveLink] = useState(''); // State for the active link

  // Update active link based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('projects');
    } else if (path === '/about') {
      setActiveLink('about');
    } else if (path === '/contact') {
      setActiveLink('contact');
    } else {
      setActiveLink(''); // Set to an empty string if the path doesn't match any predefined link
    }
  }, [location]);

  // Function to close overlay
  const closeOverlay = () => {
    const navLinks = navLinksRef.current;
    const overlay = overlayRef.current;

    if (navLinks && overlay) {
      navLinks.classList.remove('show');
      overlay.classList.remove('active');
    }
  };

  // Toggle the menu and overlay visibility
  useEffect(() => {
    const burgerMenu = burgerMenuRef.current;
    const navLinks = navLinksRef.current;
    const overlay = overlayRef.current;

    if (burgerMenu && navLinks && overlay) {
      const toggleMenu = () => {
        navLinks.classList.toggle('show');
        overlay.classList.toggle('active');
      };

      burgerMenu.addEventListener('click', toggleMenu);

      return () => {
        burgerMenu.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  return (
    <div className="navbar">
      <div className='logo-container'>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className='burger-menu' ref={burgerMenuRef}>
        <img src={menu_button} alt="Menu Button" />
      </div>

      {/* Overlay element */}
      <div className="overlay" ref={overlayRef}>
        <TestLay closeOverlay={closeOverlay} />
      </div>

      <nav className="nav-links" ref={navLinksRef} id="nav-links">
        <ul>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} 
              onClick={() => setActiveLink('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            {/* Use a standard <a> tag for the CV link without an onClick handler */}
            <a 
              href="https://drive.google.com/drive/folders/1IdpNu4_5jlqhojdv3gsfVszO5V0u1vpY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link" // No active class for the CV link
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
