const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log("executing the hints service");

  const { username, id, difficulty } = req.body;

  if (!username) return res.json({ message: "You're not logged in" });
  if (!id || !difficulty) return res.json({ message: "Missing params" });

  try {
    const db = await connectToPhysicsIO();
    const usersCollection = db.collection('users');

    const foundUser = await usersCollection.findOne({ username });
    if (!foundUser) return res.json({ message: "User not found in the db" });

    const currentHints = foundUser.hintsStats?.[difficulty] || [];

    // Add the hint ID only if it's not already recorded
    const updatedHintsArray = currentHints.includes(id)
      ? currentHints
      : [...currentHints, id];

    const updateObject = {
      [`hintsStats.${difficulty}`]: updatedHintsArray,
      totalHintsRevealed: (foundUser.totalHintsRevealed || 0) + 1
    };

    await usersCollection.updateOne(
      { username },
      { $set: updateObject }
    );

    return res.json({ message: 'hints stats updated' });
  } catch (err) {
    console.error('Error updating hints stats:', err);
    return res.status(500).json({ message: 'error in updating the hints stats' });
  }
});

module.exports = router;
