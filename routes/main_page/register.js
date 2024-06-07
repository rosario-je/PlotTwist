const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('main_page/register');
}); 

module.exports = router;