import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function CreateCoursePage({ hereProps }){
    return(
        <div style={{ width: "100%" , minHeight: "100%" , padding: "3.2%" ,
            boxSizing: "border-box" , backgroundColor: "transparent" , display: "flex" , flexDirection: "column",
            gap: "20px", justifyContent: "flex-start" , alignItems: "center"
         }}>
        {
                hereProps.map((section, index) => (
                    <div key={index} className="course-item">
                       {section.title}
                       {section.markdown}
                    </div>
                ))
            }
        </div>
    )
}