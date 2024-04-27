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
    // nextpageid should be the id of the next contribution in the database of this story

// Temporary hard coded contributions to be changed
    contributions: [
      {
        content: "His name was Cedric, a weary adventurer with tales etched into the lines of his weathered face. Seeking shelter from the tempest, Cedric stumbled upon the castle's great oak doors, which creaked open with an eerie groan. Inside, he found himself in a grand hall adorned with tapestries depicting battles of old and chandeliers casting flickering light. But as Cedric ventured deeper into the castle's labyrinthine corridors, he discovered secrets hidden within its walls.",
        username: "Laurel"
      },
      {
        content: "His name was Cedric, a weary adventurer with tales etched into the lines of his weathered face. Seeking shelter from the tempest, Cedric stumbled upon the castle's great oak doors, which creaked open with an eerie groan. Inside, he found himself in a grand hall adorned with tapestries depicting battles of old and chandeliers casting flickering light. But as Cedric ventured deeper into the castle's labyrinthine corridors, he discovered secrets hidden within its walls.",
        username: "Dexter"
      }
    ]
  }
  res.render('stories/show', templatevars);
}); 

module.exports = router;