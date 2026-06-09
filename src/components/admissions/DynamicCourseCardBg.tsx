import React from "react";

export function DynamicCourseCardBg({ color, type }: { color: string, type: string }) {
  // Use a contrasting color for the paths so they are visible against the background
  const lineColor = color === '#fedb2f' ? '#1F1F1F' : '#FFFFFF';
  
  let content = null;

  if (type === "tech") {
    content = (
      <g opacity="0.3">
        <path d="M420 70 L480 70 L480 130 L420 130 Z M430 80 L470 80 L470 120 L430 120 Z M440 90 L460 90 L460 110 L440 110 Z" fill="none" stroke={lineColor} strokeWidth="3" />
        <path d="M420 85 L400 85 M420 100 L400 100 M420 115 L400 115" stroke={lineColor} strokeWidth="3" />
        <path d="M480 85 L500 85 M480 100 L500 100 M480 115 L500 115" stroke={lineColor} strokeWidth="3" />
        <path d="M435 70 L435 50 M450 70 L450 50 M465 70 L465 50" stroke={lineColor} strokeWidth="3" />
        <path d="M435 130 L435 150 M450 130 L450 150 M465 130 L465 150" stroke={lineColor} strokeWidth="3" />
        
        <circle cx="390" cy="100" r="5" fill={lineColor} />
        <circle cx="510" cy="100" r="5" fill={lineColor} />
        <circle cx="450" cy="40" r="5" fill={lineColor} />
        <circle cx="450" cy="160" r="5" fill={lineColor} />

        <path d="M390 100 L370 80 L350 80 M510 100 L530 120 L550 120 M450 40 L430 20 L410 20 M450 160 L470 180 L490 180" fill="none" stroke={lineColor} strokeWidth="2" />
        <path d="M360 140 A 20 20 0 0 1 380 120 L380 90" fill="none" stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" />
      </g>
    );
  } else if (type === "business") {
    content = (
      <g opacity="0.3">
        <path d="M380 140 L380 40 L400 40 L400 140 Z M420 140 L420 70 L440 70 L440 140 Z M460 140 L460 20 L480 20 L480 140 Z M500 140 L500 90 L520 90 L520 140 Z" fill={lineColor} opacity="0.5" />
        <path d="M370 150 L530 150" stroke={lineColor} strokeWidth="4" />
        <path d="M370 110 L410 80 L450 100 L490 30 L520 60" fill="none" stroke={lineColor} strokeWidth="5" strokeLinejoin="round" />
        <circle cx="410" cy="80" r="6" fill={color} stroke={lineColor} strokeWidth="3" />
        <circle cx="450" cy="100" r="6" fill={color} stroke={lineColor} strokeWidth="3" />
        <circle cx="490" cy="30" r="6" fill={color} stroke={lineColor} strokeWidth="3" />
        <path d="M490 30 L490 150" stroke={lineColor} strokeWidth="2" strokeDasharray="4 4" opacity="0.7"/>
      </g>
    );
  } else if (type === "medical") {
    content = (
      <g opacity="0.3">
        <path d="M430 60 A 20 20 0 0 0 390 60 A 20 20 0 0 0 390 100 L450 160 L510 100 A 20 20 0 0 0 510 60 A 20 20 0 0 0 470 60 Z" fill={lineColor} opacity="0.5" />
        <path d="M360 120 L390 120 L400 90 L420 150 L440 70 L460 130 L470 120 L540 120" fill="none" stroke={lineColor} strokeWidth="5" strokeLinejoin="round" />
        <circle cx="540" cy="120" r="5" fill={lineColor} />
        <circle cx="360" cy="120" r="5" fill={lineColor} />
        
        <path d="M435 30 L465 30 M450 15 L450 45" stroke={lineColor} strokeWidth="5" strokeLinecap="round" opacity="0.8"/>
      </g>
    );
  } else if (type === "pharmacy") {
    content = (
      <g opacity="0.3">
        <path d="M430 40 L470 40 M440 40 L440 80 L410 130 A 20 20 0 0 0 430 160 L470 160 A 20 20 0 0 0 490 130 L460 80 L460 40" fill="none" stroke={lineColor} strokeWidth="5" strokeLinejoin="round" />
        <path d="M415 120 L485 120 M420 140 L480 140" stroke={lineColor} strokeWidth="3" opacity="0.6" />
        <circle cx="450" cy="140" r="4" fill={lineColor} />
        <circle cx="435" cy="130" r="3" fill={lineColor} />
        <circle cx="465" cy="130" r="3" fill={lineColor} />
        <path d="M460 40 L460 20 A 10 10 0 0 0 440 20 L440 40" fill="none" stroke={lineColor} strokeWidth="5" />
        
        <path d="M510 60 A 15 15 0 0 1 540 90 L510 120 A 15 15 0 0 1 480 90 Z" fill={lineColor} opacity="0.5" />
        <path d="M510 60 L510 120 M480 90 L540 90" stroke={lineColor} strokeWidth="3" strokeDasharray="3 3" opacity="0.6" />
      </g>
    );
  }

  return (
    <svg 
      viewBox="0 0 483 277" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 z-0" 
      preserveAspectRatio="none"
    >
      <mask id="mask_card_bg" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="482" height="277">
        <rect x="0.516" y="0.516" width="480.967" height="275.967" rx="16.007" fill="white" stroke={color} strokeWidth="1.033"/>
      </mask>
      <g mask="url(#mask_card_bg)">
        <rect x="0.516" y="0.516" width="480.967" height="275.967" rx="16.007" fill={color} stroke={color} strokeWidth="1.033"/>
        {content}
      </g>
      <rect x="0.516" y="0.516" width="480.967" height="275.967" rx="16.007" stroke={color} strokeWidth="1.033" fill="none"/>
    </svg>
  );
}
