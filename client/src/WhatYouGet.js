import graduationCap from "./images/graduation-cap-512.png";
import exerciseBook from "./images/literature-512.png";
import workStation from "./images/workstation-512.png";
import microscope from "./images/icons8-microscope-100.png";

export default function WhatYouGet(){
    return(
        <div className="what-you-get">
            <label className="provisions">The next generation of physics e-learn</label>
            <label className="provisions-2">Your Courses. Your Challenges. Your own lab experience</label>
            <div className="provisions-row-explicative">
                <div className="provisions-courses">
                    <img src={graduationCap} style={{width:"80px" , height:"80px", color:"whitesmoke"}}></img>
                    <label className="provisions-description">Master key concepts in physics with a comprehensive collection of courses, from basic 
                        principles to advanced topics. Enhance your knowledge and problem-solving skills.
                    </label>
                </div>
                <div className="provisions-courses">
                    <img src={exerciseBook} style={{width:"80px" , height:"80px", color:"whitesmoke"}}></img>
                    <label className="provisions-description">Tackle a wide range of problems and exercises designed to boost 
                        your critical thinking and problem-solving abilities. Perfect for reinforcing concepts and mastering practical applications.
                    </label>
                </div>
                <div className="provisions-courses">
                    <img src={workStation} style={{width:"80px" , height:"80px", color:"whitesmoke"}}></img>
                    <label className="provisions-description">
                        Engage with cutting-edge simulations and interactive workstations that bring complex concepts to life.
                        Gain practical experience and explore real-world applications of physics in a virtual environment.
                    </label>
                </div>
                <div className="provisions-courses">
                    <img src={microscope} style={{width:"80px" , height:"80px", color:"whitesmoke"}}></img>
                    <label className="provisions-description">
                    Experience the thrill of discovery with hands-on lab work in a dynamic experimental environment. 
                    Develop real-world skills while exploring the frontiers of physics through guided experiments and advanced tools.
                    </label>
                </div>
                
            </div>
        </div>
    );
}