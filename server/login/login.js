const express = require("express");
const bcrypt = require("bcrypt");
const { connectToPhysicsIO, getDb } = require("../mongoClientAgents/agentToCreateMongoClient");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    await connectToPhysicsIO();
    const db = getDb();
    const usersCollection = db.collection('users');

    const foundUser = await usersCollection.findOne({ email });
    if (!foundUser) {
      return res.json({ error: 'Wrong email/password' });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.json({ error: 'Wrong email/password' });
    }

    // Tracking login streak
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    const loginHistory = foundUser.loginHistory || {};
    const longestStreak = foundUser.longestStreak || 0;
    const currentStreak = foundUser.currentStreak || 0;
    const lastLoginDate = foundUser.lastLoginDate || '';

    loginHistory[today] = (loginHistory[today] || 0) + 1;

    let newCurrentStreak = currentStreak;
    if (lastLoginDate === today) {
      // no change
    } else if (lastLoginDate === yesterday) {
      newCurrentStreak += 1;
    } else {
      newCurrentStreak = 1;
    }

    const newLongestStreak = Math.max(longestStreak, newCurrentStreak);

    await usersCollection.updateOne(
      { _id: foundUser._id },
      {
        $set: {
          loginHistory,
          currentStreak: newCurrentStreak,
          longestStreak: newLongestStreak,
          lastLoginDate: today,
        },
      }
    );

    res.json({
      message: 'Login successful',
      id: foundUser._id,
      username: foundUser.username,
      createdAt: foundUser.createdAt,
    });
  } catch (error) {
    console.error("You have to register first!" + error);
    res.status(500).json({ error: 'Login failed' });
  }
  // no client.close() here because the connection is reused globally
});

module.exports = router;
