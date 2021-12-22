import { useState, useEffect } from "react";

const useCurrentDateAndTime = () => {
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDateAndTime(new Date());
    }, 1000);
  }, [currentDateAndTime]);

  return { currentDateAndTime };
};

export default useCurrentDateAndTime;