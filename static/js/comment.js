// Immediately wrap everything in a function that checks if the comments container exists
(function () {
  // Only run if we're on a page with comments
  if (!document.getElementById("comments-container")) {
    return; // Exit immediately if comments container doesn't exist
  }

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded, comment.js script running");

    // Check if elements exist
    const commentsContainer = document.getElementById("comments-container");
    if (!commentsContainer) {
      console.error(
        "Comments container NOT found - this will prevent comments from loading",
      );
      return; // Exit if we can't find the container
    }

    // Initialize Supabase client
    try {
      console.log("Initializing Supabase client");
      const supabaseUrl = "https://zjjuciivklxnwbcougxv.supabase.co";
      const supabaseKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqanVjaWl2a2x4bndiY291Z3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTMyMTgsImV4cCI6MjA1Njk4OTIxOH0.joBatKD3WtVgOY4YLIJ6LfDWpTC4GrmX93SN4gRHcjI";

      console.log("Using Supabase URL:", supabaseUrl);
      console.log("Supabase key provided:", supabaseKey ? "Yes" : "No");

      // The correct way to initialize the Supabase client
      const supabaseClient = window.supabase.createClient(
        supabaseUrl,
        supabaseKey,
      );
      console.log("Supabase client created successfully");

      // Get the post slug
      const postSlug =
        commentsContainer.dataset.postSlug ||
        window.location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          .replace(".html", "");
      console.log("Post slug detected:", postSlug);

      // Load existing comments
      loadComments(supabaseClient, postSlug);

      // Set up form submission
      const commentForm = document.getElementById("comment-form");
      if (commentForm) {
        console.log("Comment form found and event listener attached");
        commentForm.addEventListener("submit", function (e) {
          e.preventDefault();
          submitComment(supabaseClient, postSlug);
        });
      } else {
        console.error(
          "Comment form NOT found - users won't be able to submit comments",
        );
      }
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error);
      commentsContainer.innerHTML =
        "<p>Error initializing comments. Please try again later.</p>";
    }

    async function loadComments(supabaseClient, slug) {
      console.log("Loading comments for slug:", slug);
      try {
        // Query all comments for this post
        console.log("Sending request to Supabase for comments");
        const { data, error } = await supabaseClient
          .from("comments")
          .select("*")
          .eq("post_slug", slug)
          .eq("is_approved", true) // Only show approved comments
          .order("created_at", { ascending: true });

        if (error) {
          console.error("Supabase error when loading comments:", error);
          throw error;
        }

        console.log(
          "Comments loaded successfully:",
          data ? `${data.length} comments found` : "No data returned",
        );

        // Remove loading message
        commentsContainer.innerHTML = "";

        if (!data || data.length === 0) {
          console.log("No comments to display");
          commentsContainer.innerHTML =
            "<p>No comments yet. Be the first to comment!</p>";
          return;
        }

        // Display each comment
        console.log("Rendering comments to DOM");
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
        console.log("Comments rendered successfully");
      } catch (error) {
        console.error("Error loading comments:", error);
        commentsContainer.innerHTML =
          "<p>Error loading comments. Please try again later.</p>";
      }
    }

    async function submitComment(supabaseClient, postSlug) {
      console.log("Submit comment function called");

      const authorName = document.getElementById("author-name").value;
      const authorEmail = document.getElementById("author-email").value;
      const content = document.getElementById("comment-content").value;
      const notification = document.getElementById("comment-notification");

      if (!notification) {
        console.error("Notification element not found");
      }

      if (!authorName || !content) {
        console.log("Validation failed: missing required fields");
        if (notification) {
          notification.textContent = "Please fill in all required fields.";
          notification.className = "error";
        }
        return;
      }

      console.log("Preparing to submit comment:", {
        post_slug: postSlug,
        author_name: authorName,
        author_email: authorEmail,
        content: content.substring(0, 20) + "...", // Log just the beginning for privacy
      });

      try {
        // Insert the new comment
        console.log("Sending insert request to Supabase");
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
          console.error("Supabase insert error:", error);
          throw error;
        }

        console.log(
          "Comment submitted successfully:",
          data ? "Data returned" : "No data returned",
        );

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
        console.log("Reloading comments to show the new comment");
        loadComments(supabaseClient, postSlug);
      } catch (error) {
        console.error("Error submitting comment:", error);
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
