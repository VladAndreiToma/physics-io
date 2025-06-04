const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');
const router = express.Router();

router.get("/", async (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.json({ message: "Not logged in or invalid user" });
    }

    try {
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ username });

        if (!user) {
            return res.json({
                message: `User not found in the database or query invalid for ${username}`
            });
        }

        const totalSeenProblems = user.totalSeenProblems || 0;
        const seenSolutionsStats = user.seenSolutionsStats || {};
        let seenCountPerDifficulty = user.seenCountPerDifficulty;

        // If seenCountPerDifficulty doesn't exist, calculate it from seenSolutionsStats
        if (!seenCountPerDifficulty) {
            seenCountPerDifficulty = {};
            for (const diff in seenSolutionsStats) {
                seenCountPerDifficulty[diff] = seenSolutionsStats[diff].length;
            }
        }

        return res.json({
            success: true,
            totalSeenProblems,
            seenCountPerDifficulty
        });

    } catch (err) {
        console.error("MongoDB error:", err);
        return res.json({
            message: "Failed to retrieve seen solution stats"
        });
    }
});

module.exports = router;
