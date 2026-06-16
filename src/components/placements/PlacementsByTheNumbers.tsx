"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const sectorData = [
  { label: 'Tech & IT', value: 28, color: '#FFDE21' },
  { label: 'Pharmaceuticals', value: 14, color: '#2BA5D5' },
  { label: 'BFSI & Consulting', value: 13, color: '#FF6B86' },
  { label: 'Healthcare', value: 12, color: '#FFDE21' },
  { label: 'Higher Studies', value: 11, color: '#E42D45' },
  { label: 'Hospitality', value: 10, color: '#D2A809' },
  { label: 'Entrepreneurship', value: 7, color: '#66D2F9' },
  { label: 'Govt / Defence', value: 5, color: '#2BA5D5' },
];

const packageData = [
  { label: '₹6–10 LPA', value: 38, color: '#F38D9A' },
  { label: '₹4–6 LPA', value: 32, color: '#F9BEC6' },
  { label: '₹10–20 LPA', value: 22, color: '#EE6171' },
  { label: '₹20+ LPA', value: 8, color: '#E32D43' },
];

export function PlacementsByTheNumbers() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }
    if (isRightSwipe) {
      setActiveSlide((prev) => (prev === 1 ? 0 : 1));
    }
  };

  const rawData = activeSlide === 0 ? sectorData : packageData;
  const sortedData = [...rawData].sort((a, b) => b.value - a.value);

  const cx = 450;
  const cy = 300;
  const R = 240;
  const dotR = R * 0.75;
  const elbowR = R * 1.15; // Extend the bend further outside the chart
  const lineLength = 55;   // Make the horizontal line longer

  const maskR = R / 2;
  const maskCircumference = 2 * Math.PI * maskR;

  let currentPercentForAnim = 0;
  const wipeValues = [maskCircumference];
  const keyTimes = [0];
  let currentKeyTime = 0;

  const numPauses = Math.max(1, sortedData.length - 1);
  const totalPauseTime = 0.30; // 30% of the total animation duration is spent pausing
  const pauseDuration = totalPauseTime / numPauses;
  const totalMoveTime = 1 - totalPauseTime;

  const totalAnimDur = 5.5; // Slow down the animation
  const animatedData = sortedData.map((slice, index) => {
    const moveDuration = (slice.value / 100) * totalMoveTime;
    const midMoveKeyTime = currentKeyTime + moveDuration / 2;
    const animDelay = (midMoveKeyTime * totalAnimDur).toFixed(2);

    currentKeyTime += moveDuration;
    currentPercentForAnim += slice.value;
    const currentOffset = maskCircumference * (1 - currentPercentForAnim / 100);

    wipeValues.push(currentOffset);
    keyTimes.push(Math.min(currentKeyTime, 1));

    if (index < numPauses) {
      currentKeyTime += pauseDuration;
      wipeValues.push(currentOffset);
      keyTimes.push(Math.min(currentKeyTime, 1));
    }

    return {
      ...slice,
      animDelay
    };
  });

  const animValuesString = wipeValues.join(';');
  const animKeyTimesString = keyTimes.map(n => n.toFixed(4)).join(';');

  let cumulativeForPie = 0;
  const pieSlices = animatedData.map((slice, i) => {
    const startPercent = cumulativeForPie / 100;
    // eslint-disable-next-line react-hooks/immutability
    cumulativeForPie += slice.value;
    const endPercent = cumulativeForPie / 100;

    const startAngle = startPercent * 360;
    const endAngle = endPercent * 360;

    const startRad = startAngle * (Math.PI / 180);
    const endRad = endAngle * (Math.PI / 180);

    const x1 = Number((cx + R * Math.cos(startRad)).toFixed(4));
    const y1 = Number((cy + R * Math.sin(startRad)).toFixed(4));
    const x2 = Number((cx + R * Math.cos(endRad)).toFixed(4));
    const y2 = Number((cy + R * Math.sin(endRad)).toFixed(4));

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    return (
      <path
        key={`slice-${i}`}
        d={d}
        fill={slice.color}
        className="transition-all duration-300 hover:opacity-90 cursor-pointer"
      />
    );
  });

  let cumulativeForGaps = 0;
  const pieGaps = animatedData.map((slice, i) => {
    // eslint-disable-next-line react-hooks/immutability
    cumulativeForGaps += slice.value;
    const endPercent = cumulativeForGaps / 100;
    const rad = endPercent * 360 * (Math.PI / 180);
    const x = Number((cx + R * Math.cos(rad)).toFixed(4));
    const y = Number((cy + R * Math.sin(rad)).toFixed(4));
    return (
      <line
        key={`gap-${i}`}
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke="white"
        strokeWidth="3.5"
      />
    );
  });

  let cumulativeForLabels = 0;

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h3 className="text-gray-900 mb-2 transition-all duration-300 section-subheading text-center">
          {activeSlide === 0 ? "Sector destinations" : "Package distribution"}
        </h3>
        <h2 className="text-[#E73649] text-center mb-3 transition-all duration-300 section-heading">
          {activeSlide === 0 ? "Where graduates go and what they earn." : "% of placed students per band"}
        </h2>
        <p className="text-gray-800 text-center mb-16 transition-all duration-300 section-body">
          {activeSlide === 0
            ? "Two views of one cohort - package bands on the left, sector destinations on the right."
            : "Highest: ₹60 LPA · Median confirmed in official placement report."}
        </p>

        <div
          className="relative w-full max-w-5xl mx-auto mb-10 animate-fade-in"
          key={`slide-${activeSlide}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <svg viewBox="0 0 900 600" className="w-full h-auto overflow-visible">

            {inView && (
              <>
                <style>
                  {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.98); }
                  to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                  animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes popOutCenter {
                  0% {
                    transform: scale(0);
                  }
                  50% {
                    transform: scale(1.15);
                  }
                  75% {
                    transform: scale(0.95);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
                .animate-pop-center {
                  transform-origin: 450px 300px;
                  transform: scale(0);
                  animation: popOutCenter 0.6s ease-in-out ${totalAnimDur}s forwards;
                }
              `}
                </style>

                <defs>
                  <mask id="pie-wipe-mask">
                    <circle
                      cx={cx}
                      cy={cy}
                      r={maskR}
                      fill="none"
                      stroke="white"
                      strokeWidth={R + 10}
                      strokeDasharray={maskCircumference}
                      strokeDashoffset={maskCircumference}
                      transform={`rotate(-90 ${cx} ${cy})`}
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values={animValuesString}
                        dur={`${totalAnimDur}s`}
                        fill="freeze"
                        calcMode="linear"
                        keyTimes={animKeyTimesString}
                      />
                    </circle>
                  </mask>
                </defs>

                {/* Outer soft shadow circle/glow */}
                <circle cx={cx} cy={cy} r={R + 12} fill="white" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.06))" />
                <circle cx={cx} cy={cy} r={R + 1} fill="none" stroke="#F1F5F9" strokeWidth="2" />

                {/* Masked group for pie slices and gaps so they visually 'fill up' */}
                <g mask="url(#pie-wipe-mask)">
                  {/* Pie Slices */}
                  <g transform={`rotate(-90 ${cx} ${cy})`}>
                    {pieSlices}
                  </g>

                  {/* Gaps (White lines radiating from center) */}
                  <g transform={`rotate(-90 ${cx} ${cy})`}>
                    {pieGaps}
                  </g>
                </g>

                {/* Center Circle Overlay */}
                <g className="animate-pop-center">
                  <circle cx={cx} cy={cy} r={R * 0.45} fill="white" stroke="#F8FAFC" strokeWidth="12" />

                  {/* Center Company Logos Image */}
                  <image
                    href="/placements/comp.png"
                    x={cx - (R * 0.43)}
                    y={cy - (R * 0.43)}
                    width={R * 0.86}
                    height={R * 0.86}
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>

                {/* Labels and connecting lines */}
                {animatedData.map((slice, i) => {
                  const startPercent = cumulativeForLabels / 100;
                  cumulativeForLabels += slice.value;
                  const endPercent = cumulativeForLabels / 100;
                  const midPercent = (startPercent + endPercent) / 2;

                  const midAngle = midPercent * 360;
                  const rad = (midAngle - 90) * (Math.PI / 180);

                  const dotX = Number((cx + dotR * Math.cos(rad)).toFixed(4));
                  const dotY = Number((cy + dotR * Math.sin(rad)).toFixed(4));

                  const elbowX = Number((cx + elbowR * Math.cos(rad)).toFixed(4));
                  const elbowY = Number((cy + elbowR * Math.sin(rad)).toFixed(4));

                  const isRight = midAngle >= 0 && midAngle < 180;
                  const endX = isRight ? elbowX + lineLength : elbowX - lineLength;
                  const endY = elbowY;

                  const animDelay = slice.animDelay;

                  return (
                    <g key={`label-${i}`} opacity="0">
                      <animate
                        attributeName="opacity"
                        from="0"
                        to="1"
                        dur="0.6s"
                        begin={`${animDelay}s`}
                        fill="freeze"
                      />
                      {/* Polyline from dot to elbow to horizontal end */}
                      <polyline
                        points={`${dotX},${dotY} ${elbowX},${elbowY} ${endX},${endY}`}
                        fill="none"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      {/* Dot inside slice */}
                      <circle
                        cx={dotX}
                        cy={dotY}
                        r="3.5"
                        fill="white"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                      />
                      {/* Label Text (Above line) */}
                      <text
                        x={isRight ? endX + 10 : endX - 10}
                        y={endY - 8}
                        textAnchor={isRight ? "start" : "end"}
                        fill="#1F1F1F"
                        fontSize="15"
                        fontFamily="sans-serif"
                        fontWeight="600"
                      >
                        {slice.label}
                      </text>
                      {/* Percentage Text (Below line) */}
                      <text
                        x={isRight ? endX + 10 : endX - 10}
                        y={endY + 28}
                        textAnchor={isRight ? "start" : "end"}
                        fill="#E73649"
                        fontSize="32"
                        fontWeight="800"
                        fontStyle="italic"
                        fontFamily="sans-serif"
                      >
                        {slice.value}%
                      </text>
                    </g>
                  );
                })}
              </>
            )}
          </svg>

          {/* Dots below chart */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={() => setActiveSlide(0)}
              className={`w-3 h-3 rounded-full transition-colors ${activeSlide === 0 ? 'bg-[#E73649]' : 'border border-gray-300 bg-white hover:bg-gray-100'}`}
              aria-label="View Sector Destinations"
            />
            <button
              onClick={() => setActiveSlide(1)}
              className={`w-3 h-3 rounded-full transition-colors ${activeSlide === 1 ? 'bg-[#E73649]' : 'border border-gray-300 bg-white hover:bg-gray-100'}`}
              aria-label="View Package Distribution"
            />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mb-14 transition-all duration-300">
          Indicative - verified annually in the placement report.
        </p>

        {/* CTA Bar */}
        <div className="w-full max-w-full bg-black rounded-[20px] py-5 px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl mx-auto mt-2">
          <div className="text-center md:text-left">
            <h4 className="text-white font-poppins font-semibold text-[22px] tracking-tight">Want to be the next choice of these top recruiters?</h4>
            <p className="text-[#A1A1AA] font-sans text-[15px] mt-0.5 font-light">
              Apply now or talk to a career counsellor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button data-enquiry-trigger="true" className="bg-gradient-to-r from-[#EE384E] to-[#D32F2F] hover:from-[#D32F2F] hover:to-[#B71C1C] text-white px-6 py-3 rounded-full font-sans font-bold text-[14px] sm:text-[15px] transition-all text-center whitespace-nowrap shadow-sm">
              Apply Now
            </button>
            <a href="https://wa.me/919558210145" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7568] text-white px-6 py-3 rounded-full font-sans font-bold text-[14px] sm:text-[15px] transition-all text-center whitespace-nowrap shadow-sm">
              Chat on WhatsApp
            </a>
            <button className="bg-gradient-to-r from-[#12B2E6] to-[#0A8CB8] hover:from-[#0fa0cf] hover:to-[#08789e] text-white px-6 py-3 rounded-full font-sans font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2.5 whitespace-nowrap shadow-sm">
              <svg className="w-[18px] h-[18px] text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              1800 890 9090
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
