const express = require('express');
const router  = express.Router();

// Temp route for story homepage/landing 2
// May not need this 
router.get('/', (req, res) => {
  res.render('stories/index');
}); 

// Get path for each story by ID
// Move between each seperate contribution in a story with 'nextpageid', should increment 1, 2, 3, 4
// Temporary hardcoded Templatevars

router.get('/:id', (req, res) => {
  const templatevars = {
    id: req.params.id,
    title: "Far Away Castle",
    content: "Far away, nestled in the misty hills, stood the grand Far Away Castle. Its towering spires pierced the clouds, casting long shadows over the lush valleys below. Legends whispered tales of the castle's enchantments, of brave knights and fair maidens, and of mysteries waiting to be unraveled. One stormy night, as lightning danced across the sky and thunder echoed through the ancient halls, a lone traveler sought refuge within the castle's formidable walls.",
    username: "Levi", 
    nextpageid: 'abc123',
    
// Temporary hard coded contributions to be changed
    contributions: [
      {
        content: "Text here",
        username: "User"
      },
      {
        content: "New text here",
        username: "User 2"
      },
      {
        content: "New text here",
        username: "User 3"
      }
    ]
  }
  res.render('stories/show', templatevars);
}); 

module.exports = router;