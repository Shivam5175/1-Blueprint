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
| `RESEND_API_KEY` | Resend API key for email capture (optional) |
| `RESEND_AUDIENCE_ID` | Resend audience to add subscribers to (optional) |
| `NEXT_PUBLIC_SITE_URL` | Public URL — used for canonical tags, sitemap, robots, OG metadata |

Without the Resend keys, `POST /api/subscribe` validates the address and returns success without storing it (handy for local dev).

## Deploy

### Vercel (recommended)

This is a standard Next.js app, so the simplest path is Vercel's GitHub integration:

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto‑detected, no config needed.
3. Add the environment variables above in the Vercel project settings.
4. Deploy. The API route, SSG principle pages, sitemap/robots, and generated OG/favicon images all work out of the box.

### GitHub Pages

GitHub Pages is static‑only, so it needs a static export (`output: 'export'` + `basePath`) and the dynamic `/api/subscribe` route would be dropped (the form would degrade to client‑side). This isn't enabled by default — ask and it can be configured with a Pages deploy workflow.

## Project structure

```
src/
  app/            # App Router pages, layout, metadata, api route, sitemap/robots, OG image
  components/     # Hero (compounding journey), principles, quotes, CTA, navbar, footer, backdrop
  lib/            # site config (URL + principle slugs)
```
