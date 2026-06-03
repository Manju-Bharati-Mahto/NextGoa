import React from 'react';

export interface FacultyIconProps extends React.SVGProps<SVGSVGElement> {}

export const EngineeringIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Microchip body */}
    <rect x="25" y="25" width="50" height="50" rx="4" fill="currentColor" opacity="0.8"/>
    {/* Inner circuit lines */}
    <path d="M35 35h10v10H35zM55 35h10v10H55zM35 55h10v10H35zM55 55h10v10H55z" fill="currentColor"/>
    <path d="M45 45h10v10H45z" fill="currentColor" opacity="0.5"/>
    {/* Circuit traces */}
    <path d="M50 25V10M50 90V75M25 50H10M90 50H75M35 25V10M65 25V10M35 90V75M65 90V75M25 35H10M90 35H75M25 65H10M90 65H75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
    <path d="M15 15h10v10M85 15H75v10M15 85h10V75M85 85H75V75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" className="stroke-[var(--svg-stroke,currentColor)]" opacity="0.9"/>
  </svg>
);

export const ManagementIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Main briefcase body */}
    <rect x="15" y="35" width="70" height="50" rx="6" stroke="currentColor" strokeWidth="8" fill="none" className="stroke-[var(--svg-stroke,currentColor)]" opacity="0.9"/>
    {/* Handle */}
    <path d="M35 35V20c0-5 4-10 10-10h10c6 0 10 5 10 10v15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7"/>
    {/* Latches */}
    <rect x="30" y="35" width="8" height="12" rx="2" fill="currentColor"/>
    <rect x="62" y="35" width="8" height="12" rx="2" fill="currentColor"/>
    {/* Center detail */}
    <path d="M15 50h70" stroke="currentColor" strokeWidth="6" opacity="0.5"/>
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
  </svg>
);

export const PharmacyIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Mortar & Pestle */}
    <path d="M20 40h60c0 16.6-13.4 30-30 30S20 56.6 20 40z" fill="currentColor" opacity="0.8"/>
    <path d="M40 70h20v10H40z" fill="currentColor"/>
    <path d="M35 15l10 25M65 15l-10 25" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
    {/* Cross */}
    <path d="M50 45v10M45 50h10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="stroke-[var(--svg-stroke,currentColor)]" opacity="0.9"/>
    {/* Pills */}
    <path d="M70 70l10-10a7.1 7.1 0 0 1 10 10l-10 10a7.1 7.1 0 0 1-10-10z" fill="currentColor" opacity="0.7"/>
    <path d="M75 65l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const NursingIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Heart in background */}
    <path d="M50 80C50 80 15 55 15 35c0-11 9-20 20-20 8 0 15 7 15 7s7-7 15-7c11 0 20 9 20 20 0 20-35 45-35 45z" fill="currentColor" opacity="0.4"/>
    {/* Medical Cross */}
    <path d="M42 35h16v16H42z" fill="currentColor" opacity="0.9"/>
    <path d="M34 43h32v-8H34z" fill="currentColor" opacity="0.9"/>
    {/* Nurse Cap */}
    <path d="M25 25l10-15h30l10 15v10H25V25z" stroke="currentColor" strokeWidth="4" fill="none" className="stroke-[var(--svg-stroke,currentColor)]" opacity="0.9"/>
    <path d="M15 35h70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    {/* Hands cradling */}
    <path d="M30 90c-10-5-15-15-15-25M70 90c10-5 15-15 15-25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
  </svg>
);

export const HotelIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Cloche */}
    <path d="M20 60c0-16.6 13.4-30 30-30s30 13.4 30 30H20z" fill="currentColor" opacity="0.8"/>
    <path d="M10 65h80v5H10z" fill="currentColor"/>
    <circle cx="50" cy="25" r="5" fill="currentColor"/>
    {/* Steam */}
    <path d="M40 15c0-5 5-5 5-10M50 15c0-5 5-5 5-10M60 15c0-5 5-5 5-10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export const PhysiotherapyIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Head */}
    <circle cx="50" cy="20" r="12" fill="currentColor" opacity="0.8"/>
    {/* Torso */}
    <path d="M50 35c10 10 15 25 5 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none" className="stroke-[var(--svg-stroke,currentColor)]" opacity="0.9"/>
    {/* Arm 1 */}
    <path d="M50 45c-15-5-25-15-20-25" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Arm 2 */}
    <path d="M50 45c15-5 25 5 30 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Leg 1 */}
    <path d="M55 75c-10 10-15 15-30 15" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.8"/>
    {/* Leg 2 */}
    <path d="M55 75c10-5 20-5 30 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.8"/>
    {/* Joint highlights */}
    <circle cx="35" cy="85" r="5" fill="currentColor"/>
    <circle cx="80" cy="55" r="5" fill="currentColor"/>
  </svg>
);

export const AlliedHealthIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Microscope Base & Arm */}
    <path d="M30 80h40v10H30z" fill="currentColor"/>
    <path d="M70 80C70 50 40 40 40 40" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.8"/>
    {/* Tube */}
    <path d="M25 25h15l10 30H35l-10-30z" fill="currentColor" opacity="0.7"/>
    {/* Lens & Stage */}
    <path d="M25 15h15v10H25zM20 55h30v5H20z" fill="currentColor"/>
    {/* DNA helix abstract in background */}
    <path d="M70 20c-10 10 0 20-10 30M85 20c-10 10 0 20-10 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
    <path d="M72 25h11M67 35h11M65 45h11" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
  </svg>
);

export const DoctoralIcon = (props: FacultyIconProps) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Open Book */}
    <path d="M50 80c-15-5-30-5-40 0v-20c10-5 25-5 40 0 15-5 30-5 40 0v20c-10-5-25-5-40 0z" fill="currentColor" opacity="0.6"/>
    <path d="M50 60c-15-10-30-5-40 0M50 60c15-10 30-5 40 0" stroke="currentColor" strokeWidth="4" fill="none" className="stroke-[var(--svg-stroke,currentColor)]"/>
    <path d="M50 55v30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
    {/* Atom Rings */}
    <ellipse cx="50" cy="35" rx="25" ry="10" transform="rotate(30 50 35)" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.7"/>
    <ellipse cx="50" cy="35" rx="25" ry="10" transform="rotate(90 50 35)" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.7"/>
    <ellipse cx="50" cy="35" rx="25" ry="10" transform="rotate(150 50 35)" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.7"/>
    {/* Nucleus */}
    <circle cx="50" cy="35" r="6" fill="currentColor" opacity="0.9"/>
  </svg>
);
