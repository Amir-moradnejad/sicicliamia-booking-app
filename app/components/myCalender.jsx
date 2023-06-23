// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const MyCalendar = () => {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleDateSelect = (info) => {
//     const { start, end, jsEvent } = info;
//     const dates = getConsecutiveDates(start, end);

//     // Add the selected dates to the state
//     setSelectedDates(dates);
//   };

//   const handleDateUnselect = () => {
//     // Clear the selected dates when unselecting
//     setSelectedDates([]);
//   };

//   const getConsecutiveDates = (start, end) => {
//     const dates = [];
//     let currentDate = new Date(start);

//     while (currentDate <= end) {
//       dates.push(currentDate.toISOString().split('T')[0]);
//       currentDate.setDate(currentDate.getDate() + 1);
//     }

//     return dates;
//   };

//   return (
//     <div>
//       <h1>My Calendar</h1>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         selectable={true}
//         select={handleDateSelect}
//         unselect={handleDateUnselect}
//         selectOverlap={false} // Prevent selecting non-consecutive days
//         selectAllow={getConsecutiveDates} // Allow only consecutive day selections
//         datesSet={(info) => {
//           // Clear selected dates when switching months
//           setSelectedDates([]);
//         }}
//         selectMirror={true} // Show a preview of the selected range
//         events={selectedDates.map((date) => ({
//           start: date,
//           end: date,
//           display: 'background',
//           backgroundColor: 'rgba(0, 0, 255, 0.3)',
//         }))}
//       />
//       <div>
//         Selected Dates:
//         <ul>
//           {selectedDates.map((date) => (
//             <li key={date}>{date}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MyCalendar;


import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const MyCalendar = () => {
  const [selected, setSelected] = React.useState();
  // const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
export default MyCalendar;