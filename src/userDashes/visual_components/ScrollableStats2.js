import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import useUserStats from "./useUserStats";
import AnimatedNumbersConstructor from "./AnimatedNumberConstructor";
import { useMemo } from "react";
import getProblemsMetricsCharts from "./construct_charts/getProblemsMetricCharts";

export default function ScrollableStats2( {username} ){
    const scrollRef = useRef(  null);
    const scroll = ( direction ) => {
        // uses local scope by definition
        if( !scrollRef.current ) return;
        const movement = scrollRef.current.offsetWidth * 0.5;
        scrollRef.current.scrollBy(
            {left: direction === "left" ? -movement : movement, behavior: "smooth"}
        );
    }
    
    const {streak,favCourses,problems,submits,hints,solutions,loading,error} = useUserStats(username);

    const comparisonMetrics = useMemo(() => {
    if (!problems?.total || !solutions) return null;
    return getProblemsMetricsCharts({
        totalProblemsSolved: problems.total,
        totalSolutionsSeen: solutions
    });
}, [problems, solutions]);

if (!comparisonMetrics) return null;


    // i define the wrapper to hold the scrollable the childs that need to be scrolled and the arrows
    return( 
        <div className="wrapper-statistics">
            <FaArrowAltCircleLeft
                onClick={() => scroll("left")}
                className="arrow-left"
            />
            <div className="user-personal-stats" ref={scrollRef} style={{ overflowX: "auto" }}>
                {
                    error&&(
                        <div style={{ color: "red", margin: '1rem'}}>
                            <b>Error loading user data:</b>{error}
                        </div>
                    )
                }
                {
                    loading ? ( 
                        <div style={{padding:'2rem'}}>
                            <p>Loading performance metrics...</p>
                        </div>
                    ) :(
                     <>
                        <div className="user-stats-cell" style={{ flexDirection:"column"}}>
                            <div style={{flexDirection:'row',display:"flex"}}>
                                <b>Problems solved so far:</b>
                                <AnimatedNumbersConstructor number={problems.total}/>
                            </div>
                            <div style={{flexDirection:'row',display:"flex"}}>
                                <b>★★★★★ problems done: </b>
                                <AnimatedNumbersConstructor number={problems.fiveStars}/>
                            </div>
                            <div style={{flexDirection:'row',display:"flex"}}>
                                <b>★★★★ problems done: </b>
                                <AnimatedNumbersConstructor number={problems.fourStars}/>
                            </div>
                            <div style={{flexDirection:'row',display:"flex"}}>
                                <b>★★★ problems done: </b>
                                {" "}
                                <AnimatedNumbersConstructor number={problems.threeStars}/>
                            </div>
                            <div style={{flexDirection:'row',display:"flex"}}>
                                <b>★ problems done: </b>
                                {" "}
                                <AnimatedNumbersConstructor number={problems.oneStar}/>
                            </div>
                        </div>
                        <div className="user-stats-cell" style={{ flexDirection:"column"}}>
                            <div style={{display: "flex", flexDirection: 'row'}}><b>Solutions submitted:</b> {submits} </div>
                            <div style={{display: "flex", flexDirection: 'row'}}><b>Hints unrevealed:</b> {hints} </div>
                            <div style={{display: "flex", flexDirection: 'row'}}><b>Complete solutions unrevealed:</b>{solutions}</div>
                        </div>
                        <div className="user-stats-cell">
                             <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap:"1rem"}}>
                                <b>Solution accuracy vs hints/solutions</b>
                                {comparisonMetrics ? comparisonMetrics.comparisonMetrics : <p>Loading comparison metrics...</p>}
                                {(problems.total > solutions)? <b style={{ color:"#b22222" }}>Youre a problem solver</b>:<b style={{ color:"#b22222"}}>Your a solution analyzer</b>}
                            </div>
                        </div>
                     </>   
                    )
                }
            </div>
            <FaArrowAltCircleRight
                onClick={() => scroll("right")}
                className="arrow-right"
            />
        </div>
     );
}