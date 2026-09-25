# Biswabangla Nordic Association — Durga Puja 2026

Official invitation website for the **5th Annual Durga Puja Celebration** organised by the **Biswabangla Nordic Association**, Denmark.

---

## About

A bilingual (English/Bengali) invitation and information site for Durga Puja 2026, held 16–20 October 2026 in Vanløse, Copenhagen. The site covers the full festival experience — invitation, schedule, pushpanjali timings, cultural programme, venue, donations, and RSVP.

## Features

- **Opening experience** with immersive entry and background festival music
- **Live countdown** to the puja start (16 October 2026, 10:00 AM local time)
- **Invitation card** with English welcome and theme motto
- **Festival schedule** — 5-day tabbed itinerary (Sasthi → Dashami)
- **Pushpanjali & ritual timings** with day-wise slots
- **Cultural programme** line-up (children, adults, and KidsDrama)
- **Venue map** with directions and transport tips
- **Donation appeal** with MobilePay and bank transfer details
- **RSVP form** — party size, attending days, special requests; submits via WhatsApp
- **Contact form** — quick note to organisers; submits via WhatsApp
- **Social sharing** (WhatsApp, Facebook, Messenger)
- **Responsive design** — mobile-first, fully adaptive layouts
- **SEO ready** — meta tags, Open Graph, Twitter cards, JSON-LD Event schema

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion successor) |
| Icons | lucide-react |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+

### Installation

```bash
git clone <repository-url>
cd Biswabangla-Nordic-Association-Denmark
npm install
```

### Development

```bash
npm run dev
```

Dev server runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images, icons, background music
├── components/      # UI sections and reusable components
├── data/
│   └── eventConfig.ts   # Central configuration (dates, venue, contact, schedule)
├── utils/           # Helpers (ambient audio controller)
├── App.tsx          # Root layout
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind theme
index.html           # Meta tags, fonts, JSON-LD structured data
```

## Configuration

All event content lives in **`src/data/eventConfig.ts`** — dates, venue address, contact numbers, donation details, schedule, and cultural programme. Update this single file to refresh site-wide content.

Key items:

| Field | Purpose |
| --- | --- |
| `hero.targetCountdownDate` | Countdown target (ISO 8601) |
| `contact.phoneList` | Helpline numbers shown on site |
| `contact.whatsappUrl` | WhatsApp destination for form submissions |
| `venue.*` | Address, map query, coordinates |
| `schedule[]` | 5-day festival schedule |
| `donation.*` | MobilePay and bank transfer details |

## Form Submissions

RSVP and contact forms open a **WhatsApp chat** with the form details prefilled — no backend or third-party API required. The destination number is configured in `eventConfig.contact.whatsappUrl`.

## Deployment

The project deploys to **Vercel** as a static site.

1. Push to the connected Git repository
2. Vercel detects Vite automatically
3. Build command: `npm run build` · Output directory: `dist`

## Credits

**Design & Development:** [Mindtrix Media](https://www.mindtrixmedia.com/)

---

## License

All rights reserved — Biswabangla Nordic Association.

---

Made with ❤️ by the Biswabangla Nordic Association community.
