# comments-worker

Standalone Cloudflare Worker that powers comments on [nryn.dev](https://nryn.dev).

The main site is a static Astro build on Cloudflare Pages (which can't run SSR), so
comments live here instead. Served at `nryn.dev/api/*` via a Worker route, so the static
site calls it same-origin.

## Endpoints
- `GET  /api/comments?post=<slug>` — approved comments for a post
- `POST /api/comments` — submit a comment (stored pending, `is_approved=0`)

Backed by the D1 database `nryn-dev-comments-db` (schema: [`../schema.sql`](../schema.sql)).

## Commands

```bash
pnpm install
pnpm dev               # local wrangler dev
pnpm run deploy        # deploy (also runs automatically via Workers Builds on push to main)
pnpm comments:pending  # list comments awaiting moderation
```

> All wrangler commands here use `-c wrangler.toml` (baked into the scripts). Running
> wrangler without it from this folder gets hijacked by the repo-root Astro build's
> `.wrangler/deploy/config.json` redirect.

## Moderation
Comments are stored `is_approved=0`. Approve via the Cloudflare D1 **Console**, or:

```bash
wrangler d1 execute nryn-dev-comments-db --remote -c wrangler.toml \
  --command "UPDATE comments SET is_approved = 1 WHERE id = <id>"
```

See [`../DEPLOY.md`](../DEPLOY.md) for the full deployment workflow.
