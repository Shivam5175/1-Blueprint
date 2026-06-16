# 1% Blueprint

A premium landing page on the power of compounding. The hero is **"The Compounding Journey"** — a single ₹1 gold coin and a value that climbs as you scroll (₹1 → ₹107.37 Crore over 31 days), with a glowing curve that draws itself flat‑then‑vertical in sync. Followed by the nine Principles, quotes, and an email capture.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Windows PowerShell doesn't support `&&` — run the two commands on separate lines.

## Production build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL — used for canonical tags, sitemap, robots, OG metadata |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Optional Formspree form URL for email capture on the static site |

## Deploy

### GitHub Pages (current)

This repo ships a static export (`output: 'export'`) and a workflow at
`.github/workflows/deploy.yml` that builds and publishes to GitHub Pages on every
push to `main`. Enable it once: **Settings → Pages → Source → "GitHub Actions"**.

Live at **https://shivam5175.github.io/1-Blueprint/**.

**Email capture:** the CTA form is client-side by default. To collect addresses,
create a form at [formspree.io](https://formspree.io), then add a repo
**Variable** named `FORMSPREE_ENDPOINT` (Settings → Secrets and variables →
Actions → Variables) set to your form URL. The next deploy wires it in — no code
change needed.

### Vercel (alternative)

Import the repo at [vercel.com/new](https://vercel.com/new); Next.js is
auto-detected. (To use Vercel's server features you'd drop `output: 'export'`.)

## Project structure

```
src/
  app/            # App Router pages, layout, metadata, sitemap/robots, static favicon
  components/     # Hero (compounding journey), principles, quotes, CTA, navbar, footer, backdrop
  lib/            # site config (URL + principle slugs)
```
