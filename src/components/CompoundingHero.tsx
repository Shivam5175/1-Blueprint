"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const DAYS = 31;

function getValue(day: number): number {
  return Math.pow(2, day - 1);
}

function formatRupees(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Crore`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} Lakh`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export default function CompoundingHero() {
  // The section is tall; the inner stage is sticky. Scrolling through it
  // advances "time" — day 1 → 31 — which is the whole concept.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [day, setDay] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setDay(Math.min(DAYS, Math.max(1, Math.round(1 + v * (DAYS - 1)))));
  });

  const value = getValue(day);

  // The glowing compounding curve: flat early, near-vertical at the end.
  const curvePath = useMemo(() => {
    const W = 1000;
    const H = 300;
    const finalV = getValue(DAYS);
    const pts: string[] = [];
    for (let d = 1; d <= DAYS; d++) {
      const x = (W * (d - 1)) / (DAYS - 1);
      const y = H * (1 - Math.pow(getValue(d) / finalV, 0.5));
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return "M" + pts.join(" L");
  }, []);

  const reached = day >= DAYS;

  return (
    <section ref={ref} id="compounding" className="relative h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center px-6">
        {/* Vignette for legibility */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_62%_60%_at_50%_50%,transparent_38%,rgba(6,6,9,0.72))]" />

        {/* Glowing curve, drawn in time with the scroll */}
        <div className="absolute inset-x-0 bottom-[10%] h-[38%] z-[1] pointer-events-none flex items-end justify-center">
          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            className="w-full max-w-4xl h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9a7b16" />
                <stop offset="55%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#f6df74" />
              </linearGradient>
            </defs>
            <motion.path
              d={curvePath}
              fill="none"
              stroke="url(#curveGrad)"
              strokeWidth={2.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: "drop-shadow(0 0 7px rgba(240,212,94,0.8))",
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </div>

        {/* Overlay — the coin + climbing value */}
        <div className="relative z-10 text-center pointer-events-none flex flex-col items-center">
          <div className="coin-stage mb-8" aria-hidden="true">
            <div className="coin">
              <span className="coin-shine" />
              <span className="coin-face">₹1</span>
            </div>
          </div>

          <p className="text-gold-400/90 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium mb-5">
            The Power of Compounding
          </p>

          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mb-3">
            Day {day} <span className="text-gray-600">of {DAYS}</span>
          </p>

          <div className="font-display gold-gradient-text text-glow text-5xl sm:text-7xl md:text-8xl font-bold tabular-nums leading-none drop-shadow-[0_4px_40px_rgba(0,0,0,0.7)]">
            {formatRupees(value)}
          </div>

          <p className="text-gray-300 max-w-md mx-auto mt-7 text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)]">
            A single rupee, doubled every day. Scroll to watch it compound — small
            at first, then almost vertical.
          </p>

          <a
            href="#principles"
            className="pointer-events-auto inline-block mt-8 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-black font-semibold text-sm shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:scale-[1.03] transition-all"
          >
            {reached ? "Explore the principles" : "Start the Blueprint"}
          </a>
        </div>

        {/* Scroll cue (hidden once you reach the end) */}
        <motion.div
          animate={{ opacity: reached ? 0 : 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold-400/60 text-[11px] tracking-[0.3em] uppercase"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
