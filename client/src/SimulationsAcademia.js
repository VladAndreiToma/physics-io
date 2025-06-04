import { useContext } from "react";
import UserLoginContext from "./AppContexts";
import TopBar from "./TopBar";
import SimulationsSlider from "./style_components/SimulationsSlider";
import InsertBottom5vh from "./style_components/InsertBottom5vh";
import KeyElementsInSimulation from "./style_components/KeyElementsInSimulation";
export default function SimulationsAcademia(){
    const {username, userid} = useContext(UserLoginContext);
    
    // CERN / High-Energy Physics
        const cernSimulations = [
        "Quark-Gluon Plasma Evolution at LHC Energies",
        "Proton-Proton Collision Simulation at 13 TeV",
        "Higgs Boson Decay Channel Visualization",
        "Supersymmetry Particle Tracks in CMS Detector",
        "ATLAS Event Reconstruction Engine",
        "Dark Matter Search via Missing Energy",
        "Beamline Propagation and Focusing (CERN Linac4)"
        ];

        // GSI / FAIR (Nuclear and Hadronic Matter)
        const gsiSimulations = [
        "Heavy Ion Collision Models at SIS100",
        "Fragmentation of Exotic Nuclei (FRS Analysis)",
        "Hypernuclei Production Chain Simulation",
        "Antiproton-Annihilation in Nuclear Medium",
        "CBM Experiment: Event Filtering Algorithms",
        "Phase Diagram of Strongly Interacting Matter",
        "In-Medium Mass Shifts of Vector Mesons"
        ];

        // Plasma Physics / Fusion (ITER, JET, EAST)
        const plasmaFusionSimulations = [
        "Tokamak Magnetic Confinement Field Lines",
        "Plasma Edge Turbulence and Instabilities",
        "Divertor Heat Flux Distribution (ITER)",
        "Alfvén Waves in Magnetically Confined Plasmas",
        "Runaway Electron Dynamics in Disruptions",
        "Neutron Transport in Fusion Reactors",
        "Fusion Triple Product Optimization Paths"
        ];

        // MIT / Quantum & Computational Physics
        const mitSimulations = [
        "Quantum Lattice Simulators (MIT Center for Ultracold Atoms)",
        "Simulating Quantum Error Correction Codes",
        "Chaos in the Double Pendulum and Quantum Analogs",
        "Quantum Optics: Photon Interference Patterns",
        "Electron Band Structures in 2D Materials",
        "Nonlinear Dynamics in Coupled Oscillators",
        "Time-Dependent Schrödinger Equation Solver"
        ];

        // UK / JET / Theoretical Physics
        const ukSimulations = [
        "JET Tokamak Power Output and Plasma Shaping",
        "Magnetic Island Formation in MHD",
        "Helical Coil Field Line Mapping",
        "Fermionic Path Integrals in Lattice QCD",
        "Black Hole Thermodynamics Models",
        "Quantum Gravity via Loop Quantization",
        "Entanglement Entropy in Conformal Field Theory"
        ];

        // Berkeley / Particle Astrophysics
        const berkeleySimulations = [
        "Neutrino Oscillation Patterns (DUNE-Like Models)",
        "Axion-like Particle Searches in Cosmological Data",
        "Cosmic Ray Shower Modeling in the Atmosphere",
        "Dark Energy Scalar Field Dynamics",
        "Time Evolution of Expanding Universes",
        "Simulating Hawking Radiation near Event Horizons",
        "Gamma Ray Burst Engine Simulation"
        ];

    const academiaKeyWords = [
        "quantum field theory",
        "plasma confinement",
        "particle collisions",
        "higgs boson",
        "neutrino oscillations",
        "dark matter",
        "tokamak simulation",
        "relativistic dynamics",
        "quark-gluon plasma",
        "magnetohydrodynamics",
        "entanglement entropy",
        "black hole radiation",
        "fusion reactor physics"
    ];
    const academiaArrangements = [4,5,4];
    
    return(
        <div className="simulations-academia-holder">
            <TopBar/>
            <div className="simulations-library">
                <KeyElementsInSimulation items={academiaKeyWords} rowsConfig={academiaArrangements}/>
                <SimulationsSlider simulations={cernSimulations}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={gsiSimulations}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={plasmaFusionSimulations}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={mitSimulations}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={ukSimulations}/>
                <div className="fade-separator-line"></div>
                <SimulationsSlider simulations={berkeleySimulations}/>
                <InsertBottom5vh/>
            </div>
        </div>
    )
}