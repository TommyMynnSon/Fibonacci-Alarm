import moment from 'moment';

const getAngleOfHourHand = (currentDateAndTime) => {
  const currentHour = parseInt(moment(currentDateAndTime).format('h'));
  const currentMinute = parseInt(moment(currentDateAndTime).format('m'));

  return (0.5 * (60 * currentHour + currentMinute));
};

const getAngleOfMinuteHand = (currentDateAndTime) => {
  const currentMinute = parseInt(moment(currentDateAndTime).format('m'));

  return (6 * currentMinute);
};

const getDegreesBetweenHands = (currentDateAndTime) => {
  if (Math.abs(getAngleOfHourHand(currentDateAndTime) - getAngleOfMinuteHand(currentDateAndTime)) > 180) {
    return (360 - Math.abs(getAngleOfHourHand(currentDateAndTime) - getAngleOfMinuteHand(currentDateAndTime)));
  }

  return (Math.abs(getAngleOfHourHand(currentDateAndTime) - getAngleOfMinuteHand(currentDateAndTime)));
};

export default getDegreesBetweenHands;