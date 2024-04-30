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

module.exports = { getUsers, getUserById };
