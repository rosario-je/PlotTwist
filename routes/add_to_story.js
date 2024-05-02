const express = require('express');
const router  = express.Router();

router.get('/:id', (req, res) => {
  let userId = req.cookies["user_id"]
  const storyId = req.params.id // story id
  res.render('add_to_story', {user_id: userId, storyId});
});

module.exports = router;
