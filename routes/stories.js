const express = require('express');
const router  = express.Router();
const { getStories, getStoryById } = require('../db/queries/stories');
const { getContributionsByStoryId } = require('../db/queries/contributions');

// Route for all stories feed  

router.get('/', (req, res) => {
  let id = req.cookies["user_id"]
  getStories()
  .then(results => {
      const stories = results   
    res.render('stories/index', {stories, user_id: id});
  });
}); 

// Route for each story by ID with contributions

router.get('/:id', (req, res) => {
  let id = req.cookies["user_id"]
  Promise.all ([
    getStoryById(req.params.id),
    getContributionsByStoryId(req.params.id) 
  ])
  .then(results => {
    const [story, contributions] = results

  const templatevars = {story, contributions, user_id: id}

  res.render('stories/show', templatevars);
  })
}); 

module.exports = router;