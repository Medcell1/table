import React from 'react';
import { useTable } from 'react-table';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = ['8:00 AM - 9:00 AM', '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM'];

// Dummy data for subjects
const dummyData = {
  Monday: ['Math', 'Science', 'History', 'English', 'Break', 'Art'],
  Tuesday: ['English', 'Math', 'Science', 'Physical Education', 'Lunch', 'Music'],
  Wednesday: ['Science', 'Math', 'English', 'Break', 'History', 'Computer Science'],
  Thursday: ['History', 'English', 'Math', 'Break', 'Science', 'Physical Education'],
  Friday: ['Physical Education', 'Math', 'Science', 'English', 'Break', 'Dance'],
};

const Timetable = () => {
  const data = React.useMemo(
    () =>
      timeSlots.map((timeSlot, index) => {
        const row = {
          Time: timeSlot,
        };
        daysOfWeek.forEach((day) => {
          row[day] = dummyData[day][index];
        });
        return row;
      }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Time',
        accessor: 'Time',
      },
      ...daysOfWeek.map((day) => ({
        Header: day,
        accessor: day,
      })),
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <h2>Course Allocation</h2>
      <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
