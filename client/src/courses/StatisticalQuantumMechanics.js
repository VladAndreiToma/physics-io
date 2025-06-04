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
        Quantum Statistical Mechanics – Introduction`,
            markdown: `
        Combines quantum mechanics with statistical methods to study large ensembles. Systems are described by statistical ensembles instead of pure states.`
        },
        {
            title: `
        Density Matrix Formalism`,
            markdown: `
        Describes mixed states using the **density operator**:  
        \\[ \\rho = \\sum_k p_k |\\psi_k\\rangle \\langle \\psi_k| \\]  
        Expectation value of observable Â:  
        \\[ \\langle \\hat{A} \\rangle = \\mathrm{Tr}(\\rho \\hat{A}) \\]`
        },
        {
            title: `
        Partition Function and Ensemble Theory`,
            markdown: `
        For canonical ensemble:  
        \\[ Z = \\mathrm{Tr}(e^{-\\beta \\hat{H}}) \\]  
        where \\[ \\beta = \\frac{1}{k_B T} \\], \\[ \\hat{H} \\] is the Hamiltonian.  
        All thermodynamic quantities follow from \\[ Z \\].`
        },
        {
            title: `
        Quantum Gases: Bose-Einstein and Fermi-Dirac`,
            markdown: `
        - Bose-Einstein Statistics (bosons):  
        \\[ n(\\varepsilon) = \\frac{1}{e^{\\beta(\\varepsilon - \\mu)} - 1} \\]
        
        - Fermi-Dirac Statistics (fermions):  
        \\[ n(\\varepsilon) = \\frac{1}{e^{\\beta(\\varepsilon - \\mu)} + 1} \\]
    
        \\[ \\mu \\] is chemical potential, \\[ \\beta = \\frac{1}{k_B T} \\]`
        },
        {
            title: `
        Blackbody Radiation`,
            markdown: `
        Planck's law derived using Bose-Einstein statistics for photons:  
        \\[ u(\\nu) d\\nu = \\frac{8 \\pi h \\nu^3}{c^3} \\cdot \\frac{1}{e^{\\frac{h \\nu}{k_B T}} - 1} d\\nu \\]`
        },
        {
            title: `
        Bose-Einstein Condensation`,
            markdown: `
        At low temperatures, bosons can condense into the ground state.  
        Macroscopic occupation number:  
        \\[ \\frac{N_0}{N} \\approx 1 - \\left( \\frac{T}{T_c} \\right)^{3/2} \\]`
        },
        {
            title: `
        Fermi Gas and Degeneracy Pressure`,
            markdown: `
        Fermions fill lowest energy states up to Fermi energy.  At \\( T = 0 \\):  
        \\[ E_F = \\frac{\\hbar^2}{2m} (3 \\pi^2 n)^{2/3} \\]  
        Degeneracy pressure explains stability of white dwarfs, neutron stars.`
        },
        {
            title: `
        Entropy and Quantum Thermodynamics`,
            markdown: `
        Von Neumann entropy:  
        \\[ S = -k_B \\mathrm{Tr}(\\rho \\ln \\rho) \\]  
        Quantum thermodynamics explores the limits of heat, work, and entropy in quantum systems.`
        },
        {
            title: `
        Quantum Ensembles`,
            markdown: `
        - Microcanonical: fixed energy  \\[\\]
        - Canonical: fixed T, exchange energy \
        - Grand Canonical: exchange particles and energy \ 
    
        All described using partition functions and density matrices.`
        },
        {
            title: `
        Summary`,
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