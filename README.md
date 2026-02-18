# Techtronics - Next-Gen Technology Solutions

A modern, responsive website for Techtronics International built with Next.js 15 and React 19.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript
- **Styling:** Tailwind CSS 3, tailwindcss-animate
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes (dark/light mode)

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio page
│   └── contact/            # Contact page
├── components/             # Reusable UI components
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Site footer
│   ├── hero-section.tsx    # Landing hero
│   ├── services-section.tsx
│   ├── portfolio-section.tsx
│   ├── testimonials-section.tsx
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   └── ui/                 # Base UI primitives
├── lib/                    # Data and utilities
│   ├── services-data.ts
│   ├── portfolio-data.ts
│   ├── team-data.ts
│   └── utils.ts
└── public/                 # Static assets
    └── images/             # Logos and images
```

## Pages

| Route        | Description                              |
| ------------ | ---------------------------------------- |
| `/`          | Home - hero, services, portfolio preview |
| `/about`     | Company mission, values, process         |
| `/services`  | Full service catalog                     |
| `/portfolio` | Project showcase with filtering          |
| `/contact`   | Contact form and office locations        |

## Features

- Dark and light theme support
- Responsive design (mobile-first)
- Animated page transitions and scroll effects
- SEO optimized with metadata and OpenGraph
- Image optimization via Next.js Image component
- Component-based architecture

## License

All rights reserved. Techtronics International.
