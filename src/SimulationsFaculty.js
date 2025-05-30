import { useContext } from "react"
import UserLoginContext from "./AppContexts"
import TopBar from "./TopBar";
import SimulationsSlider from "./style_components/SimulationsSlider";
import InsertBottom5vh from "./style_components/InsertBottom5vh";
import KeyElementsInSimulation from "./style_components/KeyElementsInSimulation";

export default function SimulationsFaculty(){
    const { username, userid } = useContext(UserLoginContext);    
    
    const simulationContent1 = [
  "Simulation about the spacetime under the influence of gravity",
  "Simulation about the quantum field theory - fields geometry",
  "Visualization of electromagnetic wave propagation",
  "Modeling particle collisions in a collider",
  "Simulation of black hole event horizon dynamics",
  "Study of fluid dynamics in turbulent flows",
  "Heat transfer and thermodynamics processes simulation"
];

const simulationContent2 = [
  "Simulation of atomic orbitals and electron clouds",
  "Quantum entanglement and superposition demonstration",
  "Classical mechanics: projectile motion with air resistance",
  "Magnetic field interactions and Lorentz force visualization",
  "Wave-particle duality explained through double-slit experiment",
  "Simulation of thermal expansion in solids",
  "Analysis of harmonic oscillators and resonance phenomena"
];

const simulationContent3 = [
  "Modeling planetary orbits using Newtonian gravity",
  "Simulation of wave interference and diffraction patterns",
  "Visualization of special relativity time dilation effects",
  "Simulation of electrical circuits with resistors and capacitors",
  "Demonstration of conservation of momentum in collisions",
  "Heat conduction in various materials simulation",
  "Simulation of nuclear decay and radioactive processes"
];

const simulationContent4 = [
  "Simulation of chaos theory and butterfly effect",
  "Visualization of sound waves and frequency modulation",
  "Modeling of laser beam propagation and diffraction",
  "Simulation of gas laws and pressure-volume relationships",
  "Electrostatics: charge distribution and field lines",
  "Study of phase transitions in materials",
  "Simulation of Doppler effect and wave frequency shifts"
];

const simulationContent5 = [
  "Modeling superconductivity phenomena",
  "Simulation of gravitational waves from merging black holes",
  "Visualization of quantum tunneling effects",
  "Simulation of fluid flow through porous media",
  "Analysis of pendulum motion with damping",
  "Simulation of planetary atmospheres and climate models",
  "Study of magnetic resonance imaging principles"
];

const simulationContent6 = [
  "Simulation of photoelectric effect and electron emission",
  "Modeling the expansion of the universe and cosmology",
  "Visualization of Brownian motion in fluids",
  "Simulation of Newton’s cradle and energy transfer",
  "Study of plasma dynamics and magnetic confinement",
  "Modeling heat engines and efficiency calculations",
  "Simulation of light polarization and optical filters"
];

    const physicsKeywords = [
        "gravity",
        "quantum fields",
        "electromagnetism",
        "black holes",
        "fluid dynamics",
        "thermodynamics",
        "atomic structure",
        "relativity",
        "wave mechanics",
        "particle collisions",
        "nuclear decay",
        "superconductivity",
        "cosmology",
        "optics"
    ];    

    const keyWordsRowsConfig = [ 4,5,5 ];

    return(
        <div className="simulations-academia-holder">
            <TopBar/>
            <div className="simulations-library">
                <KeyElementsInSimulation items={physicsKeywords} rowsConfig={keyWordsRowsConfig}/>
                <SimulationsSlider simulations={simulationContent1}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={simulationContent2}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={simulationContent3}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={simulationContent4}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={simulationContent5}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={simulationContent6}/>
                <div className="fade-separator-line"></div>
                <InsertBottom5vh/>
            </div>
        </div>
    )
}