const express = require("express");
const {connectToPhysicsIO , getDb} = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.post('/', async(req,res)=>{
    const{ id, course } = req.body;
    if( !id || !course ){
        return res.status(400).send(
            "No matching id for user or course name, consider logging in"
        );
    }
    try{
        const db = await connectToPhysicsIO();
        const usersCollection = db.collection('users');

        const foundUser = await usersCollection.findOne({_id: id});
        if(!foundUser){
            return res.status(404).send("User is not found");
        }

        const visitedCourses = foundUser.visitedCourses || {};
        visitedCourses[course] = (visitedCourses[course] || 0) + 1;
        
        await usersCollection.updateOne(
            {_id:id},
            {$set: {visitedCourses}}
        );
        res.send(`${course} visit tracked!`);
    }catch(err){
        console.error('Error updating user visit: ', err);
        res.status(500).send('Server error');
    }
});

module.exports = router;