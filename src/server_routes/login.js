// solicitating comm architecture
const express = require( 'express' );
// solicitating file management
const fs = require( 'fs' );
// solicitating path
const path = require( 'path' );
// solicitating hashin encryption
const bcrypt = require( 'bcrypt' );
// creating a route
const router = express.Router();
const usersFile = path.join( __dirname , '../data/users.json' );


router.post('/', async (req, res) => {
    // i get data from user
    let { email, password } = req.body;
    // i try to find the match
    let users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
    const foundUser = users.find(u => u.email === email);
    // if i dont find the user i return - not even checking password
    if (!foundUser) {
      return res.status(401).json({ error: 'Wrong email/password' });
    }
    // i return also when passwrods do not match
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(401).json({ error: 'Wrong email/password' });
    }
    // else i log in successfuly
    res.json({ message: 'Login successful', 
        username: foundUser.username, id: foundUser.id });
  });

module.exports = router;