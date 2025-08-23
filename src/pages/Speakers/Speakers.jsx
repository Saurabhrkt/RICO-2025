import React from "react";
import "./Speakers.css"; // We'll style separately
// ===== Dummy Data =====
const academiaSpeakers = [
  {
    name: "Prof. N. P. Padhy",
    designation: "Director, MNIT Jaipur",
    affiliation: "Academia",
    time: "09:00 AM",
    image: "https://www.mnit.ac.in/admin/downloads/director.jpg",
    link: "https://www.mnit.ac.in/admin/director",
    experience: "25+ Years",
    specialization: "Power Systems"
  },
  {
    name: "Prof. B. K. Panigrahi",
    designation: "Professor, EED, IIT Delhi",
    affiliation: "Academia",
    time: "09:45 AM",
    image: "https://nhev.in/wp-content/uploads/2024/01/Panigrahi.png",
    link: "https://ctech.iitd.ac.in/bkpanigrahi.html",
    experience: "20+ Years",
    specialization: "Machine Learning"
  },
  {
    name: "Prof. Yogesh Vijay Hote",
    designation: "Professor, EED, IIT Roorkee",
    affiliation: "Academia",
    time: "10:30 AM",
    image: "https://iitr.ac.in/SCSP/Home/assets/eeab23fccdc4f5006277597468dd61c80decf0792fdc01060906fa2ee6d57af4_yogesh%20sir.png",
    link: "https://iitr.ac.in/Departments/Electrical%20Engineering%20Department/People/Faculty/100560.html",
    experience: "18+ Years",
    specialization: "Control Systems"
  },
  {
    name: "Dr. Shyam Kamal",
    designation: "Associate Professor, EED, IIT BHU",
    affiliation: "Academia",
    time: "11:15 AM",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGqekvxu_i-Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516874212007?e=2147483647&v=beta&t=lQXtc9LhqDOu_dHOC2OJy1ZfNrPLO_uUfvMF9bTN6Go",
    link: "https://iitbhu.ac.in/dept/eee/people/shyamkamaleee",
    experience: "15+ Years",
    specialization: "Signal Processing"
  },
  {
    name: "Dr. Ranjana Sodhi",
    designation: "Associate Professor, EED, IIT",
    affiliation: "Academia",
    time: "12:00 PM",
    image: "https://i.ytimg.com/vi/Se4OPRCU7_0/mqdefault.jpg",
    link: "https://iitrpr.ac.in/electrical/rsodhi",
    experience: "12+ Years",
    specialization: "Power Electronics"
  },
  {
    name: "Dr. Arun Kumar Verma",
    designation: "Associate Professor, EED, IIT Jammu",
    affiliation: "Academia",
    time: "12:45 PM",
    image: "https://iitjammu.ac.in/faculty/documents/images/1682215821135.jpeg",
    link: "https://www.iitjammu.ac.in/faculty/~arunkumarverma",
    experience: "14+ Years",
    specialization: "Renewable Energy"
  },
  {
    name: "Dr. Tushar Jain",
    designation: "Associate Professor, EED, IIT Mandi",
    affiliation: "Academia",
    time: "02:00 PM",
    image: "https://faculty.iitmandi.ac.in/~tushar/img/tj3.jpg",
    link: "https://faculty.iitmandi.ac.in/~tushar/",
    experience: "11+ Years",
    specialization: "Smart Grids"
  },
  {
    name: "Dr. Pushpak Jagtap",
    designation: "Assistant Professor, IISc",
    affiliation: "Academia",
    time: "02:45 PM",
    image: "https://aero.iisc.ac.in/wp-content/uploads/elementor/thumbs/pushpak-jagtap-r3pqu1ky3nspv32ds91x3b1fkddacsv058lxekdnds.png",
    link: "https://aero.iisc.ac.in/people/pushpak-jagtap/",
    experience: "8+ Years",
    specialization: "AI & Robotics"
  },
  {
    name: "Dr. Gururaj M V",
    designation: "Assistant Professor, EED, IIT Kanpur",
    affiliation: "Academia",
    time: "03:30 PM",
    image: "https://iitk.irins.org/profile_images/237449.jpg",
    link: "https://www.iitk.ac.in/new/gururaj-mirle-vishwanath",
    experience: "10+ Years",
    specialization: "VLSI Design"
  }
];

