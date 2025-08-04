# Ping Client

A Next.js frontend application for monitoring and displaying ping/uptime status. This is part of the check-uptime monorepo project.

## Project Overview

The Ping Client is built with [Next.js](https://nextjs.org) and serves as the user interface for the uptime monitoring system. It communicates with the ping-server backend to display real-time uptime status and monitoring data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Real-time uptime monitoring dashboard
- Responsive design with TailwindCSS
- TypeScript support for type safety
- Modern React with Next.js App Router

## Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Fonts**: Geist Sans & Geist Mono via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **React**: React 19.1.0

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── public/
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
```

## Configuration

- **ESLint**: Configured with Next.js recommended settings
- **TypeScript**: Strict mode enabled with Next.js optimizations
- **PostCSS**: Configured for TailwindCSS processing

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
