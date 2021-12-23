import React from 'react';
import moment from 'moment';

const CurrentTime = ({ currentDateAndTime }) => {
  return (
    <div className='center'>
      <h2>Currently:</h2>
      <span>{moment(currentDateAndTime).format('LTS')}</span>
    </div>
  );
};

export default CurrentTime;