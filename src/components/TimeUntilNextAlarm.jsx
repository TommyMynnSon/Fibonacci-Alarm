import React from 'react';
import moment from 'moment';

const shouldAlarmTrigger = () => {
  return false;
};

const getTimeUntilNextAlarm = (currentDateAndTime, currentFibonacciNumbers, setCurrentFibonacciNumbers) => {
  if (shouldAlarmTrigger()) {
    setCurrentFibonacciNumbers((prev) => {
      const numberAtIndex0 = prev[0].number;
      const numberAtIndex1 = prev[1].number;

      const nextWhen = currentDateAndTime.setHours(currentDateAndTime.getHours() + numberAtIndex1);
      const nextNumber = numberAtIndex0 + numberAtIndex1;

      prev[1].when = nextWhen;
      prev.push({ number: nextNumber, when: null });
      prev.shift();
    });
  }

  const duration = moment.duration(moment(currentFibonacciNumbers[0].when).diff(moment(currentDateAndTime)));

  return `${duration.years()} years : ${duration.months()} months : ${duration.weeks()} weeks : ${duration.days()} days : ${duration.hours()} hours : ${duration.minutes()} minutes : ${duration.seconds()} seconds`;
};

const TimeUntilNextAlarm = ({ currentDateAndTime, currentFibonacciNumbers, setCurrentFibonacciNumbers }) => {
  return (
    <div>
      <h2>Time remaining until the next alarm:</h2>
      <span>{getTimeUntilNextAlarm(currentDateAndTime, currentFibonacciNumbers, setCurrentFibonacciNumbers)}</span>
    </div>
  );
};

export default TimeUntilNextAlarm;