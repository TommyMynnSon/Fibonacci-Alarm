import React from 'react';

import useCurrentDateAndTime from '../hooks/useCurrentDateAndTime';

import getDegreesBetweenHands from '../utils/clockDegrees';

const DegreesBetweenHands = () => {
  const { currentDateAndTime } = useCurrentDateAndTime();

  return (
    <div>
      <h2>{`Degrees between hour hand at ${currentDateAndTime.getHours()} and minute hand at ${currentDateAndTime.getMinutes()}:`}</h2>
      <span>{getDegreesBetweenHands(currentDateAndTime)}</span>
    </div>
  );
};

export default DegreesBetweenHands;