// const express = require('express');
// const router = express.Router();
// const { updateStoryLikes } = require('../../db/queries/stories');
// const { updateContributionLikes } = require('../../db/queries/contributions');

// // Update a like count
// router.post('/', (req, res) => {
//   const { type, id, upvote_count } = req.body;
//   console.log('Request body:', req.body);

//   if (type === 'story') {
//     updateStoryLikes(id, upvote_count)
//       .then(() => res.status(200).send('Story like count updated'))
//       .catch(error => res.status(500).send(error.message));
//   } else if (type === 'contribution') {
//     updateContributionLikes(id, upvote_count)
//       .then(() => res.status(200).send('Contribution like count updated'))
//       .catch(error => res.status(500).send(error.message));
//   } else {
//     res.status(400).send('Invalid type');
//   }
// });

// module.exports = router;