import React from 'react';
import './Registration.css';

const Registration = () => (
  <div id="registration" className="registration-container">
    <h2 className="registration-title">Registration Details</h2>
    
    <div className="registration-card">
      <table className="registration-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fee (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Industry / Scientist</td><td>₹8400</td></tr>
          <tr><td>Faculty</td><td>₹5900</td></tr>
          <tr><td>Students (Other Institutes)</td><td>₹2236</td></tr>
          <tr><td>Students (NITJ)</td><td>₹1000</td></tr>
        </tbody>
      </table>
      <p className="registration-note">
      *Fees include symposium kit, certificate, tea/coffee, and lunch.
      </p>
    </div>
  </div>
);

export default Registration;
