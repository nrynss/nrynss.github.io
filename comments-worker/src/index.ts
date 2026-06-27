/**
 * Standalone Cloudflare Worker for blog comments.
 *
 * Served at nryn.dev/api/* via a Worker Route (see wrangler.toml), which takes
 * precedence over the Cloudflare Pages site. The static site (on Pages) talks to
 * this Worker same-origin, so no CORS handling is needed.
 *
 *   GET  /api/comments?post=<slug>  -> approved comments for a post
 *   POST /api/comments              -> submit a comment (stored as pending)
 */

export interface Env {
  DB: D1Database;
}

const JSON_HEADERS = { "Content-Type": "application/json" } as const;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/api/comments") {
      return json({ ok: false, message: "Not found." }, 404);
    }

    switch (request.method) {
      case "GET":
        return handleGet(url, env);
      case "POST":
        return handlePost(request, env);
      default:
        return json({ ok: false, message: "Method not allowed." }, 405);
    }
  },
};

async function handleGet(url: URL, env: Env): Promise<Response> {
  const post = url.searchParams.get("post");
  if (!post) {
    return json({ ok: false, message: "Missing 'post' query parameter." }, 400);
  }

  try {
    const { results } = await env.DB.prepare(
      "SELECT author_name, content, created_at FROM comments WHERE post_slug = ? AND is_approved = 1 ORDER BY created_at ASC"
    )
      .bind(post)
      .all();

    return json({ ok: true, comments: results ?? [] });
  } catch (err) {
    console.error("D1 read error:", err);
    return json({ ok: false, message: "Failed to load comments." }, 500);
  }
}

async function handlePost(request: Request, env: Env): Promise<Response> {
  let body: { post?: string; author?: string; email?: string; text?: string };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid JSON body." }, 400);
  }

  const { post, author, email, text } = body ?? {};
  if (!post || !author || !text) {
    return json({ ok: false, message: "Missing required fields." }, 400);
  }

  try {
    await env.DB.prepare(
      "INSERT INTO comments (post_slug, author_name, author_email, content, is_approved, created_at) VALUES (?, ?, ?, ?, 0, ?)"
    )
      .bind(post, author, email ?? null, text, Date.now())
      .run();

    return json({ ok: true, message: "Comment submitted for moderation." }, 202);
  } catch (err) {
    console.error("D1 write error:", err);
    return json({ ok: false, message: "Server error occurred." }, 500);
  }
}
