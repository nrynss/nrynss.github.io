# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site for nryn.dev, built with **Hugo** using the **PaperMod** theme (installed as a git submodule via Hugo Modules). Deployed to GitHub Pages via GitHub Actions.

## Build & Development Commands

```bash
# Local development server (with drafts)
hugo server -D

# Production build (matches CI)
hugo --minify

# Create new blog post
hugo new blog/my-post-title.md
```

Hugo version used in CI: **0.148.2 extended**. The theme submodule must be initialized (`git submodule update --init --recursive`).

## Architecture

### Configuration

Hugo config uses the split-file layout under `config/_default/`:
- `hugo.toml` — base URL, theme, taxonomies (tags, categories, authors, series), outputs (HTML/RSS/JSON)
- `params.toml` — PaperMod theme params, homepage profile layout, light/dark mode
- `languages.en.toml` — English language settings, date format `"2 January 2006"`
- `markup.toml` — Goldmark with unsafe HTML enabled, CSS-based syntax highlighting
- `menus.en.toml` — navigation menus (currently commented out)
- `module.toml` — Hugo Modules config importing PaperMod

### Content

All content is in `content/` with sections: `blog/`, `about/`, `projects/`. New posts are created as drafts by default (see `archetypes/default.md`). Set `draft = false` in front matter to publish.

### Layout Overrides

Custom layouts override PaperMod defaults in `layouts/`:
- `_default/single.html`, `_default/list.html` — page templates
- `partials/extend_head.html` — injects custom CSS, animations, comment scripts
- `partials/home/profile.html` — homepage profile card
- `partials/comments.html` — Supabase-based comment system

### Custom Shortcodes

Located in `layouts/shortcodes/`. Key ones:
- `expandable` — collapsible content sections
- `timeline` / `timeline-item` — timeline visualization
- `project-card` / `projects-list` — project showcase (data sourced from `data/projects.yaml`)
- `review-callout` — magazine-style TLDR boxes
- `notice` — alert/notice boxes
- `gif`, `p5`, `svg-animation` — media embeds

### Assets

- `assets/css/extended/custom.css` — extensive custom theming (2000+ lines), light/dark mode CSS variables, responsive design
- `assets/js/animation.js` — canvas-based animated space background
- `static/js/comment.js` — Supabase comment system client

### Data

- `data/projects.yaml` — structured project list used by the `projects-list` shortcode

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/hugo.yml`) which builds with `hugo --minify` and deploys to GitHub Pages.
