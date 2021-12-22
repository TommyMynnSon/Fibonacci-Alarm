import { useState } from "react";

const useCurrentFibonacciNumbers = () => {
  const [currentFibonacciNumbers, setCurrentFibonacciNumbers] = useState([1, 1]);

  return { currentFibonacciNumbers, setCurrentFibonacciNumbers };
};

export default useCurrentFibonacciNumbers;