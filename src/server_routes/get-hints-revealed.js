// a get method for hints revealed
const express = require('express');
const users = require('../data/users.json');
const router = express.Router();
router.get( "/" , async(req,res)=>{
    const {username} = req.query;
    if( !username )         return res.json({message: 'not logged in or user undefined'});
    const foundUser = users.find(u=>u.username===username);
    if( !foundUser )        return res.json({message:`no user found in db, or query invalid for ${username}`});
    return res.json({
        success: true,
        totalHintsRevealed: foundUser.totalHintsRevealed
    });
} );
module.exports = router;