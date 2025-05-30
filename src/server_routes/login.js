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

    // handle the login streak, add the logins field if not there or udpate it
    // whenever is new date i restart counter otherwise i increment
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now()-86400000).toISOString().split("T")[0];
    // missing fields creation  --- i store how much i log in every day for activity and a day strike
    // intialize new fields in users
    foundUser.loginHistory = foundUser.loginHistory || {};
    foundUser.currentStreak = foundUser.currentStreak || 0;
    foundUser.longestStreak = foundUser.longestStreak || 0;
    foundUser.lastLoginDate = foundUser.lastLoginDate || '';
    //if logging today
    foundUser.loginHistory[today] = (foundUser.loginHistory[today]||0)+1;
    //streak registered per day
    if(foundUser.lastLoginDate === today){
      //do nothing
    }else if(foundUser.lastLoginDate===yesterday){
      foundUser.currentStreak += 1; // increment the streak
    }else{
      foundUser.currentStreak = 1; // start over the counting 
    }
    foundUser.longestStreak = Math.max( foundUser.longestStreak, foundUser.currentStreak )
    //move the pointer to today
    foundUser.lastLoginDate = today;

    //write stuff to the server
    fs.writeFileSync(usersFile, JSON.stringify(users,null,2));

    // else i log in successfuly
    // and send back user basic data for context the others i ll use lazy loading to fetch from different apis

    res.json({ message: 'Login successful', 
        username: foundUser.username, 
        id: foundUser.id,
      });
  });

module.exports = router;