import React, { useState } from 'react';
import './AboutRICO.css';

function AboutRICO() {
  // State to manage the expanded/collapsed view
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about-rico-section" id='objectives'>
      <div className="about-rico-container">
        <h2 className="about-rico-title">About RICO 2025</h2>
        <div className="about-rico-content">
          <p className="about-rico-paragraph">
            The RICO has established itself as a premier forum for researchers, engineers, and industry experts to exchange cutting-edge ideas and innovations in control theory and optimization. Following highly successful editions in <strong>2023</strong> and <strong>2024</strong>, RICO has garnered exceptional participation and acclaim from both national and international communities.
          </p>

          {/* This content will only be shown when isExpanded is true */}
          {isExpanded && (
            <>
              <p className="about-rico-paragraph">
                Feedback from past attendees has consistently highlighted the immense value of in-person interactions. In response to this overwhelming demand, we are delighted to announce that <strong>RICO 2025</strong> will be held in <strong>offline mode</strong>, offering a dynamic platform for:
              </p>
              <ul className="about-rico-list">
                <li>Engaging technical discussions with leading experts</li>
                <li>Hands-on workshops and networking sessions</li>
                <li>Fostering long-term research partnerships</li>
              </ul>
              <p className="about-rico-paragraph">
                We invite you to join us in making RICO 2025 a landmark event, driving forward the future of control and optimization technologies.
              </p>
            </>
          )}

          {/* The button to toggle the view */}
          <button onClick={() => setIsExpanded(!isExpanded)} className="read-more-btn">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutRICO;