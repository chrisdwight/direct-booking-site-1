[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

# Direct Booking Website

This project is a React + TypeScript app built with Vite. It includes a mock API using json-server for local data.

## Features

- Directory of rental properties with images
- Dedicated property pages with photo gallery and amenities
- Availability calendar and booking sidebar
- Language support (EN/ES)
- Mock API via json-server

## Project Structure

```
direct-booking-site-1/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── db.json
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18
- npm 9+

### Install

```zsh
npm install
```

### Run (dev)

This starts Vite and json-server concurrently:

```zsh
npm run dev
```

- Web app: http://localhost:5173
- API: http://localhost:5000

### Build

```zsh
npm run build
```

### Preview production build

```zsh
npm run preview
```

### Test

```zsh
npm test -- --run
```

## Contributing

PRs welcome. Please run build and tests locally before submitting.

## License

MIT

## GitHub Pages Deployment

This repo includes a deploy workflow to GitHub Pages.

- Vite base path is set to `/direct-booking-site-1/` in `vite.config.ts`.
- Build output goes to `dist/`.
- Workflow file: `.github/workflows/deploy.yml`.
- SPA fallback: `public/404.html` redirects deep links.

### Enable Pages
1. Push to GitHub.
2. In GitHub repo Settings → Pages:
   - Source: GitHub Actions
3. On push to `master`, the site deploys to:
   `https://<OWNER>.github.io/direct-booking-site-1/`