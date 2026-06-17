"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const DAYS = 365;
const W = 900;
const H = 300;

function fmtUp(m: number): string {
  if (m >= 100) return `${Math.round(m).toLocaleString("en-IN")}×`;
  return `${m.toFixed(1)}×`;
}
function fmtDown(m: number): string {
  return m >= 0.01 ? `${m.toFixed(2)}×` : "≈0×";
}

export default function CompoundYourself() {
  const [pct, setPct] = useState(1);

  const { upPath, fillPath, downPath, up, down } = useMemo(() => {
    const r = pct / 100;
    const upEnd = Math.pow(1 + r, DAYS);
    const N = 48;
    let u = "";
    let d = "";
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const mu = Math.pow(1 + r, t * DAYS);
      const md = Math.pow(1 - r, t * DAYS);
      const x = ((W * t)).toFixed(1);
      const yu = (H * (1 - mu / upEnd)).toFixed(1);
      const yd = (H * (1 - md / upEnd)).toFixed(1);
      u += (i ? " L" : "M") + x + "," + yu;
      d += (i ? " L" : "M") + x + "," + yd;
    }
    return {
      upPath: u,
      fillPath: `${u} L${W},${H} L0,${H} Z`,
      downPath: d,
      up: upEnd,
      down: Math.pow(1 - r, DAYS),
    };
  }, [pct]);

  return (
    <section id="compound-yourself" className="px-6 py-28 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <p className="text-gold-400/90 text-xs sm:text-sm tracking-[0.3em] uppercase mb-5 font-medium">
          It&apos;s Not Just Money
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
          Compound <span className="gold-gradient-text text-glow">yourself</span>,
          <br className="hidden sm:block" /> not just your money.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          You just watched ₹1 become a fortune. The same math runs your life — get
          1% better every day and you compound into someone extraordinary. Drag the
          dial and see a year unfold.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card p-5 sm:p-8"
      >
        {/* Chart */}
        <div className="relative h-[260px] sm:h-[300px]">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cy-up" x1="0" x2="1">
                <stop offset="0" stopColor="#9a7b16" />
                <stop offset="1" stopColor="#f6df74" />
              </linearGradient>
              <linearGradient id="cy-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="rgba(212,175,55,0.28)" />
                <stop offset="1" stopColor="rgba(212,175,55,0)" />
              </linearGradient>
            </defs>
            <line x1="0" y1={H - 7} x2={W} y2={H - 7} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <path d={fillPath} fill="url(#cy-fill)" />
            <path d={downPath} fill="none" stroke="#6a6a74" strokeWidth="2" strokeDasharray="5 5" />
            <path
              d={upPath}
              fill="none"
              stroke="url(#cy-up)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 7px rgba(240,212,94,0.7))" }}
            />
          </svg>

          <div className="absolute top-1 right-1 text-right">
            <div className="font-display font-bold text-2xl sm:text-3xl text-gold-300 text-glow">
              {fmtUp(up)}
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.12em] uppercase text-gold-400/80">
              +{pct.toFixed(1)}% / day
            </div>
          </div>
          <div className="absolute bottom-7 right-1 text-right">
            <div className="font-display font-bold text-base sm:text-lg text-gray-500">
              {fmtDown(down)}
            </div>
            <div className="text-[10px] tracking-[0.1em] uppercase text-gray-600">
              −{pct.toFixed(1)}% / day
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs text-subtle mt-2 px-1">
          <span>Day 1</span>
          <span>Six months</span>
          <span>One year</span>
        </div>

        {/* Control */}
        <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-sm text-gray-400 whitespace-nowrap">
            Daily change:{" "}
            <span className="text-gold-400 font-display font-bold">{pct.toFixed(1)}%</span>
          </span>
          <input
            type="range"
            min={0.3}
            max={2}
            step={0.1}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            aria-label="Daily improvement percentage"
            aria-valuetext={`${pct.toFixed(1)} percent per day`}
            className="hero-scrub flex-1 w-full"
          />
        </div>
      </motion.div>

      {/* Takeaway chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="glass-card p-5">
          <div className="text-xs tracking-[0.14em] uppercase text-subtle">Tiny daily gain</div>
          <div className="font-display font-bold text-2xl text-gold-300 mt-1">
            +{pct.toFixed(1)}% → {fmtUp(up)} a year
          </div>
        </div>
        <div className="glass-card p-5">
          <div className="text-xs tracking-[0.14em] uppercase text-subtle">Tiny daily slip</div>
          <div className="font-display font-bold text-2xl text-gray-400 mt-1">
            −{pct.toFixed(1)}% → {fmtDown(down)} a year
          </div>
        </div>
      </div>
    </section>
  );
}
