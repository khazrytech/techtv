# Cloudflare deployment

This project is configured for the OpenNext Cloudflare adapter.

Recommended build command:
`npm run preview`

Deploy with Wrangler:
`npm run deploy`

Required environment variable:
`TMDB_API_KEY`

If using the Cloudflare dashboard, make sure the project is configured for the OpenNext/Cloudflare Next.js adapter rather than treating the app as a plain static export. The `/watch/[id]` route is a server-rendered Next.js route; `_redirects` alone is not a substitute for the Next.js runtime.
