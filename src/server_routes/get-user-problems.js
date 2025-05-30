// a get method to get problems solved by user categorized and in total
const express = require('express');
const users = require('../data/users.json');
const router = express.Router();
router.get("/", async (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.json({ message: 'not logged in or user undefined' });
    }
    const foundUser = users.find(u => u.username === username);
    if (!foundUser) {
        return res.json({ message: `no user found in the db, query invalid for ${username}` });
    }
    const stats = foundUser.problemsStats || {};
    const problemsStatus = {
        total: foundUser.totalProblemsSolved || 0,
        fiveStars: (stats["challenging"] || []).length,
        fourStars: (stats["advanced"] || []).length,
        threeStars: (stats["intermediate"] || []).length,
        oneStar: (stats["introductory"] || []).length,
    };
    return res.json({
        success: true,
        problemsStatus
    });
});

module.exports = router;