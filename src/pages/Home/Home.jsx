import React, { useState, useEffect } from 'react';
import './Home.css';
import nitImage from '../../assets/nitj.jpg'; // Ensure this exists

const eventStartDate = new Date('2025-09-22T09:00:00');

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventStartDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-wrapper" id='home'>
      <div
        className="home-header"
        style={{ backgroundImage: `url(${nitImage})` }}
      >
        <div className="overlay">
          <h1 className="home-title">Welcome to <span className="highlight">RICO-2025</span></h1>
          <p className="home-subtitle">Recent Industrial Trends in Control and Optimization</p>
          <p className="home-date">22<sup>nd</sup> – 26<sup>th</sup> September 2025</p>
          <p className="home-org">
            Organized by <br />
            <strong>Department of Instrumentation and Control Engineering</strong>,<br />
            <span className="nit-name">NIT Jalandhar</span>
          </p>

          <div className="countdown">
            <h3>⏳ Event starts in:</h3>
            <div className="timer">
              <div><span>{timeLeft.days}</span><p>Days</p></div>
              <div><span>{timeLeft.hours}</span><p>Hours</p></div>
              <div><span>{timeLeft.minutes}</span><p>Minutes</p></div>
              <div><span>{timeLeft.seconds}</span><p>Seconds</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
