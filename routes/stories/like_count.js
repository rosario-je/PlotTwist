const express = require('express');
const router = express.Router();
const { updateStoryLikes } = require('../../db/queries/stories');

// Middleware to extract user ID from URL parameters and set it in cookies
router.param('id', (req, res, next, id) => {
  res.cookie('user_id', id);
  next();
});

// Update a like count for a story
router.post('/stories/:story_id/liked', (req, res) => {
  const story_id = req.params.story_id;
  const upvote_count = req.body.upvote_count;
  updateStoryLikes(story_id, upvote_count)
    .then((results) => {
      res.status(201).json(results);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
})

module.exports = router;