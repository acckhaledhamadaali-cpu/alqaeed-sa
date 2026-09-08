# Al Qaeed Financial Services (القائد للإدارة المالية)

[![Platform](https://img.shields.io/badge/Platform-Cloudflare%20Pages%20%7C%20Netlify-orange.svg)](#deployment)
[![Framework](https://img.shields.io/badge/Framework-React%2019%20%2B%20Vite%206-blue.svg)](#tech-stack)
[![Language](https://img.shields.io/badge/TypeScript-5.8-3178c6.svg)](#tech-stack)
[![Compliance](https://img.shields.io/badge/Compliance-ZATCA%20%7C%20SOCPA%20%7C%20IFRS-emerald.svg)](#project-overview)

The official web platform and advisory portal for **Al Qaeed Financial Services (القائد للإدارة المالية)** — an executive accounting, financial management, and tax advisory firm serving SMEs and corporations across the Kingdom of Saudi Arabia.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Key Architectural Features](#key-architectural-features)
- [SEO & Static Pre-Rendering Architecture](#seo--static-pre-rendering-architecture)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Local Development](#local-development)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [License & Brand Standards](#license--brand-standards)

---

## Project Overview

Al Qaeed Financial Services delivers structured, regulatory-compliant financial management solutions built for business owners, corporate executives, and managing partners in Saudi Arabia.

### Core Service Offerings:
1. **Bookkeeping & Accounting (تنظيم الحسابات ومسك الدفاتر)**: System records auditing, cloud ledger management, and monthly reconciliations.
2. **Zakat & Tax Compliance (خدمات الزكاة وضريبة القيمة المضافة)**: Periodic declaration filings, tax health audits, and ZATCA compliance advisory.
3. **Financial Statements Preparation (إعداد القوائم المالية المعتمدة)**: Balance sheets, income statements, and cash flow reports aligned with IFRS and SOCPA standards.
4. **Financial Analysis & Margin Audits (التحليل المالي وهوامش الربحية)**: DuPont model diagnostics, cost-center evaluation, and break-even point analysis.
5. **Periodic Management Reporting (التقارير الإدارية الدورية)**: Executive KPI dashboards, unit-level profitability metrics, and board decks.
6. **Budgeting & Capital Planning (إعداد الموازنات التقديرية والتخطيط المالي)**: Operational budgets, target variance analysis, and OPEX/CAPEX forecasting.
7. **Cash Flow Forecasting & Liquidity Control (إدارة وتوقع التدفقات النقدية)**: Working capital optimization, burn-rate control, and 13-week rolling liquidity projections.
8. **Virtual CFO Advisory (المدير المالي عن بعد)**: Part-time executive financial leadership, bank credit facility negotiations, and expansion modeling.

---

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (`react`, `react-dom`) | Modern component architecture with concurrent features |
| **Build & Dev Tool** | Vite 6 (`vite`) | Ultra-fast HMR and optimized asset bundling |
| **Language** | TypeScript 5.8 | End-to-end type safety and strict compiler settings |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first CSS engine with RTL native typography |
| **Icons** | Lucide React (`lucide-react`) | Lightweight, accessible SVG iconography |
| **SSR / SSG Pipeline** | Custom Vite SSR + Node.js Pre-renderer | Full HTML pre-rendering with dynamic metadata injection |
| **Font Integration** | IBM Plex Sans Arabic & Cairo | High-legibility Arabic typography hierarchy |

---

## Key Architectural Features

- **Persuasion Architecture**: All 8 service routes are engineered with a consistent 8-section commercial framework addressing business pain points, buyer profiles, deliverables, tangible ROI, execution roadmaps, ERP integration badges, FAQ schemas, and dedicated conversion actions.
- **RTL & Arabic Optimization**: High-contrast, responsive user interface specifically designed for Arabic typography rhythms and desktop/mobile conversion funnels.
- **Zero Heavy Runtime Overheads**: Fast First Contentful Paint (FCP) achieved by eliminating bloated visual dependencies and leveraging pre-rendered static HTML.
- **Dynamic WhatsApp Lead Capture**: Intelligent CTA tracking with custom intent-encoded query parameters per service and article without exposing sensitive credentials.

---

## SEO & Static Pre-Rendering Architecture

The platform operates as a hybrid Single Page Application (SPA) with full **Static Site Generation (SSG)** to ensure optimal search indexing across Google and local regional crawlers:

```
                  ┌──────────────────────┐
                  │      Vite Build      │ ──> Output: dist/ (Client assets)
                  └──────────────────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │    Vite SSR Build    │ ──> Output: dist-ssr/entry-server.js
                  └──────────────────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │     prerender.js     │ ──> Executes against all registered routes
                  └──────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
   Pre-rendered HTML files            sitemap.xml Generation
   (Deep JSON-LD Schema, Canonical,   (Auto-computed lastmod dates)
   Title & OG Meta Tags injected)
            │
            ▼
   Clean dist-ssr/ cleanup
```

### Route Generation Matrix
- **Core Pages**: Home (`/`), Services Index (`/services`), Blog Index (`/blog`), About (`/about`), Contact (`/contact`), Privacy Policy (`/privacy-policy`).
- **Service Pages (8)**:
  - `/services/bookkeeping`
  - `/services/zakat-tax`
  - `/services/financial-statements`
  - `/services/financial-analysis`
  - `/services/management-reports`
  - `/services/budgeting`
  - `/services/cash-flow`
  - `/services/virtual-cfo`
- **Knowledge Base & Blog**: All specialized advisory guides and articles in `/blog/*`.

---

## Project Structure

```
.
├── index.html                   # Master HTML entry point
├── package.json                 # Project configuration & npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration (Tailwind & SSR config)
├── prerender.js                 # SSG orchestration script
├── wrangler.jsonc               # Cloudflare Pages deployment manifest
├── netlify.toml                 # Netlify routing & header configuration
├── public/                      # Static assets, manifests, verification tokens
│   ├── favicon.ico
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx                 # Client hydration entry point
│   ├── entry-server.tsx         # Server-side rendering entry point
│   ├── App.tsx                  # Root application router & layout
│   ├── index.css                # Global Tailwind CSS imports
│   ├── components/              # Reusable UI components & section wrappers
│   │   ├── Container.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ServiceFaqAccordion.tsx
│   │   ├── SupportedSystemsSection.tsx
│   │   └── ...
│   ├── data/                    # Business datasets, service catalogs & blog posts
│   ├── hooks/                   # Custom hooks (e.g. useSEO)
│   ├── lib/                     # Brand design tokens & utility functions
│   └── pages/                   # Application view components
│       ├── HomePage.tsx
│       ├── services/            # Specialized commercial service views
│       └── blog/                # Financial education & advisory guides
```

---

## Environment Variables

The project is structured to run with zero mandatory secret dependencies in production static mode. Optional environment variables can be configured via `.env`:

```bash
# Optional API configuration
APP_URL=https://alqaeed-sa.pages.dev
VITE_ENABLE_ANALYTICS=true
```

Refer to `.env.example` for the complete reference.

---

## Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://0.0.0.0:3000` with hot-reload. |
| `npm run lint` | Runs the TypeScript compiler check (`tsc --noEmit`) to validate type integrity. |
| `npm run build` | Builds the client app, executes SSR pre-rendering across all routes, and generates static HTML in `dist/`. |
| `npm run preview` | Starts a local static web server to preview the production build from `dist/`. |
| `npm run deploy` | Deploys the built static artifacts directly to Cloudflare Pages using Wrangler. |
| `npm run clean` | Removes compiled artifacts (`dist/` and temporary files). |

---

## Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` (v9+) or `bun`

### Setup Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/acckhaledhamadaali-cpu/alqaeed-sa.git
   cd alqaeed-sa
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To build the static application with full pre-rendered HTML and schema markup:

```bash
npm run build
```

This single pipeline executes:
1. Vite client bundling into `dist/`
2. Vite SSR bundling into `dist-ssr/`
3. Node execution of `prerender.js` rendering all routes to HTML with structured data
4. Automatic clean-up of temporary server-side artifacts

To test the output locally:
```bash
npm run preview
```

---

## Deployment

The platform is optimized for modern global edge and static CDN providers.

### 1. Cloudflare Pages (Primary Production)
The repository contains `wrangler.jsonc`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Deployment via CLI**:
  ```bash
  npm run deploy
  ```

### 2. Netlify
The repository contains `netlify.toml` with preset security headers, static caching directives, and SPA redirects:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

---

## License & Brand Standards

© 2026 Al Qaeed Financial Services (القائد للإدارة المالية). All rights reserved.  
All content, visual assets, and financial frameworks are proprietary to Al Qaeed Financial Services.
