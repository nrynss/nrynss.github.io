<script lang="ts">
  // src/components/interactive/foley/ClipSelector.svelte
  // Clip cards read from the manifest; clicking one selects it.

  interface Clip {
    id: string;
    name: string;
    tagline?: string;
    video_url: string;
    foley_video_url: string;
    timeline_url: string;
  }

  interface Props {
    clips: Clip[];
    selectedId: string | null;
    onSelect: (clip: Clip) => void;
  }

  let { clips, selectedId, onSelect }: Props = $props();
</script>

<div class="clip-grid">
  {#each clips as clip}
    <button
      class="clip-card"
      class:active={clip.id === selectedId}
      onclick={() => onSelect(clip)}
      aria-pressed={clip.id === selectedId}
    >
      <span class="clip-name">{clip.name}</span>
      <span class="clip-tagline">{clip.tagline}</span>
    </button>
  {/each}
</div>

<style>
  .clip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
  }
  .clip-card {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    text-align: left;
    padding: 0.9rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    background: var(--bg-card);
    cursor: pointer;
    transition: transform 0.15s ease, border-color 0.15s ease,
      box-shadow 0.15s ease;
  }
  .clip-card:hover {
    transform: translateY(-2px);
    border-color: var(--accent-primary);
    box-shadow: 0 6px 18px rgba(38, 208, 124, 0.12);
  }
  .clip-card.active {
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 1px var(--accent-primary),
      0 6px 18px rgba(38, 208, 124, 0.18);
  }
  .clip-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--accent-primary);
  }
  .clip-tagline {
    font-size: 0.78rem;
    line-height: 1.4;
    color: var(--text-muted);
  }
</style>
