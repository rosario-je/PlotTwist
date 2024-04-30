DROP TABLE IF EXISTS contributions CASCADE;
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  story_id INTEGER REFERENCES stories(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT FALSE,
  submission_date DATE,
  upvote_count INTEGER DEFAULT 0
);