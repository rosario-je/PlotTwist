/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// const express = require('express');
// const router = express.Router();
// const userQueries = require('../db/queries/users');

// // Users CRUD REST API 
// // create - post /
// router.post('/', (req, res) => {
//   res.status(201).json({ message: "User Created" });
// });

// // read all - get / 
// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// // read one - get /:id
// router.get('/:id', (req, res) => {
//   res.json({ message: "User found" });
// });

// // update - post /:id/update
// router.post('/:id/update', (req, res) => {
//   res.json({ message: "User Updated" });
// });

// // delete - post /:id/delete
// router.post('/:id/delete', (req, res) => {
//   res.status(204).json();
// });

// module.exports = router;
