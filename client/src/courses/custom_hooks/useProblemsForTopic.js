import {useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function useProblemsForTopic(){
    
    const {topicId} = useParams();
    const [problems,setProblems] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if(!topicId) return;
        const getProblems = async()=>{
            setLoading(true);
            setError(null);
            try{
                const res = await axios.get(`/courses/${topicId}/problems`);
                if( !res.data.success ) throw new Error( res.data.message ||`Failed to load problems for ${topicId}`);
                setProblems(res.data.problems);
            }catch(err){
                setError(err.message);
            }   finally{
                setLoading(false);
            }
        };
        getProblems();
    },[topicId]);
    return {problems , loading, error}
}

export default useProblemsForTopic;