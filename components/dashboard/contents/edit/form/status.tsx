import * as React from "react";

export function StatusDot({
  color = "#facc15",
  size = 14,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="7" cy="7" r="7" fill={color} />
    </svg>
  );
}
