import { Link } from "react-router-dom";
import TopBar from "./TopBar";
export default function SimulationsWelcome(){
    return(
         <div className="simulations-dashboard-holder">
            <TopBar/>
            <div className="simulations-dashboard-tableau">
                <div className="glare-div">
                    Faculty Level Simulations
                    <p className="description-simulations">
                        Faculty-style simulations are designed to reflect the level of conceptual and analytical depth typically encountered
                        in academic physics curricula. These simulations aim to reinforce theoretical understanding through visual and interactive models,
                        focusing on system behavior under idealized conditions. They maintain academic rigor while remaining accessible,
                        making them ideal for structured learning, coursework reinforcement, and foundational exploration of physical laws.
                    </p>
                    <Link to={"/simulations/faculty-level"} className="go-to-simulations">
                        Go Faculty
                    </Link>
                </div>
                <div className="glare-div">
                    Research Level Simulations
                    <p className="description-simulations">
                        These simulations are not for the faint of heart. They explore physics beyond the curriculum — where edge cases,
                        real-world complexity, and high-precision modeling take center stage. You'll encounter chaotic systems,
                        emergent phenomena, and experimental setups inspired by active research in cutting-edge labs.
                        If you’re ready to peek into what awaits you in academia, where uncertainty meets discovery — dare to enter. 🧪🚀
                    </p>
                    <Link className="go-to-simulations" to={"/simulations/academia-level"}>
                        Go Academia
                    </Link>
                </div>
            </div>
        </div>
    );
}