const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('new_story');
});

module.exports = router;
