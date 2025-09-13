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