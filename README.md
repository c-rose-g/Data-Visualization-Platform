# Data Viz Platform

A simple React + TypeScript static dashboard that visualizes dummy data, with an editable slide‑over panel and Firebase‑backed authentication.

## Setup Instructions

### 1. Clone the repo

git clone `https://github.com/your-username/data-viz-platform.git
cd data-viz-platform`

### 2. Install dependencies

`npm install`

### 3. Environment Varaiables

Create a .env.local file in your project root with the following variables:

- VITE_FIREBASE_API_KEY=your_api_key
- VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
- VITE_FIREBASE_PROJECT_ID=your_project_id
- VITE_FIREBASE_STORAGE_BUCKET=your_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
- VITE_FIREBASE_APP_ID=your_app_id

### 4. Run the app

`npm run dev`

## Features implemented

### Dashboard Screen

- Pixel‑perfect layout matching Figma (desktop first)
- Collapsible “Best Scenario Results” panel
- Key Performance Indicator cards rendered from Zustand store

### Slide-Over Variables Panel

- Edit Variables button opens a right‑slide panel
- Search, toggle, and grouped categories
- Smooth Tailwind‑powered animations

### Graph Component

- Line chart using Recharts with hover tooltip and custom vertical cursor

### State Management

- Zustand store for both variable list and KPI cards

### Authentication

- React Router setup with protected /dashboard
- Firebase email/password + Google OAuth sign‑in flow

## Technical Trade-offs

- Vite + React(TS) for fast HMR and type safety
- Tailwind CSS for utility-first styling and quick interaction
- Zustand for lightweight Global state of variables
- Recharts for customizable charting with built-in animations
  - trade-off: Less low-level control than D3, but faster to implement
- React Router for client-side routing
- Firebase for authentication and future data storage needs

## Known Limitation

- Details Screen on hover over data points was not fully implemented
- Mobile / Tablet Responsiveness only partially addressed (desktop‑first)
- Error & Loading States for network/auth flows are minimal
- Unit & Integration Tests not included due to time constraints

## Local Development

- Follow "Setup Instructions"
- Confirm `.env.local` values match Firebase project
- Run `npm run dev` and go to `http://localhost:3000`
- Run `npm run build` to build for production
- Run `npm install -g serve serve dist` to serve the build locally for testing

## Time spent

- ~10 hours (across evenings and weekends)
