const express = require('express');
const router  = express.Router();

app.post('/logout', (req, res) => {
  //Clear any cookies when logged out
  req.session = null;
  return res.redirect('/main_page/landing');
}); 

module.exports = router;
