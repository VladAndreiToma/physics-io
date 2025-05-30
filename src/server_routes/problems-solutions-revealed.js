const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const users = require( '../data/users.json' );
const { route } = require('./problems-statistics');


const router = express.Router();

router.post( '/', async (req,res)=>{
    
    const {username, id, difficulty} = req.body;
    
    if(!username || !id || !difficulty){
        console.log('missing fields');
        return res.json({
            message: 'You are not logged in to your account!'
        }); // difficulty cannot be missing but the general context params might if user is not logged in
    }   
    const user = users.find( u => u.username === username );

    if(!user){
        console.log("User is not found in the db");
        return res.json({
            message: 'user is not inside the db'
        });
    }
    // creating the field of seen solutions based on difficulty --- intersting metric to monitor
    if(!user.seenSolutionsStats){user.seenSolutionsStats = {};}
    if(!user.seenSolutionsStats[difficulty]){user.seenSolutionsStats[difficulty] = [];}
    if(!user.seenSolutionsStats[difficulty].includes(id)){user.seenSolutionsStats[difficulty].push(id);}   
    user.totalSeenProblems = ( user.totalSeenProblems || 0 ) + 1;
    
    try{
        const filePath = path.join(__dirname,'../data/users.json'); // creating the path in which i ll write, this controls management of os
        await fs.writeFile( filePath, JSON.stringify(  users, null, 2 ) );
        return res.json({
            message: 'seen solution metric registered'
        });
    }catch(err){
        console.error('Error writing file:', err);
        return res.json({
            message:'error in seen solution metric registration'
        });
    }
} );

module.exports = router;