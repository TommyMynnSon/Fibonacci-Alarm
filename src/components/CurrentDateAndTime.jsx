import React from 'react';
import moment from 'moment';

import useCurrentDateAndTime from '../hooks/useCurrentDateAndTime';

const CurrentDateAndTime = () => {
  const { currentDateAndTime } = useCurrentDateAndTime();

  return (
    <div>
      <h2>Currently:</h2>
      <span>{moment(currentDateAndTime).format('LTS')}</span>
    </div>
  );
};

export default CurrentDateAndTime;