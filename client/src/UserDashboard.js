import React , {useContext} from "react";
import UserLoginContext from "./AppContexts";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import UserLoggedInDash from "./userDashes/UserLoggedInDash";
import UserNotLoggedInDash from "./userDashes/UserNotLoggedInDash";

export default function UserDashboard(){
    // i m using the context( global variable states and functions ) defined in the context script to do conditional based render
    // if user is not logged in show logging page
    // else show user stats
    const { isUserLoggedIn, logout , username } = useContext(UserLoginContext);
    return(
        <div className="user-container">
            <TopBar/>
            {isUserLoggedIn ? (
                <UserLoggedInDash/>
            ) : (
                <UserNotLoggedInDash/>
            )}
        </div>);
}