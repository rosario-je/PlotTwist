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
  SELECT stories.*, users.username AS username, users.user_icon AS avatar FROM stories
  JOIN users ON users.id = stories.user_id
  WHERE stories.user_id = $1
  ORDER BY stories.created_date DESC;`, [id])
  .then(data => {
    return data.rows;
  });
};

module.exports = { getUsers, getUserById, getUserStories };
