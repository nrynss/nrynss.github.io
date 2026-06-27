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
If the local sqlite mock database needs to be initialized or reset:
```bash
pnpm wrangler d1 execute nryn-dev-comments-db --local --file=schema.sql
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

### Cloudflare Environment & D1 Bindings
In Astro v6+ and v7+, environment bindings are no longer accessed via `Astro.locals.runtime.env` in production.
To resolve Cloudflare environment variables securely without breaking local Node build-time compilation, use dynamic imports:
```typescript
let db;
try {
  const cf = await import('cloudflare:workers');
  db = cf.env.DB;
} catch {
  db = locals.runtime?.env?.DB; // local fallback
}
```
This pattern is implemented in `CommentList.astro` and `src/pages/api/comments.ts`.

---

## 📂 Content Architecture
* **Blog / Notes / Reviews / Benchmarks**: Configured using Astro's Content Layer in `src/content.config.ts`.
* **Projects**: Defined as a local JSON data source under `src/content/projects/projects.json`.
* **Timeline**: Career experiences data is stored under `src/data/timeline.json` and rendered interactively by `Timeline.svelte`.
