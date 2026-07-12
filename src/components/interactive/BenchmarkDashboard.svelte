<script lang="ts">
  // src/components/interactive/BenchmarkDashboard.svelte
  import { onMount } from 'svelte';
  import BenchSpeedChart from './BenchSpeedChart.svelte';
  import BenchMatrix from './BenchMatrix.svelte';
  import BenchLangHeatmap from './BenchLangHeatmap.svelte';
  import BenchExplorer from './BenchExplorer.svelte';

  interface Run {
    id: string;
    label: string;
    shortLabel: string;
    color: string;
    tags: string[];
  }

  interface Finding {
    emoji: string;
    title: string;
    body: string;
  }

  interface Manifest {
    runs: Run[];
    categories: string[];
    findings: Finding[];
    multilingualTests?: number[];
  }

  interface MetricRow {
    runId: string;
    testId: number;
    testName: string;
    category: string;
    tokens: number;
    promptTokens: number;
    tPerS: number;
    elapsedS: number;
    finish: string;
    runawayThink: boolean;
    validation: string;
    subs?: Array<{ label: string; scriptOk: boolean }>;
  }

  interface Props {
    suiteSlug: string;
  }

  let { suiteSlug }: Props = $props();

  let manifest = $state<Manifest | null>(null);
  let metrics = $state<MetricRow[]>([]);
  let activeTab = $state('explorer');
  let isLoading = $state(true);
  let errorMsg = $state('');

  onMount(async () => {
    try {
      // 1. Fetch manifest
      const manifestRes = await fetch(`/data/benchmarks/${suiteSlug}/manifest.json`);
      if (!manifestRes.ok) {
        throw new Error('Failed to load benchmark manifest settings.');
      }
      manifest = await manifestRes.json();

      // 2. Fetch metrics
      const metricsRes = await fetch(`/data/benchmarks/${suiteSlug}/metrics.json`);
      if (!metricsRes.ok) {
        throw new Error('Failed to load benchmark metrics.');
      }
      metrics = await metricsRes.json();
    } catch (e: any) {
      errorMsg = e.message || 'An error occurred while loading dashboard data.';
    } finally {
      isLoading = false;
    }
  });

  // Derived totals
  let runsCount = $derived(manifest?.runs?.length || 0);
  let categoriesCount = $derived(manifest?.categories?.length || 0);
  let totalTests = $derived(
    metrics.length > 0 ? Math.max(...metrics.map(m => m.testId)) : 0
  );

  // Compute average speeds per run
  let runAvgSpeeds = $derived.by(() => {
    if (!manifest || metrics.length === 0) return {};
    const result: Record<string, { totalSpeed: number; count: number; avg: number }> = {};
    
    for (const r of manifest.runs) {
      result[r.id] = { totalSpeed: 0, count: 0, avg: 0 };
    }

    for (const m of metrics) {
      if (result[m.runId]) {
        result[m.runId].totalSpeed += m.tPerS;
        result[m.runId].count++;
      }
    }

    for (const id of Object.keys(result)) {
      const runRes = result[id];
      runRes.avg = runRes.count > 0 ? Number((runRes.totalSpeed / runRes.count).toFixed(1)) : 0;
    }

    return result;
  });
</script>

