


import React from 'react';
import DigitalClock from './components/DigitalClock';
import AnalogClock from './components/AnalogClock';
import BinaryClock from './components/BinaryClock';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <DigitalClock />
      <AnalogClock />
      <BinaryClock />
    </div>
  );
};

export default App;