const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const users = require('../data/users.json');

const router = express.Router();

router.post('/', async(req,res)=>{
    
    
    console.log("executing the hints service");
    
    // console log if needed to check 
    const {username,id,difficulty} = req.body;
    if(!username)
        return res.json({message:'You re not logged in'});
    if(!id || !difficulty)
        return res.json({message:"Missing params"});
   
    // i look up in the db
    const foundUser = users.find( u=>u.username === username );
    if(!foundUser)
        return res.json({message: 'user not found in the db'});
   
    //creting the stats field if not existing
    if(!foundUser.hintsStats)   foundUser.hintsStats = {};
    if(!foundUser.hintsStats[difficulty])   foundUser.hintsStats[difficulty]=[];
    if(!foundUser.hintsStats[difficulty].includes(id))  foundUser.hintsStats[difficulty].push(id);

    // creating total pool of hints revealed
    foundUser.totalHintsRevealed = (foundUser.totalHintsRevealed||0) + 1;

    console.log("writting hints data");
    try{
        const filePath = path.join( __dirname, '../data/users.json');
        await fs.writeFile( filePath, JSON.stringify(users,null,2));
        return res.json({message: 'hints stats updated'});
    }catch(err){
        return res.json({message:'error in updating the hints stats'});
    }
});

module.exports = router;