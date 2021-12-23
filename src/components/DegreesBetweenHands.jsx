import React from 'react';
import moment from 'moment';

// Utility Functions
import getDegreesBetweenHands from '../utils/clockDegrees';

const DegreesBetweenHands = ({ currentDateAndTime }) => {
  return (
    <div className='center'>
      <h2>{`Degrees between hour hand at ${moment(currentDateAndTime).format('h')} and minute hand at ${moment(currentDateAndTime).format('m')}:`}</h2>
      <span>{getDegreesBetweenHands(currentDateAndTime)}</span>
    </div>
  );
};

export default DegreesBetweenHands;