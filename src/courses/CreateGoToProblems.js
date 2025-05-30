import { Link } from "react-router-dom";
import FancyButton from "../custom_imported_components/FancyButton";

export default function CreateGoToProblems({ where_id }){
    return(<div className='to-problems-container'>
        <Link    className='link-to-problems'   to={`/courses/${where_id}/problems` }>
            <FancyButton/>
        </Link>
    </div>);
}