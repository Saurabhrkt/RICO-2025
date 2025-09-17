import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `The Department of Instrumentation and Control Engineering commenced its Bachelor of Technology (B. Tech.) degree programme and M Tech (Full Time and Part Time) Degree Programme. The Ph.D. Programme has also been offered since 2005 in various specialisations. The Department aims at providing organizations with engineers who are a best fit for the organization's needs. The department always strives to build such skills among the students in a systematic manner. Research in the department is at the leading edge of technological innovations and encompasses all major areas of Instrumentation and Control Engineering. The department has unique research facilities that enable leading-edge research in many areas such as Robotics and Automation, Process Control, Biomedical Instrumentation, Sensors & Wireless Networking and Intelligent Control Systems. These facilities provide an excellent opportunity for graduate students and research scholars to be trained and gain valuable experience.`;

  const displayedText = isExpanded ? fullText : `${fullText.substring(0, 350)}...`;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        About ICE
      </h2>
      <div className="about-content">
        <p className="about-paragraph">{displayedText}</p>
        <button onClick={toggleReadMore} className="read-more-btn">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default About;