const express = require('express');
const cookieParser = require('cookie-parser');
const router  = express.Router();
const { getUserById } = require('../db/queries/users');

//Route for specific logged in user profile
router.get('/', (req, res) => {
  let id = req.cookies["user_id"]
  console.log(id)
  getUserById(id)
  .then(users => {
    let user = users[0];
    const templatevars = {
      user
    }
    res.render('user_profile', templatevars);
  });
}); 

//Route for user contributions
router.get('/contributions', (req, res) => {
  res.render('user_contributions');
}); 

//Route for user stories
router.get('/stories', (req, res) => {
  res.render('user_stories');
}); 

//Route to create a story for logged in user
router.get('/new_story', (req, res) => {
  res.render('new_story');
}); 




module.exports = router;