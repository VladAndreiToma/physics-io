import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import CreateGoToProblems from "./CreateGoToProblems";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";
import useTrackCourseVisit from "./visitCourseApi";
import TopBar from "../TopBar";

export default function StatisticalQuantumMechanics(){
    const content = [
        {
            title: `
        # Quantum Statistical Mechanics – Introduction`,
            markdown: `
        Combines quantum mechanics with statistical methods to study large ensembles. Systems are described by statistical ensembles instead of pure states.`
        },
        {
            title: `
        # Density Matrix Formalism`,
            markdown: `
        Describes mixed states using the **density operator**:
        ρ = ∑ₖ pₖ |ψₖ⟩⟨ψₖ|  
        Expectation value of observable Â:
        ⟨Â⟩ = Tr(ρÂ)`
        },
        {
            title: `
        # Partition Function and Ensemble Theory`,
            markdown: `
        For canonical ensemble:  
        Z = Tr(e^(−βĤ))  
        where β = 1 / (k_B T), Ĥ is the Hamiltonian.  
        All thermodynamic quantities follow from Z.`
        },
        {
            title: `
        # Quantum Gases: Bose-Einstein and Fermi-Dirac`,
            markdown: `
        - **Bose-Einstein Statistics** (bosons):  
        n(ε) = 1 / (e^{β(ε−μ)} − 1)
        
        - **Fermi-Dirac Statistics** (fermions):  
        n(ε) = 1 / (e^{β(ε−μ)} + 1)

        μ is chemical potential, β = 1 / (k_B T)`
        },
        {
            title: `
        # Blackbody Radiation`,
            markdown: `
        Planck's law derived using Bose-Einstein statistics for photons:  
        u(ν) dν = (8πhν³ / c³) · 1 / (e^{hν / k_B T} − 1) dν`
        },
        {
            title: `
        # Bose-Einstein Condensation`,
            markdown: `
        At low temperatures, bosons can condense into the ground state.  
        Macroscopic occupation number:  
        N₀ / N ≈ 1 − (T / T_c)^{3/2}`
        },
        {
            title: `
        # Fermi Gas and Degeneracy Pressure`,
            markdown: `
        Fermions fill lowest energy states up to Fermi energy.  
        At T = 0:  
        E_F = (ℏ² / 2m) (3π²n)^{2/3}  
        Degeneracy pressure explains stability of white dwarfs, neutron stars.`
        },
        {
            title: `
        # Entropy and Quantum Thermodynamics`,
            markdown: `
        Von Neumann entropy:  
        S = −k_B Tr(ρ ln ρ)  
        Quantum thermodynamics explores the limits of heat, work, and entropy in quantum systems.`
        },
        {
            title: `
        # Quantum Ensembles`,
            markdown: `
        - **Microcanonical**: fixed energy  
        - **Canonical**: fixed T, exchange energy  
        - **Grand Canonical**: exchange particles and energy  

        All described using partition functions and density matrices.`
        },
        {
            title: `
        # Summary`,
            markdown: `
        Statistical Quantum Mechanics generalizes classical statistical mechanics to include quantum states and statistics. It is essential for describing systems with many particles, like quantum gases, condensed matter systems, and thermal radiation.`
        }
    ];

    // location  and topic obtaining
    const location = useLocation();     const topic = location.pathname.split("/").pop();
    // talk to newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose( ()=>setTalkToNewtonium(false) );
    //mark visitaion of course
    useTrackCourseVisit();

return(
    <div className="course-page">
        <TopBar/>
        <div className="content-for-course">
        {!talkToNewtonium ? 
            (<>
            <CreateCoursePage hereProps={content} />
            <CreateGoToProblems where_id={topic} />
            <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
            </>) : 
            (<PageOfChatBox />)
        }
        </div>
    </div>
);
}