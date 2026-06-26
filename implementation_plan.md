# Migration Plan: Hugo to Astro on Cloudflare Pages (with Cloudflare D1 Comments)

This document outlines the step-by-step plan to migrate the personal website/portfolio [nryn.dev](https://nryn.dev) from Hugo to Astro, switch the hosting/DNS provider to Cloudflare Pages, and replace the Supabase comments database with a native Cloudflare-based comments system.

The migration will be completed in stages to guarantee zero downtime and verify compatibility of all custom features (such as PaperMod layout customizations, dynamic comments, canvas-based animated space background, and 10+ custom shortcodes) at every step.

---

## Proposed Migration Stages

### Stage 1: DNS & Cloudflare Pages Hosting Setup (Zero-Downtime Transition)
Keep the site on **Hugo** initially but move the hosting from GitHub Pages to Cloudflare Pages, disabling the Supabase comment system.

1. **Disable Supabase Comments**:
   - Comment out or remove the comments partial call in the Hugo template (`layouts/_default/single.html`).
   - This ensures the site runs without Supabase dependencies immediately.
2. **Create Cloudflare Pages Project**:
   - Link the GitHub repository `nrynss/nrynss.github.io` to Cloudflare Pages.
   - Configure the build settings for Hugo:
     - **Framework preset**: Hugo
     - **Build command**: `hugo --minify`
     - **Build output directory**: `public`
     - **Environment variables**: `HUGO_VERSION = 0.148.2`
3. **Domain Mapping**:
   - Configure the custom domain `nryn.dev` in Cloudflare Pages.
   - Update DNS nameservers or CNAME records to route traffic through Cloudflare.
   - **Outcome**: The site remains Hugo-based but is now hosted and served globally via Cloudflare.

### Stage 2: Initialize Astro Project in a Migration Branch
We will initialize Astro inside a separate git branch (e.g., `feature/astro-migration`) to avoid breaking the live production deployment.

1. **Astro Setup**:
   - Initialize Astro in the repository.
   - Install dependencies: `astro`, `@astrojs/mdx` (for MDX support), and `@astrojs/cloudflare` (for SSR/hybrid serverless support).
2. **Asset Import**:
   - Move static files (images, custom JS scripts) from Hugo's `static/` and `assets/` directories to Astro's `public/` and `src/assets/` directories.
   - Import `custom.css` as a global stylesheet in Astro to preserve existing light/dark variables, animations, and typography styles.

### Stage 3: Port Layouts, Components & Cloudflare Comments Integration
Translate Hugo's PaperMod template system and custom Go layouts into Astro components, and replace Supabase comments.

1. **Layouts**:
   - Hugo `layouts/_default/single.html` & `list.html` -> Astro layouts `src/layouts/BaseLayout.astro` and `src/layouts/PostLayout.astro`.
   - Re-inject the animated space background (`assets/js/animation.js`) and ensure it runs on client load.
2. **Cloudflare D1 Comments Setup**:
   - **Database Creation**: Create a Cloudflare D1 SQL database via the Cloudflare Dashboard or Wrangler CLI.
   - **Schema Definition**: Define a table schema for comments:
     ```sql
     CREATE TABLE comments (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       post_slug TEXT NOT NULL,
       author_name TEXT NOT NULL,
       author_email TEXT,
       content TEXT NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       is_approved INTEGER DEFAULT 1
     );
     ```
   - **Binding**: Bind the D1 database to the Astro Pages project.
3. **Astro Comment API Endpoints**:
   - Create server-side endpoints in Astro to query and insert comments directly into D1:
     - `src/pages/api/comments.ts` (`GET`: Fetch approved comments for a slug; `POST`: Validate and insert a new comment).
4. **Client Interface**:
   - Port the comment form layout into a reusable `src/components/Comments.astro` component.
   - Replace the Supabase SDK client script (`supabase-js` and `comment.js`) with a simple fetch request pointing to `/api/comments?slug=...` for loading and submitting comments.
5. **Partials & Shortcodes**:
   - Port standard components (profile card, timeline, review-callout, expandable, etc.) into Astro components.

### Stage 4: Content Migration and MDX Conversion
Migrate content files from `content/` to Astro Content Collections (`src/content/`).

1. **Frontmatter Conversion**:
   - Convert Hugo's TOML frontmatter (`+++ ... +++`) to YAML frontmatter (`--- ... ---`) for all posts.
2. **Shortcode Replacement**:
   - Convert Hugo shortcode syntax to MDX component syntax (e.g. `{{< review-callout ... >}}` to `<ReviewCallout ...>`).
   - Rename pages using shortcodes from `.md` to `.mdx`.
   - Create a migration helper script (`scratch/migrate_content.py`) to run these conversions automatically.

### Stage 5: Preview, Switch Build Settings & Live Release
1. **Cloudflare Preview Deployments**:
   - Cloudflare Pages will automatically build the `feature/astro-migration` branch.
   - Test and verify the preview URL: layout fidelity, dynamic D1 comments loading/submitting, timeline components, and navigation menu links.
2. **Final Cutover**:
   - Merge the migration branch into `main`.
   - Update the Cloudflare Pages build configuration in the dashboard:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist` (Astro default)
   - Trigger a deploy. The Astro + Cloudflare D1 site is now live!
