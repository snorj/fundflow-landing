# FundFlow Landing Page

A modern, responsive landing page for FundFlow - the open-source personal finance management tool.

## Features

- Responsive design with mobile-first approach
- Dark/light theme support
- Smooth animations and transitions
- Mobile navigation with collapsible menu
- Sample data showcase
- Bank integration preview

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Radix UI components
- Playwright for testing

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # UI components
│   └── ...             # Feature components
├── hooks/              # Custom React hooks
├── lib/                # Utilities
└── public/             # Static assets
```

## Deployment

The site is deployed on Vercel. Any push to main triggers automatic deployment.