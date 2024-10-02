import React from "react";
import Badge from "./Badge";
import { capitalizeFirstLetterOfEachWord } from "../libs/utils";

type Status = "upcoming" | "live" | "on_demand";

type BadgeStatusProps = {
  status: Status;
  className?: string;
};

const BadgeStatus = ({ status, className }: BadgeStatusProps) => {
  let backgroundColor = "#0009";
  let icon = "fluent:status-circle-24-filled";

  switch (status) {
    case "upcoming":
      backgroundColor = "#162c68";
      icon = "fluent:list-24-filled";
      break;
    case "live":
      backgroundColor = "#da374a";
      icon = "fluent:live-24-filled";
      break;
    case "on_demand":
      backgroundColor = "#000";
      icon = "fluent:calendar-24-filled";
      break;
  }

  const displayStatus = capitalizeFirstLetterOfEachWord(
    status.replace("_", " ")
  );

  return (
    <Badge
      text={displayStatus}
      icon={icon}
      style={{ backgroundColor }}
      className={className}
    />
  );
};

export default BadgeStatus;
export type { Status, BadgeStatusProps };
