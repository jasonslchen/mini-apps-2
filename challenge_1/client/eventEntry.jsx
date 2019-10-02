import React from 'react';

const EventEntry = (props) => {
  const { event } = props;
  let timePeriod = 'AD';
  let date;
  if (event.date[0] === '-') {
    timePeriod = 'BC';
    date = event.date.slice(1, 5);
  } else {
    date = event.date.slice(0, 4);
  }
  date += timePeriod;

  return (
    <div>
      <div>
        {event.category1}
,
        {' '}
        {date}
      </div>
      <div>
Description:
        {' '}
        {event.description}
      </div>
    </div>
  );
};

export default EventEntry;
