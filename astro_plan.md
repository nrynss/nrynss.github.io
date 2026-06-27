# Astro Migration & Interactivity Plan (Svelte & Existing Features)

This plan outlines the Hugo-to-Astro transition using **Svelte** as our primary framework for building rich, interactive components. While the project is architected to support future dynamic subsites (such as a Sarvam vs. Qwen benchmark playground), the current focus is entirely on migrating and enhancing your existing Hugo content, layouts, and components.

---

## 1. UI Framework Integration (Svelte)

Astro supports **Island Architecture**, allowing us to compile pages to 100% static HTML by default. We will use the official Svelte integration to add interactivity to specific elements (e.g. using `client:visible` for the timeline).

### Tech Stack
* **Svelte Integration**: `@astrojs/svelte` for building interactive components (using clean HTML/JS/CSS syntax, compiled to lightweight JS).
* **Transition Support**: Svelte's built-in `svelte/transition` library for smooth component animations (fade, slide).
* **CSS Scoping**: Standard Astro/Svelte scoped styles to keep the CSS modular.

---

## 2. Interactive Components (Svelte Upgrades)

We will upgrade your static Hugo shortcodes into dynamic, interactive Svelte components:

### A. Dynamic Timeline (`src/components/Timeline.svelte`)
* **Interactive Filtering**: Filter career history by tags (e.g., "AI", "Docs-as-code", "Hugo", "Writing").
* **Smooth Transitions**: Use Svelte's native `slide` or `fade` transitions to expand and collapse detailed roles smoothly.
* **View Toggle**: Switch between a classic vertical timeline and a simplified, scannable resume list view.

### B. Interactive Projects Board (`src/components/ProjectsBoard.svelte`)
* **Category Filters**: Filter projects by type (e.g., Games, Developer Tools, Converters).
* **Live Search**: Quick filter projects by title or description keywords.
* **Data Source**: Reads from `src/data/projects.json` (exported from Hugo's `projects.yaml`).

---

## 3. Core Component Parity Map

We will port Hugo layouts and static shortcodes to native Astro components:

### A. Layout Templates

| Hugo Layout | Astro Component | Description |
| :--- | :--- | :--- |
| `layouts/404.html` | `src/pages/404.astro` | 404 page |
| `layouts/_default/single.html` | `src/layouts/PostLayout.astro` | Template for blog posts (metadata, tags, author) |
| `layouts/_default/list.html` | `src/layouts/BaseLayout.astro` | Main wrapper layout (head, footer, canvas background) |
| `layouts/partials/home/profile.html` | `src/components/ProfileCard.astro` | Homepage hero profile card |

### B. Hugo Shortcodes to Astro/MDX Components

| Hugo Shortcode | Target Astro Component | Conversion Strategy |
| :--- | :--- | :--- |
| `{{< review-callout >}}` | `src/components/ReviewCallout.astro` | Renders the review boxes with custom ratings and styling. |
| `{{< notice >}}` | `src/components/Notice.astro` | Renders colored information alerts/notices. |
| `{{< expandable >}}` | `src/components/Expandable.astro` | Renders collapsible HTML details summaries. |
| `{{< gif >}}`, `{{< p5 >}}` | Local components / Native HTML | Render corresponding media structures. |

---

## 4. Directory & Code Architecture

Here is how the directories will be configured:

```
src/
├── components/
│   ├── Timeline.svelte       # Interactive Timeline [Hydrated Svelte]
│   ├── ProjectsBoard.svelte  # Interactive Project Showcase [Hydrated Svelte]
│   ├── ProfileCard.astro     # Static Profile Card
│   ├── ReviewCallout.astro   # Static Review Callout Component
│   ├── Notice.astro          # Static Notice Box Component
│   └── Expandable.astro      # Collapsible Section Component
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro           # About page (renders about markdown)
│   ├── projects.astro        # Projects grid (hydrates ProjectsBoard)
│   └── blog/                 # Blog post listing and routes
├── content/
│   ├── blog/                 # Migrated blog posts (converted to MDX/Markdown)
│   └── config.ts             # Schema validation for post metadata
├── layouts/
│   ├── BaseLayout.astro      # Core HTML template with global CSS
│   └── PostLayout.astro      # Single post wrapper template
└── data/
    └── projects.json         # Migrated projects data
```

---

## 5. Future Extensibility (Sarvam Dashboard ready)

To accommodate the future Sarvam vs. Qwen comparison subsite:
* **Hybrid Server-Side Rendering (SSR)**: We will set up Astro with `@astrojs/cloudflare` in hybrid mode. Pages are prerendered static by default, but we can instantly add dynamic routes/API endpoints (for database querying or live comparisons) under `/src/pages/api/` or specific subfolders without refactoring the core project.
* **Component Modularity**: Since all core components are Svelte, future dashboard elements (charts, tables, tab selectors) will easily mount and integrate with your existing design system.
