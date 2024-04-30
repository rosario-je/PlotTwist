const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('user_profile');
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