import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaHome, FaUsers, FaBullseye, FaMicrophoneAlt, FaCalendarAlt, FaEdit, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">RICO-2025</a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#home" onClick={closeMenu}><FaHome /> Home</a></li>
          <li><a href="#organizer" onClick={closeMenu}><FaUsers /> Organizing Committee</a></li>
          <li><a href="#objectives" onClick={closeMenu}><FaBullseye /> About & Objectives</a></li>
          <li><a href="#speakers" onClick={closeMenu}><FaMicrophoneAlt /> Keynote Speakers</a></li>
          <li><a href="#schedule" onClick={closeMenu}><FaCalendarAlt /> Schedule</a></li>
          <li><a href="#registration" onClick={closeMenu}><FaEdit /> Registration</a></li>
          <li><a href="#contact" onClick={closeMenu}><FaEnvelope /> Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;