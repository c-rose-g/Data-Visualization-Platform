# AnswersAi-Frontend-Engineer-Take-Home

## Setup Instructions

### 1. Clone the repo

- git clone `https://github.com/your-username/data-viz-platform.git
cd data-viz-platform`

### 2. Install dependencies

- `npm install`

### 3. Environment Varaiables

- Create a .env.local file in your project root with the following variables:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

### 4. Run the app

- `npm run dev`

## Features implemented

### Dashboard Screen

### Slide-Over Variables Panel

### Navigation

### Authentication

## Technical Trade-offs

- Vite + React(TS) for fast HMR and type safety
- Tailwind CSS for utility-first styling and quick interaction
- Zustand for lightweight Global state of variables
- Recharts for customizable charting with built-in animations
  - trade-off: Less low-level control than D3, but faster to implement
- React Router for client-side routing
- Firebase for authentication and future data storage needs

## Known Limitation

- Variable selection uses dummy data
- No persistence for user-selected variables across sessions
- Details screen (hover over data point) is mocked and not fully wired
- Response design not exhaustively tested on all breakpoints\

## Local Development

- Follow "Setup Instructions"
- Confirm `.env.local` values match Firebase project
- Run `npm run dev` and go to `http://localhost:3000`
- Run `npm run build` to build for production
- Run `npm install -g serve serve dist` to serve the build locally for testing

## Time spent

- ~15 hours (across evenings and weekends)
