const express = require('express');
const router  = express.Router();
const { getUserById } = require('../../db/queries/users');

router.get('/:id', (req, res) => {
  let id = req.cookies["user_id"]
  const storyId = req.params.id // story id
  getUserById(id)
  .then(result => {
    const user = result[0]
    res.render('stories/add_to_story', {user_id: id, storyId, user});
  })
});

module.exports = router;
