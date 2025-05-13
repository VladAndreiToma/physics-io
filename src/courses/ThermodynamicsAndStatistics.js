import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import { path } from "framer-motion/client";
import CreateGoToProblems from "./CreateGoToProblems";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function ThermodynamicsAndStatistics(){
    
    //custom hook for courses tracking calling here
    useTrackCourseVisit();

    const content = [
        {
          title: `
# Fundamental Laws of Thermodynamics`,
          markdown: `
### Zeroth Law: Thermal Equilibrium
    If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.  
    This defines \`temperature\` as a fundamental physical quantity.
### First Law: Energy Conservation
      \\[
      \\Delta U = Q - W
      \\]
      - \\( \\Delta U \\) = change in internal energy  
      - \\( Q \\) = heat added to the system  
      - \\( W \\) = work done by the system  
    This is the principle of \`energy conservation\` in thermodynamics.
### Second Law: Entropy Increase
      \\[
      dS \\geq \\frac{dQ}{T}
      \\]
    - In a \`reversible process\`: \\( dS = dQ/T \\)  
    - In an \`irreversible process\`: \\( dS > dQ/T \\)  
    Entropy (\\( S \\)) \`always increases\` in an isolated system → Defines the direction of natural processes.
### Third Law: Absolute Zero
      \\[
      S \\to 0 \\quad \\text{as} \\quad T \\to 0
      \\]
    - The entropy of a perfect crystal approaches \`zero\` at absolute zero temperature (\\( 0K \\)).`
        },
        {
          title: `
# Thermodynamic State Variables`,
          markdown: `- \`Pressure\` (\\( P \\)) – Force per unit area  
    - \`Volume\` (\\( V \\)) – Space occupied  
    - \`Temperature\` (\\( T \\)) – Proportional to average kinetic energy  
    - \`Internal Energy\` (\\( U \\)) – Total energy in the system
    Equation of state for \`ideal gases\`:
      \\[
      PV = nRT
      \\]
    where \\( n \\) is the number of moles, and \\( R \\) is the universal gas constant.`
        },
        {
          title: `
# Thermodynamic Transformations`,
          markdown: `
### Quasistatic Processes
    - \`Isothermal\` (\\( T = \\text{constant} \\)): \\( PV = \\text{constant} \\)
    - \`Adiabatic\` (\\( Q = 0 \\)): \\( PV^\\gamma = \\text{constant} \\), where \\( \\gamma = C_p/C_v \\)
    - \`Isobaric\` (\\( P = \\text{constant} \\)): \\( W = P \\Delta V \\)
    - \`Isochoric\` (\\( V = \\text{constant} \\)): \\( W = 0 \\), all heat goes into internal energy
### \`Heat Engines and Efficiency\`
    A heat engine absorbs heat \\( Q_h \\), does work \\( W \\), and rejects heat \\( Q_c \\):
      \\[
      \\eta = \\frac{W}{Q_h} = 1 - \\frac{Q_c}{Q_h}
      \\]
      
      \`Carnot efficiency\` (maximum efficiency possible):
      \\[
      \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}
      \\]`
        },
        {
          title: `
# Entropy and Thermodynamic Potentials`,
          markdown: `
Entropy quantifies disorder. In equilibrium:
      \\[
      dS = \\frac{dQ_{\\text{rev}}}{T}
      \\]
Common \`thermodynamic potentials\`:
      - \`Internal energy\` \\( U \\)
      - \`Helmholtz free energy\` \\( F = U - TS \\)
      - \`Gibbs free energy\` \\( G = U + PV - TS \\)
      - \`Enthalpy\` \\( H = U + PV \\)
These determine system stability and phase transitions.`
        },
        {
          title: `
# Kinetic Theory of Gases`,
          markdown: `
### \`Molecular Interpretation of Temperature\`
      \\[
      KE_{\\text{avg}} = \\frac{3}{2} k_B T
      \\]
    Each degree of freedom contributes \\( \\frac{1}{2} k_B T \\) to energy.
### \`Maxwell-Boltzmann Speed Distribution\`
    The probability of finding a molecule with speed \\( v \\):
      
      \\[
      f(v) = \\left( \\frac{m}{2\\pi k_B T} \\right)^{3/2} 4\\pi v^2 e^{- \\frac{mv^2}{2 k_B T}}
      \\]
      
    - \`Most probable speed\`: \\( v_p = \\sqrt{\\frac{2k_B T}{m}} \\)
    - \`Mean speed\`: \\( v_{\\text{avg}} = \\sqrt{\\frac{8k_B T}{\\pi m}} \\)
    - \`Root mean square speed\`: \\( v_{\\text{rms}} = \\sqrt{\\frac{3k_B T}{m}} \\)
These describe molecular motion in gases.`
        },
        {
          title: `
# Partition Functions and Quantum Statistics`,
          markdown: `
### \`Canonical Partition Function\`
      \\[
      Z = \\sum_i e^{-E_i / k_B T}
      \\]
    Determines the probability of a system occupying energy level \\( E_i \\).
### \`Classical vs Quantum Distributions\`
    Three key distributions emerge from statistical mechanics:
      
    | \`Type\` | \`System\` | \`Distribution Function\` |
    |---------|------------|---------------------------|
    | \`Maxwell-Boltzmann\` | Classical Particles | \\( f(E) = e^{-E/k_B T} \\) |
    | \`Fermi-Dirac\` | Fermions (Electrons) | \\( f(E) = \\frac{1}{e^{(E - \\mu)/k_B T} + 1} \\) |
    | \`Bose-Einstein\` | Bosons (Photons) | \\( f(E) = \\frac{1}{e^{(E - \\mu)/k_B T} - 1} \\) |
    - \`Fermions\`: Obey \`Pauli exclusion\` principle.  
    - \`Bosons\`: Can condense into the \`Bose-Einstein condensate\` (BEC) at low temperatures.`
        },
        {
          title: `
# Applications in Physics and Engineering`,
          markdown: `
- \`Heat Exchangers\`: Used in engines, refrigeration, and industrial processes.  
- \`Thermodynamics of Black Holes\`: Hawking radiation, entropy proportional to event horizon area.  
- \`Cosmology\`: Blackbody radiation and cosmic microwave background (CMB).  
- \`Semiconductors\`: Fermi-Dirac statistics determine electron behavior.`
        },
        {
          title: `
# Summary`,
          markdown: `
Thermodynamics and Statistical Mechanics describe macroscopic properties of matter based on microscopic interactions. The laws of thermodynamics govern \`energy conservation\` and \`entropy\`, while statistical distributions explain molecular behavior and quantum effects. This framework is fundamental to \`physics\`, \`chemistry\`, and \`engineering\`.`
        }
      ];

      const location = useLocation();
      const pathSegments = location . pathname . split("/");
      const topic = pathSegments[pathSegments.length-1];

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                <CreateCoursePage hereProps={ content }/>
                <CreateGoToProblems where_id={topic}/>
                <ChatBotBox/>
            </div>
        </div>
    )

}