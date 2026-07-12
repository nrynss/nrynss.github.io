<script lang="ts">
  // src/components/interactive/BenchLangHeatmap.svelte
  interface Run {
    id: string;
    label: string;
    shortLabel: string;
    color: string;
    tags: string[];
  }

  interface SubMetric {
    label: string;
    scriptOk: boolean;
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
    subs?: SubMetric[];
  }

  interface Props {
    runs: Run[];
    metrics: MetricRow[];
  }

  let { runs, metrics }: Props = $props();

  // Extract all distinct languages dynamically
  let languages = $derived.by(() => {
    const langSet = new Set<string>();
    for (const m of metrics) {
      if (m.subs) {
        for (const s of m.subs) {
          langSet.add(s.label);
        }
      }
    }
    return Array.from(langSet).sort();
  });

  // Calculate aggregates (pass rate per language per run)
  let cellData = $derived.by(() => {
    const data: Record<string, Record<string, { pass: number; total: number; pct: number }>> = {};

    for (const lang of languages) {
      data[lang] = {};
      for (const run of runs) {
        data[lang][run.id] = { pass: 0, total: 0, pct: 0 };
      }
    }

    for (const m of metrics) {
      if (!m.subs) continue;
      for (const s of m.subs) {
        const langData = data[s.label];
        if (langData && langData[m.runId]) {
          const stats = langData[m.runId];
          stats.total++;
          if (s.scriptOk) {
            stats.pass++;
          }
          stats.pct = stats.total > 0 ? Math.round((stats.pass / stats.total) * 100) : 0;
        }
      }
    }

    return data;
  });

  function getHeatmapColor(pct: number): string {
    if (pct === 100) return 'rgba(16, 185, 129, 0.85)'; // Emerald Green
    if (pct >= 75) return 'rgba(16, 185, 129, 0.55)';
    if (pct >= 50) return 'rgba(245, 158, 11, 0.6)'; // Yellow-Orange
    if (pct >= 25) return 'rgba(245, 158, 11, 0.35)';
    if (pct > 0) return 'rgba(239, 68, 68, 0.35)'; // Light Red
    return 'rgba(239, 68, 68, 0.75)'; // Dark Red
  }

  function getHeatmapTextColor(pct: number): string {
    if (pct === 100 || pct === 0) return '#ffffff';
    return 'var(--text-primary)';
  }
</script>

<div class="heatmap-widget">
  <div class="header">
    <h3>Multilingual Script Correctness Heatmap</h3>
    <p class="description">
      Percentage of multilingual tests (1, 2, 21, 25, 26) where the model responded in the correct native script.
    </p>
  </div>

  <div class="table-container">
    {#if languages.length === 0}
      <p class="no-data">No multilingual sub-prompt data available.</p>
    {:else}
      <table class="heatmap-table">
        <thead>
          <tr>
            <th class="col-lang">Language</th>
            {#each runs as run}
              <th style="border-bottom: 2px solid {run.color}" class="col-run">
                <span class="run-title">{run.shortLabel}</span>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each languages as lang}
            <tr>
              <td class="col-lang font-semibold">{lang}</td>
              {#each runs as run}
                {@const stats = cellData[lang]?.[run.id]}
                <td class="col-cell">
                  {#if stats && stats.total > 0}
                    <div 
                      class="heatmap-cell"
                      style="background-color: {getHeatmapColor(stats.pct)}; color: {getHeatmapTextColor(stats.pct)}"
                    >
                      <span class="pct">{stats.pct}%</span>
                      <span class="fraction">{stats.pass}/{stats.total}</span>
                    </div>
                  {:else}
                    <div class="heatmap-cell na">—</div>
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
  .heatmap-widget {
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
  .table-container {
    overflow-x: auto;
  }
  .heatmap-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    min-width: 600px;
  }
  .heatmap-table th {
    text-align: left;
    padding: 0.75rem;
    background: var(--bg-callout);
    font-weight: 600;
    color: var(--text-primary);
  }
  .heatmap-table td {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
  }
  .heatmap-table tbody tr:hover {
    background: var(--bg-callout);
  }
  .col-lang {
    font-weight: 600;
    min-width: 150px;
  }
  .col-run {
    text-align: center !important;
    width: 120px;
  }
  .run-title {
    font-size: 0.85rem;
    font-weight: 700;
  }
  .col-cell {
    padding: 0.25rem 0.5rem !important;
    text-align: center;
  }
  .heatmap-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0.35rem;
    height: 48px;
    width: 100%;
    max-width: 100px;
    margin: 0 auto;
    font-weight: 700;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
    transition: all 0.2s ease;
  }
  .heatmap-cell:hover {
    filter: brightness(1.06);
    transform: scale(1.02);
  }
  .heatmap-cell.na {
    background: var(--bg-callout);
    color: var(--text-secondary);
    font-weight: 500;
    box-shadow: none;
  }
  .pct {
    font-size: 0.85rem;
  }
  .fraction {
    font-size: 0.65rem;
    opacity: 0.85;
    font-weight: 500;
  }
  .no-data {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    padding: 2rem 0;
  }
</style>
