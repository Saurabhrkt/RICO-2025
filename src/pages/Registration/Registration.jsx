import React from 'react';
import './Registration.css';
import qr from '../../assets/qr.png';

const Registration = () => (
  <section id="registration" className="registration-section">
    <div className="registration-header">
      <h1 className="registration-title">Registration Details</h1>
    </div>

    <div className="registration-card">
      <table className="registration-table">
        <thead>
          <tr>
            <th>Participant Type</th>
            <th>Internal (NITJ)</th>
            <th>External (Outside NITJ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Participant Type">Student/Research Scholar/Faculty/Industrialist/Scientist</td>
            <td data-label="Internal (NITJ)">₹1000</td>
            <td data-label="External (Outside NITJ)">₹2000 + 18%(GST)</td>
          </tr>
        </tbody>
      </table>
      <p className="registration-note">
        *The Registration Fee includes the symposium kit, participation certificate, and lunch. The last date for registration is <strong>21<sup>st</sup> September 2025</strong>.
      </p>

      <div className="payment-card">
        <h3>Registration Link</h3>
        <p>Please use the button below to complete your registration, or scan the QR code.</p>
        <a className="register-button" href="https://www.nitj.ac.in/events_registration/rico_2025/login" target="_blank" rel="noopener noreferrer">
          Register Here
        </a>
        <div className="qr-code">
          <img src={qr} alt="QR Code for registration payment" />
        </div>
        <p className="registration-note">
          <strong>Note:</strong> Accommodation will be provided on a payment basis and is subject to availability.
        </p>
      </div>
    </div>
  </section>
);

export default Registration;