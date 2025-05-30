const express = require( "express" );
const users = require( "../data/users.json" );

const router = express.Router();
router.get("/", async( req,res )=>{
    try{
        const {username} = req.query;
        if(!username){
            return res.status(400).json({error:`Username is required`});
        }
        const foundUser = users.find( u=> u.username === username );
        if( !foundUser ){
            return res.status(404).json({
                error: `User not found`
            })
        }
        // cosntruct the object to be sent to frontend
        const streak = {
            currentStreak: foundUser.currentStreak,
            longestStreak: foundUser.longestStreak,
            loginHistory: foundUser.loginHistory
        };
        res.json({streak});

    }catch( err ){
        console.error(`Error in login streak as ${err}`);
    }
});
module.exports = router;