import { useEffect, useState } from "react";
import TopBar from "../TopBar";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useProblemsStats } from "./custom_hooks/useProblemsStats";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import { useNewtoniumClose } from "./useNewtoniumClose";
import InsertBottom from "../userDashes/visual_components/InsertBottom";

// here i m creating the pages with problems and challenges with difficulty filters
// integrate also an ai chatbot or smth to help with indicatives in solving any issues
// i ll make use of usaparams to get dynamically the links so i get the entry key for server
// so i dont end up in parsing hell of props

export default function CreateChallengesPage(){
    
    // handle the states
    const getDifficultyStars = ( difficulty ) => {
        switch( difficulty ){
            case "introductory":
                return 1;
            case "intermediate":
                return 3;
            case "advanced":
                return 4;
            case "challenging":
                return 5;
            default:
                return 0;
        }
    }

    // handle the topic rendering for problems --- fetching in effect to ensure proper state updates
    const { topicId } = useParams();
    const [problems, setProblems] = useState([]);

    useEffect(()=>{
        const getProblems = async() => {
            try{
                const res = await fetch(`/courses/${topicId}/problems`);
                const data = await res.json();
                if( !res.ok || !data.success ) throw new Error( data.message || `Faild to load --${topicId}-- problems` );
                setProblems( data.problems );
            }
            catch(err){
                console.error( err.message );
            }
        }
        if(topicId)
            getProblems();
    }, [topicId]);

    const [openHints, setOpenHints] = useState({});
    const toggleHint = (id) => {
    setOpenHints((prev) => ({
        ...prev,
        [id]: !prev[id]
    }));
    };

    const {submitProblem, seeSolution, seeHints, submitSolution} = useProblemsStats();


    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    return (
        <div className="course-page">
        { 
            !talkToNewtonium ? (
            <>
                <TopBar/>
                <div className="challenges-page">
                {problems.length > 0 ? (
                            problems.map((problem) => {
                                const isHintOpen = openHints[problem.id] || false;
                                let stars = getDifficultyStars(problem.difficulty);
                                return(
                                    <div key={problem.id} className="problem-container">
                                        <div><strong>{problem.subject}</strong></div>
                                        <div className="difficulty-stars" >{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
                                        <div><strong>Question:</strong> {problem.question}</div>
                                        <div className="problem-actions">
                                            <button className="generic-action-button-in-problems-section"
                                            onClick={() => {
                                                    toggleHint(problem.id);
                                                    if (!openHints[problem.id]) {
                                                    seeHints({ id: problem.id, difficulty: problem.difficulty });
                                                    }
                                                }}
                                            >
                                                {openHints[problem.id] ? "Hide Hint" : "See Hint"}
                                            </button>
                                            <button className="generic-action-button-in-problems-section"
                                                onClick={()=>seeSolution({id: problem.id, difficulty: problem.difficulty})}>
                                                See Solution
                                            </button>
                                            <button 
                                                onClick={()=>submitSolution()}
                                                className="generic-action-button-in-problems-section">
                                                Update Your Solution
                                            </button>
                                            <button className="generic-action-button-in-problems-section"
                                                onClick={()=>submitProblem({id: problem.id, difficulty: problem.difficulty})}>
                                                Submit
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                        {isHintOpen && (
                                            <motion.div
                                                key="hint"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                style={{ marginTop: "5px", paddingLeft: "15px", width: "auto" }}
                                            >
                                                <p>{problem.hint || "No hint available."}</p>
                                            </motion.div>
                                        )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })
                        ) : (
                            <p>No problems available for this topic.</p>
                        )}
                <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)}/>
                <InsertBottom/>
                </div>
            </>
            )
            :
            (<PageOfChatBox/>)
        }
        </div>
    );
}