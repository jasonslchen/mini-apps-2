import React from 'react';

const EventEntry = (props) => {
  const { event } = props;
  let timePeriod = 'AD';
  let { date } = event;
  if (date[0] === '-') {
    timePeriod = 'BC';
    date = date.slice(1);
  }
  date += timePeriod;

  return (
    <div>
      <div>
        Date: {date}
      </div>
      <div>
        Language: {event.lang}
      </div>
      <div>
        Category: {event.category1}
      </div>
      <div>
        Granularity: {event.granularity}
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
