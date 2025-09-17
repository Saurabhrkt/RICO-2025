import React, { useState } from 'react';
import './Speakers.css';

// Helper function to get initials from a name
const getInitials = (name) => {
  const allNames = name.replace('Prof.', '').replace('Dr.', '').replace('Mr.', '').trim().split(' ');
  if (allNames.length > 1) {
    return `${allNames[0][0]}${allNames[allNames.length - 1][0]}`;
  }
  return allNames[0] ? allNames[0][0] : '';
};

const academiaSpeakers = [
    { name: "Prof. N. P. Padhy", designation: "Director, MNIT Jaipur", image: "https://www.mnit.ac.in/admin/downloads/director.jpg", link: "https://www.mnit.ac.in/admin/director" },
    { name: "Prof. B. K. Panigrahi", designation: "Professor, EED, IIT Delhi", image: "https://nhev.in/wp-content/uploads/2024/01/Panigrahi.png", link: "https://ctech.iitd.ac.in/bkpanigrahi.html" },
    { name: "Prof. Yogesh Vijay Hote", designation: "Professor, EED, IIT Roorkee", image: "https://iitr.ac.in/SCSP/Home/assets/eeab23fccdc4f5006277597468dd61c80decf0792fdc01060906fa2ee6d57af4_yogesh%20sir.png", link: "https://iitr.ac.in/Departments/Electrical%20Engineering%20Department/People/Faculty/100560.html" },
    { name: "Dr. Shyam Kamal", designation: "Associate Professor, EED, IIT BHU", image: "https://media.licdn.com/dms/image/v2/C4E03AQGqekvxu_i-Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516874212007?e=2147483647&v=beta&t=lQXtc9LhqDOu_dHOC2OJy1ZfNrPLO_uUfvMF9bTN6Go", link: "https://iitbhu.ac.in/dept/eee/people/shyamkamaleee" },
    { name: "Dr. Ranjana Sodhi", designation: "Associate Professor, EED, IIT Ropar", image: "https://i.ytimg.com/vi/Se4OPRCU7_0/mqdefault.jpg", link: "https://iitrpr.ac.in/electrical/rsodhi" },
    { name: "Dr. Arun Kumar Verma", designation: "Associate Professor, EED, IIT Jammu", image: "https://iitjammu.ac.in/faculty/documents/images/1682215821135.jpeg", link: "https://www.iitjammu.ac.in/faculty/~arunkumarverma" }
];
const industrySpeakers = [
    { name: "Dr. Prateek Singh", designation: "Samsung", image: "https://pbs.twimg.com/profile_images/944188318970818560/FLq3s9Z3_400x400.jpg", link: "https://www.linkedin.com/in/prateek29s/?originalSubdomain=in" },
    { name: "Dr. Jagannath Samantaray", designation: "Mathworks", image: "https://media.licdn.com/dms/image/v2/D5603AQF8eEwzvLh3UA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702061636710?e=1761177600&v=beta&t=SFFVnhj8rKMyB8G29elQW5DT2Uw-55EV6mGXfvOynyY", link: "https://www.linkedin.com/in/jagannath-samantaray/?originalSubdomain=in" },
    { name: "Dr. Anurag Priyadarshi", designation: "Eaton", image: "https://media.licdn.com/dms/image/v2/C4E03AQF_0jCm9jO3rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1612957041672?e=1761177600&v=beta&t=KjGEtUYTIm1zJAgQJUC_J06nW_7ibCJAJ_6PVNKng8E", link: "https://www.linkedin.com/in/anurag-priyadarshi-phd-5a3422164/?originalSubdomain=in" },
    { name: "Dr. O P Jaga", designation: "Siemens", image: "https://media.licdn.com/dms/image/v2/D5603AQEWzHHdcmMMxg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709728462157?e=1761177600&v=beta&t=LZ_140QupSIwvPNR8E0PxE0scYdS1D1Vn0A8VisfJcU", link: "https://www.linkedin.com/in/dr-om-prakash-jaga-634b4225a/?originalSubdomain=in" },
    { name: "Dr. Chetan Srivastava", designation: "GE", image: "https://media.licdn.com/dms/image/v2/C5603AQHad6Iiz6yWQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661317913712?e=1761177600&v=beta&t=V7V0A3KoVaDqcGux1bTMpzvKyHGS9eqVe1OPAej8rO0", link: "https://www.linkedin.com/in/dr-chetan-srivastava-201558ab/?originalSubdomain=in" },
    { name: "Mr. R.K. Senthil Kumar", designation: "Scientist F, CDAC Bengaluru", image: "https://ik.imagekit.io/3wdaakwnl/Senthil.jpg?updatedAt=1754960604129g", link: "https://www.cdac.in" },
    { name: "Dr. Ashish Doorwar", designation: "Ola Electric", image: "https://media.licdn.com/dms/image/v2/C4D03AQG6GAldrUmWyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516624410062?e=1761177600&v=beta&t=Zc2wf-F-pmQtR5yzjQzYt_wmd014yUOrOMdE2xs_O-o", link: "https://www.linkedin.com/in/drashishdoorwarphd/?originalSubdomain=in" },
    { name: "Mr. Darshankumar Pandit", designation: "Synchronous Drives & Inverters", image: "https://media.licdn.com/dms/image/v2/D4D03AQFlssUx_c_KqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713004008472?e=1761177600&v=beta&t=trHdNVQaPz-L7MsSuAgPZ4f2tLj1r-BkAkDKcumypk0", link: "https://www.linkedin.com/in/darshankumar-pandit-12814a10/?originalSubdomain=in" }
];

const SpeakerCard = ({ name, designation, image, link, colorId }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="speaker-card">
      {imageError ? (
        <div className={`speaker-avatar avatar-color-${colorId}`}>
          {getInitials(name)}
        </div>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="speaker-image-link">
          <img
            src={image}
            alt={`Photo of ${name}`}
            className="speaker-img"
            onError={() => setImageError(true)}
          />
        </a>
      )}
      <div className="speaker-info">
        <h3 className="speaker-name">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <p className="speaker-designation">{designation}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-header">
        <h1 className="speakers-title">Keynote Speakers</h1>
      </div>
      <h2 className="speakers-category-title">From Academia</h2>
      <div className="speakers-grid">
        {academiaSpeakers.map((speaker, idx) => (
          <SpeakerCard key={`academia-${idx}`} colorId={idx % 5} {...speaker} />
        ))}
      </div>
      <h2 className="speakers-category-title">From Industry</h2>
      <div className="speakers-grid">
        {industrySpeakers.map((speaker, idx) => (
          <SpeakerCard key={`industry-${idx}`} colorId={idx % 5} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;