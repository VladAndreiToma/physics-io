const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ message: 'not logged in or user undefined' });
    }

    const db = await connectToPhysicsIO();
    const usersCollection = db.collection('users');
    const foundUser = await usersCollection.findOne({ username });

    if (!foundUser) {
      return res.status(404).json({ message: `no user found in the db for ${username}` });
    }

    const stats = foundUser.problemsStats || {};

    const problemsStatus = {
      total: foundUser.totalProblemsSolved || 0,
      fiveStars: (stats["challenging"] || []).length,
      fourStars: (stats["advanced"] || []).length,
      threeStars: (stats["intermediate"] || []).length,
      oneStar: (stats["introductory"] || []).length,
    };

    return res.json({
      success: true,
      problemsStatus,
    });
  } catch (err) {
    console.error("Error fetching problems stats:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
