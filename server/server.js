const express = require('express');
const cors = require('cors');
const { connectToPhysicsIO } = require('./mongoClientAgents/agentToCreateMongoClient');

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use(cors());
app.use(express.json());

// Import your routes
const loginRoute = require('./login/login');
const registerRoute = require('./register/register');
const visitedCoursesRoute = require('./course_visitation/visited-courses');
const activityRoute = require('./login/login-streak');
const favCoursesRoute = require('./get/get-favorite-courses');
const problemStatsSetRoute = require('./problems_metrics/problems-statistics');
const seenSolutionsRoute = require('./problems_metrics/problems-solutions-revealed');
const seenHintsStats = require('./problems_metrics/problems-hints-revealed');
const getUserProblemStatus = require('./get/get-user-problems');
const submittedSolutionsRoute = require('./problems_metrics/solutions-submitted');
const getUserSubmittedRoute = require('./get/get-problems-submitted');
const getHintsRevealedRoute = require('./get/get-hints-revealed');
const getSeenProblems = require('./get/get-complete-solutions-revealed');
const routeForGetProblemsFromDB = require('./get/get_problems_from_database');

// Mount routes
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/visited-courses', visitedCoursesRoute);
app.use('/login-streak', activityRoute);
app.use('/get-favorite-courses', favCoursesRoute);
app.use('/problems-statistics', problemStatsSetRoute);
app.use('/problems-solutions-revealed', seenSolutionsRoute);
app.use('/problems-hints-revealed', seenHintsStats);
app.use('/get-user-problems', getUserProblemStatus);
app.use('/solutions-submitted', submittedSolutionsRoute);
app.use('/get-problems-submitted', getUserSubmittedRoute);
app.use('/get-hints-revealed', getHintsRevealedRoute);
app.use('/get-complete-solutions-revealed', getSeenProblems);
app.use('/', routeForGetProblemsFromDB);

// Start server after DB is connected
async function startServer() {
  try {
    await connectToPhysicsIO();
    console.log('Database connected, starting server...');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });0
  } catch (err) {
    console.error('Failed to connect to DB', err);
    process.exit(1);
  }
}

startServer();
