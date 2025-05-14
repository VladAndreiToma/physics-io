import { useEffect,useMemo,useState } from "react";
import fractals from "./images/fractals.jpg";
import generalPhysics from "./images/general_physics.jpg";
import blackAestheticPhysics from "./images/black-aesthetic-physics.jpg";
import holographisPhysics from './images/holographic-physics.jpg';
import {useNavigate} from "react-router-dom";

export default function GeneralPhysiscsElement(){

    const gpElementImages = [
        holographisPhysics, generalPhysics, fractals , blackAestheticPhysics
    ];

    const[ currentImageIndex , setCurrentImageIndex ] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentImageIndex( prevIndex => ( prevIndex+1 )% gpElementImages.length);
            // generates the new index
        },3000);
        return() => clearInterval( intervalId );
    },[]);  // trigger once @ render then just deploys timeout

    const dynamicStyleToChangeBgPicture = useMemo(() => {
        return {
            backgroundImage: `linear-gradient(to top, #222 0%, rgba(0,0,0,0) 20%),
            linear-gradient(to bottom, #222 0%, rgba(0,0,0,0) 20%),
            url(${gpElementImages[currentImageIndex]})`,
            transition: 'background-image 1s ease-in-out, background-color 0.5s ease'
        };
    }, [currentImageIndex]);

    const myNavigate = useNavigate();

    const handleJoinNow = () =>{
        myNavigate('/login');
    }

    return(
        <>
            <div className="general-physics" style={dynamicStyleToChangeBgPicture}>
            </div>
            <div className="join-today">
                <div className="join-today-left">
                    Learn intriguing concepts covered in hardcore math, watch simulations, 
                    go through problems, experience the laboratory atmosphere -research like- everywhere, any time.
                    All within the confort of your pc.
                </div>
                <div className="join-today-right">
                    <label style={{ fontWeight: "bold"}}>Try out Physics-io today</label>
                    <button style={{ border: "#000 solid 2px" , width:"25vw" , height: "8vh" , fontFamily:"Orbitron",
                          backgroundColor: "whitesmoke", color:"black", cursor: "pointer" , fontSize: 'calc(0.5*(2.1vw + 2.1vh))' }} onClick={handleJoinNow}>Join Now</button>
                </div>
            </div>
        </>
    );
}