import React from 'react';
import './Registration.css';
import qr from '../../assets/qr.png'; // Make sure this path is correct

const Registration = () => (
  <div id="registration" className="registration-container">
    <h2 className="registration-title">Registration Details</h2>

    <div className="registration-card">
      <div className="table-wrapper">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Participant Type</th>
              <th>Internal (NITJ)</th>
              <th>External (Outside NITJ)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Student</td><td>₹1000</td><td>₹2360 (₹2000 + 18%)</td></tr>
            <tr><td>Research Scholar</td><td>₹1000</td><td>₹2360 (₹2000 + 18%)</td></tr>
            <tr><td>Faculty</td><td>₹5000</td><td>₹5900 (₹5000 + 18%)</td></tr>
            <tr><td>Industrialist</td><td>₹7000</td><td>₹8260 (₹7000 + 18%)</td></tr>
            <tr><td>Scientist</td><td>₹7000</td><td>₹8260 (₹7000 + 18%)</td></tr>
          </tbody>
        </table>

        <p className="registration-note">
          *The Registration Fee includes the symposium kit, participation certificate, tea/coffee, and lunch during the event. The last date for registration is <b>21<sup>st</sup> September 2025</b>.
        </p>

        <div className="payment-card">
          <p className='payment-paragraph'>
            Please use the link below to complete your registration:
          </p>
          <a className="here" href="https://www.nitj.ac.in/events_registration/rico_2025/login" target="_blank" rel="noopener noreferrer">
            Register Here
          </a>
          <p>or Scan the QR code</p>
          <div className="qr-code">
            <img src={qr} alt="QR Code" />
          </div>
          <p className="registration-note">
          <b>Note:</b> Accommodation facility will be provided based on payment basis and subject to the availability.
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default Registration;

