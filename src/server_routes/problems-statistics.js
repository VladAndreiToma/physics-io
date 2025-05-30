const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const users = require("../data/users.json");

const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Received body:", req.body);

    const { username, problemId, difficulty } = req.body;

    if (!username || !problemId || !difficulty) {
        console.log('missing fields');
        return res.status(400).json({
            success: false,
            message: 'missing fields'
        });
    }

    const user = users.find(u => u.username === username);
    if (!user) {
        console.log("user not found in db");
        return res.status(400).json({
            success: false,
            message: 'user not found in the db'
        });
    }
    // creating the problems solved based on difficulty
    if (!user.problemsStats) {
        user.problemsStats = {};
    }
    if (!user.problemsStats[difficulty]) {
        user.problemsStats[difficulty] = [];
    }
    if (!user.problemsStats[difficulty].includes(problemId)) {
        user.problemsStats[difficulty].push(problemId);
    }

    // creating the total problems solved
    user.totalProblemsSolved = (user.totalProblemsSolved || 0) + 1;

    try {
        const filePath = path.join(__dirname, '../data/users.json');
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        return res.json({
            success: true,
            message: 'problem stats updated',
            problemsStats: user.problemsStats
        });
    } catch (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({
            success: false,
            message: 'error saving data'
        });
    }
});

module.exports = router;
