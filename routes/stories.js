const express = require('express');
const router  = express.Router();
const { getStories, getStoryById } = require('../db/queries/stories');
const { getContributionsByStoryId } = require('../db/queries/contributions');
const { addStory } = require('../db/queries/stories');

// Route for all stories feed

router.get('/', (req, res) => {
  let id = req.cookies["user_id"]
  getStories()
  .then(results => {
      const stories = results
    res.render('stories/index', {stories, user_id: id});
  });
});


// Story post rending

router.get("/real-time", (req, res) => {
  let user_id = req.cookies["user_id"]
const id = Number(req.query.id)
  getStoryById(id)
    .then((show) => {
      const templatevars = {story: show, contributions: [], user_id}
      return res.render('stories/show', templatevars );
})
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Route for each story by ID with contributions

router.get('/:id', (req, res) => {
  let id = req.cookies["user_id"]
  Promise.all ([
    getStoryById(req.params.id),
    getContributionsByStoryId(req.params.id)
  ])
  .then(results => {
    const [story, contributions] = results

  const templatevars = {story, contributions, user_id: id}

  res.render('stories/show', templatevars);
  })
});


// Route for posting a new story

router.post('/', (req, res) => {
  let id = req.cookies["user_id"]
  addStory(req.body, id)
  .then(data => {
    const id = data.id
    res.redirect(`/stories/real-time?id=${id}`);
  })
})


module.exports = router;
