import React from 'react';
import './Contact.css';

const Contact = () => (
  <div id="contact" className="contact-container">
    <h2 className="contact-title">Contact</h2>
    <div className="contact-card">
      <p><strong>Convenor:</strong> Dr. Mahendra Kumar</p>
      <p><strong>Co-Convenors:</strong></p>
      <ul className="contact-list">
        <li>Dr. K. S. Nagla</li>
        <li>Dr. O. P. Verma</li>
        <li>Dr. Anil Kumar Yadav</li>
        <li>Dr. Deblina Biswas</li>
      </ul>
    </div>
  </div>
);

export default Contact;
