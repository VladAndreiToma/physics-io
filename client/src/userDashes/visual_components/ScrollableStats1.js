import {useContext, useRef} from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import getStreakCharts from "./construct_charts/getStreakCharts";
import userProfilePicture from "../../images/profile-user.png";
import AnimatedNumbersConstructor from "./AnimatedNumberConstructor";
import useUserStats from "./useUserStats";   // my data fetch custom hook
import UserLoginContext from "../../AppContexts";

export default function ScrollableStats1( {username,userid} ){
    
    // handle the movement of the component 1 on horizontal direction
    const scrollRef = useRef(  null);
    const scroll = ( direction ) => {
        // uses local scope by definition
        if( !scrollRef.current ) return;
        const movement = scrollRef.current.offsetWidth * 1;
        scrollRef.current.scrollBy(
            {left: direction === "left" ? -movement : movement, behavior: "smooth"}
        );
    }

    const {createdAt} = useContext(UserLoginContext);

    console.log("DATE CREATED: ", createdAt);
    
    const { streak, favCourses, loading, error } = useUserStats(username);

    const charts = streak ? getStreakCharts(streak) : null;

    console.log( "Favourite Courses for: " + username + ": ", favCourses );
    console.log( "Streak: " + streak);

    // i define the wrapper to hold the scrollable the childs that need to be scrolled and the arrows
    return( 
        <div className="wrapper-statistics">
            <FaArrowAltCircleLeft
                onClick={() => scroll("left")}
                className="arrow-left"
            />
            <div className="user-personal-stats" ref={scrollRef}>
                {error && (
                    <div style={{ color: "red", margin: "1rem" }}>
                    <b>Error loading user data:</b> {error}
                    </div>
                )}

                {loading ? (
                    <div style={{ padding: "2rem" }}>
                    <p>Loading user statistics...</p>
                    </div>
                ) : (
                    <>
                    <div className="user-stats-cell">
                        <img
                        src={userProfilePicture}
                        style={{
                            width: 'calc(0.5*(8vw + 8vh))',
                            height: 'calc(0.5*(8vw + 8vh))',
                            backgroundColor: '#ccc',
                            borderRadius: '50%'
                        }}
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                        <label>Welcome <span style={{ color: '#b22222' }}><b>{username}</b></span></label>
                        <label>Member since: {new Date(createdAt).toLocaleDateString('ro-RO')}</label>
                        <b>Current Rank: </b>
                        <b>Your favourite activity: </b>
                        </div>
                    </div>

                    <div className="user-stats-cell">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <b style={{ color: "#b22222" }}>Login History</b>
                        {charts && charts.historyChart ? charts.historyChart : <p>Loading Login Chart...</p>}
                        </div>
                    </div>

                    <div className="user-stats-cell">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <b style={{ color: "#b22222" }}>Current Login Streak: </b>
                            <AnimatedNumbersConstructor number={streak.currentStreak} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <b style={{ color: "#b22222" }}>All time best streak: </b>
                            <AnimatedNumbersConstructor number={streak.longestStreak} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                            <b style={{ color: "#b22222" }}>Your top courses:</b>
                            {favCourses.map((course, index) => (
                            <label key={index}>{course}</label>
                            ))}
                        </div>
                        </div>
                    </div>
                    </>
                )}
            </div>

            <FaArrowAltCircleRight
                onClick={() => scroll("right")}
                className="arrow-right"
            />
        </div>
     );
}