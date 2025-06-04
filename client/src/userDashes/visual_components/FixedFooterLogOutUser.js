import { useContext } from "react";
import UserLoginContext from "../../AppContexts";

export default function FixedFooterLogOutUser(){
    const { username , userid , logout } = useContext( UserLoginContext );
    return(
        <div style={{display:"flex", flexDirection:"row", position:'fixed', bottom:'0px', height:"12vh", width:'100vw',
            backgroundColor:"inherit", fontFamily: 'Orbitron', justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box",
            padding:'2rem'
        }}>
            <label style={{ fontSize:"calc(0.5*(2.1vw + 2.1vh))" }}>Wanna take a break from your account?</label>
            <button className="logout-button-user-dash" onClick={ logout }>Log Out</button>
        </div>
     )
}