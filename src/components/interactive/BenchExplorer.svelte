<script lang="ts">
  // src/components/interactive/BenchExplorer.svelte
  import { onMount } from 'svelte';

  interface Run {
    id: string;
    label: string;
    shortLabel: string;
    color: string;
    tags: string[];
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
  }

  interface Props {
    runs: Run[];
    metrics: MetricRow[];
    categories: string[];
    suiteSlug: string;
  }

  let { runs, metrics, categories, suiteSlug }: Props = $props();

  let activeCategory = $state('all');
  let selectedTestId = $state(1);
  let isLoading = $state(false);
  let errorMsg = $state('');

  // Cache for fetched test details
  let testDetailsCache = $state<Record<number, any>>({});
  
  // Tab/sub-prompt selections
  let selectedSubLabel = $state('');
  let expandedThinking = $state<Record<string, boolean>>({});

  // Filter tests by category
  let testOptions = $derived.by(() => {
    const uniqueTests = new Map<number, { id: number; name: string; category: string }>();
    for (const m of metrics) {
      if (activeCategory === 'all' || m.category === activeCategory) {
        uniqueTests.set(m.testId, {
          id: m.testId,
          name: m.testName,
          category: m.category
        });
      }
    }
    return Array.from(uniqueTests.values()).sort((a, b) => a.id - b.id);
  });

  // Active metrics per run for the current test
  let activeMetrics = $derived.by(() => {
    const result: Record<string, MetricRow> = {};
    for (const m of metrics) {
      if (m.testId === selectedTestId) {
        result[m.runId] = m;
      }
    }
    return result;
  });

  // Current active details
  let currentDetails = $derived(testDetailsCache[selectedTestId] || null);

  // Detect multilingual sub-prompts in current details
  let availableSubLabels = $derived.by(() => {
    if (!currentDetails) return [];
    
    // Find the first run that has subs
    for (const runId of Object.keys(currentDetails.runs)) {
      const runVal = currentDetails.runs[runId];
      if (runVal && runVal.subs) {
        return Object.keys(runVal.subs);
      }
    }
    return [];
  });

  // Whenever the test or category changes, fetch detailed data if not cached
  $effect(() => {
    if (selectedTestId) {
      loadTestDetails(selectedTestId);
    }
  });

  // Auto reset selected test to first option when category changes
  $effect(() => {
    if (activeCategory) {
      if (testOptions.length > 0) {
        selectedTestId = testOptions[0].id;
      }
    }
  });

  // Auto initialize or adjust selected sub-prompt label
  $effect(() => {
    const labels = availableSubLabels;
    if (labels.length > 0) {
      if (!labels.includes(selectedSubLabel)) {
        selectedSubLabel = labels[0];
      }
    } else {
      selectedSubLabel = '';
    }
  });

  async function loadTestDetails(id: number) {
    if (testDetailsCache[id]) return; // already cached
    
    isLoading = true;
    errorMsg = '';
    try {
      const response = await fetch(`/data/benchmarks/${suiteSlug}/test_${id}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch details for test ${id}`);
      }
      const data = await response.json();
      testDetailsCache[id] = data;
      expandedThinking = {}; // reset thinking toggles
    } catch (e: any) {
      errorMsg = e.message || 'An error occurred while loading test details.';
    } finally {
      isLoading = false;
    }
  }

  function toggleThinking(runId: string) {
    expandedThinking[runId] = !expandedThinking[runId];
    expandedThinking = { ...expandedThinking };
  }
</script>

