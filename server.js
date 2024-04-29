// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource

// EXAMPLES

// Note: Feel free to replace the example routes below with your own
//const userApiRoutes = require('./routes/users-api');
//const widgetApiRoutes = require('./routes/widgets-api');
//const usersRoutes = require('./routes/users');

const landingRoute = require('./routes/landing');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register')

const storyRoutes = require('./routes/stories');

const newStoryRoute = require('./routes/new_story');
const userStoriesRoute = require('./routes/user_stories');
const userContributionsRoute = require('./routes/user_contributions');

const userProfileRoute = require('./routes/user_profile')

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

// EXAMPLES

//app.use('/api/users', userApiRoutes);
//app.use('/api/widgets', widgetApiRoutes);
//app.use('/users', usersRoutes);

app.use('/landing', landingRoute)
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/user_profile', userProfileRoute);

app.use('/stories', storyRoutes)
app.use('/new_story', newStoryRoute)
app.use('/user_stories', userStoriesRoute)
app.use('/user_contributions', userContributionsRoute)
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//Default home page view
app.get('/', (req, res) => {
  res.redirect('landing');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
