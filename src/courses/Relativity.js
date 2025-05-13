import { useLocation } from "react-router-dom";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import TopBar from "../TopBar";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function Relativity(){

    //custom hook for page tracking calling
    useTrackCourseVisit();

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];

    return(
        <div className="course-page">
            <TopBar />
            <div className="content-for-course">
                <CreateCoursePage hereProps={ ["lalal" , "allalalal"] }/>
                <CreateGoToProblems  where_id={topic}/>
                <ChatBotBox/>
            </div>
        </div>
    );
}