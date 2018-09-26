//@flow
import React from 'react';
import PropTypes from 'prop-types';
import cal from 'solar-months';
import { WEEKDAYS } from '../../constants/weekdays';
import split from '../../utils/split';
import StyledCalendar from './styles';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth();
const currentYearCal = cal(YEAR);
const weekInitials = WEEKDAYS.map(w => w[0]);

type Props = {
  year: number,
  month: number,
};

const daysByWeek = (days: []) => {
  let weeksList = [[]]

  days.forEach(day => {
    if (day.weekday === 0) {
      weeksList.push([]);
    }

    weeksList[weeksList.length - 1][day.weekday] = day;
  });

  weeksList = weeksList.map(week => {
    const emptyDaySlot = { date: new Date(), day: '', weekday: '', empty: true };
    let completeWeek = [];

    for (let i = 0; i < 7; i++) {
      completeWeek[i] = week[i] ? week[i] : emptyDaySlot;
    }

    return completeWeek;
  })

  return weeksList;
}

const Calendar = ({ year = YEAR, month = MONTH }: Props) => (
  <StyledCalendar className="calendar">
    <div>Calendar</div>
    { cal(year)
        .slice(month - 1, month < 11 ? month + 1 : month)
        .map((days, index) => (
          <div className="calendar__month" key={`cal-month-${index}-year`}>
            { weekInitials.map((d, wi) => (
              <span className="calendar__weekday" key={`${d}-wd-${index}${wi}`}>
                { d }
              </span>
            ))}
            { daysByWeek(days).map((week, weekIndex) => (
                <div className="calendar__week" key={`week-${weekIndex}-${index}-year`}>
                  { week.map(({ day, date, weekday }, dayIndex) => (
                    <span
                      className="calendar__day"
                      key={`${index}-${weekIndex}-${dayIndex}-date.getTime()`}>
                      { day }
                    </span>
                  ))}
                </div>
              ))}
          </div>
        ))
    }
  </StyledCalendar>
);

Calendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};

export default Calendar;
