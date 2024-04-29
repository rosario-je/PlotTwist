const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getStory = () => {
  return db.query(
    'SELECT * FROM stories ORDER BY created_date;')
    .then(data => {
      return data.rows;
    });
}

module.exports = { getUsers };
