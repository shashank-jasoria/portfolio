"use client";

import React from "react";

const CurvedArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="-40 -30 400 270"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        transform:
          "matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)",
        ...props.style,
      }}
    >
      {/* Curve */}
      <path
        d="M20,20c130,0,130,160,260,160"
        transform="matrix(1.424338 0 0 1.451694 -63.6507 -45.1694)"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
      />

      {/* V-shaped arrow head */}
      <path
        d="M265,165l15,15-15,15"
        transform="translate(70.16394 36.13552)"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CurvedArrow;