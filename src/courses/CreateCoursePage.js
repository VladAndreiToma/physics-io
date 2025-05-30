export default function CreateCoursePage({ hereProps }){
    return(
        <div className="notes">
        {
                hereProps.map((section, index) => (
                    <div key={index} className="course-item">
                       <b><i>{section.title}</i></b><br/>
                       {section.markdown}
                    </div>
                ))
            }
        </div>
    )
}