const industrySpeakers = [
  {
    name: "Dr. Prateek Singh",
    designation: "Samsung",
    affiliation: "Industry",
    time: "09:00 AM",
    image: "https://pbs.twimg.com/profile_images/944188318970818560/FLq3s9Z3_400x400.jpg",
    link: "https://www.linkedin.com/in/prateek29s/?originalSubdomain=in",
    experience: "16+ Years",
    specialization: "Semiconductor Tech"
  },
  {
    name: "Dr. Jagannath Samantaray",
    designation: "Mathworks",
    affiliation: "Industry",
    time: "09:45 AM",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF8eEwzvLh3UA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702061636710?e=2147483647&v=beta&t=G6lJlsl4AWSlfEcV9f17IUJEPnJXwoyRhR0hcD8xiMM",
    link: "https://www.linkedin.com/in/jagannath-samantaray/?originalSubdomain=in",
    experience: "22+ Years",
    specialization: "Protection Systems"
  },
  {
    name: "Dr. Anurag Priyadarshi",
    designation: "Eaton",
    affiliation: "Industry",
    time: "10:30 AM",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQF_0jCm9jO3rw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1612957041672?e=1757548800&v=beta&t=oyQd242uGqBy5PF3fbyCOCBe4fSTDqyCBm7qr64emws",
    link: "https://www.linkedin.com/in/anurag-priyadarshi-phd-5a3422164/?originalSubdomain=in",
    experience: "19+ Years",
    specialization: "Power Management"
  },
  {
    name: "Dr. O P Jaga",
    designation: "Siemens",
    affiliation: "Industry",
    time: "11:15 AM",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEWzHHdcmMMxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709728462157?e=1757548800&v=beta&t=Unirv9U_HqMYKMv1vyBnloBt4mqSUhEenQj3cfdZiNw",
    link: "https://www.linkedin.com/in/dr-om-prakash-jaga-634b4225a/?originalSubdomain=in",
    experience: "24+ Years",
    specialization: "Industrial Automation"
  },
  {
    name: "Dr. Chetan Srivastava",
    designation: "GE",
    affiliation: "Industry",
    time: "12:00 PM",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHad6Iiz6yWQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661317913712?e=1757548800&v=beta&t=S2I-S-0GjwYucmEtl0Tyc0KZVKLKJ2RcHoZCv-fShb0",
    link: "https://www.linkedin.com/in/dr-chetan-srivastava-201558ab/?originalSubdomain=in",
    experience: "21+ Years",
    specialization: "Digital Solutions"
  },
  {
    name: "Mr. R.K. Senthil Kumar",
    designation: "Scientist F, CDAC Bengaluru",
    affiliation: "Industry",
    time: "12:45 PM",
    image:"https://ik.imagekit.io/3wdaakwnl/Senthil.jpg?updatedAt=1754960604129g",
    link: "https://www.cdac.in",
    experience: "18+ Years",
    specialization: "High Performance Computing"
  },
  {
    name: "Dr. Ashish Doorwar",
    designation: "Ola Electric",
    affiliation: "Industry",
    time: "02:00 PM",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQG6GAldrUmWyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516624410100?e=1757548800&v=beta&t=YjEbb2xFcUZH7iGnZWu1godsnla2F-b7uM52M2hMweE",
    link: "https://www.linkedin.com/in/drashishdoorwarphd/?originalSubdomain=in",
    experience: "13+ Years",
    specialization: "Electric Vehicles"
  },
  {
    name: "Mr. Darshankumar Pandit",
    designation: "Synchronous Drives & Inverters Pvt. Ltd.",
    affiliation: "Industry",
    time: "02:45 PM",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFlssUx_c_KqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713004008472?e=1757548800&v=beta&t=A_W0jSYJ91kf2Db-gD3uMA-JIir_Q1pjcgzrox_6xaA",
    link: "https://www.linkedin.com/in/darshankumar-pandit-12814a10/?originalSubdomain=in",
    experience: "17+ Years",
    specialization: "Motor Drives"
  }
];
// ===== Card Component =====
const SpeakerCard = ({ name, designation,image ,link}) => (
  <div className="speaker-card">
    <img src={image} alt={name} className="speaker-img" />
   <h3>
  <a href={link} target="_blank" rel="noopener noreferrer">
    {name}
  </a>
</h3>
    <p>{designation}</p>
  </div>
);

// ===== Main Component =====
const Speakers = () => {
  return (
    <section className="speakers-section" id="speakers">
       <div className="schedule-header">
        <h1 className="schedule-title">Keynote Speakers</h1>
        </div>
      <h2 className="acedmia">Academia Speakers</h2>
      <div className="speakers-grid">
        {academiaSpeakers.map((speaker, idx) => (
          <SpeakerCard key={idx} {...speaker} />
        ))}
      </div>

      <h2 className="indu">Industry Speakers</h2>
      <div className="speakers-grid">
        {industrySpeakers.map((speaker, idx) => (
          <SpeakerCard key={idx} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
