const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, problemId, difficulty } = req.body;

    if (!username || !problemId || !difficulty) {
        return res.status(400).json({
            success: false,
            message: 'Missing fields'
        });
    }

    try {
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');

        const updateResult = await usersCollection.updateOne(
            {
                username,
                [`problemsStats.${difficulty}`]: { $ne: problemId } // only update if problemId is not already present
            },
            {
                $addToSet: { [`problemsStats.${difficulty}`]: problemId },
                $inc: { totalProblemsSolved: 1 }
            }
        );

        if (updateResult.matchedCount === 0) {
            // Either the user doesn't exist or problem already submitted
            const userExists = await usersCollection.findOne({ username });
            if (!userExists) {
                return res.status(400).json({ success: false, message: 'User not found in the database' });
            }

            return res.json({
                success: true,
                message: 'Problem already recorded. No update performed.'
            });
        }

        return res.json({
            success: true,
            message: 'Problem stats updated'
        });

    } catch (err) {
        console.error("MongoDB error:", err);
        return res.status(500).json({
            success: false,
            message: 'Error saving data'
        });
    }
});

module.exports = router;
