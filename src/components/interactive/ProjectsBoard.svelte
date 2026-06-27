<script lang="ts">
  // src/components/interactive/ProjectsBoard.svelte
  interface Project {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'wip' | 'archived';
    stack: string[];
    repo?: string;
    demo?: string;
    blog?: string;
    featured: boolean;
  }

  interface Props {
    data: Project[];
  }

  let { data }: Props = $props();

  let searchQuery = $state("");
  let selectedStatus = $state<string>("all");
  let selectedTags = $state(new Set<string>());

  // Extract all unique stack tags
  let allTags = $derived(
    Array.from(new Set(data.flatMap(item => item.stack)))
  );

  // Filtered projects
  let filteredProjects = $derived(
    data.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus = 
        selectedStatus === "all" || 
        item.status === selectedStatus;

      const matchesTags = 
        selectedTags.size === 0 || 
        item.stack.some(tag => selectedTags.has(tag));

      return matchesSearch && matchesStatus && matchesTags;
    })
  );

  function toggleTag(tag: string) {
    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
    } else {
      selectedTags.add(tag);
    }
    selectedTags = new Set(selectedTags);
  }

  function clearFilters() {
    searchQuery = "";
    selectedStatus = "all";
    selectedTags = new Set();
  }
</script>

<div class="projects-board">
  <!-- Filters Bar -->
  <div class="filter-panel">
    <div class="search-row">
      <input 
        type="text" 
        placeholder="Search projects by name or technology..." 
        bind:value={searchQuery}
        class="search-input"
      />
      <select bind:value={selectedStatus} class="status-select">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="wip">Work In Progress</option>
        <option value="archived">Archived</option>
      </select>
    </div>

    <!-- Tech Stack Filter Pills -->
    <div class="tags-container">
      <span class="tags-label">Filter Tech:</span>
      <div class="tags-list">
        {#each allTags as tag}
          <button 
            class="tag-pill" 
            class:active={selectedTags.has(tag)}
            onclick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        {/each}
        {#if searchQuery || selectedStatus !== "all" || selectedTags.size > 0}
          <button class="clear-btn" onclick={clearFilters}>Reset</button>
        {/if}
      </div>
    </div>
  </div>

  <!-- Projects Grid -->
  {#if filteredProjects.length === 0}
    <p class="no-results">No projects match your filters.</p>
  {:else}
    <div class="project-grid">
      {#each filteredProjects as project}
        <div class="project-card" class:featured={project.featured}>
          <div class="project-card-header">
            <h3 class="project-title">{project.title}</h3>
            <span class="project-status status-{project.status}">{project.status}</span>
          </div>
          <p class="project-description">{project.description}</p>
          
          <div class="project-stack">
            {#each project.stack as tech}
              <span class="stack-tag" class:highlighted={selectedTags.has(tech)}>{tech}</span>
            {/each}
          </div>

          <div class="project-links">
            {#if project.blog}
              <a href={project.blog} class="project-link link-blog">Blog Post</a>
            {/if}
            {#if project.repo}
              <a href={project.repo} target="_blank" rel="noopener noreferrer" class="project-link link-project">GitHub</a>
            {/if}
            {#if project.demo}
              <a href={project.demo} target="_blank" rel="noopener noreferrer" class="project-link link-demo">Live Demo</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .projects-board {
    margin: 2rem 0;
  }
  .filter-panel {
    background: var(--bg-callout, #f9f9f9);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .search-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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
  .status-select {
    padding: 0.5rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    background: var(--bg-card);
    color: var(--text-primary, #333);
    min-width: 150px;
  }
  .tags-container {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
  }
  .tags-label {
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 0.25rem;
  }
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  .tag-pill {
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    border: 1px solid var(--border-color, #ccc);
    background: var(--bg-card);
    font-size: 0.75rem;
    cursor: pointer;
    color: var(--text-secondary, #666);
  }
  .tag-pill.active {
    background: var(--accent-primary, #007acc);
    color: #fff;
    border-color: var(--accent-primary, #007acc);
  }
  .clear-btn {
    background: transparent;
    border: none;
    color: #ba2d32;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
  }
  .no-results {
    text-align: center;
    color: var(--text-secondary, #666);
    font-style: italic;
  }

  /* Grid Layout */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .project-card {
    background: var(--bg-callout, #f5f5f5);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
  }
  .project-card.featured {
    border-color: var(--accent-primary, #007acc);
    box-shadow: 0 0 8px rgba(0, 122, 204, 0.1);
  }
  .project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  .project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .project-title {
    margin: 0 !important;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--accent-primary, #007acc);
  }
  .project-status {
    font-size: 0.65rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    background: var(--bg-card);
  }
  .status-active {
    background: rgba(46, 117, 89, 0.1);
    color: #2e7559;
  }
  .status-wip {
    background: rgba(255, 140, 0, 0.1);
    color: #ff8c00;
  }
  .status-archived {
    background: rgba(102, 102, 102, 0.1);
    color: #666;
  }
  .project-description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--text-secondary, #555);
    margin-bottom: 1rem;
    flex-grow: 1;
  }
  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }
  .stack-tag {
    font-size: 0.7rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color, #e0e0e0);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    color: var(--text-secondary, #666);
  }
  .stack-tag.highlighted {
    background: var(--accent-primary, #007acc);
    color: #fff;
    border-color: var(--accent-primary, #007acc);
  }
  .project-links {
    display: flex;
    gap: 0.75rem;
    font-size: 0.8rem;
    border-top: 1px solid var(--border-color, #eee);
    padding-top: 0.75rem;
    margin-top: auto;
  }
  .project-link {
    font-weight: 600;
    color: var(--accent-primary, #007acc);
    text-decoration: none;
  }
  .project-link:hover {
    text-decoration: underline;
  }
</style>
