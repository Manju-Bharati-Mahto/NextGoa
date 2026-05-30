"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Dark stats band beneath the hero. Plain, crawlable text (good for SEO/AEO —
 * these numbers are the kind of facts AI engines cite). Edit the figures here.
 */
const stats = [
  { value: "2,200+", label: "Recruiting companies*" },
  { value: "120+", label: "Global university partners" },
  { value: "58 Cr+", label: "Govt-funded research" },
];

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    // On mount on the client, initialize count to 0 if we haven't animated yet
    if (!animatedRef.current) {
      const suffix = value.replace(/[0-9,]/g, "");
      setDisplayValue(`0${suffix}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const rawNumberStr = value.replace(/,/g, "").match(/\d+/)?.[0] || "0";
          const targetNumber = parseInt(rawNumberStr, 10);
          const suffix = value.replace(/[0-9,]/g, "");

          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress * (2 - progress); // easeOutQuad
            const currentCount = Math.floor(easeProgress * targetNumber);

            const formatted = currentCount.toLocaleString("en-US");
            setDisplayValue(`${formatted}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}

export function StatsBar() {
  return (
    <section id="stats" className="bg-ink-warm">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-[family-name:var(--font-gotham)] text-5xl sm:text-6xl font-bold tracking-tight text-brand-bright">
                <AnimatedNumber value={s.value} />
              </dt>
              <dd className="mt-2 text-base font-medium text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-sm text-white/40">
          *Across the Parul University ecosystem.
        </p>
      </div>
    </section>
  );
}
