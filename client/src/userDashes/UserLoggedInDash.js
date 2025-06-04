import UserLoginContext from "../AppContexts";
import { useContext } from "react";
import ScrollableStats1 from "./visual_components/ScrollableStats1";
import ScrollableStats2 from "./visual_components/ScrollableStats2";
import ScrollableStats3 from "./visual_components/ScrollableStats3";
import InsertBottom from "./visual_components/InsertBottom";
import FixedFooterLogOutUser from "./visual_components/FixedFooterLogOutUser";


export default function UserLoggedInDash(){
    const { username , userid } = useContext( UserLoginContext );
    console.log( `in logged in dash ${username}, ${userid}` );
    return( 
        <div className="user-logged-in-dash">
            <ScrollableStats1 username={username} userid={userid}/>
            <ScrollableStats2 username={username} userid={userid}/>
            <InsertBottom/>
            <FixedFooterLogOutUser/>
        </div>
    )
}