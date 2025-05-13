const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );

const router = express.Router();

router.post( "/" , (req,res) =>{
    let{ id , course } = req.body;
    if( !id || !course ){
        return res.status(400).send("No matching user ID or course, consider login");
    }
    const filePath = path.join( __dirname, '../data' , 'users.json' );
    fs.readFile( filePath , ( err, data )=>{
        if(err){
            console.error( `error reading user data::: ${err}` );
            return res.status(500).send('Server error'); 
        }
        const users = JSON.parse(data);
        const foundUser = users.find( u => u.id === id )
        if(!foundUser){
            return res.status(404).send("User not found!");
        }
        if(!foundUser.visitedCourses){
            foundUser.visitedCourses = {};
        }
        foundUser.visitedCourses[course] = (foundUser.visitedCourses[course]||0)+1;
        fs.writeFile( filePath, JSON.stringify( users , null , 2 ) , (err)=>{
            if(err){
                console.error('error writing user data: ', err);
                return res.status(500).send( 'Server error' );
            }
            res.send( `${course} visit tracked!` );
        });
    });
});

module.exports = router;
