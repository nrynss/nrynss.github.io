# nryn.dev — Astro 7 Migration & Interactivity Plan

This plan details the technical transition of the [nryn.dev](https://nryn.dev) site code from Hugo to **Astro 7.0.x** and Svelte, utilizing Cloudflare Pages and a native Cloudflare D1 database for comments.

---

## 0. Deltas from the previous plan

| Area | Old plan | This plan |
|---|---|---|
| Astro version | 6 | **7.0.x** (Requires Node.js 22+) |
| Collections API | `type: 'content'`, `src/content/config.ts` | **Content Layer** — `loader: glob()`, `src/content.config.ts` |
| Zod import | `z` from `astro:content` | **`z` from `astro/zod`** |
| Entry key | `slug` | **`id`** |
| Rendering | `output: 'hybrid'` | **`static` (default) + adapter + per-route `prerender = false`** |
| `ModelComparison` | `client:load` | **`client:visible`** |
| `ProjectsBoard` | `client:load` | **`client:idle`** |
| Projects data | collection **and** `projects.json` | **one typed collection** (via `file()` loader) |
| `dataRef` schema field | present | **removed** (import JSON directly in MDX) |
| Comments | one big client island, no abuse controls | **server island (list) + client island (form)** + Turnstile + rate limit + moderation state |
| Search | — | **Pagefind** |
| Missing pieces | — | dark-mode FOUC guard, RSS, sitemap, OG images |

---

## 1. Directory Structure

```
src/
├── content.config.ts          # Config for Content Layer (Astro 7)
├── components/
│   ├── static/                # Astro-only, zero hydration
│   │   ├── ProfileCard.astro
│   │   ├── Notice.astro
│   │   ├── ReviewCallout.astro
│   │   └── CommentList.astro  # server-rendered comment list (server:defer)
│   └── interactive/           # Svelte islands
│       ├── Timeline.svelte
│       ├── ProjectsBoard.svelte
│       ├── ModelComparison.svelte
│       └── CommentForm.svelte # form only — the read path is now CommentList.astro
├── content/
│   ├── blog/
│   ├── projects/              # projects array loaded via file() loader
│   ├── benchmarks/            # MDX embedding <ModelComparison />
│   ├── notes/
│   └── reviews/
├── lib/
│   ├── markdown/
│   ├── utils/
│   ├── benchmarks/
│   └── theme/
├── pages/
│   ├── index.astro
│   ├── about.astro            # native <details>
│   ├── projects.astro
│   ├── blog/
│   └── api/
│       └── comments.ts        # prerender = false
├── layouts/
│   ├── BaseLayout.astro       # global CSS, space canvas, inline theme script
│   └── PostLayout.astro
├── data/
│   └── benchmarks/            # raw run JSON (qwen, gemma, sarvam) — consumed by the widget
└── styles/
    └── global.css
```

---

## 2. Framework & Rendering Strategy

**Static by default.** Cloudflare adapter is added to enable dynamic server routes via `export const prerender = false`. All other pages remain static prerendered HTML.

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nryn.dev',
  adapter: cloudflare(),               // enables prerender=false routes + server islands
  integrations: [svelte(), mdx(), sitemap()],
});
```

### Hydration Directives

| Component | Directive | Why |
|---|---|---|
| `Timeline` | `client:visible` | below fold; hydrate on scroll |
| `ProjectsBoard` | `client:idle` | main content, but defer to idle — not blocking page load |
| `ModelComparison` | `client:visible` | embedded mid-article; loaded when visible |
| `CommentForm` | `client:visible` | bottom of post |
| `CommentList` | n/a | server island, zero client JS (runs server-side) |

---

## 3. Content Collections (Content Layer API)

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';               // z from astro/zod in Astro 7

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: postSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: postSchema,
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: postSchema.extend({
    rating: z.number().min(0).max(10).optional(),
    subject: z.string().optional(),
  }),
});

const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/benchmarks' }),
  schema: postSchema.extend({
    models: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file('./src/content/projects/projects.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'wip', 'archived']).default('active'),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    blog: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, notes, reviews, benchmarks, projects };
```

