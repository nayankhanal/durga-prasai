# Is Durga Prasai In Jail Today?

A viral, brutalist-style, micro-site built with Next.js 15, Tailwind CSS, and Vercel KV to humorously track a single yes/no/unknown status.

**Disclaimer**: This website is satire and for entertainment purposes only.

## Features

- **Brutalist Design**: Large bold typography, high contrast, smooth entry animations.
- **Live Status Display**: Shows whether he is in jail (YES/NO/UNKNOWN).
- **Probability Meter**: An animated bar showing the current arrest probability.
- **Share to Clipboard**: Easy one-click sharing of the live status.
- **Dramatic Refresh**: A suspenseful "Check Again" button for theatrical effect.
- **History Tracker**: A table tracking past statuses.
- **Admin Dashboard**: Password-protected area to easily update the live status.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Vercel KV](https://vercel.com/docs/storage/vercel-kv) (Redis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <project-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Admin Panel Password
   ADMIN_PASSWORD=your_super_secret_password

   # (Optional for local, required for prod) Vercel KV Credentials
   # If missing, the app uses a temporary in-memory fallback.
   KV_REST_API_URL=your_kv_rest_api_url
   KV_REST_API_TOKEN=your_kv_rest_api_token
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Accessing the Admin Panel

1. Navigate to `/admin` (e.g., `http://localhost:3000/admin`).
2. Log in using the password set in your `.env.local` (`ADMIN_PASSWORD`).
3. Update the fields and click "Commit Changes". This instantly updates the live site and adds an entry to the `/history` page.

## Deployment to Vercel

This application is ready to be deployed to Vercel with zero configuration out-of-the-box.

1. Push your code to GitHub/GitLab/BitBucket.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click "Add New Project".
3. Import your repository.
4. **Important Step**: In the Vercel project settings, go to the **Storage** tab and create a new **KV database**. Connect it to your project. This will automatically populate the necessary `KV_*` environment variables.
5. In the **Environment Variables** settings, manually add your `ADMIN_PASSWORD`.
6. Click **Deploy**.

## License

MIT
