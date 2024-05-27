import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hoursStyle = {
    transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${time.getMinutes() * 6}deg)`,
  };
  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`,
  };

  return (
    <div>
      <h2>Analog Clock</h2>
      <div className="clock">
        <div className="hand hour" style={hoursStyle}></div>
        <div className="hand minute" style={minutesStyle}></div>
        <div className="hand second" style={secondsStyle}></div>
        <div className="center"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
