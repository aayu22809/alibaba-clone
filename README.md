# Alibaba Scam Parody Website

A satirical "scam website" showcasing common dark patterns and deceptive tactics found online. **This is a parody project for educational purposes.**

## Project Structure

This repository now contains two versions:

### Original HTML Version (deprecated)
- `index.html`, `about.html`, `contact.html`, `gallery.html`, `games.html`
- Monolithic HTML files with inline CSS and JavaScript
- **Note**: These files are kept for reference but are being replaced by the Svelte version

### Modern Svelte Version
Located in `/svelte-app` directory:

```
svelte-app/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── BottomBar.svelte
│   │   │   ├── ChatWidget.svelte
│   │   │   ├── ClaimBox.svelte
│   │   │   ├── CountdownTimer.svelte
│   │   │   ├── LiveFeed.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── OnlineCounter.svelte
│   │   │   ├── SpinWheel.svelte
│   │   │   ├── TrustBadges.svelte
│   │   │   ├── VisitorBar.svelte
│   │   │   └── WarningBar.svelte
│   │   └── stores/
│   │       └── scamState.ts
│   ├── routes/
│   │   ├── claim/
│   │   │   └── +page.svelte
│   │   ├── games/
│   │   │   └── +page.svelte
│   │   ├── prizes/
│   │   │   └── +page.svelte
│   │   ├── winners/
│   │   │   └── +page.svelte
│   │   ├── +layout.svelte
│   │   └── +page.svelte (home)
│   └── app.css
└── package.json
```

## Features

### Dark Patterns & Scam Tactics (Parodied)
- **Urgency Tactics**: Countdown timers, limited stock warnings, "only X left!"
- **Fake Social Proof**: Live activity feeds, winner testimonials, fake reviews
- **Deceptive Pricing**: Crossed-out prices, hidden fees, bait-and-switch
- **Dark UX**: Aggressive popups, hard-to-close modals, confirmation shaming
- **Gamification**: Spin wheels, slot machines, scratch cards, daily rewards
- **Data Collection**: Multi-step forms with increasingly invasive questions

### Pages

1. **Home** (`/`) - Main landing page with spinning wheel, countdown, and claim boxes
2. **Winners** (`/winners`) - Fake testimonials and "proof" of winners
3. **Prizes** (`/prizes`) - Product catalog with deceptive pricing
4. **Games** (`/games`) - Various gambling-style mini-games
5. **Claim** (`/claim`) - Multi-step form with escalating fees

## Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm (or npm/yarn)

### Installation

```bash
cd svelte-app
pnpm install
```

### Development

```bash
pnpm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production

```bash
pnpm run build
pnpm run preview
```

## Technology Stack

- **SvelteKit** - Modern web framework
- **Svelte 5** - UI framework with runes ($state, $derived, etc.)
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Static Adapter** - For static site generation

## Educational Purpose

This project demonstrates:
- Common online scam patterns
- Dark UX patterns to avoid
- How to recognize manipulative design
- Bad practices in web development (to learn what NOT to do)

## License

This is a parody/educational project. Not intended for actual use.

## Warning

⚠️ **DO NOT USE THESE TECHNIQUES IN REAL PROJECTS** ⚠️

The patterns shown here are unethical and potentially illegal. This is for educational purposes only.
