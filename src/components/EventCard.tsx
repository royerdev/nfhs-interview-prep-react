import React from "react";
import Badge from "./Badge";
import BadgeStatus, { type Status } from "./BadgeStatus";
import { formatDateTimeToLocal } from "../libs/utils";

type EventCardProps = {
  id: number;
  title: string;
  date: string;
  status: Status;
  activity: string;
};

function EventCard({ id, title, date, status, activity }: EventCardProps) {
  const displayDate = formatDateTimeToLocal(date);

  return (
    <div className="w-80" data-testid="event-card">
      <div className="w-full aspect-video bg-gray-400 mb-2 rounded-lg relative">
        <Badge text={activity} className="absolute top-3 left-3" />
        <BadgeStatus status={status} className="absolute bottom-3 right-3" />
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>{displayDate}</p>
    </div>
  );
}

export default EventCard;
export type { EventCardProps };
