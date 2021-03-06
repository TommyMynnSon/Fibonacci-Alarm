import React, { useState, useEffect } from 'react';

// Utility Functions
import { shouldAlarmTrigger, getTimeUntilNextAlarm } from '../utils/nextAlarm';

const TimeUntilNextAlarm = ({ currentDateAndTime, currentFibonacciNumbers, setCurrentFibonacciNumbers }) => {
  const [remainingBreakdown, setRemainingBreakdown] = useState('');

  useEffect(() => {
    if (shouldAlarmTrigger(currentDateAndTime, currentFibonacciNumbers)) { // <------- replace the conditional in the if statement with true to instant skip alarms
      console.log(`Alarm triggered for fibonacci number ${currentFibonacciNumbers[0].number}.`)

      setCurrentFibonacciNumbers((prev) => {
        const numberAtIndex0 = prev[0].number;
        const numberAtIndex1 = prev[1].number;

        const nextWhen = new Date();

        // nextWhen.setSeconds(nextWhen.getSeconds() + numberAtIndex1);
        nextWhen.setHours(nextWhen.getHours() + numberAtIndex1);

        prev[1].when = nextWhen;

        const nextNumber = numberAtIndex0 + numberAtIndex1;
        prev.push({ number: nextNumber, when: null });

        prev.shift();

        return prev;
      });
    }

    setRemainingBreakdown(getTimeUntilNextAlarm(currentDateAndTime, currentFibonacciNumbers));
  }, [currentDateAndTime]);

  return (
    <div className='center'>
      <h2>Time remaining until the next alarm:</h2>
      <span>{remainingBreakdown.includes('NaN') ? 'LOADING : LOADING : LOADING : LOADING : LOADING : LOADING : LOADING' : remainingBreakdown}</span>
    </div>
  );
};

export default TimeUntilNextAlarm;