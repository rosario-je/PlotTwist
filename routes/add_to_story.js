const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  let id = req.cookies["user_id"]
  res.render('add_to_story', {user_id: id});
});

module.exports = router;
