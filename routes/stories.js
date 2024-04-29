const express = require('express');
const router  = express.Router();
const { getStories, getStoryById } = require('../db/queries/stories');
const { getContributionsByStoryId } = require('../db/queries/contributions');

// Route for all stories feed  

router.get('/', (req, res) => {

  getStories()
  .then(stories => {
    const templatevars = {
      stories 
    }
    res.render('stories/index', templatevars);
  });
}); 

// Get path for each story by ID
// Move between each seperate contribution in a story with 'nextpageid', should increment 1, 2, 3, 4
// Temporary hardcoded Templatevars

router.get('/:id', (req, res) => {
  Promise.all ([
    getStoryById(req.params.id),
    getContributionsByStoryId(req.params.id) 
  ])
  .then(results => {
    const [story, contributions] = results
    
  const templatevars = {story, contributions}

  res.render('stories/show', templatevars);
  })
}); 

module.exports = router;