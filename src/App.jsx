import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import rocket from "./assets/rocket.png";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  console.log(timeLeft);

  function calculateTimeLeft() {
    const difference = +new Date("2024-05-25") - +new Date();
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
  }

  const timerComponent = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span className="timer__component">
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  return (
    <>
      <div className="container">
        <img src={logo} alt="" className="logo" />

        <div className="content">
          <p className="paragraph">
            Exciting news! Our website is undergoing a transformation
          </p>
          <h1>
            Stay tuned for the revamped version
            <br /> <span>Coming </span>Soon!
          </h1>

          <div className="lauch_time">
            <span className="time">{timerComponent}</span>
          </div>
        </div>
        <img src={rocket} className="rocket" />
      </div>
    </>
  );
};

export default App;
