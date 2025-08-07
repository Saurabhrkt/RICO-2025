import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="rico-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>RICO-2025</h3>
          <p>
            Recent Industrial Trends in Control and Optimization<br />
            Organized by Department of Instrumentation and Control Engineering,<br />
            <strong>NIT Jalandhar</strong>
          </p>
        </div>

        <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About ICE</a></li>
            <li><a href="#organizer">Organizing Committee</a></li>
            <li><a href="#objectives">Core Objectives</a></li>
            <li><a href="#schedule">Event Schedule</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 RICO - All Rights Reserved | NIT Jalandhar</p>
      </div>
    </footer>
  );
};

export default Footer;
