import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-header">
      <h1 className="contact-title">Contact Us</h1>
    </div>
    <div className="contact-card">
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Dr. Mahendra Kumar</td>
            <td data-label="Contact No.">+91-9462556117</td>
            <td data-label="Email">mahendrak@nitj.ac.in</td>
          </tr>
          <tr>
            <td data-label="Name">Dr. Deblina Biswas</td>
            <td data-label="Contact No.">+91-8085525794</td>
            <td data-label="Email">biswasd@nitj.ac.in</td>
          </tr>
          <tr>
            <td data-label="Name">Mr. Sunil Kumar (PhD Scholar)</td>
            <td data-label="Contact No.">+91-9149333581</td>
            <td data-label="Email">-</td>
          </tr>
          <tr>
            <td data-label="Name">Mr. Lalit Kumar (PhD Scholar)</td>
            <td data-label="Contact No.">+91-9719638664</td>
            <td data-label="Email">-</td>
          </tr>
        </tbody>
      </table>
      <p className="contact-note">
        *For any queries, please feel free to contact the persons above.
      </p>
    </div>
  </section>
);

export default Contact;