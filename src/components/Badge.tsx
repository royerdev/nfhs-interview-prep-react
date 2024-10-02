import React from "react";
import { Icon } from "@iconify/react";

type BadgeProps = {
  text: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Badge = ({ text, icon, style, className }: BadgeProps) => {
  return (
    <span
      style={style}
      className={`bg-[#0009] py-2 px-4 inline-flex gap-2 text-center items-center text-white text-sm font-semibold rounded-full ${className}`}
      data-testid="badge"
    >
      {icon && <Icon icon={icon} data-icon={icon} />}
      <span>{text}</span>
    </span>
  );
};

export default Badge;
export type { BadgeProps };
