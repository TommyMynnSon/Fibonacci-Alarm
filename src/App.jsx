import React, { useEffect } from 'react';

import Title from './components/Title';
import CurrentDateAndTime from './components/CurrentDateAndTime';
import DegreesBetweenHands from './components/DegreesBetweenHands';
import TimeUntilNextAlarm from './components/TimeUntilNextAlarm';

import useCurrentDateAndTime from './hooks/useCurrentDateAndTime';
import useCurrentFibonacciNumbers from './hooks/useCurrentFibonacciNumbers';

const App = () => {
  const { currentDateAndTime } = useCurrentDateAndTime();
  const { currentFibonacciNumbers, setCurrentFibonacciNumbers } = useCurrentFibonacciNumbers();

  useEffect(() => {
    if (currentFibonacciNumbers[0].number === 0) {
      setCurrentFibonacciNumbers((prev) => {
        console.log('Welcome! Since it\'s your first time using my Fibonacci Alarm, an alarm gets triggered (this message) since the first fibonacci number is 0 and 0 hours from now is, well, now!');

        prev.shift();

        return prev;
      });
    }
  }, []);

  return (
    <div>
      <Title />
      <CurrentDateAndTime currentDateAndTime={currentDateAndTime} />
      <DegreesBetweenHands currentDateAndTime={currentDateAndTime} />
      <TimeUntilNextAlarm currentDateAndTime={currentDateAndTime} currentFibonacciNumbers={currentFibonacciNumbers} setCurrentFibonacciNumbers={setCurrentFibonacciNumbers} />
    </div>
  );
};

export default App;
