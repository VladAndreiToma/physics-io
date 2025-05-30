import { useLocation } from "react-router-dom";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import TopBar from "../TopBar";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function Relativity(){

    //custom hook for page tracking calling
    useTrackCourseVisit();

    // comm with newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    const content = [ "asjjasfjagjksdkDdlvkdsvndalkdasasdlcmdalcmlasdmcsadc" , "salkfhasdjfsakfksajfjksafjsafsafjksafsakf" ]

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];


    return(
        <div className="course-page">
            <TopBar />
            <div className="content-for-course">
            {!talkToNewtonium ? 
                (<>
                <CreateCoursePage hereProps={content} />
                <CreateGoToProblems where_id={topic} />
                <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                </>) : 
                (<PageOfChatBox />)
            }
            </div>
        </div>
    );
}