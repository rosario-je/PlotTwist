const db = require('../connection');

const getContributionsByStoryId = (id) => {
  return db.query(
    `SELECT contributions.*, users.username, users.user_icon FROM contributions
       JOIN users ON users.id = user_id 
       WHERE contributions.story_id = $1
       ORDER BY contributions.submission_date DESC;`, [id])
    .then(data => {
      return data.rows;
    });
}

const getContributionsByUserId = (id) => {
  return db.query(
    `SELECT contributions.*, users.username AS username, users.user_icon AS avatar, stories.title AS story_title FROM contributions
       JOIN users ON users.id = contributions.user_id 
       JOIN stories ON stories.id = contributions.story_id
       WHERE contributions.user_id = $1
       ORDER BY contributions.submission_date DESC;`, [id])
    .then(data => {
      return data.rows;
    });
}

const getPendingContributionsByUserId = (id) => {
  return db.query(
    `SELECT contributions.*, users.username AS username, users.user_icon AS avatar, stories.title AS story_title FROM contributions
       JOIN users ON users.id = contributions.user_id 
       JOIN stories ON stories.id = contributions.story_id
       WHERE stories.user_id = $1
       ORDER BY contributions.submission_date DESC;`, [id])
    .then(data => {
      return data.rows;
    });
}

module.exports = { getContributionsByStoryId, getContributionsByUserId, getPendingContributionsByUserId };