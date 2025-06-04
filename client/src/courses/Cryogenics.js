import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import useTrackCourseVisit from "./visitCourseApi";
import { useNewtoniumClose } from "./useNewtoniumClose";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";
import AskNewtonium from "../AskNewtonium";
import cryo1 from "../images/cryogenic-devices-velox-software-tool.webp";
import cryo2 from "../images/cryo2.jpg";            import cryo3 from "../images/cryo3.jpeg";           import cryo4 from "../images/cryo4.png"; 
import CoursePictureShowcaseContainer from "../custom_imported_components/CoursePictureShowcaseContainer";

export default function Cryogenics(){
    
    const location = useLocation();
    useTrackCourseVisit();
    const[talkToNewtonium , setTalkToNewtonium ] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));
    
    const cryogenicTechnologiesContent = [
        {
          title: "Introduction to Cryogenics",
          markdown: `
      Cryogenics involves the study and application of materials and systems at extremely low temperatures, typically below 120 K.
      
      Common cryogens include:
      - Liquid helium (4.2 K)
      - Liquid nitrogen (77 K)
      - Liquid hydrogen (20.3 K)
      
      Applications span various fields:
      - Superconductivity
      - Quantum computing
      - Medical imaging (MRI)
      - Space technologies
      
      At cryogenic temperatures, materials exhibit unique behaviors:
      - Specific heat capacities decrease significantly.
      - Electrical resistivity in metals can drop to near zero (superconductivity).
      - Thermal conductivity varies, often increasing in pure metals.
          `
        },
      
        {
          title: "Thermodynamic Principles in Cryogenics",
          markdown: `
      Cryogenic systems operate under the fundamental laws of thermodynamics:
      
      **First Law (Energy Conservation):**
      \\[
      \\Delta U = Q - W
      \\]
      Where:
      - \\( \\Delta U \\): Change in internal energy
      - \\( Q \\): Heat added to the system
      - \\( W \\): Work done by the system
      
      **Second Law (Entropy and Efficiency):**
      The efficiency of refrigeration cycles is limited by the Carnot efficiency:
      \\[
      \\eta_{\\text{Carnot}} = 1 - \\frac{T_L}{T_H}
      \\]
      Where:
      - \\( T_L \\): Low (cold) temperature reservoir
      - \\( T_H \\): High (hot) temperature reservoir
      
      Entropy change is given by:
      \\[
      \\Delta S = \\int \\frac{\\delta Q}{T}
      \\]
      Understanding entropy and enthalpy changes is crucial for designing efficient cryogenic processes.
          `
        },
      
        {
          title: "Cryogenic Liquefaction Methods",
          markdown: `
      Several industrial-scale methods are employed to liquefy gases:
      
      **1. Linde-Hampson Process:**
      - Utilizes Joule–Thomson (JT) expansion.
      - Relies on isenthalpic expansion:
      \\[
      \\left(\\frac{\\partial T}{\\partial P}\\right)_H = -\\frac{T(\\partial V/\\partial T)_P}{C_P}
      \\]
      - Effective for gases with positive JT coefficients at room temperature.
      
      **2. Claude Process:**
      - Combines isentropic expansion (via turbines) and JT expansion.
      - More efficient than Linde-Hampson, especially for helium liquefaction.
      
      **3. Helium Liquefiers:**
      - Employ multiple stages with precooling and expansion.
      - Address helium's low inversion temperature (~40 K), requiring precooling below this point for JT expansion to be effective.
      
      Thermodynamic analysis involves evaluating enthalpy and entropy changes across each stage to optimize efficiency.
          `
        },
      
        {
          title: "Cryocoolers and Mechanical Refrigerators",
          markdown: `
      Cryocoolers are compact refrigeration systems achieving cryogenic temperatures:
      
      **1. Gifford-McMahon (GM) Cryocoolers:**
      - Operate on a regenerative cycle with a displacer piston.
      - Suitable for temperatures down to ~4 K.
      
      **2. Stirling Cryocoolers:**
      - Utilize the Stirling cycle with sinusoidal pressure and volume variations.
      - High efficiency for temperatures above 30 K.
      
      **3. Pulse Tube Cryocoolers:**
      - No moving parts in the cold region, reducing vibrations.
      - Rely on pressure oscillations and phase shifts between pressure and mass flow.
      
      Performance metrics include:
      - Cooling capacity (\\( Q_c \\))
      - Input power (\\( W_{in} \\))
      - Coefficient of Performance (COP):
      \\[
      COP = \\frac{Q_c}{W_{in}}
      \\]
          `
        },
      
        {
          title: "Storage and Transfer of Cryogenic Fluids",
          markdown: `
      Handling cryogenic fluids requires specialized equipment:
      
      **1. Storage Vessels:**
      - Dewar flasks with vacuum insulation minimize heat ingress.
      - Multilayer insulation (MLI) reduces radiative heat transfer:
      \\[
      Q_{rad} = \\sigma A (T_1^4 - T_2^4)
      \\]
      Where:
      - \\( \\sigma \\): Stefan-Boltzmann constant
      - \\( A \\): Surface area
      - \\( T_1, T_2 \\): Temperatures of surfaces
      
      **2. Transfer Systems:**
      - Use of phase separators to prevent gas bubbles.
      - Cryogenic valves designed to handle thermal contraction and prevent leaks.
      
      Material selection is critical:
      - Metals like stainless steel and aluminum alloys are preferred for their ductility at low temperatures.
      - Avoid materials that become brittle below their ductile-to-brittle transition temperature.
          `
        },
      
        {
          title: "Applications of Cryogenics",
          markdown: `
      Cryogenic technology enables advancements in various fields:
      
      **1. Superconductivity:**
      - Materials exhibit zero electrical resistance below critical temperatures.
      - Applications: MRI machines, particle accelerators, maglev trains.
      
      **2. Quantum Computing:**
      - Qubits require temperatures in the millikelvin range to maintain coherence.
      - Achieved using dilution refrigerators.
      
      **3. Cryopreservation:**
      - Preservation of biological samples at cryogenic temperatures.
      - Prevents ice crystal formation, maintaining cellular integrity.
      
      **4. Space Exploration:**
      - Cryogenic propellants (e.g., liquid hydrogen) used in rockets.
      - Infrared sensors cooled to reduce thermal noise.
          `
        },
      
        {
          title: "Advanced Cryogenic Techniques",
          markdown: `
      **1. Adiabatic Demagnetization Refrigeration (ADR):**
      - Utilizes the magnetocaloric effect:
      \\[
      \\Delta T_{ad} = -\\int_{H_0}^{H_1} \\left( \\frac{T}{C(T,H)} \\right)_H \\left( \\frac{\\partial M(T,H)}{\\partial T} \\right)_H dH
      \\]
      - Effective for achieving temperatures below 1 K.
      
      **2. Dilution Refrigeration:**
      - Employs a mixture of helium-3 and helium-4.
      - Below 0.87 K, the mixture separates into two phases, enabling continuous cooling:
      \\[
      \\Delta Q = T \\Delta S
      \\]
      - Capable of reaching temperatures in the millikelvin range.
      
      **3. Magnetic Refrigeration:**
      - Based on the magnetocaloric effect near magnetic phase transitions.
      - Potential for environmentally friendly refrigeration without greenhouse gases.
      
      These advanced techniques are pivotal for research in condensed matter physics, quantum computing, and astrophysics.
          `
        }
      ];
      
      
    const topic = location.pathname.split("/").pop();
    
    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
            {
                !talkToNewtonium ? 
                (<>
                    <CreateCoursePage hereProps={cryogenicTechnologiesContent} />
                    <CoursePictureShowcaseContainer images={[cryo1, cryo2 , cryo3]}/>
                    <CreateGoToProblems where_id={topic} />
                    <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                </>) : 
                (<PageOfChatBox />)
            }
            </div>
        </div>
    );
}