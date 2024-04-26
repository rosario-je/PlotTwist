const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('stories/index');
}); 

router.get('/:id', (req, res) => {
  const templatevars = {
    title: "Far Away Castle",
    content: "His name was Cedric, a weary adventurer with tales etched into the lines of his weathered face. Seeking shelter from the tempest, Cedric stumbled upon the castle's great oak doors, which creaked open with an eerie groan. Inside, he found himself in a grand hall adorned with tapestries depicting battles of old and chandeliers casting flickering light.",
    username: "Laurel", 
    nextpageid: 'abc123',
  }
  res.render('stories/show', templatevars);
}); 

module.exports = router;