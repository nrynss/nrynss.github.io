# Deployment

This site runs as **two pieces**:

1. **Static site on Cloudflare Pages** — all pages are prerendered by Astro and served
   as static files. This is the whole public site.
2. **Standalone comments Worker** (`comments-worker/`) — a tiny Worker that owns only
   the comments API, backed by Cloudflare D1.

The two are stitched together on the same domain by a **Worker Route**, so the browser
talks to both same-origin (no CORS).

```
Browser ── nryn.dev/...        → Cloudflare Pages (static)
        └─ nryn.dev/api/*      → comments Worker (D1)   ← route takes precedence
```

---

## 1. Static site (Cloudflare Pages)

Pages project connected to `nrynss/nrynss.github.io`, branch `main`.

| Setting                    | Value             |
| -------------------------- | ----------------- |
| Build command              | `npm run build`   |
| **Build output directory** | **`dist/client`** |
| Production branch          | `main`            |

> ⚠️ **Build output must be `dist/client`, not `dist`.**
> The `@astrojs/cloudflare` adapter nests the public site inside `dist/client`. If output
> is set to `dist`, pages resolve at `/client/blog/...` and every URL 404s. This was the
> original broken-deployment cause.
>
> Change it at: **Workers & Pages → (project) → Settings → Build → Build configuration →
> Build output directory → `dist/client`**, then **Deployments → Retry deployment**.

The Astro app is fully static (no SSR routes, no server islands). The Cloudflare adapter
is retained only because it keeps the output in `dist/client`; it could be removed later
if you also switch the Pages output directory back to `dist`.

---

## 2. Comments Worker (`comments-worker/`)

A standalone Worker (plain TypeScript, no Astro) that handles:

```
GET  /api/comments?post=<slug>   → approved comments for a post
POST /api/comments               → submit a comment (stored as pending, is_approved=0)
```

The frontend reads comments client-side (`CommentList.svelte`) and submits via
`CommentForm.svelte` — both call `/api/comments` same-origin.

### One-time setup (already done)

The D1 database exists and the schema is loaded. For reference / disaster recovery,
from the `comments-worker/` directory:

```bash
cd comments-worker
npm install

npm run db:create          # wrangler d1 create nryn-dev-comments-db → prints database_id
                           # paste it into comments-worker/wrangler.toml (d1_databases.database_id)
npm run db:schema          # loads ../schema.sql into the remote DB
```

Current database: `nryn-dev-comments-db` (id `b8a52b46-652b-4cda-9eb7-d3903b9ee1a1`),
already set in `comments-worker/wrangler.toml`.

> ⚠️ **All wrangler commands here must pass `-c wrangler.toml`** (the npm scripts already
> do). The Astro build writes a *redirect* file at the repo root,
> `.wrangler/deploy/config.json`, that points wrangler at the Astro app's generated
> config (`dist/client/wrangler.json`). Because wrangler searches **up** the directory
> tree, any wrangler command run inside `comments-worker/` without `-c` follows that
> redirect and operates on the wrong Worker (wrong bindings, wrong database id). The
> `-c wrangler.toml` flag pins it to this folder's config.
>
> Note: `npm run db:create`'s "add it on your behalf?" prompt also follows the redirect
> and edits the **root** `wrangler.jsonc`, not this folder's. Decline that prompt, or
> just paste the id manually.

### Deploy

```bash
cd comments-worker
pnpm run deploy            # = wrangler deploy -c wrangler.toml  (NOT `pnpm deploy` — reserved word)
```

The route `nryn.dev/api/*` in `wrangler.toml` attaches the Worker to the live domain.
Worker routes take precedence over Pages, so `/api/*` reaches the Worker and everything
else continues to be served by the static Pages site. Requires the `nryn.dev` zone to be
on Cloudflare (it already is, via the Pages custom domain).

### Local development

```bash
cd comments-worker
pnpm dev                   # wrangler dev, with a local D1 instance
```

For the site itself (from repo root):

```bash
pnpm dev                   # astro dev at http://localhost:4321
```

Note: in plain `astro dev` the comments API is not running, so the list shows
"Failed to load comments" and submissions error — run the Worker (`pnpm dev` in
`comments-worker/`) and point at it, or test comments against the deployed Worker.

### Moderation

New comments are inserted with `is_approved = 0` (pending). Only `is_approved = 1` rows
are returned by the GET endpoint.

```bash
cd comments-worker
pnpm comments:pending      # list comments awaiting moderation (get the id)

# approve one
wrangler d1 execute nryn-dev-comments-db --remote -c wrangler.toml \
  --command "UPDATE comments SET is_approved = 1 WHERE id = <comment-id>"
```

Or use the Cloudflare dashboard: **Storage & Databases → D1 → `nryn-dev-comments-db` →
Console** and run the SQL there.

---

## 3. Automatic deploys (Workers Builds)

By default the comments Worker is deployed manually (`pnpm run deploy`). To deploy it on every
push (like the Pages site), connect it to Git via **Workers Builds**. This is a
dashboard-only setup — wrangler cannot create the Git connection.

**Connect the existing Worker (avoids a duplicate):**
1. **Workers & Pages → `nryn-comments` → Settings → Build → Connect to Git**.
2. Select the `nrynss/nrynss.github.io` repo, branch `main`.
3. Set:
   - **Root directory:** `comments-worker`
   - **Build command:** `pnpm install`
   - **Deploy command:** `pnpm run deploy`  (= `wrangler deploy -c wrangler.toml`)
     - ⚠️ Must be `pnpm run deploy`, **not** `pnpm deploy` — `deploy` is a built-in pnpm
       command (workspace deploy) that shadows the script and fails with
       `ERR_PNPM_CANNOT_DEPLOY`.
4. **Build watch paths → Include paths:** `comments-worker/*` — so the Worker only
   rebuilds when its own code changes, not on every site-only commit.

Cloudflare installs with pnpm automatically (detects `comments-worker/pnpm-lock.yaml`).
The root `.wrangler/deploy/config.json` redirect is **not** a problem here: that file only
exists after an Astro build, which Workers Builds does not run for this Worker.

> The Pages project and this Worker are independent. Connecting Workers Builds does **not**
> require any change to the Pages project. See the note below on optionally scoping the
> Pages build so it likewise skips Worker-only commits.

### Pages build settings (optional tweaks)

The Pages project keeps working as-is. Two optional consistency tweaks:
- **Build command** → `pnpm build` (currently `npm run build`; install is already pnpm, so
  this is cosmetic). Dashboard: **(Pages project) → Settings → Build → Build configuration**.
- **Build watch paths** → exclude `comments-worker/` (e.g. include `!comments-worker/*`) so
  the site doesn't rebuild when only the Worker changes. Harmless if left as `*`.
