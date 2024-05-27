import React, { useState, useEffect } from 'react';
import './BinaryClock.css';

const BinaryClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const binaryTime = (num) => num.toString(2).padStart(4, '0');

  const hours = binaryTime(time.getHours());
  const minutes = binaryTime(time.getMinutes());
  const seconds = binaryTime(time.getSeconds());

  return (
    <div>
      <h2>Binary Clock</h2>
      <div className="binary-clock">
        {hours} : {minutes} : {seconds}
      </div>
    </div>
  );
};

export default BinaryClock;
