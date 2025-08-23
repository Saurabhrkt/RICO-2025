import React from "react";
import "./Schedule.css";

const Schedule = () => {
  const scheduleData = [
    {
      day: 1,
      date: "September 22, 2025",
      theme: "Inauguration Session and Keynote Lectures",
      speakers: [
        {
          name: "Prof. Yogesh Vijay Hote",
          type: "academic",
          affiliation: "IIT Roorkee",
          link: "https://www.iitr.ac.in/~EE/nppeefee",
        },
        {
          name: "Prof. B. K. Panigrahi",
          type: "academic",
          affiliation: "IIT Delhi",
          link: "https://ee.iitd.ac.in/faculty-profile/16/",
        },
        {
          name: "Dr. Jagannath Samantaray",
          type: "industry",
          affiliation: "MATHWORKS",
          link: "https://www.linkedin.com/in/jagannath-samantaray/?originalSubdomain=in",
        },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 2,
      date: "September 23, 2025",
      speakers: [
        {
          name: "Dr. Tushar Jain",
          type: "academic",
          affiliation: " IIT Mandi ",
        },
        {
          name: "Dr. Chetan Srivastava",
          type: "industry",
          affiliation: "GE",
        },
        {
          name: "Dr. Pushpak Jagtap",
          type: "academic",
          affiliation: "IISc",
        },
        {
          name: "Dr. O.P. Jaga",
          type: "industry",
          affiliation: "Siemens",
        },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 3,
      date: "September 24, 2025",
      speakers: [
        { name: "Dr. Shyam Kamal", type: "academic", affiliation: "IIT BHU" },
        { name: "Dr. Anurag Priyadarshi", type: "industry", affiliation: "Eaton Pune" },
        { name: "Dr. Ranjana Sodhi", type: "academic", affiliation: "IIT Ropar" },
        { name: "Dr. Prateek Singh", type: "industry", affiliation: "Samsung" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 4,
      date: "September 25, 2025",
      speakers: [
        {
          name: "Mr. R.K. Senthil Kumar",
          type: "industry",
          affiliation: "CDAC",
        },
        { name: "Dr. Arun Kumar Verma", type: "academic", affiliation: "IIT Jammu" },
        { name: "Dr. Gururaj M V", type: "academic", affiliation: "IIT Kanpur" },
        { name: "Dr. Ashish Doorwar", type: "industry", affiliation: "Ola Electric" },
      ],
      sessionType: "Keynote Sessions",
    },
    {
      day: 5,
      date: "September 26, 2025",
      theme: "Panel Discussion & Valedictory",
      speakers: [
        { name: "Mr. Darshankumar Pandit", type: "industry", affiliation: "Synchronous Drives & Inverters Pvt. Ltd." },
        {
          name: "Prof. N. P. Padhy",
          type: "academic",
          affiliation: "IIT Roorkee & MNIT Jaipur",
        },
        {
          name: "Panel Discussion",
          type: "special",
          affiliation: "All Participants",
        },
      ],
      sessionType: "Keynote Sessions & Hands-On",
    },
  ];

  const getSpeakerTagClass = (type) => {
    switch (type) {
      case "industry":
        return "speaker-tag industry";
      case "academic":
        return "speaker-tag academic";
      case "special":
        return "speaker-tag special";
      default:
        return "speaker-tag";
    }
  };

  return (
    <div className="schedule-container" id="schedule">
      <div className="schedule-header">
        <h1 className="schedule-title">Event Schedule</h1>
        <p className="schedule-subtitle">
          Join us for an inspiring journey through 5 days of keynote talks,
          technical sessions, workshops, and panel discussions featuring
          renowned experts from academia and industry.
        </p>
        <div className="schedule-dates">September 22-26, 2025</div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {scheduleData.map((dayData, index) => (
          <div
            key={dayData.day}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="day-badge">Day {dayData.day}</div>
              <h3 className="day-title">{dayData.theme}</h3>
              <p className="text-gray-600 mb-3 font-medium">{dayData.date}</p>

             <div className="speakers-grid" >
                {dayData.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className={getSpeakerTagClass(speaker.type)}>
                    <div className="font-semibold">{speaker.name}</div>
                    <div>Talk:TBA</div>
                    <div className="text-sm opacity-80">{speaker.affiliation}</div>
                  </div>
                ))}
              </div>

              <div className="session-type">{dayData.sessionType}</div>
            </div>
          </div>
        ))}
      </div>

      <section id="expect" className="relative pt-[120px] -mt-[120px]">
        <div className="text-center mt-12 px-4">
          <div className="inline-block w-full max-w-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-md">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
              🎯 What to Expect
            </h3>
            <p className="text-sm sm:text-base text-blue-700">
              Interactive sessions, networking opportunities, hands-on
              workshops, and insights from leading experts in Control Systems
              and Optimization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
