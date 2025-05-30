const express = require( "express" );
const users = require("../data/users.json");


const router = express.Router();
router.get("/", async(req,res)=>{
    try{
        const {username} = req.query;
        if(!username){
            return res.status(400).json({error:'username required'});
        }
        const foundUser = users.find(u=>u.username===username);
        if(!foundUser){
            return res.status(404).json({error:'User inexistent'});
        }
        const favoriteCourses = Object.entries(foundUser.visitedCourses)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([course, _]) => course); // only keep the course name

        res.json({ favoriteCourses });
    }
    catch(err){
        console.error(`some internal error ${err}`);
    }
})

module.exports = router;