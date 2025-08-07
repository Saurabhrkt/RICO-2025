import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">RICO-2025</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#objectives">Objectives</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#registration">Registration Details</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
