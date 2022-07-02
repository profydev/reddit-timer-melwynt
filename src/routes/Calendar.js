import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Calendar = ({ posts }) => {
  const data = posts.posts;

  const initCalendar = {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
  };

  const [calendar, setCalendar] = useState(initCalendar);

  const updateCalendar = (dataPosts) => {
    // loop through all the posts
    for (let i = 0; i < dataPosts.length; i += 1) {
      const someTimestamp = dataPosts[i].data.created;
      const hour = Number(moment.unix(someTimestamp).format('H'));
      const dayOfWeek = moment.unix(someTimestamp).format('dddd');

      // push the hour in the correct day of the week
      switch (dayOfWeek) {
        case 'Monday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Monday: {
              ...prevCalendar.Monday,
              [hour]: prevCalendar.Monday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Tuesday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Tuesday: {
              ...prevCalendar.Tuesday,
              [hour]: prevCalendar.Tuesday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Wednesday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Wednesday: {
              ...prevCalendar.Wednesday,
              [hour]: prevCalendar.Wednesday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Thursday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Thursday: {
              ...prevCalendar.Thursday,
              [hour]: prevCalendar.Thursday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Friday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Friday: {
              ...prevCalendar.Friday,
              [hour]: prevCalendar.Friday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Saturday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Saturday: {
              ...prevCalendar.Saturday,
              [hour]: prevCalendar.Saturday[hour] + 1 || 1,
            },
          }));
          break;
        case 'Sunday':
          setCalendar((prevCalendar) => ({
            ...prevCalendar,
            Sunday: {
              ...prevCalendar.Sunday,
              [hour]: prevCalendar.Sunday[hour] + 1 || 1,
            },
          }));
          break;
        default:
          break;
      }
    }
  };

  // expected output: Array ["Monday", "Tuesday", etc.]
  const days = Object.keys(calendar);
  const hours = Array.from(Array(24).keys());

  useEffect(() => {
    updateCalendar(data);
  }, [data]);

  useEffect(() => {
    console.log(calendar);
  }, [calendar]);

  return (
    <table className="calendar">
      <thead>
        <tr>
          <td />
          <td colSpan="2">12:00am</td>
          <td colSpan="2">2:00am</td>
          <td colSpan="2">4:00am</td>
          <td colSpan="2">6:00am</td>
          <td colSpan="2">8:00am</td>
          <td colSpan="2">10:00am</td>
          <td colSpan="2">12:00pm</td>
          <td colSpan="2">2:00pm</td>
          <td colSpan="2">4:00pm</td>
          <td colSpan="2">6:00pm</td>
          <td colSpan="2">8:00pm</td>
          <td colSpan="2">10:00pm</td>
        </tr>
      </thead>
      <tbody>
        {days.map((day) => (
          <tr key={day}>
            <th key={`${day}-header`}>{day}</th>

            {hours.map((hour) => {
              const res = calendar[day][hour] || 0;

              return (
                <td
                  className={res >= 10 ? 'color-10' : `color-${res}`}
                  key={`${day}-${hour}`}
                >
                  {res}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Calendar.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Calendar.defaultProps = {
  posts: {},
};

export default Calendar;
