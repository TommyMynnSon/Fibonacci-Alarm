import React, { useState, useEffect } from 'react';

const CurrentDateAndTime = () => {
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDateAndTime(new Date());
    }, 1000);
  }, [currentDateAndTime]);

  return (
    <div>
      <h2>Currently:</h2>
      <span>{currentDateAndTime.toString()}</span>
    </div>
  )
};

export default CurrentDateAndTime;