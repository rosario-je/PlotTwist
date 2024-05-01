const db = require('../connection');

const getContributionsByStoryId = (id) => {
  return db.query(
    `SELECT contributions.*, users.username, users.user_icon FROM contributions
       JOIN users ON users.id = user_id 
       WHERE contributions.story_id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
}
const getContributionsByUserId = (id) => {
  return db.query(
    `SELECT contributions.*, users.username AS username, stories.title AS story_title FROM contributions
       JOIN users ON users.id = user_id 
       JOIN stories ON stories.user_id = users.id
       WHERE contributions.user_id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
}

module.exports = { getContributionsByStoryId, getContributionsByUserId };