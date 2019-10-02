import React from 'react';
import EventEntry from './eventEntry.jsx';

const EventsList = (props) => {
  const { events } = props;
  return (
    <div>
      {events.length === 0 ? (<div>No Search Queries</div>) : events.map((event) => <EventEntry event={event} />)}
    </div>
  );
};

export default EventsList;
