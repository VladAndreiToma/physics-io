import { Link } from "react-router-dom";
export default function GoToProblems({ where_id }){
    return(<div className='to-problems-container'>
        <label>Feeling confident in the thoery and ready to explore some challenges? We have a list of problems that you can try, submit, with tips and solutions + AI assistant</label>
        <Link    className='link-to-problems'   to={`/courses/${where_id}/problems` }>Go to Problems</Link>
    </div>);
}