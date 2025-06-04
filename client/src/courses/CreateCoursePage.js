import Latex from 'react-latex-next';
import "katex/dist/katex.min.css";
export default function CreateCoursePage({ hereProps }){
    return(
        <div className="notes">
        {
                hereProps.map((section, index) => (
                    <div key={index} className="course-item">
                       <b><Latex>{section.title}</Latex></b><br/>
                       <Latex>{section.markdown}</Latex>
                    </div>
                ))
            }
        </div>
    )
}