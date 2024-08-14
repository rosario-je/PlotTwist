const db = require('../connection');


const addContribution = function (storyID, userId, text) {
  return db.query (
    `INSERT INTO contributions (story_id, user_id, content) VALUES ($1, $2, $3) RETURNING *`,
    [storyID, userId, text]
  )
  .then(data => {
    return data.rows;
  });
}



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
    `SELECT contributions.*, users.username AS username, users.user_icon AS avatar, stories.title AS story_title, stories.id AS story_id FROM contributions
       JOIN users ON users.id = contributions.user_id
       JOIN stories ON stories.id = contributions.story_id
       WHERE stories.user_id = $1
       ORDER BY contributions.submission_date DESC;`, [id])
    .then(data => {
      return data.rows;
    });
}

// Update story status to is_complete = true
// const contributionApproved = (id) => {
//   return db.query(`
//    UPDATE contributions 
//    SET is_approved = true
//    WHERE contributions.id = $1
//    RETURNING *;
//   `, [id])
//   .then(data => {
//     return data.rows;
//   });
// }
const updateContributionValue = (story_id, contribution_id) => {
  return db.query(`
    UPDATE contributions
    SET is_approved = true
    WHERE story_id = $1 AND id = $2
    RETURNING *;
  `, [story_id, contribution_id])
  .then(data => {
    return data.rows;
  });
}

const updateContributionLikes = (contribution_id, upvote_count) => {
  return db.query(`
  UPDATE contributions 
  SET upvote_count = $2
  WHERE contributions.id = $1
  RETURNING *;
  `, [contribution_id, upvote_count])
  .then(data => {
    return data.rows;
  });
};


module.exports = { addContribution, getContributionsByStoryId, getContributionsByUserId, getPendingContributionsByUserId, updateContributionValue, updateContributionLikes  };
