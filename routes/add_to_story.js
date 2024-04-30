const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('add_to_story');
});

module.exports = router;
