# Is Durga Prasai In Jail Today? 🚨

A cinematic satirical website tracking whether Durga Prasai is in jail. Built with Next.js, featuring live anonymous chat, a voting system, an audio player with play counter, and MySQL persistence.

> ⚠️ **Disclaimer**: This website is satire and for entertainment purposes only.

## Features

- **Live Status Tracker** — Editable jail status with cinematic UI
- **Public Live Chat** — Anonymous, rate-limited, profanity-filtered
- **Voting System** — Keep vs Release with animated progress bars (one vote per user)
- **Audio Player** — Random track player with global play counter
- **Admin Panel** — Password-protected control room at `/admin`
- **History Log** — Full status change history

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Database**: MySQL via Prisma ORM
- **Status Storage**: Vercel KV (for status/history)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL database (local, PlanetScale, Railway, or Aiven)

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string: `mysql://USER:PASSWORD@HOST:PORT/DATABASE` |
| `ADMIN_PASSWORD` | Password for the admin panel at `/admin` |
| `KV_REST_API_URL` | *(Optional)* Vercel KV URL for status/history |
| `KV_REST_API_TOKEN` | *(Optional)* Vercel KV token |

### 3. Database Setup (Prisma)

Generate the Prisma client:

```bash
npx prisma generate
```

Run migrations to create the database tables:

```bash
npx prisma migrate dev --name init
```

This creates 3 tables:
- `UserVote` — stores hashed IP + vote (KEEP/RELEASE)
- `ChatMessage` — stores anonymous chat messages
- `AudioStat` — stores global play count

### 4. Audio Files

Place your audio files in `/public/audio/`. Update the `AUDIO_FILES` array in `src/components/ui/AudioPlayer.tsx` if you add more tracks.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "Add chat, voting, audio player features"
git push
```

### 2. Connect to Vercel

1. Import the repo on [vercel.com](https://vercel.com)
2. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` — your production MySQL URL
   - `ADMIN_PASSWORD` — your admin password
   - `KV_REST_API_URL` / `KV_REST_API_TOKEN` — if using Vercel KV

### 3. Prisma on Vercel

Add this to your build command in Vercel (or in `package.json`):

```json
"build": "prisma generate && next build"
```

### 4. Database Providers

Recommended MySQL providers for serverless:

| Provider | Notes |
|----------|-------|
| **PlanetScale** | Serverless MySQL, generous free tier |
| **Railway** | Easy setup, good DX |
| **Aiven** | Managed MySQL with free tier |
| **Neon** | If switching to PostgreSQL |

## Admin Panel

Access at `/admin`. Features:
- Update jail status (YES / NO / UNKNOWN)
- Edit context note, probability, arrest/release counts
- **Danger Zone**: Clear chat, reset votes, reset audio counter

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/status` | Current jail status |
| POST | `/api/update-status` | Update status (admin) |
| GET | `/api/history` | Status change history |
| GET | `/api/chat` | Last 100 chat messages |
| POST | `/api/chat` | Send chat message |
| GET | `/api/vote` | Vote counts |
| POST | `/api/vote` | Cast a vote |
| POST | `/api/audio/play` | Increment play count |
| GET | `/api/audio/stats` | Get play count |
| POST | `/api/admin/clear-chat` | Clear all chat (admin) |
| POST | `/api/admin/reset-votes` | Reset all votes (admin) |
| POST | `/api/admin/reset-audio` | Reset audio counter (admin) |

## Security

- IP addresses are SHA-256 hashed before storage
- Chat messages are rate-limited (1 per 10 seconds per IP)
- Profanity filter on chat messages
- HTML tags stripped to prevent XSS
- SQL injection prevented via Prisma parameterized queries
- Admin actions are password-protected

---

Powered by [Dijkstra Incorporation](https://dijkstrainc.vercel.app/)
