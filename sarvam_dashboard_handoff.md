# Handoff — Generic LLM Benchmark Dashboard on nryn.dev

## Goal

Build an interactive benchmark dashboard on this site (Astro 7 + Svelte 5 +
Cloudflare) presenting LLM test results (like the Sarvam vs Qwen results that live in `llm-benchmarks/`).
It replaces the old standalone `comparison_dashboard_cloud.html` with a first-class page on nryn.dev,
themed like the rest of the site, which can be linked from blog posts. The markdown/MDX file provides the page's prose/intro,
while the interactive Svelte dashboard is automatically mounted below it, parameterized by the
content entry's ID.

---

## Route & Page Integration

Instead of creating ad-hoc route structures, we use the standard Astro dynamic route pattern:

### 1. Dynamic Page Route — `src/pages/benchmarks/[...benchmark].astro`
Matches the pattern used elsewhere on the site, but named specifically for benchmarks:

```astro
---
// src/pages/benchmarks/[...benchmark].astro
import { getCollection, render } from 'astro:content';
import PostLayout from '../../layouts/PostLayout.astro';
import BenchmarkDashboard from '../../components/interactive/BenchmarkDashboard.svelte';

export async function getStaticPaths() {
  const entries = await getCollection('benchmarks');
  return entries.map(entry => ({
    params: { benchmark: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);
---
<PostLayout 
  id={entry.id} 
  title={entry.data.title} 
  description={entry.data.description} 
  date={entry.data.date}
>
  <div class="prose-content">
    <Content />
  </div>

  <div class="benchmark-dashboard-container mt-12" data-pagefind-ignore>
    <BenchmarkDashboard suiteSlug={entry.id} client:visible />
  </div>
</PostLayout>
```

### 2. Content Collection Markdown — `src/content/benchmarks/<suite-id>.mdx`
To add a new benchmark, create a markdown file to serve as the landing page and intro:
```md
---
title: "Sarvam vs Qwen Benchmark"
description: "A 37-test suite comparing local Q4 quants against cloud bf16 models."
date: 2026-06-15
models: ["Sarvam-30B", "Qwen3-30B-A3B", "Sarvam-105B"]
---

Here you can write the qualitative summary, background, or context of the run.
The interactive dashboard metrics, speed charts, and explorer will render below.
```

---

## Data Structure (`public/data/benchmarks/`)

The interactive dashboard fetches its data on the client based on the `suiteSlug` prop passed to it. Data files live in the `public/` directory so they are served directly without impacting bundle size:

```
public/data/benchmarks/<suiteSlug>/
  ├── manifest.json   <-- Run colors, short labels, category lists, findings
  ├── metrics.json    <-- Run × test scores, speeds, tokens
  └── test_NN.json    <-- Individual test prompts and outputs (lazy-loaded)
```

### 1. Manifest — `public/data/benchmarks/<suiteSlug>/manifest.json`
```jsonc
{
  "runs": [
    {
      "id": "sarvam-q4",
      "label": "Sarvam-30B Q4_K_M",
      "shortLabel": "Sarvam Q4",
      "color": "#22c55e",
      "tags": ["local", "quantized"]
    }
  ],
  "categories": ["Multilingual", "Reasoning", "Code", "Agentic", "Safety"],
  "findings": [
    {
      "emoji": "🤖",
      "title": "Identity failure under quantization",
      "body": "Q4 Sarvam claims to be \"Google Gemini\" (Test 32) but bf16 correctly says \"Sarvam AI\"."
    }
  ],
  "multilingualTests": [1, 2, 21, 25, 26]
}
```

### 2. Metrics — `public/data/benchmarks/<suiteSlug>/metrics.json`
```jsonc
[
  {
    "runId": "sarvam-q4",
    "testId": 1,
    "testName": "Technical translation",
    "category": "Multilingual",
    "tokens": 5490,
    "promptTokens": 97,
    "tPerS": 10.6,
    "elapsedS": 515.81,
    "finish": "stop",
    "runawayThink": false,
    "validation": "pass",
    "subs": [
      { "label": "Hindi", "scriptOk": true }
    ]
  }
]
```

### 3. Test Details — `public/data/benchmarks/<suiteSlug>/test_<NN>.json`
Fetched lazily when a specific test is opened in the explorer (< 300 KB):
```jsonc
{
  "testId": 3,
  "testName": "Code-mixed (Hinglish/Tanglish/Kanglish)",
  "category": "Multilingual",
  "prompt": "Write three separate Slack messages ...",
  "runs": {
    "sarvam-q4": {
      "content": "...",
      "thinking": "...",
      "thinkingTruncated": true
    }
  }
}
```

---

## Interactive Components (Svelte 5)

All Svelte components are generic and receive state via props or Svelte 5 state variables:

### 1. `BenchmarkDashboard.svelte`
Mounts on the page and receives `suiteSlug`.
- On mount, fetches `/data/benchmarks/${suiteSlug}/manifest.json` and `metrics.json`.
- Renders findings cards and imports:
  - `BenchSpeedChart.svelte`
  - `BenchMatrix.svelte`
  - `BenchLangHeatmap.svelte` (only if `manifest.multilingualTests` is defined)
  - `BenchExplorer.svelte`

### 2. `BenchSpeedChart.svelte`
Speed (t/s) comparison using clean, responsive inline SVGs with category filtering and log-scale toggle.

### 3. `BenchMatrix.svelte`
Validation grid (tests × runs) with pass/fail/na chips.

### 4. `BenchLangHeatmap.svelte`
Multilingual script-correctness heatmaps.

### 5. `BenchExplorer.svelte`
Test explorer. Lazily fetches `/data/benchmarks/${suiteSlug}/test_${testId}.json` to show side-by-side prompt and outputs.

---

## Build-Time Transform Script

`scripts/build-benchmark-data.mjs` — run manually via `pnpm benchmarks:data`:
1. Processes the five source directories under `llm-benchmarks/`.
2. Automatically detects script correctness for multilingual tests using Unicode ranges.
3. Truncates thinking traces to ~4 KB and adds `thinkingTruncated: true`.
4. Outputs the manifest, metrics, and lazy test JSONs to `public/data/benchmarks/<suiteSlug>/`.

---

## Verification Plan

1. **Clean build**: Ensure `pnpm build` works without errors.
2. **Proper URLs**: Verify `/benchmarks/sarvam/` resolves and renders both the markdown content and the dashboard.
3. **Polish**: `.gitignore` entry for `llm-benchmarks/`, `data-pagefind-ignore`, mobile responsive
   pass, and link from the new blog post when ready. **Genericity check**: Adding a new benchmark `mmlu` requires only adding `src/content/benchmarks/mmlu.md` and the data folder `public/data/benchmarks/mmlu/` — no code modifications.
