const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.post("/", async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: "You are not authenticated" });
    }

    try {
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User is not found in the db --- register" });
        }

        // Increment submittedSolutions by 1 (or set to 1 if missing)
        await usersCollection.updateOne(
            { username },
            { $inc: { submittedSolutions: 1 } }
        );

        return res.json({ message: "Solution submitted updated" });

    } catch (err) {
        console.error("Error updating submitted solutions:", err);
        return res.status(500).json({ message: 'Error in updating the submitted solutions' });
    }
});

module.exports = router;
