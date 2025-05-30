import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function ScrollableStats3( {username} ){
    const scrollRef = useRef(  null);
    const scroll = ( direction ) => {
        // uses local scope by definition
        if( !scrollRef.current ) return;
        const movement = scrollRef.current.offsetWidth * 0.5;
        scrollRef.current.scrollBy(
            {left: direction === "left" ? -movement : movement, behavior: "smooth"}
        );
    }

    // i define the wrapper to hold the scrollable the childs that need to be scrolled and the arrows
    return( 
        <div className="wrapper-statistics">
            <FaArrowAltCircleLeft
                onClick={() => scroll("left")}
                className="arrow-left"
            />
            <div className="user-personal-stats" ref={scrollRef} style={{ overflowX: "auto" }}>
                <div className="user-stats-cell">Welcome {username}</div>
                <div className="user-stats-cell">Login Streak</div>
                <div className="user-stats-cell">Activity</div>
                <div className="user-stats-cell">topic1</div>
                <div className="user-stats-cell">topic2</div>
            </div>
            <FaArrowAltCircleRight
                onClick={() => scroll("right")}
                className="arrow-right"
            />
        </div>
     );
}