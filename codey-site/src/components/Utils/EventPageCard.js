import React from 'react';
import './EventPageCard.css'; // Create a new CSS file for styling

const EventCard = ({ event }) => {
  const { title, date, description } = event;

  return (
    <div className="event-card">
      <h3 className="event-title">{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
    </div>
  );
};

export default EventCard;
