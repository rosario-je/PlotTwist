DROP TABLE IF EXISTS stories CASCADE;
CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR (72) NOT NULL,
  content TEXT NOT NULL, 
  created_date DATE,
  is_complete BOOLEAN NOT NULL DEFAULT FALSE,
  upvote_count INTEGER DEFAULT 0
);