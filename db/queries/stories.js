const db = require('../connection');

// CRUD 
// Create
// Read All stories
const getStories = () => {
  return db.query(
    `SELECT * FROM stories
     JOIN users ON users.id = user_id;`)
    .then(data => {
      return data.rows;
    });
}
// Read One story
// Update story
// Delete story

module.exports = { getStories };