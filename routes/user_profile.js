const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const { getUserById, getUserStories } = require('../db/queries/users');
const { getContributionsByUserId, getPendingContributionsByUserId } = require('../db/queries/contributions');
const { getRecentStories, markStoryComplete, getStoryByStatus } = require('../db/queries/stories');


// Middleware to extract user ID from URL parameters and set it in cookies
router.param('id', (req, res, next, id) => {
  res.cookie('user_id', id);
  next();
});

// Main user page (default view)

router.get('/:id', (req, res) => {
  const id = req.cookies["user_id"];
  Promise.all([
    getUserById(id),
    getRecentStories()
  ])
    .then(results => {
      const user = results[0][0];
      const stories = results[1];
      res.render('user_profile', { user, stories, user_id: id });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Route for user contributions
router.get('/:id/contributions', (req, res) => {
  let id = req.params.id;
  Promise.all([ getUserById(id), getContributionsByUserId(id)])
    .then(([userResults, contributions]) => {  
      const user = userResults[0];    
      res.render('user_contributions', { user_id: id, listOfContributions: contributions, user });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
}); 

// Route for filtered contributions on user story for approval/rejection 
router.get('/:id/pending', (req, res) => {
  let id = req.params.id;
  Promise.all([getPendingContributionsByUserId(id), getUserById(id)])
    .then(([contributions, userResults]) => {   
      const user = userResults[0];
      res.render('pending_adds', { user_id: id, pendingList: contributions, user });
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

// Route for user stories marked complete
router.get('/:id/complete', (req, res) => {
  let id = req.params.id;
  Promise.all([getStoryByStatus(id), getUserById(id)])
    .then(([stories, userResults]) => {   
      console.log(stories);
      const user = userResults[0];
      res.render('user_complete_story', { user_id: id, completeStories: stories, user });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
}); 

// Mark a story as completed (is_complete = true)
router.post('/:id/stories/:story_id/completed', (req, res) => {
  const user_id = req.params.id;
  const story_id = req.params.story_id;
  console.log(user_id, story_id);
  markStoryComplete(story_id, user_id)
  .then((results)=> {
    res.status(201).json(results);
  })
  .catch(error => {
    res.status(500).send(error.message);
  });
})

// Route to create a story for logged-in user
router.get('/:id/new_story', (req, res) => {
  const id = req.params.id;
  getUserById(id)
    .then(users => {
      const user = users[0];
      res.render('new_story', { user_id: id, user });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