---

## 4. Core Components

### A. Native HTML `<details>` (replacing a JS Expandable)
* **Accessibility**: 0 KB JS, accessible, indexed, keyboard-friendly.
* **Height Animation**: Native layout interpolation:
```css
.custom-expandable::details-content {
  block-size: 0;
  overflow: hidden;
  transition: block-size 0.25s ease, content-visibility 0.25s allow-discrete;
}
.custom-expandable[open]::details-content {
  block-size: auto;
}
@supports (interpolate-size: allow-keywords) {
  :root { interpolate-size: allow-keywords; }
}
```

### B. Notice.astro & ReviewCallout.astro
* Static Astro components, build-time props, compile to plain HTML.

### C. ModelComparison.svelte (benchmark playground)
* Embedded in benchmark MDX, hydrated `client:visible`.
* Reads JSON data passed directly as an MDX import.
* Features: category tabs, side-by-side output panels, tokens/sec + qualitative metrics, copy buttons.

### D. ProjectsBoard.svelte & Timeline.svelte
* Dynamic Svelte list controls (filtering, search, tag selecting) rendering the content collections passed to them.

---

## 5. Comments (Cloudflare D1) — Hardened

We decompose comments into a Server Island for reading and a Client Island for writing.

### Read Path: CommentList.astro (Server Island)
```astro
<!-- PostLayout.astro -->
<CommentList post={post.id} server:defer>
  <p slot="fallback">Loading comments…</p>
</CommentList>

<CommentForm post={post.id} client:visible />
```

```astro
---
// src/components/static/CommentList.astro
const { post } = Astro.props;
const db = Astro.locals.runtime.env.DB;
const { results } = await db
  .prepare('SELECT author, body, created_at FROM comments WHERE post = ? AND status = ? ORDER BY created_at DESC')
  .bind(post, 'approved')
  .all();
---
<ul class="comments">
  {results.map((c) => (
    <li><strong>{c.author}</strong><p>{c.body}</p></li>
  ))}
</ul>
```

### Write Path: API Endpoint (`src/pages/api/comments.ts`)
```ts
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals, request, clientAddress }) => {
  const db = locals.runtime.env.DB;
  const body = await request.json();

  // 1. Verify Cloudflare Turnstile token (body.token) against the siteverify API.
  // 2. Rate-limit by clientAddress + time window (KV or D1 table).
  // 3. Insert with status = 'pending'.
  await db.prepare(
    'INSERT INTO comments (post, author, body, status, created_at) VALUES (?, ?, ?, ?, ?)'
  ).bind(body.post, body.author, body.text, 'pending', Date.now()).run();

  return new Response(JSON.stringify({ ok: true }), { status: 202 });
};
```

---

## 6. Cross-cutting Concerns

* **Dark-mode FOUC Guard**: Inline script inside `<head>` of `BaseLayout.astro` to immediately read/set the dataset attribute before first paint.
* **Pagefind Search**: Setup client-side Pagefind search integration for static content search without server load.
* **RSS & Sitemap**: Deploy `@astrojs/sitemap` and `@astrojs/rss` to preserve discovery.

---

## 7. Build Order

1. Scaffold Astro 7 + Cloudflare adapter + Svelte/MDX; verify hello-world.
2. Configure Content Layer schemas (`src/content.config.ts`) and migrate content files (blog/notes/reviews/projects).
3. Build static components (Notice, ReviewCallout, ProfileCard) and native `<details>` styling.
4. Set up dark-mode script, Pagefind search configuration, RSS, sitemap.
5. Create Svelte interactive lists (Timeline, ProjectsBoard).
6. Build `ModelComparison` Svelte playground widget.
7. Configure Cloudflare D1 comments (schema, API endpoint, Svelte form, Server Island list).
