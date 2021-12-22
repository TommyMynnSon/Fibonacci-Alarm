import React from 'react';

import useCurrentDateAndTime from '../hooks/useCurrentDateAndTime';

const CurrentDateAndTime = () => {
  const { currentDateAndTime } = useCurrentDateAndTime();

  return (
    <div>
      <h2>Currently:</h2>
      <span>{currentDateAndTime.toString()}</span>
    </div>
  );
};

export default CurrentDateAndTime;