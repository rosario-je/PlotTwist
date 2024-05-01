const db = require('../connection');

// CRUD 

// Read All stories
const getStories = () => {
  return db.query(
    `SELECT *, stories.id as story_id FROM stories
     JOIN users ON users.id = user_id
     ORDER BY stories.created_date DESC;`)
    .then(data => {
      return data.rows;
    });
}
// Read One story
const getStoryById = (id) => {
  return db.query(
    `SELECT stories.*, users.username, users.user_icon FROM stories
     JOIN users ON users.id = user_id 
     WHERE stories.id = $1;`, [id])
    .then(data => {
      return data.rows[0];
    });
}
// Read 3 recent stories
const getRecentStories = () => {
  return db.query(
  `SELECT stories.*, users.username, users.user_icon FROM stories
  JOIN users ON users.id = user_id
  ORDER BY stories.created_date DESC
  LIMIT 3;`)
  .then(data => {
    return data.rows;
  });
}

// Update story status to is_complete = true
const markStoryComplete = (story_id, user_id) => {
  return db.query(`
   UPDATE stories 
   SET is_complete = true
   WHERE stories.id = $1 AND stories.user_id = $2
   RETURNING *;
  `, [story_id, user_id])
  .then(data => {
    return data.rows;
  });
}


module.exports = { getStories, getStoryById, getRecentStories, markStoryComplete };