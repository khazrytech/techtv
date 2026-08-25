# TechTV

A modern Next.js App Router movie/series streaming UI with a dark glassmorphism design, Framer Motion animations, Lucide icons, a TMDB API proxy route, watchlist persistence, and Cloudflare OpenNext deployment configuration.

## 1. Install

```bash
npm install
```

## 2. Environment

Create `.env.local`:

```env
TMDB_API_KEY=your_tmdb_v3_api_key
```

The key is only used server-side by `app/api/tmdbfetch/route.ts`.

## 3. Development

```bash
npm run dev
```

Open http://localhost:3000.

## 4. Build

```bash
npm run build
```

## 5. Cloudflare

This project uses the OpenNext Cloudflare adapter. For a Cloudflare deployment, connect the repository/project and use:

```bash
npm run preview
```

for an OpenNext build, or:

```bash
npm run deploy
```

with Wrangler authentication.

The included `public/_redirects` is intentionally present for Pages routing compatibility. The actual Next.js dynamic route `/watch/[id]` is rendered by the OpenNext runtime.

## Important

The sample video URLs in `lib/data.ts` are public demo videos. Replace `videoUrl` with your own licensed/authorized video delivery URLs (for example, your own object storage/CDN).

The demo login/register form is UI-only. For production authentication, integrate an auth provider such as Auth.js, Clerk, Supabase Auth, or your own secure server-side auth system. Do not store real passwords in localStorage.

TMDB attribution/data usage must comply with TMDB's current API terms and attribution requirements.
