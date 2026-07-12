<script lang="ts">
  // src/components/interactive/BenchMatrix.svelte
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

  // Filter and group tests
  let testRows = $derived.by(() => {
    const testMap = new Map<number, { id: number; name: string; category: string; runs: Record<string, MetricRow> }>();

    for (const m of metrics) {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        continue;
      }
      if (!testMap.has(m.testId)) {
        testMap.set(m.testId, {
          id: m.testId,
          name: m.testName,
          category: m.category,
          runs: {}
        });
      }
      testMap.get(m.testId)!.runs[m.runId] = m;
    }

    return Array.from(testMap.values()).sort((a, b) => a.id - b.id);
  });
</script>

<div class="matrix-widget">
  <div class="controls">
    <div class="control-group">
      <label for="matrix-category">Filter Category:</label>
      <select id="matrix-category" bind:value={selectedCategory}>
        <option value="all">All Categories</option>
        {#each categories as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="table-container">
    {#if testRows.length === 0}
      <p class="no-data">No benchmark tests found for selected category.</p>
    {:else}
      <table class="matrix-table">
        <thead>
          <tr>
            <th class="col-test">Test</th>
            <th class="col-category">Category</th>
            {#each runs as run}
              <th style="border-bottom: 2px solid {run.color}" class="col-run">
                <span class="run-title">{run.shortLabel}</span>
                <span class="run-subtitle">{run.tags.join(', ')}</span>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each testRows as row}
            <tr>
              <td class="col-test">
                <span class="test-id">T{row.id}</span>
                <span class="test-name" title={row.name}>{row.name}</span>
              </td>
              <td class="col-category">
                <span class="cat-badge">{row.category}</span>
              </td>
              {#each runs as run}
                {@const metric = row.runs[run.id]}
                <td class="col-val-cell">
                  {#if metric}
                    <div class="cell-status-container">
                      {#if metric.validation === 'pass'}
                        <span class="status-chip pass" title="Correct output structure / validated script">
                          <span class="icon">✓</span> Pass
                        </span>
                      {:else}
                        {#if metric.validation === 'fail'}
                          <span class="status-chip fail" title="Validation failed / incorrect output script">
                            <span class="icon">✗</span> Fail
                          </span>
                        {:else}
                          <span class="status-chip na" title="No formal validation criteria">
                            —
                          </span>
                        {/if}
                      {/if}

                      <!-- Alert Badges -->
                      {#if metric.finish === 'length'}
                        <span class="alert-badge length" title="Hit token output limit constraint">
                          Limit
                        </span>
                      {/if}
                      {#if metric.runawayThink}
                        <span class="alert-badge runaway" title="Model experienced thinking runaway loop">
                          Runaway
                        </span>
                      {/if}
                    </div>
                  {:else}
                    <span class="status-chip na">—</span>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
</div>

<style>
  .matrix-widget {
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
  .table-container {
    overflow-x: auto;
  }
  .matrix-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    min-width: 800px;
  }
  .matrix-table th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: var(--bg-callout);
    font-weight: 600;
    color: var(--text-primary);
  }
  .matrix-table td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
  }
  .matrix-table tbody tr:hover {
    background: var(--bg-callout);
  }
  .col-test {
    min-width: 200px;
  }
  .test-id {
    font-weight: 700;
    color: var(--text-secondary);
    margin-right: 0.5rem;
  }
  .test-name {
    font-weight: 500;
  }
  .col-category {
    width: 120px;
  }
  .cat-badge {
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 0.2rem 0.4rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
  }
  .col-run {
    text-align: center !important;
    width: 130px;
  }
  .run-title {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
  }
  .run-subtitle {
    display: block;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 0.15rem;
  }
  .col-val-cell {
    text-align: center;
  }
  .cell-status-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  .status-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    width: 70px;
  }
  .status-chip.pass {
    background: rgba(16, 185, 129, 0.15);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }
  .status-chip.fail {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }
  .status-chip.na {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid transparent;
    font-weight: 500;
  }
  .alert-badge {
    font-size: 0.65rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 0.05rem 0.3rem;
  }
  .alert-badge.length {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.4);
  }
  .alert-badge.runaway {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.4);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
  .no-data {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    padding: 2rem 0;
  }
</style>
