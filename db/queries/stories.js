const db = require('../connection');

// CRUD 

// Create
// Read All stories
const getStories = () => {
  return db.query(
    `SELECT *, stories.id as story_id FROM stories
     JOIN users ON users.id = user_id;`)
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

// Update story


module.exports = { getStories, getStoryById, getRecentStories };