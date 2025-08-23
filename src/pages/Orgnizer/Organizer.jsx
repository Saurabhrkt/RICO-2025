import React from 'react';
import './Organizer.css';

const Organizer = () => {
  return (
    <div className="committee-container" id="organizer">
      <h2 className="committee-title">Organizing Committee</h2>

      <div className="committee-grid">
        {/* Left Column */}
        <div className="committee-column">
          <div className="committee-block">
            <h3 className="role">Chief Patron</h3>
            <p className="name">Prof. (Dr.) Bhim Singh</p>
            <p className="affiliation">Chairman, BOG, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="committee-block">
            <h3 className="role">Co-Patron</h3>
            <p className="name">Prof. (Dr.) Ajay Bansal</p>
            <p className="affiliation">Registrar, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="committee-block">
             <h3 className="role">Co-Patron</h3>
            <p className="name">Prof. (Dr.) Rohit Mehra</p>
            <p className="affiliation">Dean R&C, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="committee-block">
            <h3 className="role">Convener</h3>
            <p className="name">Dr. Mahendra Kumar</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="committee-column">
          <div className="committee-block">
            <h3 className="role">Patron</h3>
            <p className="name">Prof. (Dr.) Binod Kumar Kanaujia</p>
            <p className="affiliation">Director, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="committee-block">
            <h3 className="role">General Chair</h3>
            <p className="name">Prof. (Dr.) K S Nagla</p>
            <p className="affiliation">Head, Department of ICE</p>
          </div>

          <div className="committee-block">
            <h3 className="role">Co-Convener(s):</h3>
            <p className="name">Prof. (Dr.) K S Nagla</p>
            <p className="name">Dr. O P Verma</p>
            <p className="name">Dr. Anil K. Yadav</p>
            <p className="name">Dr. Deblina Biswas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
