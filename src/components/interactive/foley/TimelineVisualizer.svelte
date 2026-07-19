<script lang="ts">
  // src/components/interactive/foley/TimelineVisualizer.svelte
  // Horizontal 0 -> duration track. Ambience is a full-width underlay bar.
  // Events are positioned blocks: color by intensity, border/label by kind.
  // Hover/tap shows name + time; click seeks the active video to start_time.

  interface FoleyEvent {
    name: string;
    start_time: number;
    duration: number;
    intensity: string;
    kind: string;
  }
  interface Timeline {
    duration: number;
    ambience: string;
    events: FoleyEvent[];
  }

  interface Props {
    timeline: Timeline;
    onSeek: (t: number) => void;
  }

  let { timeline, onSeek }: Props = $props();

  let hovered = $state<number | null>(null);

  const dur = $derived(timeline.duration || 15);

  // Sorted for tidy stacking; keep index stable for hover keying.
  const events = $derived(
    (timeline.events || []).map((e, i) => ({ ...e, _i: i }))
  );

  // A minimum visible width so instantaneous events (0.1s) are still clickable.
  function pct(n: number): number {
    return Math.max(0, Math.min(100, (n / dur) * 100));
  }
  function widthPct(d: number): number {
    return Math.max(0.8, (d / dur) * 100);
  }

  // Lay events onto rows so overlapping ones don't collide (greedy packing).
  const laidOut = $derived.by(() => {
    const rowsEnd: number[] = [];
    const sorted = [...events].sort((a, b) => a.start_time - b.start_time);
    return sorted.map((ev) => {
      const start = ev.start_time;
      const end = ev.start_time + Math.max(ev.duration, 0.15);
      let row = 0;
      while (row < rowsEnd.length && rowsEnd[row] > start + 0.001) row++;
      rowsEnd[row] = end;
      return { ...ev, _row: row };
    });
  });

  const rowCount = $derived(
    laidOut.reduce((m, e) => Math.max(m, e._row + 1), 1)
  );

  // Tick marks every ~2.5s.
  const ticks = $derived.by(() => {
    const step = dur > 20 ? 5 : 2.5;
    const out: number[] = [];
    for (let t = 0; t <= dur + 0.001; t += step) out.push(Math.round(t * 10) / 10);
    return out;
  });

  function kindLabel(kind: string): string {
    switch (kind) {
      case 'discrete':
        return '●';
      case 'continuous':
        return '▬';
      case 'loop':
        return '↻';
      case 'rhythmic':
        return '⋯';
      default:
        return '•';
    }
  }
</script>

