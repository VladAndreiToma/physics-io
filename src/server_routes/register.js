// req comm procedure
const express = require( 'express' );
// req file management
const fs = require( 'fs' );
// req path management
const path = require( 'path' );
// req unqiue id constructor
const {nanoid} =  require( 'nanoid' );
// req hashing library
const bcrypt = require( 'bcrypt' );

// routing this endpoint for top server.js
const router = express.Router();

const usersFile = path.join( __dirname, "../data/users.json" );

router.post('/', async(req,res)=>{
    // i get data from user request
    let { username, email, password } = req.body;
    // i check for existance in users
    let users = JSON.parse( fs.readFileSync( usersFile, 'utf-8' ) );
    if( users.find( user=>user.email === email ) ){
        return JSON.status(400).json({ 
            error:'Username already exists' });
    }
    try{
        let hashedPassword = await bcrypt.hash( password, 10 );
        let userId = nanoid();
        let newUser = { id: userId , username: username , email: email , password: hashedPassword }
        users.push( newUser );
        fs.writeFileSync( usersFile , JSON.stringify( users, null , 2 ) );
        res.json( {message: "User registered", id: userId} );
    }catch( error ){
        res.status(500).json({error: 'Registration failed'});
    }   
});

module.exports = router;