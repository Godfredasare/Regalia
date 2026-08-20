# REGALIA by June & Co.

A luxury African fashion house website — bespoke tailoring, editorial fashion, and premium fabrics. Built with **Next.js (App Router)**, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router, static site generation)
- **React 19** + TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** — scroll/while-in-view animations and page transitions
- **lucide-react** — icons
- **clsx + tailwind-merge** — class utilities (`cn`)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the Next.js dev server             |
| `npm run build`    | Production build (SSG for all routes)    |
| `npm run start`    | Serve the production build               |
| `npm run lint`     | Run oxlint                               |
| `npm run typecheck`| Run `tsc --noEmit`                       |

## Project Structure

Standard Next.js App Router layout — **one folder per route** inside `src/app/`,
each with its own `page.tsx` (and `layout.tsx` for metadata).

```
src/
  app/
    layout.tsx              # Root layout: fonts, global metadata, Navbar, Footer
    globals.css             # Tailwind theme + luxury design tokens
    not-found.tsx           # Global 404 page
    page.tsx                # Home (client page)
    about/                  # About — layout.tsx (metadata) + page.tsx (UI)
    collections/            # All collections
    collections/[slug]/     # One collection — server page.tsx (SSG + metadata)
                            #   + co-located CollectionCategory.tsx (client UI)
    product/[slug]/         # Product detail — page.tsx + ProductDetail.tsx
    journal/                # Journal index
    journal/[slug]/         # Journal post — page.tsx + JournalPost.tsx
    shop/  lookbook/  fabrics/  services/  bespoke/  contact/
  components/
    layout/                 # Navbar, Footer (shared, used by the root layout)
    ui/                     # Reusable UI primitives (Button, ProductCard, …)
    ScrollToTop.tsx         # Client helper (resets scroll on navigation)
  data/index.ts             # All mock data (products, collections, journal…)
  hooks/  lib/              # Custom hooks and utilities
```

### Conventions used

- **Pages that animate / hold state are client components** — `'use client'`
  at the top of the `page.tsx`, with the whole UI inline.
- **Dynamic routes** (`[slug]`) keep a small *server* `page.tsx` that exports
  `generateStaticParams` + `generateMetadata`, validates the slug with
  `notFound()`, and renders a co-located client view (e.g. `ProductDetail.tsx`).
  Client pages cannot export those server-only functions, hence the split.
- **Metadata** lives in server `layout.tsx` files (route layouts); the root
  layout defines the `%s | REGALIA by June & Co.` title template.
- All content is mock data in `src/data/index.ts`.

### Design System

The official REGALIA visual identity lives in `src/app/globals.css` as Tailwind
`@theme` tokens (single source of truth — no raw hex in components):

| Token | Value | Role |
| --- | --- | --- |
| `--color-navy` / `obsidian` | `#1F3A5F` | Midnight Navy — primary, dark surfaces, footer, navbar |
| `--color-cream` / `ivory` | `#FBF8F0` | Ivory Cream — base background |
| `--color-gold` | `#C9A227` | Ceremonial Gold — accent only |
| `--color-emerald` | `#0F5B43` | Emerald — special collections (REGALIA Petite) |
| `--color-ink` | `#1A1A1A` | Charcoal Ink — body text |

Typography (self-hosted via `next/font` in `src/app/layout.tsx`):
**Cinzel** (display/presence) · **EB Garamond** (editorial/elegance) ·
**Montserrat** (UI/function). Proportion: Navy ≈ 60%, Cream ≈ 30%, Gold ≈ 10%,
Emerald sparingly.

All imagery is African fashion (Ghana style — kente, agbada,
  ankara prints, street style) served from the Wikimedia Commons CDN; hero and
  fashion-film videos are hosted on Pexels.
