import React from "react";

interface LogoProps {
  className?: string;
  color?: "black" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", color = "black", size = "md" }: LogoProps) {
  const fillColor = color === "black" ? "fill-black" : "fill-white";

  let dimensions = "w-12 h-12";
  if (size === "sm") {
    dimensions = "w-8 h-8";
  } else if (size === "lg") {
    dimensions = "w-16 h-16";
  } else if (size === "xl") {
    dimensions = "w-24 h-24";
  }

  return (
    <svg
      id="zero-logo-svg"
      viewBox="0 0 100 100"
      className={`${dimensions} ${className}`}
      aria-label="ZERO Logo"
      role="img"
    >
      {/* Z (top-left) */}
      <path
        d="M 0 0 H 46 V 10.5 L 13.5 35.5 H 46 V 46 H 0 V 35.5 L 32.5 10.5 H 0 Z"
        className={fillColor}
      />
      {/* E (top-right, three bars) */}
      <path
        d="M 54 0 H 100 V 10.5 H 54 Z M 54 17.75 H 100 V 28.25 H 54 Z M 54 35.5 H 100 V 46 H 54 Z"
        className={fillColor}
      />
      {/* R (bottom-left) */}
      <path
        d="M 0 54 H 32 C 40 54 46 60 46 67.5 C 46 75 40 80 32 80 H 22 L 35 100 H 46 L 31.5 80 H 10.5 V 100 H 0 Z M 10.5 62.5 H 30 C 33 62.5 35.5 64 35.5 67.5 C 35.5 71 33 71.5 30 71.5 H 10.5 Z"
        fillRule="evenodd"
        className={fillColor}
      />
      {/* O (bottom-right) */}
      <path
        d="M 77 54 C 89.7 54 100 64.3 100 77 C 100 89.7 89.7 100 77 100 C 64.3 100 54 89.7 54 77 C 54 64.3 64.3 54 77 54 Z M 77 64.5 C 70.1 64.5 64.5 70.1 64.5 77 C 64.5 83.9 70.1 89.5 77 89.5 C 83.9 89.5 89.5 83.9 89.5 77 C 89.5 70.1 83.9 64.5 77 64.5 Z"
        fillRule="evenodd"
        className={fillColor}
      />
    </svg>
  );
}
