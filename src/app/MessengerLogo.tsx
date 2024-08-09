import React from "react";

interface MessengerLogoProps {
  size?: number;
  color?: string;
}

const MessengerLogo: React.FC<MessengerLogoProps> = ({
  size = 32,
  color = "#0084FF",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.268 2 2 7.924 2 15.25C2 19.43 4.158 23.152 7.5 25.562V30L11.814 27.648C13.14 28.062 14.538 28.28 16 28.28C23.732 28.28 30 22.576 30 15.25C30 7.924 23.732 2 16 2Z"
      fill={color}
    />
    <path
      d="M17.4 19L14.2 15.5L8 19L14.8 11.5L18.1 15L24.2 11.5L17.4 19Z"
      fill="black"
    />
  </svg>
);

export default MessengerLogo;
