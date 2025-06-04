const express = require('express');
const { connectToPhysicsIO } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.get("/" , async(req , res)=>{
    try{
        const {username} = req.query;
        if(!username){
            return res.status(400).json({
                error: 'Username is required'
            });
        }
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');
        const foundUser = await usersCollection.findOne({username});
        if(!foundUser){
            return res.status(404).json({error:'User is not found in the database. Proceed to register'});
        }
        const streak ={
            currentStreak: foundUser.currentStreak || 0,
            longestStreak: foundUser.longestStreak || 0,
            loginHistory: foundUser.loginHistory || {},
        };
        res.json({streak});
    }catch(error){
        console.error(`Error fetching login streak: ${err}`);
        res.status(500).json({error: "Server error"});
    }
});

module.exports = router;