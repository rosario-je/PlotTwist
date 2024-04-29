const db = require('../connection');

const getContributionsByStoryId = (id) => {
    return db.query(
      `SELECT contributions.*, users.username FROM contributions
       JOIN users ON users.id = user_id 
       WHERE contributions.story_id = $1;`, [id])
      .then(data => {
        return data.rows;
      });
  }

module.exports = { getContributionsByStoryId };