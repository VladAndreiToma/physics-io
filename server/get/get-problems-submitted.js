const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get("/", async (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ message: 'Not logged in or user undefined' });
    }

    try {
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');

        const foundUser = await usersCollection.findOne({ username });

        if (!foundUser) {
            return res.status(404).json({ message: `No user in DB with name or query invalid for ${username}` });
        }

        return res.json({
            submittedSolutions: foundUser.submittedSolutions || 0,
            success: true
        });
    } catch (err) {
        console.error('Error fetching submitted solutions:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
