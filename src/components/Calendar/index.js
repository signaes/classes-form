//@flow
import React from 'react';
import PropTypes from 'prop-types';
import cal from 'solar-months';
import { WEEKDAYS } from '../../constants/weekdays';
import { MONTH_NAMES } from '../../constants/months';
import StyledCalendar from './styles';
import daysByWeek from './daysByWeek';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth();
const weekInitials = WEEKDAYS.map(w => w[0]);

type Props = {
  year: number,
  month: number,
};

const Calendar = ({ year = YEAR, month = MONTH }: Props) => (
  <StyledCalendar className="calendar">
    { cal(year)
        .slice(month - 1, month)
        .map((days, index) => (
          <div className="calendar__month" key={`cal-month-${index}-year`}>
            <header className="calendar__header">
              <h1 className="calendar__month-name">
                { MONTH_NAMES[month] } { year }
              </h1>
            </header>
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
