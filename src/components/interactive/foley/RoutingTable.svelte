<script lang="ts">
  // src/components/interactive/foley/RoutingTable.svelte
  // Per-event category badge derived from the keyword->category map ported
  // from routing.yaml. Shows model/endpoint per category.

  import { classify, endpointShort, DEFAULT_CATEGORY } from '../../../lib/foley/routing';

  interface FoleyEvent {
    name: string;
    start_time: number;
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
  }

  let { timeline }: Props = $props();

  // Ambience always routes to the ambience category (it is the room-tone bed).
  const ambienceCat = { name: 'ambience', endpoint: 'cassetteai/sound-effects-generator', model: 'CassetteAI SFX' };

  const rows = $derived(
    (timeline.events || []).map((ev) => {
      const cat = classify(ev.name);
      return { name: ev.name, category: cat.name, endpoint: cat.endpoint, model: cat.model };
    })
  );
</script>

<div class="routing">
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Category</th>
        <th>Model / endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ambience-row">
        <td><strong>Ambience:</strong> {timeline.ambience}</td>
        <td><span class="cat-badge cat-ambience">{ambienceCat.name}</span></td>
        <td>
          <span class="model">{ambienceCat.model}</span>
          <span class="endpoint">{endpointShort(ambienceCat.endpoint)}</span>
        </td>
      </tr>
      {#each rows as row}
        <tr>
          <td>{row.name}</td>
          <td><span class={`cat-badge cat-${row.category}`}>{row.category}</span></td>
          <td>
            <span class="model">{row.model}</span>
            <span class="endpoint">{endpointShort(row.endpoint)}</span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <p class="note">
    Routing is a deterministic keyword match on each event name (ported from the
    pipeline's <code>routing.yaml</code>) — the same decision the CLI makes
    before it calls each model.
  </p>
</div>

<style>
  .routing {
    overflow-x: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem 0.7rem;
    border-bottom: 1px solid var(--border-color);
    vertical-align: middle;
  }
  th {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-muted);
    font-weight: 700;
  }
  td {
    color: var(--text-secondary);
  }
  .ambience-row td {
    background: color-mix(in srgb, var(--accent-blue), transparent 92%);
  }
  .cat-badge {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    white-space: nowrap;
  }
  .cat-ambience {
    background: color-mix(in srgb, var(--accent-blue), transparent 80%);
    color: var(--accent-blue);
  }
  .cat-footsteps {
    background: rgba(139, 92, 246, 0.16);
    color: #a78bfa;
  }
  .cat-door_creak {
    background: rgba(245, 158, 11, 0.16);
    color: #d97706;
  }
  .cat-impact_strike {
    background: rgba(248, 113, 113, 0.16);
    color: #dc2626;
  }
  .cat-default {
    background: var(--bg-callout);
    color: var(--text-muted);
  }
  .model {
    font-weight: 600;
    color: var(--text-primary);
  }
  .endpoint {
    display: block;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: var(--text-muted);
  }
  .note {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin: 0.75rem 0 0;
  }
  .note code {
    font-size: 0.72rem;
    padding: 0.05em 0.3em;
  }
</style>
