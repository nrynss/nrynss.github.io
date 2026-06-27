<script lang="ts">
  // src/components/interactive/ModelComparison.svelte
  interface BenchmarkData {
    prompts: Array<{
      category: string;
      prompt: string;
      responses: Record<string, {
        output: string;
        timeSec: number;
        tokensPerSec: number;
        tokensCount: number;
        rating: number;
        critique: string;
      }>;
    }>;
  }

  interface Props {
    data: BenchmarkData;
  }

  let { data }: Props = $props();

  let activePromptIndex = $state(0);
  let selectedCategory = $state("all");

  // Get categories
  let categories = $derived(
    ["all", ...Array.from(new Set(data.prompts.map(p => p.category)))]
  );

  // Filtered prompts
  let filteredPrompts = $derived(
    selectedCategory === "all"
      ? data.prompts
      : data.prompts.filter(p => p.category === selectedCategory)
  );

  let activePrompt = $derived(filteredPrompts[activePromptIndex] || filteredPrompts[0] || null);

  // Auto reset index when category changes
  $effect(() => {
    if (selectedCategory) {
      activePromptIndex = 0;
    }
  });
</script>

<div class="model-comparison-widget">
  <div class="header-controls">
    <div class="control-group">
      <label for="category-select">Category:</label>
      <select id="category-select" bind:value={selectedCategory}>
        {#each categories as category}
          <option value={category}>{category === "all" ? "All Categories" : category}</option>
        {/each}
      </select>
    </div>

    <div class="control-group">
      <label for="prompt-select">Prompt:</label>
      <select id="prompt-select" bind:value={activePromptIndex}>
        {#each filteredPrompts as p, i}
          <option value={i}>{p.prompt.substring(0, 60)}...</option>
        {/each}
      </select>
    </div>
  </div>

  {#if activePrompt}
    <div class="playground-container">
      <div class="prompt-box">
        <strong>Prompt:</strong>
        <pre>{activePrompt.prompt}</pre>
      </div>

      <div class="outputs-grid">
        {#each Object.entries(activePrompt.responses) as [model, response]}
          <div class="model-panel">
            <div class="model-panel-header">
              <span class="model-name">{model}</span>
              <span class="model-rating">★ {response.rating}/10</span>
            </div>
            
            <div class="model-metrics">
              <span><strong>Speed:</strong> {response.tokensPerSec} t/s</span>
              <span><strong>Time:</strong> {response.timeSec}s</span>
              <span><strong>Tokens:</strong> {response.tokensCount}</span>
            </div>

            <div class="model-output">
              <pre>{response.output}</pre>
            </div>

            {#if response.critique}
              <div class="model-critique">
                <strong>Notes:</strong>
                <p>{response.critique}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <p class="no-data">No benchmark data available.</p>
  {/if}
</div>

<style>
  .model-comparison-widget {
    margin: 2rem 0;
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 8px;
    background: var(--bg-card);
    overflow: hidden;
  }
  .header-controls {
    background: var(--bg-callout, #f5f5f5);
    border-bottom: 1px solid var(--border-color, #e0e0e0);
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .control-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
    min-width: 200px;
  }
  .control-group label {
    font-size: 0.8rem;
    font-weight: 600;
  }
  .control-group select {
    padding: 0.4rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    background: var(--bg-card);
    color: var(--text-primary, #333);
  }
  .playground-container {
    padding: 1rem;
  }
  .prompt-box {
    background: var(--bg-callout, #fcfcfc);
    border: 1px solid var(--border-color, #eee);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  .prompt-box pre {
    margin: 0.5rem 0 0 0;
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 0.85rem;
    color: var(--text-primary, #333);
  }
  .outputs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .model-panel {
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 6px;
    background: var(--bg-card);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .model-panel-header {
    background: var(--bg-callout, #eee);
    padding: 0.5rem 0.75rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 0.95rem;
    border-bottom: 1px solid var(--border-color, #e0e0e0);
  }
  .model-name {
    color: var(--accent-primary, #007acc);
  }
  .model-metrics {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    background: var(--bg-callout, #fafafa);
    padding: 0.35rem 0.75rem;
    border-bottom: 1px dashed var(--border-color, #eee);
    color: var(--text-secondary, #666);
  }
  .model-output {
    padding: 0.75rem;
    font-size: 0.85rem;
    flex-grow: 1;
    overflow-y: auto;
    max-height: 400px;
    background: var(--bg-card);
    border-bottom: 1px solid var(--border-color, #eee);
  }
  .model-output pre {
    margin: 0;
    white-space: pre-wrap;
    font-family: monospace;
  }
  .model-critique {
    padding: 0.75rem;
    background: rgba(0, 122, 204, 0.05);
    font-size: 0.8rem;
    border-top: 1px solid var(--border-color, #eee);
  }
  .model-critique p {
    margin: 0.25rem 0 0 0;
    color: var(--text-secondary, #555);
  }
  .no-data {
    text-align: center;
    padding: 2rem;
    color: var(--text-secondary, #666);
    font-style: italic;
  }
</style>
