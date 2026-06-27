# Implementation Plan: Hugo to Astro 7 Migration & Cloudflare Transition

This document outlines the migration of the [nryn.dev](https://nryn.dev) site from Hugo to **Astro 7.0.x** and Svelte, hosted on Cloudflare Pages with a native Cloudflare D1 database for comments.

---

## Proposed Migration Stages

### Stage 1: DNS & Cloudflare Pages Hosting Setup (Completed)
The existing Hugo site's hosting has been migrated to Cloudflare Pages, and the legacy Supabase comment system has been disabled in the Hugo templates.

### Stage 2: Initialize Astro 7 Project & Move Hugo Files (Completed)
* Created a clean branch `feature/astro-migration`.
* Moved all original Hugo files and folders to `_hugo_backup/`.
* Initialized a minimal Astro 7 project structure in the root.

### Stage 3: Setup Project Foundations & Configurations (Current)
* Configure `astro.config.mjs` to target Astro 7 + `@astrojs/cloudflare` + `@astrojs/svelte` + `@astrojs/mdx` + `@astrojs/sitemap`.
* Define Content Collections in `src/content.config.ts` using Astro 7's Content Layer API.
* Import the global stylesheet (`custom.css`) to `src/styles/global.css`.
* Add the dark-mode FOUC guard blocking script to the layout head.

### Stage 4: Component Migration & Interactivity (Svelte & Astro)
* **Static Components (`src/components/static/`)**: Port `Notice.astro`, `ReviewCallout.astro`, and `ProfileCard.astro`.
* **Details Accordion**: Implement native HTML `<details>` and `<summary>` tags with animated CSS heights (replacing `Expandable`).
* **Svelte Islands (`src/components/interactive/`)**: Build `Timeline.svelte` (`client:visible`) and `ProjectsBoard.svelte` (`client:idle`).
* **Model Playground**: Build `ModelComparison.svelte` (`client:visible`) to render raw benchmark logs inside MDX.

### Stage 5: Hardened Cloudflare D1 Comments
* Define the SQLite schema for comments in D1.
* Bind the D1 database to the Astro Pages project.
* Build the Server Island `<CommentList post={...} server:defer />` to render approved comments server-side.
* Build the Client Island `<CommentForm post={...} client:visible />` to submit comments using Cloudflare Turnstile token validation and rate-limiting.
* Deploy the dynamic write endpoint at `src/pages/api/comments.ts` with `prerender = false`.

### Stage 6: Search, RSS, Sitemap & Verification
* Setup Pagefind client-side search indexing for static posts.
* Build the RSS feed (`src/pages/rss.xml.js`) and Sitemap integration.
* Verify layout, styling, and interactive features on Cloudflare Pages Preview deployment.
* Merge to `main` and trigger production cutover.
