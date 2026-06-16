"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PrincipleData {
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  heroDescription: string;
  sections: {
    heading: string;
    content: string;
  }[];
  tips: string[];
}

export default function PrincipleContent({ data }: { data: PrincipleData }) {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_50%)]" />
        <div className="absolute inset-0 dot-pattern opacity-15" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#principles"
              className="inline-flex items-center gap-2 text-gold-400/80 hover:text-gold-400 transition-colors text-xs tracking-wider uppercase group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Principles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-gold-400/40 mb-5"
            />
            <p className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              {data.subtitle}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              <span className="gold-gradient-text">{data.title}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              {data.heroDescription}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-8 sm:p-10 mt-14 border-l-2 border-gold-400/50 relative"
          >
            <div className="absolute top-4 right-6 text-gold-400/10 font-display text-6xl">&rdquo;</div>
            <p className="font-display text-lg sm:text-xl text-white/90 leading-relaxed mb-4 italic relative z-10">
              &ldquo;{data.quote}&rdquo;
            </p>
            <cite className="text-gold-400/70 text-sm not-italic tracking-wide">
              — {data.quoteAuthor}
            </cite>
          </motion.blockquote>
        </div>
      </section>

      <div className="section-divider" />

      {/* Content sections */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-20">
          {data.sections.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold-400/20 font-display text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-px bg-gold-400/20"
                />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6 text-white">
                {section.heading}
              </h2>
              <p className="text-gray-400 leading-[1.85] text-base sm:text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Practical Tips */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-400/80 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
              Take Action
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-10 text-white">
              Apply This Today
            </h2>
            <div className="space-y-3">
              {data.tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="glass-card p-5 flex items-start gap-4 group hover:border-gold-400/25 transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <Link
              href="/#principles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-400/20 text-gold-400/80 hover:bg-gold-400/5 hover:border-gold-400/30 transition-all duration-300 text-sm group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Explore All Principles
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
