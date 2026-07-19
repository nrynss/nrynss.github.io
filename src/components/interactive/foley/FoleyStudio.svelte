<script lang="ts">
  // src/components/interactive/foley/FoleyStudio.svelte
  // Top-level island: owns all state. Loads the manifest, then per-clip
  // timelines, and coordinates the video theatre, timeline visualizer,
  // routing table and raw-JSON view. Fully static — no backend calls.

  import ClipSelector from './ClipSelector.svelte';
  import SoundTheatre from './SoundTheatre.svelte';
  import TimelineVisualizer from './TimelineVisualizer.svelte';
  import RoutingTable from './RoutingTable.svelte';

  interface Clip {
    id: string;
    name: string;
    tagline?: string;
    video_url: string;
    foley_video_url: string;
    timeline_url: string;
  }
  interface FoleyEvent {
    name: string;
    start_time: number;
    duration: number;
    intensity: string;
    kind: string;
  }
  interface HistoryEntry {
    when?: string;
    model?: string;
    notes?: string;
    changes?: string;
    reconstructed?: boolean;
  }
  interface Timeline {
    duration: number;
    ambience: string;
    events: FoleyEvent[];
    history?: HistoryEntry[];
  }

  let clips = $state<Clip[]>([]);
  let manifestError = $state<string | null>(null);

  let selectedClip = $state<Clip | null>(null);
  let timeline = $state<Timeline | null>(null);
  let timelineError = $state<string | null>(null);
  let loadingTimeline = $state(false);

  let activeTab = $state<'timeline' | 'routing' | 'json'>('timeline');
  let showRawJson = $state(false);
  let seekTo = $state<number | null>(null);

  // Load the manifest once on mount.
  $effect(() => {
    fetch('/foley/data/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error(`manifest ${r.status}`);
        return r.json();
      })
      .then((data: Clip[]) => {
        clips = data;
      })
      .catch((e) => {
        manifestError = String(e);
      });
  });

  async function selectClip(clip: Clip) {
    selectedClip = clip;
    timeline = null;
    timelineError = null;
    loadingTimeline = true;
    activeTab = 'timeline';
    try {
      const r = await fetch(clip.timeline_url);
      if (!r.ok) throw new Error(`timeline ${r.status}`);
      timeline = await r.json();
    } catch (e) {
      timelineError = String(e);
    } finally {
      loadingTimeline = false;
    }
  }

  function handleSeek(t: number) {
    seekTo = t;
  }

  const eventCount = $derived(timeline?.events?.length ?? 0);
  const prettyJson = $derived(timeline ? JSON.stringify(timeline, null, 2) : '');
</script>

<div class="studio">
  <!-- Clip selection -->
  <section class="panel">
    <h3 class="panel-title">1 · Pick a clip</h3>
    {#if manifestError}
      <p class="error">Could not load the clip manifest: {manifestError}</p>
    {:else if clips.length === 0}
      <p class="muted">Loading clips…</p>
    {:else}
      <ClipSelector
        {clips}
        selectedId={selectedClip?.id ?? null}
        onSelect={selectClip}
      />
    {/if}
  </section>

  <!-- Video theatre -->
  <section class="panel">
    <h3 class="panel-title">2 · Silent original vs. foley</h3>
    <SoundTheatre
      clip={selectedClip}
      {seekTo}
      onSeekConsumed={() => (seekTo = null)}
    />
  </section>

  <!-- Timeline / routing / json -->
  {#if selectedClip}
    <section class="panel">
      <div class="panel-head">
        <h3 class="panel-title">
          3 · The event timeline
          {#if timeline}
            <span class="count">{eventCount} events · {timeline.duration.toFixed(1)}s</span>
          {/if}
        </h3>
        <div class="tabs" role="tablist">
          <button
            role="tab"
            class="tab"
            class:active={activeTab === 'timeline'}
            aria-selected={activeTab === 'timeline'}
            onclick={() => (activeTab = 'timeline')}>Visual timeline</button
          >
          <button
            role="tab"
            class="tab"
            class:active={activeTab === 'routing'}
            aria-selected={activeTab === 'routing'}
            onclick={() => (activeTab = 'routing')}>SFX routing</button
          >
          <button
            role="tab"
            class="tab"
            class:active={activeTab === 'json'}
            aria-selected={activeTab === 'json'}
            onclick={() => (activeTab = 'json')}>Raw JSON</button
          >
        </div>
      </div>

      {#if loadingTimeline}
        <p class="muted">Loading timeline…</p>
      {:else if timelineError}
        <p class="error">Could not load the timeline: {timelineError}</p>
      {:else if timeline}
        {#if activeTab === 'timeline'}
          <TimelineVisualizer {timeline} onSeek={handleSeek} />
        {:else if activeTab === 'routing'}
          <RoutingTable {timeline} />
        {:else if activeTab === 'json'}
          <pre class="json">{prettyJson}</pre>
        {/if}

        <!-- Provenance / history -->
        {#if timeline.history && timeline.history.length > 0}
          <div class="history">
            <span class="history-label">Provenance</span>
            {#each timeline.history as h}
              <div class="history-item">
                {#if h.reconstructed}
                  <span class="prov-badge reconstructed">reconstructed</span>
                {:else}
                  <span class="prov-badge">{h.model ?? 'edit'}</span>
                {/if}
                <span class="history-notes">{h.notes ?? h.changes ?? ''}</span>
              </div>
            {/each}
          </div>
        {/if}
      {/if}
    </section>
  {/if}
</div>

<style>
  .studio {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 1.5rem 0;
  }
  .panel {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
  }
  .panel-title {
    font-size: 0.8rem !important;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-muted) !important;
    margin: 0 0 1rem !important;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .count {
    font-size: 0.72rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--accent-primary);
    font-weight: 600;
  }
  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .panel-head .panel-title {
    margin: 0 !important;
  }
  .tabs {
    display: inline-flex;
    gap: 0.2rem;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.2rem;
  }
  .tab {
    padding: 0.35rem 0.75rem;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.78rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
  }
  .tab:hover {
    color: var(--text-primary);
  }
  .tab.active {
    background: var(--accent-primary);
    color: #fff;
  }
  .json {
    max-height: 380px;
    overflow: auto;
    font-size: 0.75rem;
    line-height: 1.5;
    margin: 0;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
  }
  .history {
    margin-top: 1rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .history-label {
    font-size: 0.66rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    font-weight: 700;
  }
  .history-item {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.78rem;
    color: var(--text-secondary);
  }
  .prov-badge {
    flex-shrink: 0;
    font-size: 0.66rem;
    font-weight: 700;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    background: var(--bg-callout);
    color: var(--text-muted);
  }
  .prov-badge.reconstructed {
    background: rgba(245, 158, 11, 0.16);
    color: #d97706;
  }
  .muted {
    color: var(--text-muted);
    font-size: 0.85rem;
  }
  .error {
    color: var(--accent-red);
    font-size: 0.85rem;
  }
</style>
