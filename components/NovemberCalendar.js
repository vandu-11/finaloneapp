import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from './NovemberCalendar.module.css';
import Footer from './Footer';

// Use moment.js to localize the calendar
const localizer = momentLocalizer(moment);

function NovemberCalendar() {
  const [eventDetails, setEventDetails] = useState(null);

  const eventsData = [
    {
      start: '2023-11-05T10:00:00', // December is represented by 12
      end: '2023-11-05T11:00:00',
      title: 'Event 1',
      desc: 'Event 1 details...',
    },
    {
      start: '2023-11-15T14:00:00',
      end: '2023-11-15T16:00:00',
      title: 'Event 2',
      desc: 'Event 2 details...',
    },
    // Add more events with date strings
  ];
  

  // Handle click events on calendar events
  const handleSelectEvent = (event) => {
    setEventDetails(`${event.title}: ${moment(event.start).format('LT')} - ${moment(event.end).format('LT')}\n${event.desc}`);
  };

  // Customize the toolbar to show only November
  const CustomToolbar = ({ label, onNavigate }) => (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{label}</span>
      <button className="rbc-btn-group rbc-nav-btn" onClick={() => onNavigate('PREV', 'month')}>
        &lt;
      </button>
      <button className="rbc-btn-group rbc-nav-btn" onClick={() => onNavigate('NEXT', 'month')}>
        &gt;
      </button>
    </div>
  );

  return (
    <div className={styles['calendar-container']}>
      <Calendar
        localizer={localizer}
        events={eventsData}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        defaultDate={new Date(2023, 10, 1)} // Set the default date to November 1, 2023
        components={{
          toolbar: CustomToolbar,
        }}
        views={['month']}
        step={1}
        onNavigate={(date, view) => {
          // Prevent navigation to other months
          if (view === 'month' && (date.getMonth() < 10 || date.getMonth() > 10)) {
            return null;
          }
        }}
      />
      {eventDetails && (
        <div className={styles['event-details']}>
          <p>{eventDetails}</p>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NovemberCalendar;
