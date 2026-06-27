-- schema.sql
-- Create comments table for Cloudflare D1 SQLite database

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_approved INTEGER DEFAULT 0 -- 0 = pending, 1 = approved
);

-- Index for fast retrieval of approved comments per post
CREATE INDEX IF NOT EXISTS idx_comments_post_approved 
ON comments (post_slug, is_approved);
