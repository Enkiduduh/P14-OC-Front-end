function Calendar() {
  function getCurrentMonth() {
    const date = new Date();

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return month[date.getMonth()];
  }
  function getCurrentDay() {
    const date = new Date();
    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return day[date.getDate()];
  }
  const date = new Date();
  const todayInNumber = date.getDate();
  const currentYear = date.getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();

  return (
    <>
      <div>
        {todayInNumber} {currentDay}{" "}
      </div>
      <div>
        Current date : {currentMonth} {currentYear}
      </div>
      <table className="daysOfWeek">
        <theader>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </theader>
        <tbody>
          <tr className="week1">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className="week2">
            <td>8</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="week3">
            <td>15</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="week4">
            <td>22</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calendar;
