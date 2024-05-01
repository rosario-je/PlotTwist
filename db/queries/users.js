const db = require('../connection');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then(data => {
      return data.rows;
    });
};

const getUserById = (id) => {
  return db.query(`
  SELECT * FROM users
  WHERE users.id = $1;`, [id])
  .then(data => {
    return data.rows;
  });
};

const getUserStories = (id) => {
  return db.query(`
  SELECT users.*, users.id as current_user, stories.*, stories.id as user_story
  FROM users
  JOIN stories ON stories.user_id = users.id
  WHERE stories.user_id = $1
  ORDER BY stories.created_date DESC;`, [id])
  .then(data => {
    return data.rows;
  });
};

module.exports = { getUsers, getUserById, getUserStories };
