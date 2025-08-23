import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">RICO-2025</div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#organizer" onClick={closeMenu}>Organizing Committee</a></li>
          <li><a href="#objectives" onClick={closeMenu}>About RICO & Core Objectives</a></li>
          <li><a href="#speakers" onClick={closeMenu}>Keynote Speakers</a></li>
          <li><a href="#schedule" onClick={closeMenu}>Schedule</a></li>
          <li><a href="#registration" onClick={closeMenu}>Registration</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
