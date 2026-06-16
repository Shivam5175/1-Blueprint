"use client";

import Link from "next/link";

const principleLinks = [
  { label: "Law of Attraction", href: "/principles/law-of-attraction" },
  { label: "Compound Effect", href: "/principles/compound-effect" },
  { label: "Delayed Gratification", href: "/principles/delayed-gratification" },
  { label: "Abundance Mindset", href: "/principles/abundance-mindset" },
  { label: "80/20 Rule", href: "/principles/pareto-principle" },
  { label: "Visualization", href: "/principles/visualization" },
  { label: "Growth Mindset", href: "/principles/growth-mindset" },
  { label: "Deep Work", href: "/principles/deep-work" },
  { label: "Stoic Resilience", href: "/principles/stoic-resilience" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.03] px-6 pt-20 pb-10">
      <div className="absolute inset-0 dot-pattern opacity-[0.06]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-black font-bold text-base font-display">1</span>
              </div>
              <span className="font-display text-lg tracking-wide gold-gradient-text font-semibold">
                1% Blueprint
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Empowering you with the wisdom of compounding, the power of
              mindset, and the principles that separate the extraordinary from
              the ordinary.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  label: "Instagram",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  label: "YouTube",
                  icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:bg-gold-400/10 hover:border-gold-400/20 transition-all duration-300 group"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white/80 font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Sections
            </h4>
            <ul className="space-y-3">
              {["Compounding", "Principles", "Blueprint"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-gold-400 transition-colors text-sm inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-px bg-gold-400/50 group-hover:w-3 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Principles */}
          <div className="md:col-span-5">
            <h4 className="text-white/80 font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Principles
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {principleLinks.map((item) => (
                <li key={item.label} className="list-none">
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-gold-400/50 group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-subtle text-xs">
            &copy; {new Date().getFullYear()} 1% Blueprint. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-subtle text-xs">
            <div className="w-6 h-px bg-gold-400/15" />
            <span className="tracking-[0.15em] uppercase">Built with purpose. Designed for greatness.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
