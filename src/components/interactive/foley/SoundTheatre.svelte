<script lang="ts">
  // src/components/interactive/foley/SoundTheatre.svelte
  // Two <video> elements (silent original + foley render); a mode toggle
  // swaps which one is visible AND keeps currentTime + play state in sync.
  // preload="none" until a clip is selected (Lighthouse: no video bytes
  // downloaded before the user picks a clip).

  interface Clip {
    id: string;
    name: string;
    tagline?: string;
    video_url: string;
    foley_video_url: string;
  }

  interface Props {
    clip: Clip | null;
    seekTo?: number | null;
    onSeekConsumed?: () => void;
  }

  let { clip, seekTo = null, onSeekConsumed }: Props = $props();

  // "silent" | "foley"
  let mode = $state<'silent' | 'foley'>('silent');

  let silentEl = $state<HTMLVideoElement | null>(null);
  let foleyEl = $state<HTMLVideoElement | null>(null);

  const active = $derived(mode === 'silent' ? silentEl : foleyEl);
  const inactive = $derived(mode === 'silent' ? foleyEl : silentEl);

  // When the selected clip changes, reset to silent mode.
  let lastClipId = $state<string | null>(null);
  $effect(() => {
    if (clip && clip.id !== lastClipId) {
      lastClipId = clip.id;
      mode = 'silent';
    }
  });

  // Seek requests from the timeline visualizer.
  $effect(() => {
    if (seekTo != null && active) {
      active.currentTime = seekTo;
      // Nudge the paused frame to update.
      active.play().catch(() => {});
      onSeekConsumed?.();
    }
  });

  function switchMode(target: 'silent' | 'foley') {
    if (target === mode || !active) return;
    const from = active;
    const t = from.currentTime;
    const wasPlaying = !from.paused && !from.ended;
    from.pause();

    mode = target;

    // The other element becomes active after the DOM updates.
    queueMicrotask(() => {
      const to = target === 'silent' ? silentEl : foleyEl;
      if (!to) return;
      try {
        to.currentTime = t;
      } catch {
        /* metadata not ready yet; will start at 0 */
      }
      if (wasPlaying) {
        to.play().catch(() => {});
      }
    });
  }
</script>

<div class="theatre">
  <div class="stage">
    {#if !clip}
      <div class="placeholder">
        <span class="placeholder-icon" aria-hidden="true">▶</span>
        <p>Select a clip to load the silent original and its foley render.</p>
      </div>
    {:else}
      <!-- Both elements are mounted; only the active one is shown. -->
      <video
        bind:this={silentEl}
        class="video"
        class:hidden={mode !== 'silent'}
        src={clip.video_url}
        preload="none"
        controls
        playsinline
        muted
      ></video>
      <video
        bind:this={foleyEl}
        class="video"
        class:hidden={mode !== 'foley'}
        src={clip.foley_video_url}
        preload="none"
        controls
        playsinline
      ></video>

      <div class="badge" class:foley={mode === 'foley'}>
        {mode === 'silent' ? 'SILENT ORIGINAL' : 'WITH FOLEY'}
      </div>
    {/if}
  </div>

  {#if clip}
    <div class="mode-toggle" role="tablist" aria-label="Audio mode">
      <button
        role="tab"
        aria-selected={mode === 'silent'}
        class="mode-btn"
        class:active={mode === 'silent'}
        onclick={() => switchMode('silent')}
      >
        Silent original
      </button>
      <button
        role="tab"
        aria-selected={mode === 'foley'}
        class="mode-btn"
        class:active={mode === 'foley'}
        onclick={() => switchMode('foley')}
      >
        With foley
      </button>
    </div>
    <p class="hint">
      Toggling keeps the same playhead and play state — the only thing that
      changes is the soundtrack.
    </p>
  {/if}
</div>

<style>
  .theatre {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .stage {
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    background: #000;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
  }
  .video.hidden {
    visibility: hidden;
    pointer-events: none;
  }
  .placeholder {
    text-align: center;
    color: var(--text-muted);
    padding: 2rem;
  }
  .placeholder-icon {
    display: block;
    font-size: 2.5rem;
    color: var(--accent-primary);
    margin-bottom: 0.75rem;
  }
  .placeholder p {
    margin: 0;
    color: var(--text-muted);
  }
  .badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 2;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.65);
    color: #d1d5db;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
    pointer-events: none;
  }
  .badge.foley {
    color: #fff;
    background: color-mix(in srgb, var(--accent-primary), black 20%);
    border-color: var(--accent-primary);
    box-shadow: 0 0 12px rgba(38, 208, 124, 0.4);
  }
  .mode-toggle {
    display: inline-flex;
    align-self: center;
    gap: 0.25rem;
    padding: 0.25rem;
    background: var(--bg-callout);
    border: 1px solid var(--border-color);
    border-radius: 10px;
  }
  .mode-btn {
    padding: 0.5rem 1.1rem;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }
  .mode-btn:hover {
    color: var(--text-primary);
  }
  .mode-btn.active {
    background: var(--accent-primary);
    color: #fff;
    box-shadow: 0 2px 8px rgba(38, 208, 124, 0.25);
  }
  .hint {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0;
  }
</style>
