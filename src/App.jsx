import React, { useEffect } from 'react';

// Components
import Title from './components/Title';
import CurrentTime from './components/CurrentTime';
import DegreesBetweenHands from './components/DegreesBetweenHands';
import TimeUntilNextAlarm from './components/TimeUntilNextAlarm';

// Custom Hooks
import useCurrentDateAndTime from './hooks/useCurrentDateAndTime';
import useCurrentFibonacciNumbers from './hooks/useCurrentFibonacciNumbers';

// Styles
import './styles/center.css';

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
    <div className='center'>
      <Title />
      <CurrentTime currentDateAndTime={currentDateAndTime} />
      <DegreesBetweenHands currentDateAndTime={currentDateAndTime} />
      {currentFibonacciNumbers && <TimeUntilNextAlarm currentDateAndTime={currentDateAndTime} currentFibonacciNumbers={currentFibonacciNumbers} setCurrentFibonacciNumbers={setCurrentFibonacciNumbers} />}
    </div>
  );
};

export default App;
