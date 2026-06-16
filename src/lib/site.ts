// Single source of truth for site URL + principle slugs (used by metadata,
// sitemap, and robots). Set NEXT_PUBLIC_SITE_URL in production.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://one-percent-blueprint.vercel.app";

export const principleSlugs = [
  "law-of-attraction",
  "compound-effect",
  "delayed-gratification",
  "abundance-mindset",
  "pareto-principle",
  "visualization",
  "growth-mindset",
  "deep-work",
  "stoic-resilience",
] as const;
