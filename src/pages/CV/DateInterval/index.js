import React from 'react';

const DateInterval = ({ start, end, className, ...rest }) => 
(
  <div className={"date-interval " + className}>
    <span className="start">{start}</span>
    <span className="end">{end}</span>
  </div>
);

export default DateInterval;