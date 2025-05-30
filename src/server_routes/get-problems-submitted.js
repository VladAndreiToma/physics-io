// a get method for problems submitted
const express = require('express');
const users = require('../data/users.json');

const router = express.Router();

router.get( "/",async(req,res)=>{
    const {username} = req.query;
    if(!username) return res.json({message: 'not logged in or user undefined'});
    const foundUser = users.find( u=>u.username === username );
    if(!foundUser) return res.json({message: `no user in db with name, or query invalid for ${username}`});
    // if everything ok
    return res.json({
        submittedSolutions: foundUser.submittedSolutions,
        success: true
    });

} )

module.exports=router;