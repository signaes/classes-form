//@flow
const WEEKDAYS = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

const WORKING_WEEKDAYS: Array<string> = WEEKDAYS.slice(1, 6);

export { WEEKDAYS, WORKING_WEEKDAYS };
