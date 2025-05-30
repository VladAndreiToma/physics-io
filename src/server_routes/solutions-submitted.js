// this is a post method to register how many times user uploads a solution
// compared to correct solved problems

const express = require( 'express' );
const fs = require('fs').promises;
const path = require('path');
const users = require( "../data/users.json" );

const router = express.Router();

router.post("/", async(req,res)=>{
    console.log("executing submit problem service");
    const {username} = req.body; // only username and i count
    //looking for username
    if(!username)  return res.json({message: "You re not authenticated"});
    let foundUser = users.find( u=>u.username === username );
    if( !foundUser )  return res.json({message: "User is not found in the db --- register"});
    foundUser.submittedSolutions = ( foundUser.submittedSolutions || 0 ) + 1;
    try{
        const filePath = path.join(__dirname, '../data/users.json');
        await fs.writeFile( filePath,JSON.stringify(users,null,2) );
        return res.json( {message:"solution submitted updated"} );
    }catch(err){
        return res.json({message: 'error in updating the submitted solutions'});
    }
})

module.exports = router;