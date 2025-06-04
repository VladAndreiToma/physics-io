import { useContext } from "react";
import UserLoginContext from "../../AppContexts";
import axios from "axios";

export function useProblemsStats(){
    //destructuring username from context to fetch in server
    const {username} = useContext( UserLoginContext );
    // register to server the metric of problems solved
    const submitProblem = async({id,difficulty})=>{
        try{
            const response = await axios.post('/problems-statistics', {
                    username,
                    problemId: id, 
                    difficulty
                    });
            console.log(`Stats updated: ${response.data}`);
        }catch(err){
            console.log("Failed to fetch update problem: " , err);
        }
    }
    // register to server how many problems user looked up the solution
    const seeSolution = async({id,difficulty})=>{
        try{
            const response = await axios.post('/problems-solutions-revealed',{
                username, id, difficulty
            });
            console.log( "stats update of seen solution " , response.data );
        }catch(err){
            console.log( `Error in frontend for seen solution: ${err}` );
        }
    }
    //register to server how many hints user saw
    const seeHints = async({id,difficulty}) => {
        try{
            const response = await axios.post('/problems-hints-revealed',{
                username, id, difficulty
            });
            console.log( `stats updated in hints: ${response.data}` ); 
        }catch(err){
            console.log(`error in setting seen stats: ${err}`);
        }
    }
    // submit solution metric update
    const submitSolution = async()=>{
        try{
            const response = await axios.post('/solutions-submitted',{
                username
            });
            console.log( `solutions submitted updated: ${response.data}` );
        }
        catch(err){
            console.log( `error in solutions submitted: ${err}` );
        }
    }
    return {submitProblem, seeSolution, seeHints, submitSolution};
}


// i use axios cause it works with protocol more gracefully, directly converting things to json and so on, more automatic in the bg than generic fetch
