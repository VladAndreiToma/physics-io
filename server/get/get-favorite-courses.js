const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ error: 'username required' });
    }

    const db = await connectToPhysicsIO();
    const usersCollection = db.collection('users');

    const foundUser = await usersCollection.findOne({ username });

    if (!foundUser) {
      return res.status(404).json({ error: 'User inexistent' });
    }

    const visitedCourses = foundUser.visitedCourses || {};

    // Convert visitedCourses object to array, sort descending, take top 5 course names
    const favoriteCourses = Object.entries(visitedCourses)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([course]) => course);

    res.json({ favoriteCourses });

  } catch (err) {
    console.error(`some internal error: ${err}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
