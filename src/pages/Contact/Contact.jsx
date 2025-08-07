import React from "react";
import "./Contact.css";

const Contact = () => (
  <div id="contact" className="contact-container">
    <h2 className="contact-title">Contact Us</h2>
    <div className="contact-card">
      <div className="table-wrapper">
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
            <td>Dr. Mahendra Kumar</td>
            <td>+91-9462556117</td>
            <td>mahendrak@nitj.ac.in</td>
          </tr>
          <tr>
            <td>Dr. Deblina Biswas</td>
            <td>+91-8085525794</td>
            <td> biswasd@nitj.ac.in</td>
          </tr>
          <tr>
            <td>Mr. Sunil Kumar (PhD Scholar)</td>
            <td>+91-9149333581</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mr. Lalit Kumar (PhD Scholar)</td>
            <td>+91-9719638664</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      </div>
      <p className="contact-note">
      *For any queries, please contact the above persons.
      </p>
    </div>
  </div>
);

export default Contact;
