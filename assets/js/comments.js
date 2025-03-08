document.addEventListener("DOMContentLoaded", function () {
  // Initialize Supabase client
  const supabaseUrl = "https://zjjuciivklxnwbcougxv.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqanVjaWl2a2x4bndiY291Z3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTMyMTgsImV4cCI6MjA1Njk4OTIxOH0.joBatKD3WtVgOY4YLIJ6LfDWpTC4GrmX93SN4gRHcjI";
  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

  // Get the post slug from the container
  const commentsContainer = document.getElementById("comments-container");
  const postSlug = commentsContainer.dataset.postSlug;

  // Load existing comments
  loadComments(postSlug);

  // Set up form submission
  const commentForm = document.getElementById("comment-form");
  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitComment();
    });
  }

  async function loadComments(slug) {
    try {
      // Query all comments for this post (no moderation filter)
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_slug", slug)
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Remove loading message
      commentsContainer.innerHTML = "";

      if (data.length === 0) {
        commentsContainer.innerHTML =
          "<p>No comments yet. Be the first to comment!</p>";
        return;
      }

      // Display each comment
      data.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
          <div class="comment-header">
            <span class="comment-author">${escapeHtml(comment.author_name)}</span>
            <span class="comment-date">${new Date(comment.created_at).toLocaleDateString()}</span>
          </div>
          <div class="comment-content">${escapeHtml(comment.content)}</div>
        `;
        commentsContainer.appendChild(commentElement);
      });
    } catch (error) {
      console.error("Error loading comments:", error);
      commentsContainer.innerHTML =
        "<p>Error loading comments. Please try again later.</p>";
    }
  }

  async function submitComment() {
    const authorName = document.getElementById("author-name").value;
    const authorEmail = document.getElementById("author-email").value;
    const content = document.getElementById("comment-content").value;
    const notification = document.getElementById("comment-notification");

    if (!authorName || !content) {
      notification.textContent = "Please fill in all required fields.";
      notification.className = "error";
      return;
    }

    try {
      // Insert the new comment
      const { error } = await supabase.from("comments").insert([
        {
          post_slug: postSlug,
          author_name: authorName,
          author_email: authorEmail,
          content: content,
          // By default is_approved is false until moderation
        },
      ]);

      if (error) throw error;

      // Clear the form
      document.getElementById("author-name").value = "";
      document.getElementById("author-email").value = "";
      document.getElementById("comment-content").value = "";

      // Show success message
      notification.textContent = "Thank you for your comment!";
      notification.className = "success";

      // Reload comments to show the new one
      loadComments(postSlug);

      // Clear notification after 5 seconds
      setTimeout(() => {
        notification.textContent = "";
        notification.className = "";
      }, 5000);
    } catch (error) {
      console.error("Error submitting comment:", error);
      notification.textContent =
        "Error submitting your comment. Please try again later.";
      notification.className = "error";
    }
  }

  // Helper function to escape HTML
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
