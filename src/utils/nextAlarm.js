import moment from "moment";

const shouldAlarmTrigger = (currentDateAndTime, currentFibonacciNumbers) => {
  const countNeededToTrigger = 7;
  let currentCount = 0;

  const duration = moment.duration(moment(currentFibonacciNumbers[0].when).diff(moment(currentDateAndTime)));

  if (duration.years() === 0) {
    currentCount++;
  }

  if (duration.months() === 0) {
    currentCount++;
  }

  if (duration.weeks() === 0) {
    currentCount++;
  }

  if (duration.days() === 0) {
    currentCount++;
  }

  if (duration.hours() === 0) {
    currentCount++;
  }

  if (duration.minutes() === 0) {
    currentCount++;
  }

  if (duration.seconds() === 0) {
    currentCount++;
  }

  if (currentCount === countNeededToTrigger) {
    return true;
  }

  return false;
};

const getTimeUntilNextAlarm = (currentDateAndTime, currentFibonacciNumbers) => {
  const duration = moment.duration(moment(currentFibonacciNumbers[0].when).diff(moment(currentDateAndTime)));

  return `${duration.years()} years : ${duration.months()} months : ${duration.weeks()} weeks : ${duration.days()} days : ${duration.hours()} hours : ${duration.minutes()} minutes : ${duration.seconds()} seconds`;
};

export { shouldAlarmTrigger, getTimeUntilNextAlarm };