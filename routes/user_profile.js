const express = require('express');
const cookieParser = require('cookie-parser');
const router  = express.Router();
const { getUserById, getUserStories } = require('../db/queries/users');
const { getContributionsByUserId } = require('../db/queries/contributions');


// Middleware to extract user ID from URL parameters and set it in cookies
router.param('id', (req, res, next, id) => {
  res.cookie('user_id', id);
  next();
});

const { getRecentStories } = require('../db/queries/stories');

router.get('/:id', (req, res) => {
  let id = req.cookies["user_id"]
  Promise.all ([
    getUserById(id),
    getRecentStories() 
  ])
  .then(results => {
    const user = results[0][0];
    const stories = results[1];
  res.render('user_profile', {user, stories, user_id: id});
  })
}); 

// Route for user contributions
router.get('/:id/contributions', (req, res) => {
  let id = req.params.id;
  Promise.all([getContributionsByUserId(id), getUserById(id)])
    .then(([contributions, user]) => {      
      res.render('user_contributions', { user_id: id, listOfContributions: contributions, user });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
}); 

// Route for user stories
router.get('/:id/stories', (req, res) => {
  let id = req.params.id;
  Promise.all([getUserStories(id), getUserById(id)])
    .then(([stories, userResults]) => {   
      const user = userResults[0];
      res.render('user_stories', { user_id: id, listOfStories: stories, user });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
}); 

// Route to create a story for logged in user
router.get('/:id/new_story', (req, res) => {
  let id = req.params.id;
  getUserById(id)
    .then(users => {
      let user = users[0];
      res.render('new_story', { user_id: id, user });
    });
}); 

module.exports = router;
