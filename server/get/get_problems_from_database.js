const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get('/courses/:topicId/problems', async (req, res) => {
  const topicId = req.params.topicId;
  try {
    const db = await connectToPhysicsIO();
    const collection = db.collection('problems');
    const problems = await collection.find({ topic: topicId }).toArray();

    res.json({ success: true, problems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while fetching problems' });
  }
});

module.exports = router;

