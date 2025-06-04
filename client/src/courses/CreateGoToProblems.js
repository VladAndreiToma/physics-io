import { Link } from "react-router-dom";
import FancyButton from "../custom_imported_components/FancyButton";

export default function CreateGoToProblems({ where_id }){
    return(<div className='to-problems-container'>
        <Link    className='link-to-problems'   to={`/courses/${where_id}/problems` }>
            <FancyButton/>
        </Link>
        <b style={{fontSize:"calc((1/2)*(2.5vw + 2.5vh))", fontFamily:'Orbitron'}}>Test your limits with challenges</b>
    </div>);
}