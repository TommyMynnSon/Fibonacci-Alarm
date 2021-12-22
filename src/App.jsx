import React from 'react';

import Title from './components/Title';
import CurrentDateAndTime from './components/CurrentDateAndTime';
import DegreesBetweenHands from './components/DegreesBetweenHands';
import TimeUntilNextAlarm from './components/TimeUntilNextAlarm';

const App = () => {
  return (
    <div>
      <Title />
      <CurrentDateAndTime />
      <DegreesBetweenHands />
      <TimeUntilNextAlarm />
    </div>
  );
};

export default App;
