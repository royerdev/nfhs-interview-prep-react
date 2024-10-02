import React, { useState, useEffect } from "react";
import EventCard, { type EventCardProps } from "./EventCard";

const EventCardContainer = () => {
  const [events, setEvents] = useState<EventCardProps[]>([]);

  const _fetchEvents = async () => {
    const response = await fetch("http://localhost:3001/events");
    const data = await response.json();
    setEvents(data);
  };

  useEffect(() => {
    _fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </>
  );
};

export default EventCardContainer;
