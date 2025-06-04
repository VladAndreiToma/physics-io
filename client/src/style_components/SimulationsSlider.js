import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function SimulationsSlider( {simulations} ){
  
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const movement = scrollRef.current.offsetWidth;
        scrollRef.current.scrollBy({
        left: direction === "left" ? -movement : movement,
        behavior: "smooth",
        });
    };

    return (
        <div className="wrapper-statistics">
        <FaArrowAltCircleLeft
            onClick={() => scroll("left")}
            className="arrow-left"
        />
        <div
            className="simulations-slider"
            ref={scrollRef}
            style={{ overflowX: "auto", display: "flex", gap: "1rem"}}
        >
            {simulations.map((sim, index) => (
                <div className="simulation-cell" key={index}>{sim}</div>
            ))}
        </div>
        <FaArrowAltCircleRight
            onClick={() => scroll("right")}
            className="arrow-right"
        />
        </div>
    );
}
