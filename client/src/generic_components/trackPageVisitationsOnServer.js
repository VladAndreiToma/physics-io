// a frontend component to develop the access point to a server api that allows to track 
// some pages visitations to establish favourites and cache characteristics

// front end
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
/**
@returns {void``}
hook returns nothing*/
//respecting naming convention using `use`

// i can either destructure a context or do some props drilling
// i go with props drilling for generic part
export default function useTrackPageVisitationsOnServer({props}){

    // we get a certain dynamic location that we might look on the server
    const location = useLocation();
    //it has to behave like a hook since i use hooks inside ---> respecting reacts lifecycle construction
    useEffect(()=>{
        // eachtime a prop state changes effect rerenders page efficiently
        const trackVisit = async()=>{
            if( !props ) return; // assume i send some user validation or login truth table
            let lastPartOfDynamicUrl = location.pathname.split("/").pop();
            // for the print from url i enter server
            try{
                let response = await fetch( '/somewhere_api', {
                    // com type post handshake, json format
                    method:'POST', headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({ smth1: props.smth1 , smth2: props.smth2}),  // generically
                });
                if(!response.ok){
                    console.log( `Server connection failed with: ${await response.text()} ` )
                }
            }catch(e){
                console.error( `Troubleshooting needed. Encountered error: ${e}` );
            }
        }
        // deploy the fucntion
        // it will be deployed at each mounting of certain class component that holds the import of this hook and its calling
        trackVisit();
    },[props])
}