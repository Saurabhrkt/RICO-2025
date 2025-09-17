import React from 'react';
import './Organizer.css';

const Organizer = () => {
  return (
    <section className="organizer-section" id="organizer">
      <h2 className="organizer-title">Organizing Committee</h2>

      <div className="organizer-grid">
        <div className="organizer-column">
          <div className="organizer-card">
            <h3 className="role">Chief Patron</h3>
            <p className="name">Prof. (Dr.) Bhim Singh</p>
            <p className="affiliation">Chairman, BOG, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="organizer-card">
            <h3 className="role">Co-Patron</h3>
            <p className="name">Prof. (Dr.) Ajay Bansal</p>
            <p className="affiliation">Registrar, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="organizer-card">
             <h3 className="role">Co-Patron</h3>
            <p className="name">Prof. (Dr.) Rohit Mehra</p>
            <p className="affiliation">Dean R&C, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="organizer-card">
            <h3 className="role">Convener</h3>
            <p className="name">Dr. Mahendra Kumar</p>
            <p className="affiliation">Department of ICE</p>
          </div>
        </div>

        <div className="organizer-column">
          <div className="organizer-card">
            <h3 className="role">Patron</h3>
            <p className="name">Prof. (Dr.) Binod Kumar Kanaujia</p>
            <p className="affiliation">Director, Dr B R Ambedkar NIT Jalandhar</p>
          </div>

          <div className="organizer-card">
            <h3 className="role">General Chair</h3>
            <p className="name">Prof. (Dr.) K S Nagla</p>
            <p className="affiliation">Head, Department of ICE</p>
          </div>

          <div className="organizer-card">
            <h3 className="role">Co-Convener(s)</h3>
            <p className="name">Prof. (Dr.) K S Nagla</p>
            <p className="name">Dr. O P Verma</p>
            <p className="name">Dr. Anil K. Yadav</p>
            <p className="name">Dr. Deblina Biswas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizer;