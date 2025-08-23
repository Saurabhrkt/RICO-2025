import React, { useState, useEffect } from "react";
import "./Home.css";
import nitImage from "../../assets/nitj.jpg"; // background image
import logo from "../../assets/logo.png"; // NITJ logo
import ANRF from "../../assets/ANRF.png"
const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-22") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="home-wrapper" id="home">
      <div className="home-header" style={{ backgroundImage: `url(${nitImage})` }}>
        
        {/* NITJ Logo at top-left */}
        <div className="image">
        <img src={logo} alt="NIT Jalandhar Logo" className="nitj-logo" />
        <img src={ANRF} alt = 'ANRF' className="anrf-logo" />
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
            <strong>(Offline Mode)</strong> <br />
          </p>
          <p className="home-org">
            Organized by <br />
            <strong>Department of Instrumentation and Control Engineering</strong>, <br />
            <span className="nit-name">Dr B R Ambedkar National Institute of Technology Jalandhar, Jalandhar, Punjab</span>
          </p>

          {/* Countdown Section */}
          <div className="countdown-box">
            <h3 className="countdown-heading">⏳ Event Countdown</h3>
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
