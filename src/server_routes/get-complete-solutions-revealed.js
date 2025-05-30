// a get method to obtain complete solutions that user revealed
// uses query logic of get method with dynamic link in front ?and keyword=value
const express = require('express');
const users = require('../data/users.json');
const router = express.Router();
router.get( "/",async(req,res)=>{
    let {username} = req.query;
    if(!username) return res.json({message: "not logged in or invalid user"});
    let foundUser = users.find( u=>u.username === username );
    if(!foundUser) return res.json({message:`user not found in the database or query invalid for ${username}`});
    return res.json({
        success: true,
        totalSeenProblems: foundUser.totalSeenProblems
    })
});
module.exports=router;