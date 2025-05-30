import SimulationsWelcome from "./SimulationWelcome";
import SimulationsAcademia from "./SimulationsAcademia";
import SimulationsFaculty from "./SimulationsFaculty";
import { Link, Route,Routes } from "react-router-dom";

export default function SimultationsDashboard(){
    return(
       <Routes>
            <Route index element={<SimulationsWelcome/>}/>
            <Route path="faculty-level" element={<SimulationsFaculty/>}/>
            <Route path="academia-level" element={<SimulationsAcademia/>}/>
       </Routes>
    )
}