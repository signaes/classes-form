const emptyDaySlot = { date: new Date(), day: '', weekday: '', empty: true };

function daysByWeek(days: []) {
  const weeksList = [[]]

  days.forEach(day => {
    if (day.weekday === 0) { weeksList.push([]); }
    weeksList[weeksList.length - 1][day.weekday] = day;
  });

  return weeksList.map(week => {
    const filledWeek = [];

    for (let i = 0; i < 7; i++) {
      filledWeek[i] = week[i] ? week[i] : emptyDaySlot;
    }

    return filledWeek;
  });
}

export default daysByWeek;
