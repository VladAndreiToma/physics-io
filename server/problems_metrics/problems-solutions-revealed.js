const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');
const router = express.Router();

router.post('/', async (req, res) => {
    const { username, id, difficulty } = req.body;
    if (!username || !id || !difficulty) {
        console.log('missing fields');
        return res.json({
            message: 'You are not logged in to your account!',
        });
    }
    try {
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ username });
        if (!user) {
            console.log('User is not found in the db');
            return res.json({ message: 'user is not inside the db' });
        }
        const seenStats = user.seenSolutionsStats || {};
        const seenForDiff = seenStats[difficulty] || [];
        let alreadySeen = seenForDiff.includes(id);
        if (!alreadySeen) {
            seenForDiff.push(id);
        }
        seenStats[difficulty] = seenForDiff;
        const newTotal = (user.totalSeenProblems || 0) + (alreadySeen ? 0 : 1);
        const seenCountPerDifficulty = user.seenCountPerDifficulty || {};
        seenCountPerDifficulty[difficulty] = (seenCountPerDifficulty[difficulty] || 0) + (alreadySeen ? 0 : 1);
        await usersCollection.updateOne(
            { username },
            {
                $set: {
                    seenSolutionsStats: seenStats,
                    totalSeenProblems: newTotal,
                    seenCountPerDifficulty: seenCountPerDifficulty
                }
            }
        );
        return res.json({ message: 'seen solution metric registered' });

    } catch (err) {
        console.error('MongoDB error:', err);
        return res.json({ message: 'error in seen solution metric registration' });
    }
});

module.exports = router;
