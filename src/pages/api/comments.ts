export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals, request }) => {
  try {
    const body = await request.json();
    const { post, author, email, text } = body;

    if (!post || !author || !text) {
      return new Response(
        JSON.stringify({ ok: false, message: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let db;
    try {
      const cf = await import('cloudflare:workers');
      db = cf.env.DB;
    } catch {
      db = locals.runtime?.env?.DB;
    }

    if (db) {
      // 1. Insert into Cloudflare D1 with status = pending (is_approved = 0)
      await db.prepare(
        'INSERT INTO comments (post_slug, author_name, author_email, content, is_approved, created_at) VALUES (?, ?, ?, ?, 0, ?)'
      ).bind(post, author, email, text, Date.now()).run();
      
      return new Response(
        JSON.stringify({ ok: true, message: "Comment submitted for moderation." }),
        { status: 202, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Local dev fallback when D1 is not bound or running
      console.log("[Local Dev Mock D1 Write]:", { post, author, email, text });
      return new Response(
        JSON.stringify({ 
          ok: true, 
          message: "Local dev mode: Comment received (mock D1 success)." 
        }),
        { status: 202, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (err: any) {
    console.error("Error in comments API:", err);
    return new Response(
      JSON.stringify({ ok: false, message: "Server error occurred." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
