import React, { useState, useEffect } from "react";
import "./Home.css";
import nitImage from "../../assets/nitj.jpg";
import logo from "../../assets/logo.png";
import ANRF from "../../assets/ANRF.png"

const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-22T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-wrapper" id="home">
      <div className="home-header" style={{ backgroundImage: `url(${nitImage})` }}>
        
        <div className="logo-container">
          <img src={logo} alt="NIT Jalandhar Logo" className="nitj-logo" />
          <img src={ANRF} alt='ANRF Logo' className="anrf-logo" />
        </div>
        
        <div className="overlay">
          <h1 className="home-title">
            Anusandhan National Research Foundation (ANRF) Sponsored
          </h1>
          <h2 className="home-subtitle">
            5-Days National Symposia on <br />
            <span className="highlight">Recent Industrial Trends in Control and Optimization (RICO-2025)</span>
          </h2>
          <p className="home-date">
            <strong>22<sup>nd</sup> – 26<sup>th</sup> September 2025</strong> <br />
            <strong>(Offline Mode)</strong>
          </p>
          <p className="home-org">
            Organized by <br />
            <strong>Department of Instrumentation and Control Engineering</strong>, <br />
            <span className="nit-name">Dr B R Ambedkar National Institute of Technology Jalandhar, Jalandhar, Punjab</span>
          </p>

          <div className="countdown-box">
            <h3 className="countdown-heading">⏳ Event Countdown</h3>
            <div className="timer">
              <div><span>{timeLeft.days || '0'}</span><p>Days</p></div>
              <div><span>{timeLeft.hours || '0'}</span><p>Hours</p></div>
              <div><span>{timeLeft.minutes || '0'}</span><p>Minutes</p></div>
              <div><span>{timeLeft.seconds || '0'}</span><p>Seconds</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;