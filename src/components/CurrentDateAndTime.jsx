import React from 'react';
import moment from 'moment';

const CurrentDateAndTime = ({ currentDateAndTime }) => {
  return (
    <div>
      <h2>Currently:</h2>
      <span>{moment(currentDateAndTime).format('LTS')}</span>
    </div>
  );
};

export default CurrentDateAndTime;