import React from 'react';

const EventEntry = (props) => {
  const { event } = props;
  return (
    <div>
      {event.description}
    </div>
  );
};

export default EventEntry;