<div class="explorer-widget">
  <div class="header">
    <h3>Detailed Test Explorer</h3>
    <p class="description">Select a test case to view the exact prompt, outputs, and metrics side-by-side.</p>
  </div>

  <div class="selector-controls">
    <div class="control-group">
      <label for="explorer-cat">Category:</label>
      <select id="explorer-cat" bind:value={activeCategory}>
        <option value="all">All Categories</option>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
    </div>

    <div class="control-group flex-grow">
      <label for="explorer-test">Test Case:</label>
      <select id="explorer-test" bind:value={selectedTestId}>
        {#each testOptions as opt}
          <option value={opt.id}>T{opt.id}: {opt.name}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if isLoading}
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Loading test details...</p>
    </div>
  {:else if errorMsg}
    <div class="error-state">
      <p>{errorMsg}</p>
      <button onclick={() => loadTestDetails(selectedTestId)}>Retry</button>
    </div>
  {:else if currentDetails}
    <div class="explorer-content">
      
      <!-- Sub-Prompt Tabs (if multilingual) -->
      {#if availableSubLabels.length > 0}
        <div class="sub-tabs-container">
          <span class="tabs-label">Languages:</span>
          <div class="tabs">
            {#each availableSubLabels as label}
              <button 
                type="button" 
                class="tab-btn" 
                class:active={selectedSubLabel === label}
                onclick={() => selectedSubLabel = label}
              >
                {label}
              </button>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Prompt Block -->
      <div class="prompt-box">
        <h4 class="box-title">System & User Prompt</h4>
        <pre class="prompt-text">{currentDetails.prompt}</pre>
      </div>

      <!-- Outputs Grid -->
      <div class="outputs-grid">
        {#each runs as run}
          {@const metric = activeMetrics[run.id]}
          {@const runData = currentDetails.runs[run.id]}
          
          <div class="output-card" style="border-top: 3px solid {run.color}">
            <div class="card-header">
              <span class="run-name">{run.shortLabel}</span>
              {#if metric}
                <div class="metrics-badges">
                  {#if metric.validation === 'pass'}
                    <span class="badge pass">Pass</span>
                  {:else if metric.validation === 'fail'}
                    <span class="badge fail">Fail</span>
                  {/if}
                  {#if metric.finish === 'length'}
                    <span class="badge length">Limit</span>
                  {/if}
                </div>
              {/if}
            </div>

            <!-- Metrics Strip -->
            {#if metric}
              <div class="metrics-strip">
                <div class="metric-item">
                  <span class="lbl">Speed</span>
                  <span class="val font-semibold">{metric.tPerS} t/s</span>
                </div>
                <div class="metric-item">
                  <span class="lbl">Time</span>
                  <span class="val">{metric.elapsedS}s</span>
                </div>
                <div class="metric-item">
                  <span class="lbl">Tokens</span>
                  <span class="val">{metric.tokens}</span>
                </div>
              </div>
            {/if}

            <!-- Output Content Area -->
            <div class="card-body">
              {#if runData}
                {@const content = availableSubLabels.length > 0 ? runData.subs?.[selectedSubLabel]?.content : runData.content}
                {@const thinking = availableSubLabels.length > 0 ? runData.subs?.[selectedSubLabel]?.thinking : runData.thinking}
                {@const thinkingTruncated = availableSubLabels.length > 0 ? false : runData.thinkingTruncated}

                <!-- Thinking Traces -->
                {#if thinking}
                  <div class="thinking-section">
                    <button 
                      type="button" 
                      class="toggle-think-btn" 
                      onclick={() => toggleThinking(run.id)}
                    >
                      {expandedThinking[run.id] ? 'Hide Thinking Trace' : 'View Thinking Trace'}
                      {#if thinkingTruncated}
                        <span class="trunc-tag">Truncated</span>
                      {/if}
                    </button>
                    
                    {#if expandedThinking[run.id]}
                      <pre class="thinking-text">{thinking}</pre>
                    {/if}
                  </div>
                {/if}

                <!-- Main Response Content -->
                <div class="response-section">
                  {#if content}
                    <pre class="response-text">{content}</pre>
                  {:else}
                    <p class="no-content">No response output recorded.</p>
                  {/if}
                </div>
              {:else}
                <p class="no-content">No data recorded for this run.</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .explorer-widget {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  .header {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  .header h3 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
  }
  .description {
    margin: 0.25rem 0 0 0;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }
  .selector-controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .control-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .control-group label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
  }
  .control-group select {
    padding: 0.45rem 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--bg-card);
    color: var(--text-primary);
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .loading-state, .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    text-align: center;
  }
  .spinner {
    border: 3px solid var(--bg-callout);
    border-top: 3px solid var(--accent-primary, #10b981);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .sub-tabs-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }
  .tabs-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
  }
  .tabs {
    display: flex;
    gap: 0.35rem;
    flex-wrap: wrap;
  }
  .tab-btn {
    padding: 0.3rem 0.65rem;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .tab-btn:hover {
    color: var(--text-primary);
    border-color: var(--text-secondary);
  }
  .tab-btn.active {
    background: var(--accent-primary, #10b981);
    color: #ffffff;
    border-color: var(--accent-primary, #10b981);
  }
  .prompt-box {
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .box-title {
    margin: 0 0 0.5rem 0;
    font-size: 0.85rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-secondary);
    letter-spacing: 0.5px;
  }
  .prompt-text {
    margin: 0;
    white-space: pre-wrap;
    font-family: var(--font-mono, monospace);
    font-size: 0.85rem;
    color: var(--text-primary);
  }
  .outputs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
    align-items: start;
  }
  .output-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .card-header {
    background: var(--bg-callout);
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
  }
  .run-name {
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--text-primary);
  }
  .metrics-badges {
    display: flex;
    gap: 0.25rem;
  }
  .badge {
    font-size: 0.65rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 0.05rem 0.35rem;
  }
  .badge.pass { background: rgba(16,185,129,0.15); color: #10b981; }
  .badge.fail { background: rgba(239,68,68,0.15); color: #ef4444; }
  .badge.length { background: rgba(245,158,11,0.15); color: #f59e0b; }
  .metrics-strip {
    display: flex;
    justify-content: space-between;
    background: var(--bg-card);
    padding: 0.45rem 1rem;
    border-bottom: 1px dashed var(--border-color);
    font-size: 0.75rem;
  }
  .metric-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .metric-item .lbl {
    color: var(--text-secondary);
    font-size: 0.65rem;
  }
  .metric-item .val {
    color: var(--text-primary);
    margin-top: 0.05rem;
  }
  .card-body {
    padding: 1rem;
  }
  .thinking-section {
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  .toggle-think-btn {
    width: 100%;
    text-align: left;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.4rem 0.65rem;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease;
  }
  .toggle-think-btn:hover {
    color: var(--text-primary);
    border-color: var(--text-secondary);
  }
  .trunc-tag {
    background: rgba(245,158,11,0.15);
    color: #f59e0b;
    font-size: 0.6rem;
    border-radius: 3px;
    padding: 0.02rem 0.2rem;
  }
  .thinking-text {
    margin-top: 0.75rem;
    padding: 0.75rem;
    background: var(--bg-callout);
    border-left: 2px solid var(--text-secondary);
    font-family: var(--font-mono, monospace);
    font-size: 0.8rem;
    color: var(--text-secondary);
    white-space: pre-wrap;
    max-height: 200px;
    overflow-y: auto;
  }
  .response-text {
    margin: 0;
    white-space: pre-wrap;
    font-family: var(--font-mono, monospace);
    font-size: 0.85rem;
    color: var(--text-primary);
    line-height: 1.45;
  }
  .no-content, .no-data {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    padding: 1rem 0;
  }
  .error-state button {
    margin-top: 0.5rem;
    padding: 0.35rem 0.75rem;
    background: var(--accent-primary, #10b981);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
