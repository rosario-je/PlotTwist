const express = require('express');
const router  = express.Router();
const { getStories } = require('../db/queries/stories');

router.get('/', (req, res) => {
  getStories()
  .then(results => {
      const stories = results
    res.render('landing', {stories});
  });
}); 

module.exports = router;


