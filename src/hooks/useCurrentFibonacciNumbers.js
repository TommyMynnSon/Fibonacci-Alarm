import { useState, useEffect } from "react";

const useCurrentFibonacciNumbers = () => {
  const [currentFibonacciNumbers, setCurrentFibonacciNumbers] = useState([{ number: 0, when: null }, { number: 1, when: null }, { number: 1, when: null }]);

  useEffect(() => {
    setCurrentFibonacciNumbers((prev) => {
      const when = new Date();

      when.setHours(when.getHours() + prev[1].number);
      // when.setSeconds(when.getSeconds() + 5);

      return [{ ...prev[0] }, { ...prev[1], when }, { ...prev[2] }]
    });
  }, []);

  return { currentFibonacciNumbers, setCurrentFibonacciNumbers };
};

export default useCurrentFibonacciNumbers; 