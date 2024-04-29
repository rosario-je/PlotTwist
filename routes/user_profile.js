const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('user_profile');
}); 

module.exports = router;