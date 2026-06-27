// Immediately wrap everything in a function that checks if the comments container exists
(function () {
  // Only run if we're on a page with comments
  if (!document.getElementById("comments-container")) {
    return; // Exit immediately if comments container doesn't exist
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Check if elements exist
    const commentsContainer = document.getElementById("comments-container");
    if (!commentsContainer) {
      return; // Exit if we can't find the container
    }

    // Initialize Supabase client
    try {
      const supabaseUrl = "https://zjjuciivklxnwbcougxv.supabase.co";
      const supabaseKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqanVjaWl2a2x4bndiY291Z3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTMyMTgsImV4cCI6MjA1Njk4OTIxOH0.joBatKD3WtVgOY4YLIJ6LfDWpTC4GrmX93SN4gRHcjI";

      // The correct way to initialize the Supabase client
      const supabaseClient = window.supabase.createClient(
        supabaseUrl,
        supabaseKey,
      );

      // Get the post slug
      const postSlug =
        commentsContainer.dataset.postSlug ||
        window.location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          .replace(".html", "");

      // Load existing comments
      loadComments(supabaseClient, postSlug);

      // Set up form submission
      const commentForm = document.getElementById("comment-form");
      if (commentForm) {
        commentForm.addEventListener("submit", function (e) {
          e.preventDefault();
          submitComment(supabaseClient, postSlug);
        });
      }
    } catch (error) {
      commentsContainer.innerHTML =
        "<p>Error initializing comments. Please try again later.</p>";
    }

    async function loadComments(supabaseClient, slug) {
      try {
        // Query all comments for this post
        const { data, error } = await supabaseClient
          .from("comments")
          .select("*")
          .eq("post_slug", slug)
          .eq("is_approved", true) // Only show approved comments
          .order("created_at", { ascending: true });

        if (error) {
          throw error;
        }

        // Remove loading message
        commentsContainer.innerHTML = "";

        if (!data || data.length === 0) {
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
        commentsContainer.innerHTML =
          "<p>Error loading comments. Please try again later.</p>";
      }
    }

    async function submitComment(supabaseClient, postSlug) {
      const authorName = document.getElementById("author-name").value;
      const authorEmail = document.getElementById("author-email").value;
      const content = document.getElementById("comment-content").value;
      const notification = document.getElementById("comment-notification");

      if (!authorName || !content) {
        if (notification) {
          notification.textContent = "Please fill in all required fields.";
          notification.className = "error";
        }
        return;
      }

      try {
        // Insert the new comment
        const { data, error } = await supabaseClient.from("comments").insert([
          {
            post_slug: postSlug,
            author_name: authorName,
            author_email: authorEmail,
            content: content,
            is_approved: true, // Comments need approval before showing
          },
        ]);

        if (error) {
          throw error;
        }

        // Clear the form
        document.getElementById("author-name").value = "";
        document.getElementById("author-email").value = "";
        document.getElementById("comment-content").value = "";

        // Show success message
        if (notification) {
          notification.textContent =
            "Thank you for your comment! It will appear after moderation.";
          notification.className = "success";

          // Clear notification after 5 seconds
          setTimeout(() => {
            notification.textContent = "";
            notification.className = "";
          }, 5000);
        }

        // Reload comments to show the new one
        loadComments(supabaseClient, postSlug);
      } catch (error) {
        if (notification) {
          notification.textContent =
            "Error submitting your comment. Please try again later.";
          notification.className = "error";
        }
      }
    }

    // Helper function to escape HTML
    function escapeHtml(unsafe) {
      if (!unsafe) return "";
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
  });
})();
