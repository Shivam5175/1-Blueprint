"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    id: "law-of-attraction",
    number: "01",
    title: "Law of Attraction",
    subtitle: "Think It. Believe It. Receive It.",
    description:
      "Your thoughts shape your reality. Align your mindset with abundance, and opportunities flow toward you like a river finding the sea.",
    accentColor: "#e8c84a",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    id: "compound-effect",
    number: "02",
    title: "The Compound Effect",
    subtitle: "Small Steps. Massive Results.",
    description:
      "1% better every day means 37x better in a year. Reap huge rewards from a series of small, smart choices made consistently.",
    accentColor: "#d4af37",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
  {
    id: "delayed-gratification",
    number: "03",
    title: "Delayed Gratification",
    subtitle: "Patience Is Profit.",
    description:
      "Resist immediate reward for a greater future gain. This single ability is the strongest predictor of success in life.",
    accentColor: "#caa53a",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "abundance-mindset",
    number: "04",
    title: "Abundance Mindset",
    subtitle: "There Is Enough for Everyone.",
    description:
      "Shift from scarcity to abundance. When you believe the world is full of opportunity, you stop competing and start creating.",
    accentColor: "#f0d45e",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
  },
  {
    id: "pareto-principle",
    number: "05",
    title: "The 80/20 Rule",
    subtitle: "Focus on What Matters.",
    description:
      "80% of results come from 20% of efforts. Identify the vital few actions that produce the greatest impact and double down.",
    accentColor: "#b8941e",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    id: "visualization",
    number: "06",
    title: "Power of Visualization",
    subtitle: "See It Before You Achieve It.",
    description:
      "Your brain cannot distinguish vivid imagination from reality. Olympic athletes and CEOs use this because it works.",
    accentColor: "#dba94b",
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
  },
  {
    id: "growth-mindset",
    number: "07",
    title: "Growth Mindset",
    subtitle: "Talent Is Just the Starting Line.",
    description:
      "Your abilities aren't fixed — they grow with effort. Embrace challenges, persist through setbacks, and see effort as the path to mastery.",
    accentColor: "#c79a2e",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    id: "deep-work",
    number: "08",
    title: "Deep Work",
    subtitle: "Distraction Is the Enemy of Wealth.",
    description:
      "The ability to focus without distraction on cognitively demanding tasks is becoming rare and increasingly valuable.",
    accentColor: "#c08a3a",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    id: "stoic-resilience",
    number: "09",
    title: "Stoic Resilience",
    subtitle: "Control What You Can. Release the Rest.",
    description:
      "The obstacle is the way. Transform setbacks into fuel. The Stoics knew that your response to events matters more than the events themselves.",
    accentColor: "#a98b3a",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="principles" ref={ref} className="px-6 py-28 max-w-7xl mx-auto relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gold-400/30 mx-auto mb-6"
        />
        <p className="text-gold-400/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-5 font-medium">
          The Foundations
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-5">
          Principles of the <span className="gold-gradient-text text-glow">Elite</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Master these timeless principles and transform every area of your life.
          Each one is a building block of extraordinary success.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={`/principles/${principle.id}`}>
              <div
                className="glass-card p-7 h-full group cursor-pointer relative overflow-hidden"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const r = el.getBoundingClientRect();
                  const px = (e.clientX - r.left) / r.width - 0.5;
                  const py = (e.clientY - r.top) / r.height - 0.5;
                  el.style.transition = "transform 0.08s ease-out";
                  el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = "";
                  e.currentTarget.style.transform = "";
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${principle.accentColor}10, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${principle.accentColor}50, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${principle.accentColor}15, ${principle.accentColor}08)`,
                        border: `1px solid ${principle.accentColor}15`,
                      }}
                    >
                      <svg
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: principle.accentColor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={principle.icon} />
                      </svg>
                    </div>
                    <span className="text-white/[0.06] font-display text-2xl font-bold group-hover:text-white/[0.12] transition-colors duration-500">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-300 transition-colors duration-300 mb-1.5">
                    {principle.title}
                  </h3>
                  <p
                    className="text-xs font-medium tracking-wide uppercase mb-3 transition-colors duration-300"
                    style={{ color: `${principle.accentColor}80` }}
                  >
                    {principle.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {principle.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: `${principle.accentColor}90` }}
                  >
                    <span className="tracking-wider uppercase">Explore</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
