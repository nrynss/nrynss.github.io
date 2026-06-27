# Astro Migration & Interactivity Plan (Svelte & Subsites)

This plan outlines the Hugo-to-Astro transition using **Svelte** as our primary framework for building rich, interactive components and a dedicated subsite for your Sarvam AI vs. Qwen benchmark tests.

---

## 1. UI Framework Integration (Svelte)

Astro supports **Island Architecture**, allowing us to compile pages to 100% static HTML by default. We will use the official Svelte integration to add interactivity to specific elements (e.g. using `client:load` or `client:visible`).

### Tech Stack Additions
* **Svelte Integration**: `@astrojs/svelte` for building interactive components (using clean HTML/JS/CSS syntax, compiled to lightweight JS).
* **Transition Support**: Svelte's built-in `svelte/transition` library for smooth page transitions and micro-animations.

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
* **Demo Embedding**: Inline preview or interactive sandbox container for live demos.

---

## 3. Sarvam vs. Qwen Comparison Subsite (`/sarvam-comparison`)

We will build a rich, interactive subsite dedicated to visualizing the LLM benchmarks you ran for **Sarvam 30B** and **Qwen 30B**.

### Structure & Routes
* **`/sarvam-comparison`** (Landing Page): Overview of the hardware testbed, model architectures (Mixture of Experts), and key takeaways.
* **`/sarvam-comparison/playground`** (Interactive Comparison Dashboard): A client-side Svelte application that lets readers interact with the raw benchmark outputs.

### Comparison Dashboard Features
1. **Interactive Prompt Selector**:
   - A dropdown categorized by evaluation criteria (e.g., Translation, Coding, Logical Reasoning, Indic Cultural Nuances).
   - Shows the exact system prompt and user query fed to the models.
2. **Side-by-Side Output Viewer**:
   - Displays the raw output of **Sarvam 30B** and **Qwen 30B** in styled panels.
   - Renders markdown formatting, code highlights, and thinking blocks natively.
3. **Metrics Comparator**:
   - A comparison panel showing metrics for each run:
     - Response generation time.
     - Token count and average generation speed (tokens/sec).
     - Qualitative rating with expandable critique sections.
4. **Search and Filter**:
   - Filter prompts by difficulty or category.
   - Search responses for specific keywords to see how each model handled them.

---

## 4. Subsite Data Integration

We will map the benchmark data into the Astro project:
* The JSON files from your tests (containing timestamps, prompts, responses, and speed metrics) will be imported as structured data assets.
* The analysis markdown files (`qwen3-30b-analysis.md`, `sarvam-30b-analysis.md`, `sarvam-vs-qwen3-comparison.md`) will be rendered into structured tabs in the subsite.

---

## 5. Directory Mapping

Here is how the new directories will be configured:

```
src/
├── components/
│   ├── Timeline.svelte       # Interactive Timeline [Hydrated Svelte]
│   ├── ProjectsBoard.svelte  # Interactive Project Showcase [Hydrated Svelte]
│   └── Comments.svelte       # D1 Comments form and list [Hydrated Svelte]
├── pages/
│   ├── index.astro           # Homepage
│   ├── about.astro           # About page
│   ├── projects.astro        # Projects grid
│   ├── blog/                 # Blog post listing and routes
│   └── sarvam-comparison/    # Subsite folder
│       ├── index.astro       # Landing page (Static)
│       └── playground.astro  # Interactive Dashboard (Svelte [Hydrated])
└── data/
    ├── projects.json         # Projects data
    └── sarvam-benchmarks/    # Benchmark JSON files for dashboard loading
```
