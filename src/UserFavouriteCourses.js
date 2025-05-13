export default function UserFavouriteCourses(){
    const usrFavCourses = ["Linear Algebra" , "Analytical Mechanics" , 
        "Electrodynamics" , "Optics and Waves" , "Solid state and semiconductors"]; 
    return(
        <div className="user-popular-course">
            {
                usrFavCourses.map(( course, index )=>{
                    return <div key={index} className="user-course">
                        {course}
                    </div>
                })
            }
        </div>
    )
}