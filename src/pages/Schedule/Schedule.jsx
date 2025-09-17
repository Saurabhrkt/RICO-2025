import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const scheduleData = [
    {
      day: 1,
      date: "September 22, 2025",
      theme: "Inauguration & Keynote Lectures",
      speakers: [
        { name: "Prof. Yogesh Vijay Hote", type: "academic", affiliation: "IIT Roorkee", topic: "Advanced Control for Power Systems" },
        { name: "Prof. B. K. Panigrahi", type: "academic", affiliation: "IIT Delhi", topic: "AI-Driven Optimization Techniques" },
        { name: "Dr. Jagannath Samantaray", type: "industry", affiliation: "MATHWORKS", topic: "Model-Based Design with Simulink" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 2,
      date: "September 23, 2025",
      speakers: [
        { name: "Dr. Tushar Jain", type: "academic", affiliation: "IIT Mandi", topic: "Control Strategies for Smart Grids" },
        { name: "Dr. Chetan Srivastava", type: "industry", affiliation: "GE", topic: "Digital Solutions in Energy" },
        { name: "Dr. Pushpak Jagtap", type: "academic", affiliation: "IISc", topic: "AI & Autonomous Robotics" },
        { name: "Dr. O.P. Jaga", type: "industry", affiliation: "Siemens", topic: "Modern Industrial Automation" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 3,
      date: "September 24, 2025",
      speakers: [
        { name: "Dr. Shyam Kamal", type: "academic", affiliation: "IIT BHU", topic: "Advancements in Signal Processing" },
        { name: "Dr. Anurag Priyadarshi", type: "industry", affiliation: "Eaton Pune", topic: "Power Management & e-Mobility" },
        { name: "Dr. Ranjana Sodhi", type: "academic", affiliation: "IIT Ropar", topic: "High-Performance Power Electronics" },
        { name: "Dr. Prateek Singh", type: "industry", affiliation: "Samsung", topic: "Next-Gen Semiconductor Technology" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 4,
      date: "September 25, 2025",
      speakers: [
        { name: "Mr. R.K. Senthil Kumar", type: "industry", affiliation: "CDAC", topic: "High Performance Computing" },
        { name: "Dr. Arun Kumar Verma", type: "academic", affiliation: "IIT Jammu", topic: "Renewable Energy Integration" },
        { name: "Dr. Gururaj M V", type: "academic", affiliation: "IIT Kanpur", topic: "Challenges in VLSI Design" },
        { name: "Dr. Ashish Doorwar", type: "industry", affiliation: "Ola Electric", topic: "EV Battery Management Systems" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 5,
      date: "September 26, 2025",
      theme: "Panel Discussion & Valedictory",
      speakers: [
        { name: "Mr. Darshankumar Pandit", type: "industry", affiliation: "Synchronous Drives", topic: "Future of Electric Motor Drives" },
        { name: "Prof. N. P. Padhy", type: "academic", affiliation: "MNIT Jaipur", topic: "Future Vision for Power Systems" },
        { name: "Panel Discussion", type: "special", affiliation: "All Participants", topic: "Academia-Industry Synergy" },
      ],
      sessionType: "Keynote Sessions & Hands-On",
    },
  ];

  const getSpeakerTagClass = (type) => {
    switch (type) {
      case "industry": return "speaker-tag industry";
      case "academic": return "speaker-tag academic";
      case "special": return "speaker-tag special";
      default: return "speaker-tag";
    }
  };

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <h1 className="schedule-title">Event Schedule</h1>
        <p className="schedule-subtitle">
          A 5-day journey through keynotes, technical sessions, and panel discussions with experts from academia and industry.
        </p>
        <div className="schedule-dates">September 22-26, 2025</div>
      </div>

      <div className="timeline">
        {scheduleData.map((dayData, index) => (
          <div key={dayData.day} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <span className="day-badge">Day {dayData.day}</span>
                <span className="day-date">{dayData.date}</span>
              </div>
              <h3 className="day-theme">{dayData.theme}</h3>
              <div className="speakers-list">
                {dayData.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className={getSpeakerTagClass(speaker.type)}>
                    <div className="speaker-details">
                      <span className="speaker-name">{speaker.name}</span>
                      {speaker.topic && <span className="speaker-topic">Talk:TBA</span>}
                    </div>
                    <span className="speaker-affiliation">{speaker.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;