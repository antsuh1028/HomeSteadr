import React from "react";
import "./Logo.css";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      className="logo-svg"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <g>
        <path d="M94.2,46.6L81.7,35.2V15.3c0-0.6-0.5-1.2-1.2-1.2l-10.6,0c-0.6,0-1.2,0.5-1.2,1.2v8.1L52.9,8.8c-1.7-1.5-4.2-1.5-5.9,0   L5.8,46.6c-1.6,1.4-0.6,4.1,1.6,4.1h6.2l36.4-34l36.4,34h6.2C94.8,50.7,95.8,48.1,94.2,46.6z" />
        <path d="M82.2,83.2h-0.6c0-0.1,0-0.2,0-0.4V51L50,21.5L18.3,51v31.8c0,0.1,0,0.3,0,0.4h-1.2c-0.8,0-1.5,0.7-1.5,1.5v6.2   c0,0.8,0.7,1.5,1.5,1.5h65c0.8,0,1.5-0.7,1.5-1.5v-6.2C83.7,83.9,83.1,83.2,82.2,83.2z M69.6,57.6l-4.3-3.1L48.2,77l-9.5-6.8   L28.1,83.5l-4.4-3.5l13.9-17.6l9.4,6.8l13.7-18l-4.2-3.1l13-4.1V57.6z" />
      </g>
      <text
        x="0"
        y="115"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by parkjisun
      </text>
      <text
        x="0"
        y="120"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </svg>
  );
};

export default Logo;
