<script lang="ts">
  // src/components/interactive/CommentList.svelte
  // Loads approved comments client-side from the standalone comments Worker
  // (nryn.dev/api/*). Replaces the old server:defer Astro island so the list
  // works on the static Pages deploy.
  import { onMount } from 'svelte';

  interface Props {
    post: string;
  }

  interface Comment {
    author_name: string;
    content: string;
    created_at: number;
  }

  let { post }: Props = $props();

  let comments = $state<Comment[]>([]);
  let loading = $state(true);
  let errorMsg = $state<string | null>(null);

  onMount(async () => {
    try {
      const res = await fetch(`/api/comments?post=${encodeURIComponent(post)}`);
      const data = await res.json();
      if (res.ok && data.ok) {
        comments = data.comments ?? [];
      } else {
        errorMsg = data.message ?? 'Failed to load comments.';
      }
    } catch {
      errorMsg = 'Failed to load comments.';
    } finally {
      loading = false;
    }
  });
</script>

<div class="comments-container">
  {#if loading}
    <p class="comments-info-message">Loading comments…</p>
  {:else if errorMsg}
    <p class="comments-info-message">{errorMsg}</p>
  {:else if comments.length === 0}
    <p class="no-comments-message">No comments yet. Be the first to comment!</p>
  {:else}
    <div class="comments-list">
      {#each comments as comment}
        <div class="comment">
          <div class="comment-header">
            <span class="comment-author">{comment.author_name}</span>
            <span class="comment-date">{new Date(comment.created_at).toLocaleDateString()}</span>
          </div>
          <div class="comment-content">{comment.content}</div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .comments-container {
    margin-bottom: 2rem;
  }
  .comments-info-message,
  .no-comments-message {
    font-size: 0.9rem;
    color: var(--text-secondary, #666);
    font-style: italic;
  }
  .comments-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .comment {
    background: var(--bg-callout, #f9f9f9);
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 6px;
    padding: 0.75rem 1rem;
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: var(--text-secondary, #666);
    margin-bottom: 0.35rem;
    font-weight: 500;
  }
  .comment-author {
    color: var(--accent-primary, #007acc);
    font-weight: 600;
  }
  .comment-content {
    font-size: 0.9rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }
</style>
