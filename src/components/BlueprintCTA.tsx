"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMagneticRipple } from "./useMagneticRipple";

const stats = [
  { value: 37, suffix: "x", label: "Growth in 1 year at 1% daily" },
  { value: 107.37, suffix: "Cr", prefix: "₹", label: "From ₹1 in 31 days", decimals: 2 },
  { value: 1, suffix: "%", label: "Daily improvement needed" },
  { value: null, display: "∞", label: "Your potential" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  display,
  decimals = 0,
  inView,
}: {
  value: number | null;
  suffix?: string;
  prefix?: string;
  display?: string;
  decimals?: number;
  inView: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;
    if (shouldReduceMotion) {
      // Skip the count-up animation; show the final figure immediately.
      setCount(value);
      return;
    }
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = value * progress;
      setCount(current);
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value, shouldReduceMotion]);

  if (display) {
    return <span>{display}</span>;
  }

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function BlueprintCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const magnet = useMagneticRipple<HTMLButtonElement>();

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Static site (GitHub Pages) — no backend. Validate and confirm client-side.
  // To capture for real, point this at a form service (Formspree/Resend) later.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section
      id="blueprint"
      ref={ref}
      className="relative px-6 py-28 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/[0.02] to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-center relative group"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.2, type: "spring" }}
                className="font-display text-3xl sm:text-5xl font-bold gold-gradient-text mb-3"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.value !== null ? stat.prefix : undefined}
                  display={stat.value === null ? stat.display : undefined}
                  decimals={stat.value !== null ? stat.decimals : undefined}
                  inView={isInView}
                />
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gold-400/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          id="start"
          className="glass-card gold-glow p-10 sm:p-16 text-center max-w-3xl mx-auto relative overflow-hidden gradient-border"
        >
          {/* Decorative top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 120 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-8 flex items-center justify-center shadow-lg shadow-gold-400/20"
          >
            <span className="text-black font-display text-3xl font-bold">1%</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Your <span className="gold-gradient-text text-glow">Blueprint</span> Starts Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Every empire was built one brick at a time. Every fortune began with
            a single decision. Your 1% journey starts with the next step you take.
          </motion.p>

          {/* Email signup */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
                role="status"
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/10 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gold-400 font-medium">Welcome to the 1%</p>
                <p className="text-gray-400 text-sm mt-1">Your journey begins now.</p>
              </motion.div>
            ) : (
              <>
                <div className="flex gap-2 sm:gap-3">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email"
                    autoComplete="email"
                    disabled={status === "loading"}
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "cta-email-error" : undefined}
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-subtle focus:outline-none focus:border-gold-400/30 focus:ring-1 focus:ring-gold-400/10 focus:bg-white/[0.05] transition-all text-sm disabled:opacity-60"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    ref={magnet.ref}
                    onPointerMove={magnet.onPointerMove}
                    onPointerLeave={magnet.onPointerLeave}
                    onPointerDown={magnet.onPointerDown}
                    className="relative overflow-hidden px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-sm shadow-lg shadow-gold-400/15 hover:shadow-gold-400/30 transition-[box-shadow,transform] whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Joining…" : "Start Now"}
                    </span>
                  </button>
                </div>
                {status === "error" && (
                  <p
                    id="cta-email-error"
                    role="alert"
                    className="text-red-400 text-xs mt-3 text-left px-2"
                  >
                    {errorMsg}
                  </p>
                )}
              </>
            )}
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-subtle text-xs"
          >
            No spam — just the blueprint. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
