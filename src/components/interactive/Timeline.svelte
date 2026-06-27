<script lang="ts">
  // src/components/interactive/Timeline.svelte
  import { slide } from 'svelte/transition';

  interface TimelineItem {
    company: string;
    period: string;
    align: string;
    description: string;
  }

  interface Props {
    data: TimelineItem[];
  }

  let { data }: Props = $props();

  let searchQuery = $state("");
  let viewMode = $state("timeline"); // "timeline" or "list"
  
  // Track expanded items (by company name)
  let expandedItems = $state(new Set<string>());

  // Filtered timeline items
  let filteredItems = $derived(
    data.filter(item => {
      const matchesSearch = 
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    })
  );

  function clearFilters() {
    searchQuery = "";
  }

  function toggleExpand(company: string) {
    if (expandedItems.has(company)) {
      expandedItems.delete(company);
    } else {
      expandedItems.add(company);
    }
    expandedItems = new Set(expandedItems);
  }

  function getSnippet(desc: string, maxLen = 140) {
    if (!desc) return "";
    const firstParagraph = desc.split("\n")[0] || "";
    if (firstParagraph.length > maxLen) {
      return firstParagraph.slice(0, maxLen).trim() + "...";
    }
    return firstParagraph;
  }
</script>

<div class="timeline-widget">
  <!-- Controls Section -->
  <div class="controls-panel">
    <div class="search-row">
      <input 
        type="text" 
        placeholder="Search experiences..." 
        bind:value={searchQuery}
        class="search-input"
      />
      <div class="view-toggle">
        <button 
          class="toggle-btn" 
          class:active={viewMode === "timeline"} 
          onclick={() => viewMode = "timeline"}
        >
          Timeline
        </button>
        <button 
          class="toggle-btn" 
          class:active={viewMode === "list"} 
          onclick={() => viewMode = "list"}
        >
          List
        </button>
      </div>
      {#if searchQuery}
        <button class="clear-btn" onclick={clearFilters}>Reset</button>
      {/if}
    </div>
  </div>

  <!-- Timeline Render -->
  {#if filteredItems.length === 0}
    <p class="no-results">No experiences match your filters.</p>
  {:else if viewMode === "timeline"}
    <!-- Vertical Timeline -->
    <div class="timeline-container">
      {#each filteredItems as item}
        <div class="timeline-item timeline-{item.align}">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
          </div>
          <div class="timeline-content" onclick={() => toggleExpand(item.company)}>
            <div class="timeline-header">
              <h3 class="timeline-company">{item.company}</h3>
              <span class="timeline-period">{item.period}</span>
            </div>

            <!-- Description with Svelte transition -->
            {#if expandedItems.has(item.company)}
              <div class="timeline-description" transition:slide={{ duration: 250 }}>
                {#each item.description.split("\n\n") as paragraph}
                  <p>{paragraph}</p>
                {/each}
              </div>
            {:else}
              <div class="timeline-collapsed-summary">
                <p>{getSnippet(item.description)}</p>
                <div class="expand-prompt">Click to expand details...</div>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <!-- Simple Resume List View -->
    <div class="list-container">
      {#each filteredItems as item}
        <div class="list-item" onclick={() => toggleExpand(item.company)}>
          <div class="list-header">
            <h3 class="list-company">{item.company}</h3>
            <span class="list-period">{item.period}</span>
          </div>

          {#if expandedItems.has(item.company)}
            <div class="timeline-description" transition:slide={{ duration: 250 }}>
              {#each item.description.split("\n\n") as paragraph}
                <p>{paragraph}</p>
              {/each}
            </div>
          {:else}
            <div class="timeline-collapsed-summary">
              <p>{getSnippet(item.description)}</p>
              <div class="expand-prompt">Click to expand details...</div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .timeline-widget {
    margin: 2rem 0;
  }
  .controls-panel {
    background: var(--bg-callout, #f9f9f9);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .search-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }
  .search-input {
    flex: 1;
    min-width: 250px;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    background: var(--bg-card);
    color: var(--text-primary, #333);
  }
  .view-toggle {
    display: flex;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    overflow: hidden;
  }
  .toggle-btn {
    padding: 0.5rem 1rem;
    background: var(--bg-card);
    border: none;
    cursor: pointer;
    font-size: 0.85rem;
    color: var(--text-primary, #333);
  }
  .toggle-btn.active {
    background: var(--accent-primary, #007acc);
    color: #fff;
  }
  .clear-btn {
    background: transparent;
    border: none;
    color: #ba2d32;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .no-results {
    text-align: center;
    color: var(--text-secondary, #666);
    font-style: italic;
  }

  /* Timeline Styles */
  .timeline-container {
    position: relative;
    max-width: 1200px;
    margin: 1rem auto;
    padding: 1rem 0;
  }
  .timeline-container::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      var(--accent-primary, #007acc) 0%,
      var(--accent-primary, #007acc) 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 100% 20px;
    top: 0;
  }
  .timeline-item {
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
  }
  .timeline-left {
    justify-content: flex-end;
  }
  .timeline-right {
    justify-content: flex-start;
  }
  .timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .timeline-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-primary, #007acc);
    border: 2px solid var(--bg-main);
    box-shadow: 0 0 0 2px var(--accent-primary, #007acc);
  }
  .timeline-content {
    width: calc(50% - 30px);
    background: var(--bg-callout, #f5f5f5);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 6px;
    padding: 0.8rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }
  .timeline-left .timeline-content {
    margin-right: calc(50% + 20px);
  }
  .timeline-right .timeline-content {
    margin-left: calc(50% + 20px);
  }
  .timeline-content:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
    flex-wrap: wrap;
  }
  .timeline-company {
    margin: 0 !important;
    font-size: 1rem;
    font-weight: 700;
    color: var(--accent-primary, #007acc);
  }
  .timeline-period {
    font-size: 0.75rem;
    color: var(--text-secondary, #666);
    background: var(--bg-card);
    padding: 0.1rem 0.4rem;
    border-radius: 10px;
    border: 1px solid var(--border-color, #eee);
  }
  .timeline-description {
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--text-secondary, #444);
    border-top: 1px dashed var(--border-color, #e0e0e0);
    padding-top: 0.5rem;
    margin-top: 0.5rem;
  }
  .timeline-description p {
    margin: 0 0 0.5rem 0;
  }
  .timeline-description p:last-child {
    margin-bottom: 0;
  }
  .expand-prompt {
    font-size: 0.75rem;
    color: var(--accent-primary, #007acc);
    font-style: italic;
    margin-top: 0.25rem;
  }
  .timeline-collapsed-summary {
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--text-secondary, #666);
    margin-top: 0.5rem;
    border-top: 1px dashed var(--border-color, #e0e0e0);
    padding-top: 0.5rem;
  }
  .timeline-collapsed-summary p {
    margin: 0 0 0.25rem 0;
  }

  /* List View Styles */
  .list-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .list-item {
    background: var(--bg-callout, #f5f5f5);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .list-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .list-company {
    margin: 0 !important;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent-primary, #007acc);
  }
  .list-period {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary, #666);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .timeline-container::before {
      left: 0;
      transform: none;
    }
    .timeline-item {
      padding-left: 1.5rem;
      justify-content: flex-start;
    }
    .timeline-marker {
      left: 0;
      transform: none;
    }
    .timeline-content {
      width: 100%;
      margin: 0 !important;
    }
  }
</style>
