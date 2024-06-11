const express = require('express');
const router = express.Router();
const { updateStoryLikes } = require('../../db/queries/stories');

// Middleware to extract user ID from URL parameters and set it in cookies
router.param('id', (req, res, next, id) => {
  res.cookie('user_id', id);
  next();
});

// Update a like count for a story
router.post(':id/stories/:story_id', (req, res) => {
  let id = req.params.id;
  const story_id = req.params.story_id;
  const upvote_count = req.body.upvote_count;
  console.log("ROUTER", story_id, upvote_count);
  updateStoryLikes(story_id, upvote_count)
    .then((results) => {
      return res.redirect(`/stories/${story_id}`, {  user_id: id });
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
})

module.exports = router;