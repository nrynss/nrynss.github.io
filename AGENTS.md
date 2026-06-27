# Developer Guide for nryn.dev (Astro 7 Migration)

This file contains commands, code conventions, and notes for maintaining and developing the `nryn.dev` website.

---

## 🚀 Key Commands

### Development Server
To start the Cloudflare Wrangler dev server locally:
```bash
pnpm wrangler dev
```
The local server runs at [http://127.0.0.1:8787](http://127.0.0.1:8787).
*Note: Before running `pnpm build`, stop the wrangler server to unlock the build `dist/` folder.*

### Build Production Site
To compile the site and index search files with Pagefind:
```bash
# Clean dist and compile
Remove-Item -Path "dist" -Recurse -Force
pnpm build
```

### Initialize Local Comments Database (Cloudflare D1)
The comments DB belongs to the `comments-worker/` Worker. To init/reset a local copy:
```bash
cd comments-worker
pnpm wrangler d1 execute nryn-dev-comments-db --local --file=../schema.sql -c wrangler.toml
```

---

## 🎨 Theme & Layout Conventions

### CSS Custom Variables (`src/styles/global.css`)
Theme elements are styled dynamically through variables to support light and dark mode automatically:
* `--bg-main` - The background color of the viewport.
* `--bg-card` - Background for cards, inputs, and toggle buttons.
* `--bg-callout` - Background for highlighted blocks and collapsed summaries.
* `--text-primary` - Primary text color.
* `--text-secondary` - Secondary paragraph/metadata text color.
* `--accent-primary` - Primary green color (adjusts automatically between light and dark themes).
* `--border-color` - Global border separator.

**Convention**: Never use `var(--theme)` or hardcoded hex colors for structural blocks in components. Always fall back to `var(--bg-card)` or `var(--bg-callout)`.

---

## 🔧 Component & Platform Guidelines

### Svelte 5 Interactive Islands
This codebase uses Svelte 5 runes syntax for interactive components:
* Use `$state(...)` for reactive values.
* Use `$derived(...)` for calculated values.
* Use `$props()` for component inputs.
* Re reactivity with Sets: Svelte 5 state updates on `Set` or `Map` variables require re-assignment (e.g. `expandedItems = new Set(expandedItems)`) to trigger updates.

### Comments architecture (D1)
The Astro site is **fully static** (served by Cloudflare Pages, which cannot run SSR), so
comments are handled by a **separate standalone Worker** in `comments-worker/`, not by Astro:
* `comments-worker/src/index.ts` exposes `GET /api/comments?post=<slug>` (approved comments)
  and `POST /api/comments` (submit, stored as `is_approved=0`), reading `env.DB` directly.
* The frontend reads comments client-side via `src/components/interactive/CommentList.svelte`
  (`client:visible`) and submits via `CommentForm.svelte` — both call `/api/comments`
  same-origin, routed to the Worker (see [Deployment](#-deployment)).

See `DEPLOY.md` for the full deployment + moderation workflow.

---

## 📂 Content Architecture
* **Blog / Notes / Reviews / Benchmarks**: Configured using Astro's Content Layer in `src/content.config.ts`.
* **Projects**: Defined as a local JSON data source under `src/content/projects/projects.json`.
* **Timeline**: Career experiences data is stored under `src/data/timeline.json` and rendered interactively by `Timeline.svelte`.

---

## 🚢 Deployment

`nryn.dev` is served as **two pieces** (full details + moderation steps in `DEPLOY.md`):

```
Browser ── nryn.dev/...      → Cloudflare Pages (static Astro build)
        └─ nryn.dev/api/*    → comments Worker (D1)   ← Worker route takes precedence
```

### 1. Static site — Cloudflare Pages
Git-connected Pages project (`nrynss/nrynss.github.io`, branch `main`). Pushing to `main`
triggers a rebuild.

| Setting              | Value                                  |
| -------------------- | -------------------------------------- |
| Build command        | `pnpm build`                           |
| Build output dir     | **`dist/client`** (NOT `dist`)         |
| Production branch    | `main`                                 |

* **Output dir must be `dist/client`** — the `@astrojs/cloudflare` adapter nests the site
  there. Setting it to `dist` serves pages at `/client/...` and 404s everything.
* Package manager is pinned via `"packageManager": "pnpm@9.1.1"` in `package.json`, so
  Cloudflare installs with pnpm. The build command is a dashboard-only setting (wrangler
  cannot edit a connected project's build config).

### 2. Comments — standalone Worker (`comments-worker/`)
Deployed independently (not via the Pages push):
```bash
cd comments-worker
pnpm install
pnpm run deploy             # wrangler deploy -c wrangler.toml  (NOT `pnpm deploy` — reserved word)
pnpm comments:pending       # list comments awaiting moderation
```
* DB: `nryn-dev-comments-db` (D1), id set in `comments-worker/wrangler.toml`. Schema is
  `schema.sql` (repo root).
* The route `nryn.dev/api/*` in `wrangler.toml` attaches the Worker to the live domain.
* **Always pass `-c wrangler.toml`** for any wrangler command in `comments-worker/`. The
  Astro build writes `.wrangler/deploy/config.json` at the repo root, which wrangler finds
  by searching up the tree and follows — hijacking commands onto the wrong Worker/config
  unless `-c` pins them. The npm/pnpm scripts already include `-c`.
* Moderation: comments are stored `is_approved=0`; only `is_approved=1` are returned.
  Approve via the Cloudflare D1 **Console**, or:
  `wrangler d1 execute nryn-dev-comments-db --remote -c wrangler.toml --command "UPDATE comments SET is_approved = 1 WHERE id = <id>"`
