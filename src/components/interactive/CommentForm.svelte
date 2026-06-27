<script lang="ts">
  // src/components/interactive/CommentForm.svelte
  interface Props {
    post: string;
  }

  let { post }: Props = $props();

  let authorName = $state("");
  let authorEmail = $state("");
  let content = $state("");
  let statusMessage = $state("");
  let statusClass = $state("");
  let isSubmitting = $state(false);

  async function submitComment(e: Event) {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) {
      statusMessage = "Please fill in all required fields.";
      statusClass = "error";
      return;
    }

    isSubmitting = true;
    statusMessage = "";

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: post,
          author: authorName,
          email: authorEmail,
          text: content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        statusMessage = "Thank you! Your comment has been submitted for moderation.";
        statusClass = "success";
        // Reset form
        authorName = "";
        authorEmail = "";
        content = "";
      } else {
        statusMessage = data.message || "Failed to submit comment. Please try again.";
        statusClass = "error";
      }
    } catch (err) {
      statusMessage = "Network error. Please try again later.";
      statusClass = "error";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="comment-form-container">
  <h4>Leave a comment</h4>
  <form onsubmit={submitComment} class="comment-form">
    <div class="form-group">
      <label for="author-name">Name *</label>
      <input type="text" id="author-name" bind:value={authorName} required disabled={isSubmitting} />
    </div>

    <div class="form-group">
      <label for="author-email">Email (optional, not displayed)</label>
      <input type="email" id="author-email" bind:value={authorEmail} disabled={isSubmitting} />
    </div>

    <div class="form-group">
      <label for="comment-content">Comment *</label>
      <textarea id="comment-content" rows="4" bind:value={content} required disabled={isSubmitting}></textarea>
    </div>

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit Comment"}
    </button>
  </form>

  {#if statusMessage}
    <div class="comment-notification {statusClass}">
      {statusMessage}
    </div>
  {/if}
</div>

<style>
  .comment-form-container {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--border-color, #e0e0e0);
  }
  .comment-form-container h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  .comment-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .form-group label {
    font-size: 0.85rem;
    font-weight: 500;
  }
  .form-group input,
  .form-group textarea {
    padding: 0.5rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.9rem;
    background: var(--bg-card);
    color: var(--text-primary, #333);
  }
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--accent-primary, #007acc);
  }
  button {
    align-self: flex-start;
    padding: 0.5rem 1.25rem;
    background: var(--accent-primary, #007acc);
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  button:hover:not(:disabled) {
    background: var(--accent-secondary, #005999);
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .comment-notification {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  .comment-notification.success {
    background: rgba(46, 117, 89, 0.1);
    color: #2e7559;
    border: 1px solid rgba(46, 117, 89, 0.2);
  }
  .comment-notification.error {
    background: rgba(186, 45, 50, 0.1);
    color: #ba2d32;
    border: 1px solid rgba(186, 45, 50, 0.2);
  }
</style>
