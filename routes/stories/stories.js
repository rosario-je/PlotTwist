const express = require('express');
const router = express.Router();
const { getStories, getStoryById } = require('../../db/queries/stories');
const { getContributionsByStoryId, addContribution } = require('../../db/queries/contributions');
const { addStory } = require('../../db/queries/stories');
const { getUserById } = require('../../db/queries/users');

// Route for all stories feed

router.get('/', (req, res) => {
  let id = req.cookies["user_id"];
  Promise.all([
    getStories(),
    getUserById(id)
  ])
    .then(results => {
      const [stories, userInfo] = results;
      const user = userInfo[0]
      res.render('stories/index', { stories, user_id: id , user});
    });
});

// Story post rending

router.get("/real-time", (req, res) => {
  let user_id = req.cookies["user_id"];
  const id = Number(req.query.id);
  getStoryById(id)
    .then((show) => {
      const templatevars = { story: show, contributions: [], user_id };
      return res.render('stories/show', templatevars);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Route for each story by ID with contributions

router.get('/:id', (req, res) => {
  let id = req.cookies["user_id"];
  Promise.all([
    getStoryById(req.params.id),
    getContributionsByStoryId(req.params.id),
    getUserById(id)
  ])
    .then(results => {
      const [story, contributions, userInfo] = results;
      const user = userInfo[0]
      return res.render('stories/show', { story, contributions, user_id: id, user });
    });
});


// Route for posting a new story

router.post('/', (req, res) => {
  let id = req.cookies["user_id"];
  addStory(req.body, id)
    .then(data => {
      const id = data.id;
      return res.redirect(`/stories/${id}`);
    });
});

// Route for contributing to a story

router.post('/contribute/:id', (req, res) => {
  let userId = req.cookies["user_id"];
  const storyId = req.params.id;
  const text = req.body.text;
  addContribution(storyId, userId, text)
    .then(data => {
      return res.redirect(`/stories/${storyId}`);
    });

});

module.exports = router;