<div class="viz">
  <!-- Ambience underlay -->
  <div class="ambience-bar" title={timeline.ambience}>
    <span class="ambience-label">AMBIENCE</span>
    <span class="ambience-text">{timeline.ambience}</span>
  </div>

  <!-- Event track -->
  <div class="track" style={`--rows:${rowCount}`}>
    {#each laidOut as ev (ev._i)}
      <button
        class={`event intensity-${ev.intensity} kind-${ev.kind}`}
        style={`left:${pct(ev.start_time)}%; width:${widthPct(ev.duration)}%; top:${ev._row * 26}px;`}
        onmouseenter={() => (hovered = ev._i)}
        onmouseleave={() => (hovered = null)}
        onfocus={() => (hovered = ev._i)}
        onblur={() => (hovered = null)}
        onclick={() => onSeek(ev.start_time)}
        title={`${ev.name} @ ${ev.start_time.toFixed(2)}s`}
        aria-label={`${ev.name} at ${ev.start_time.toFixed(2)} seconds — click to seek`}
      >
        <span class="kind-glyph" aria-hidden="true">{kindLabel(ev.kind)}</span>
      </button>
    {/each}

    <!-- Tooltip -->
    {#if hovered != null}
      {@const ev = events.find((e) => e._i === hovered)}
      {#if ev}
        <div
          class="tooltip"
          style={`left:${pct(ev.start_time)}%;`}
          class:flip={pct(ev.start_time) > 65}
        >
          <strong>{ev.name}</strong>
          <span
            >{ev.start_time.toFixed(2)}s · {ev.duration.toFixed(2)}s · {ev.intensity} · {ev.kind}</span
          >
        </div>
      {/if}
    {/if}
  </div>

  <!-- Axis -->
  <div class="axis">
    {#each ticks as t}
      <span class="tick" style={`left:${pct(t)}%`}>{t}s</span>
    {/each}
  </div>

  <!-- Legend -->
  <div class="legend">
    <span class="legend-group">
      <span class="dot intensity-low"></span> low
      <span class="dot intensity-med"></span> med
      <span class="dot intensity-high"></span> high
    </span>
    <span class="legend-sep">·</span>
    <span class="legend-group muted">
      ● discrete&nbsp;&nbsp;▬ continuous&nbsp;&nbsp;↻ loop&nbsp;&nbsp;⋯ rhythmic
    </span>
    <span class="legend-sep">·</span>
    <span class="legend-group muted">click a block to seek</span>
  </div>
</div>

<style>
  .viz {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .ambience-bar {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.4rem 0.7rem;
    border-radius: 6px;
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--accent-blue), transparent 82%),
      color-mix(in srgb, var(--accent-blue), transparent 92%)
    );
    border: 1px solid color-mix(in srgb, var(--accent-blue), transparent 70%);
    overflow: hidden;
  }
  .ambience-label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--accent-blue);
    flex-shrink: 0;
  }
  .ambience-text {
    font-size: 0.78rem;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .track {
    position: relative;
    width: 100%;
    height: calc(var(--rows) * 26px + 6px);
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 3px 0;
  }
  .event {
    position: absolute;
    height: 20px;
    min-width: 6px;
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 0.1s, filter 0.1s;
  }
  .event:hover,
  .event:focus-visible {
    transform: scaleY(1.15);
    filter: brightness(1.15);
    z-index: 5;
    outline: none;
  }
  .kind-glyph {
    font-size: 0.6rem;
    line-height: 1;
    color: rgba(0, 0, 0, 0.55);
  }
  /* Color by intensity */
  .intensity-low {
    background: #34d399;
  }
  .intensity-med {
    background: #fbbf24;
  }
  .intensity-high {
    background: #f87171;
  }
  /* Kind cues via border style */
  .kind-continuous {
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.35);
    opacity: 0.9;
  }
  .kind-loop {
    border-style: dashed;
    border-color: rgba(0, 0, 0, 0.45);
  }
  .kind-rhythmic {
    background-image: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.14) 0,
      rgba(0, 0, 0, 0.14) 3px,
      transparent 3px,
      transparent 6px
    );
  }
  .tooltip {
    position: absolute;
    bottom: calc(100% + 6px);
    transform: translateX(-6px);
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0.4rem 0.6rem;
    background: var(--bg-card);
    border: 1px solid var(--accent-primary);
    border-radius: 6px;
    box-shadow: var(--shadow-md);
    white-space: nowrap;
    pointer-events: none;
    max-width: 320px;
  }
  .tooltip.flip {
    transform: translateX(calc(-100% + 6px));
  }
  .tooltip strong {
    font-size: 0.8rem;
    color: var(--text-primary);
    white-space: normal;
  }
  .tooltip span {
    font-size: 0.7rem;
    color: var(--text-muted);
  }
  .axis {
    position: relative;
    height: 1rem;
    margin-top: 0.1rem;
  }
  .tick {
    position: absolute;
    transform: translateX(-50%);
    font-size: 0.65rem;
    color: var(--text-muted);
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.72rem;
    color: var(--text-secondary);
    margin-top: 0.25rem;
  }
  .legend-group {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
  .legend-group.muted {
    color: var(--text-muted);
  }
  .legend-sep {
    color: var(--border-color);
  }
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
  @media (max-width: 640px) {
    .ambience-text {
      font-size: 0.72rem;
    }
  }
</style>