<div class="dashboard-shell">
  {#if isLoading}
    <div class="main-loader">
      <div class="spinner"></div>
      <p>Initializing benchmark dashboard...</p>
    </div>
  {:else if errorMsg}
    <div class="main-error">
      <h3>Initialization Error</h3>
      <p>{errorMsg}</p>
    </div>
  {:else if manifest}
    <!-- Aggregate Totals Strip -->
    <div class="totals-grid">
      <div class="total-card">
        <span class="num">{totalTests}</span>
        <span class="lbl">Total Tests Scenarios</span>
      </div>
      <div class="total-card">
        <span class="num">{categoriesCount}</span>
        <span class="lbl">Task Categories</span>
      </div>
      <div class="total-card">
        <span class="num">{runsCount}</span>
        <span class="lbl">Models/Runs Compared</span>
      </div>
      {#each manifest.runs as run}
        <div class="total-card run-speed-card" style="border-bottom: 3px solid {run.color}">
          <span class="num" style="color: {run.color}">
            {runAvgSpeeds[run.id]?.avg || 0}
          </span>
          <span class="lbl">Avg Speed (t/s) — {run.shortLabel}</span>
        </div>
      {/each}
    </div>

    <!-- Key Findings Callouts -->
    {#if manifest.findings && manifest.findings.length > 0}
      <div class="findings-section">
        <h3>Key Findings & Observations</h3>
        <div class="findings-grid">
          {#each manifest.findings as f}
            <div class="finding-card">
              <span class="emoji">{f.emoji}</span>
              <div class="content">
                <h4 class="title">{f.title}</h4>
                <p class="body">{f.body}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Tab Navigation -->
    <div class="tabs-nav-bar">
      <button 
        type="button" 
        class="nav-tab" 
        class:active={activeTab === 'explorer'} 
        onclick={() => activeTab = 'explorer'}
      >
        🔎 Detailed Test Explorer
      </button>

      <button 
        type="button" 
        class="nav-tab" 
        class:active={activeTab === 'matrix'} 
        onclick={() => activeTab = 'matrix'}
      >
        🏁 Validation Matrix
      </button>

      {#if manifest.multilingualTests && manifest.multilingualTests.length > 0}
        <button 
          type="button" 
          class="nav-tab" 
          class:active={activeTab === 'heatmap'} 
          onclick={() => activeTab = 'heatmap'}
        >
          🌐 Multilingual Heatmap
        </button>
      {/if}

      <button 
        type="button" 
        class="nav-tab" 
        class:active={activeTab === 'speed'} 
        onclick={() => activeTab = 'speed'}
      >
        📊 Speed Comparisons
      </button>
    </div>

    <!-- Active Tab Panel View -->
    <div class="panel-content">
      {#if activeTab === 'speed'}
        <BenchSpeedChart 
          runs={manifest.runs} 
          {metrics} 
          categories={manifest.categories} 
        />
      {:else if activeTab === 'matrix'}
        <BenchMatrix 
          runs={manifest.runs} 
          {metrics} 
          categories={manifest.categories} 
        />
      {:else if activeTab === 'heatmap'}
        <BenchLangHeatmap 
          runs={manifest.runs} 
          {metrics} 
        />
      {:else if activeTab === 'explorer'}
        <BenchExplorer 
          runs={manifest.runs} 
          {metrics} 
          categories={manifest.categories} 
          {suiteSlug} 
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .dashboard-shell {
    margin: 2rem 0;
  }
  .main-loader, .main-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
    text-align: center;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
  }
  .spinner {
    border: 3px solid var(--bg-callout);
    border-top: 3px solid var(--accent-primary, #10b981);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .totals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .total-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 1.25rem 1rem;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }
  .total-card .num {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.2;
    color: var(--text-primary);
  }
  .total-card .lbl {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    margin-top: 0.35rem;
  }
  .findings-section {
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  .findings-section h3 {
    margin: 0 0 1.25rem 0;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-primary);
  }
  .findings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
  }
  .finding-card {
    display: flex;
    gap: 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
  }
  .finding-card .emoji {
    font-size: 1.5rem;
    line-height: 1;
  }
  .finding-card .content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .finding-card .title {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
  }
  .finding-card .body {
    margin: 0;
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.45;
  }
  .tabs-nav-bar {
    display: flex;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 1.5rem;
    overflow-x: auto;
    gap: 4px;
  }
  .nav-tab {
    padding: 0.55rem 1rem;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  .nav-tab:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
  }
  .nav-tab.active {
    background: var(--bg-card);
    color: var(--text-primary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  .panel-content {
    animation: fadeIn 0.25s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
