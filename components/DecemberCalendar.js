import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styles from './DecemberCalendar.module.css';
import Footer from './Footer';

// Use moment.js to localize the calendar
const localizer = momentLocalizer(moment);

function DecemberCalendar() {
  const [eventDetails, setEventDetails] = useState(null);

  const eventsData = [
    {
      start: '2023-12-05T10:00:00', // December is represented by 12
      end: '2023-12-05T11:00:00',
      title: 'Event 1',
      desc: 'Event 1 details...',
    },
    {
      start: '2023-12-15T14:00:00',
      end: '2023-12-15T16:00:00',
      title: 'Event 2',
      desc: 'Event 2 details...',
    },
    // Add more events with date strings
  ];
  
  // Format the timings to include AM and PM
  const formattedEventsData = eventsData.map((event) => ({
    ...event,
    start: moment(event.start).format('YYYY-MM-DD hh:mm A'),
    end: moment(event.end).format('YYYY-MM-DD hh:mm A'),
    
  }));

  // Handle click events on calendar events
  const handleSelectEvent = (event) => {
    setEventDetails(`${event.title}: ${moment(event.start).format('LT')} - ${moment(event.end).format('LT')}\n${event.desc}`);
  };

  // Customize the toolbar to show only December
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
        events={formattedEventsData}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        defaultDate={new Date(2023, 11, 1)} // Set the default date to December 1, 2023
        components={{
          toolbar: CustomToolbar,
        }}
        views={['month']}
        step={1}
        onNavigate={(date, view) => {
          // Prevent navigation to other months
          if (view === 'month' && (date.getMonth() < 11 || date.getMonth() > 11)) {
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

      </div>
      <Footer />
    </div>


  );
}

export default DecemberCalendar;
