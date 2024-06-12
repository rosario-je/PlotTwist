const express = require('express');
const router = express.Router();
const { updateStoryLikes } = require('../../db/queries/stories');

// Update a like count for a story in STORY SHOW
router.post('/stories/:story_id', (req, res) => {
  const story_id = req.params.story_id;
  const upvote_count = req.body.upvote_count;
  updateStoryLikes(story_id, upvote_count)
    .then((results) => {
      return res.redirect(`/stories/${story_id}`);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
})

module.exports = router;