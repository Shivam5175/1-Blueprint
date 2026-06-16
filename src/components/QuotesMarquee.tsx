"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const quotesRow1 = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Wealth is the ability to fully experience life.", author: "Henry David Thoreau" },
  { text: "Compound interest is the eighth wonder of the world.", author: "Albert Einstein" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
];

const quotesRow2 = [
  { text: "Your network is your net worth.", author: "Porter Gale" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The habit of saving is itself an education.", author: "George S. Clason" },
  { text: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett" },
];

export default function QuotesMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 overflow-hidden relative">
      <div className="section-divider mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="text-gold-400/80 text-xs tracking-[0.3em] uppercase font-medium">
          Words That Built Empires
        </p>
      </motion.div>

      {/* First row - scrolls left */}
      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {[...quotesRow1, ...quotesRow1].map((q, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-2.5 quote-card px-7 py-5 max-w-md hover:border-gold-400/15 transition-colors duration-300"
            >
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-gold-400/80 text-xs mt-3 font-medium tracking-wide">
                — {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track-reverse">
          {[...quotesRow2, ...quotesRow2].map((q, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-2.5 quote-card px-7 py-5 max-w-md hover:border-gold-400/15 transition-colors duration-300"
            >
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-gold-400/80 text-xs mt-3 font-medium tracking-wide">
                — {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
