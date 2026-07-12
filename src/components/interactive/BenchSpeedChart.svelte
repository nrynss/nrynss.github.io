<script lang="ts">
  // src/components/interactive/BenchSpeedChart.svelte
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
  }

  let { runs, metrics, categories }: Props = $props();

  let selectedCategory = $state('all');
  let isLogScale = $state(true);

  // Group metrics by testId
  let tests = $derived.by(() => {
    const map = new Map<number, { id: number; name: string; category: string; runs: Record<string, number> }>();
    
    for (const m of metrics) {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        continue;
      }
      if (!map.has(m.testId)) {
        map.set(m.testId, {
          id: m.testId,
          name: m.testName,
          category: m.category,
          runs: {}
        });
      }
      map.get(m.testId)!.runs[m.runId] = m.tPerS;
    }

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
  });

  // Calculate height and sizing dynamically
  const barHeight = 12;
  const groupGap = 8;
  const testGap = 20;
  const leftPadding = 220;
  const rightPadding = 60;
  const chartWidth = 800;

  let groupHeight = $derived(runs.length * barHeight + (runs.length - 1) * 2);
  let totalHeightPerTest = $derived(groupHeight + testGap);
  let svgHeight = $derived(tests.length * totalHeightPerTest + 40);

  // Math helper for scaling
  let maxSpeed = $derived(Math.max(...metrics.map(m => m.tPerS), 10));

  function getScaleX(value: number, width: number): number {
    if (value <= 0) return 0;
    if (isLogScale) {
      // Log base 10 scale, mapping from 0.1 to maxSpeed
      const minLog = Math.log10(0.5);
      const maxLog = Math.log10(maxSpeed);
      const valLog = Math.log10(Math.max(value, 0.5));
      return ((valLog - minLog) / (maxLog - minLog)) * width;
    } else {
      // Linear scale
      return (value / maxSpeed) * width;
    }
  }
</script>

<div class="speed-chart-widget">
  <div class="controls">
    <div class="control-group">
      <label for="speed-category">Filter Category:</label>
      <select id="speed-category" bind:value={selectedCategory}>
        <option value="all">All Categories</option>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
    </div>

    <div class="toggle-group">
      <span class="toggle-label">Scale:</span>
      <button 
        type="button" 
        class="toggle-btn" 
        class:active={!isLogScale} 
        onclick={() => isLogScale = false}
      >
        Linear
      </button>
      <button 
        type="button" 
        class="toggle-btn" 
        class:active={isLogScale} 
        onclick={() => isLogScale = true}
      >
        Logarithmic
      </button>
    </div>
  </div>

  <div class="chart-container">
    {#if tests.length === 0}
      <p class="no-data">No data matches selected category.</p>
    {:else}
      <div class="svg-scroll-wrapper">
        <svg viewBox="0 0 {chartWidth} {svgHeight}" width="100%" height={svgHeight}>
          <!-- Grid lines -->
          <g class="grid-lines" transform="translate({leftPadding}, 0)">
            {#if isLogScale}
              {#each [1, 5, 10, 50, 100, 250, 500] as val}
                {#if val <= maxSpeed}
                  {@const x = getScaleX(val, chartWidth - leftPadding - rightPadding)}
                  <line x1={x} y1={20} x2={x} y2={svgHeight - 20} stroke="var(--border-color)" stroke-dasharray="3,3" />
                  <text x={x} y={15} text-anchor="middle" font-size="9" fill="var(--text-secondary)">{val}</text>
                {/if}
              {/each}
            {:else}
              {#each [0, 0.25, 0.5, 0.75, 1] as fraction}
                {@const val = fraction * maxSpeed}
                {@const x = getScaleX(val, chartWidth - leftPadding - rightPadding)}
                <line x1={x} y1={20} x2={x} y2={svgHeight - 20} stroke="var(--border-color)" stroke-dasharray="3,3" />
                <text x={x} y={15} text-anchor="middle" font-size="9" fill="var(--text-secondary)">{Math.round(val)}</text>
              {/each}
            {/if}
            <!-- Axis Unit -->
            <text x={chartWidth - leftPadding - rightPadding + 10} y={15} font-size="9" font-weight="bold" fill="var(--text-secondary)">t/s</text>
          </g>

          <!-- Chart Rows -->
          {#each tests as test, i}
            {@const yStart = 30 + i * totalHeightPerTest}
            <g class="test-row" transform="translate(0, {yStart})">
              <!-- Label -->
              <text 
                x={leftPadding - 12} 
                y={groupHeight / 2 + 3} 
                text-anchor="end" 
                font-size="11" 
                font-weight="600" 
                fill="var(--text-primary)"
                class="test-label"
              >
                T{test.id}: {test.name.length > 32 ? test.name.substring(0, 30) + '...' : test.name}
                <title>T{test.id}: {test.name} ({test.category})</title>
              </text>

              <!-- Row background for hover guide -->
              <rect x="0" y="-4" width={chartWidth} height={groupHeight + 8} fill="transparent" class="row-hover-bg" />

              <!-- Bars -->
              {#each runs as run, rIndex}
                {@const speed = test.runs[run.id] || 0}
                {@const barWidth = getScaleX(speed, chartWidth - leftPadding - rightPadding)}
                {@const y = rIndex * (barHeight + 2)}
                
                <g class="bar-group">
                  <rect 
                    x={leftPadding} 
                    {y} 
                    width={barWidth} 
                    height={barHeight} 
                    fill={run.color} 
                    rx="2"
                    class="speed-bar"
                  >
                    <title>{run.label}: {speed} t/s</title>
                  </rect>
                  
                  <!-- Speed Label on bar -->
                  {#if speed > 0}
                    <text 
                      x={leftPadding + barWidth + 6} 
                      y={y + barHeight - 2} 
                      font-size="9.5" 
                      font-weight="bold" 
                      fill="var(--text-primary)"
                    >
                      {speed}
                    </text>
                  {/if}
                </g>
              {/each}
            </g>
          {/each}
        </svg>
      </div>
    {/if}
  </div>
</div>

<style>
  .speed-chart-widget {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  .control-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .control-group label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
  }
  .control-group select {
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--bg-card);
    color: var(--text-primary);
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
  }
  .toggle-group {
    display: flex;
    align-items: center;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2px;
  }
  .toggle-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    padding: 0 0.5rem;
  }
  .toggle-btn {
    padding: 0.35rem 0.75rem;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .toggle-btn:hover {
    color: var(--text-primary);
  }
  .toggle-btn.active {
    background: var(--bg-card);
    color: var(--text-primary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  .chart-container {
    overflow-x: auto;
  }
  .svg-scroll-wrapper {
    min-width: 750px;
  }
  .test-label {
    fill: var(--text-primary);
  }
  .row-hover-bg {
    transition: fill 0.15s ease;
  }
  .test-row:hover .row-hover-bg {
    fill: var(--bg-callout);
    opacity: 0.5;
  }
  .speed-bar {
    transition: width 0.3s ease, fill 0.3s ease;
  }
  .speed-bar:hover {
    filter: brightness(1.08);
  }
  .no-data {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    padding: 2rem 0;
  }
</style>
