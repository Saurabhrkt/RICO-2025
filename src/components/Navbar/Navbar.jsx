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
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#objectives" onClick={closeMenu}>Objectives</a></li>
          <li><a href="#schedule" onClick={closeMenu}>Schedule</a></li>
          <li><a href="#registration" onClick={closeMenu}>Registration</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
