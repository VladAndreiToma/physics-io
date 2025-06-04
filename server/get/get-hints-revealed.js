const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get("/", async (req, res) => {
  const { username } = req.query;
  if (!username) {
    return res.status(400).json({ message: 'Not logged in or username undefined' });
  }

  try {
    const db = await connectToPhysicsIO();
    const usersCollection = db.collection('users');

    const foundUser = await usersCollection.findOne({ username });

    if (!foundUser) {
      return res.status(404).json({ message: `No user found in DB for username: ${username}` });
    }

    const totalHintsRevealed = foundUser.totalHintsRevealed || 0;
    const hintsStats = foundUser.hintsStats || {};

    // Build difficulty counts
    const difficultyCounts = {};
    for (const [difficulty, ids] of Object.entries(hintsStats)) {
      difficultyCounts[difficulty] = ids.length;
    }

    return res.json({
      success: true,
      totalHintsRevealed,
      difficultyCounts
    });

  } catch (err) {
    console.error("Error fetching hint stats:", err);
    return res.status(500).json({ message: "Server error while retrieving hint stats" });
  }
});

module.exports = router;
