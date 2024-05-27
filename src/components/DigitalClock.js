import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default DigitalClock;
