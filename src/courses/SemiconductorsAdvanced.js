import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import CreateGoToProblems from "./CreateGoToProblems";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";
import useTrackCourseVisit from "./visitCourseApi";
import TopBar from "../TopBar";

export default function SemiconductorsAdvanced(){
    
    const content = [
  {
    title: `
Introduction to Semiconductors`,
    markdown: `
Semiconductors are materials with electrical conductivity between conductors and insulators. Their behavior is strongly influenced by temperature, impurities (dopants), and external fields.

- Intrinsic semiconductors: Pure materials like silicon or germanium
- Extrinsic semiconductors: Doped with impurities to alter carrier concentrations
- Conductivity depends on thermal excitation of electrons from valence to conduction band
- Applications span from diodes and transistors to LEDs and solar cells
`
  },
  {
    title: `
Band Theory of Solids`,
    markdown: `
Electrons in solids occupy energy bands. The energy gap (band gap) between valence and conduction bands determines the material's electrical properties.

- Conductors: Overlapping valence and conduction bands
- Insulators: Wide band gap, electrons cannot jump easily
- Semiconductors: Moderate band gap (~0.6 to 3 eV)
- Effective mass approximation and density of states
- Fermi level position determines carrier population
`
  },
  {
    title: `
Charge Carriers and Carrier Dynamics`,
    markdown: `
Charge carriers in semiconductors are electrons and holes.

- Drift: Motion due to applied electric field
- Diffusion: Motion due to concentration gradients
- Mobility: Measure of how easily carriers move
- Recombination: Electron-hole pairs annihilate, releasing energy
- Generation: Creation of pairs by thermal excitation or light absorption
- Continuity equation and carrier lifetime
`
  },
  {
    title: `
Doping and Carrier Concentration`,
    markdown: `
Doping adds impurity atoms to control electrical properties.

- N-type: Add donor atoms (extra electrons)
- P-type: Add acceptor atoms (holes)
- Ionization energy and full activation at room temperature
- Fermi level shifts closer to conduction band (n-type) or valence band (p-type)
- Carrier concentration is temperature and doping dependent
`
  },
  {
    title: `
PN Junctions and Diode Operation`,
    markdown: `
When p-type and n-type materials are joined, a PN junction is formed.

- Depletion region: Zone with immobile ionized dopants
- Built-in potential: Internal electric field at the junction
- Forward bias: Reduces barrier, current flows
- Reverse bias: Increases barrier, very small leakage current
- Current-voltage characteristics modeled by Shockley equation
- Breakdown mechanisms: Zener and avalanche
`
  },
  {
    title: `
Optoelectronic Devices`,
    markdown: `
Semiconductors can emit or absorb light based on energy transitions.

- LEDs: Forward-biased PN junctions emit light via recombination
- Laser diodes: Stimulated emission and optical feedback
- Photodiodes: Light absorption generates electron-hole pairs
- Solar cells: Convert absorbed photons into current
- Quantum efficiency and responsivity
- Materials must match the band gap to the desired photon energy
`
  },
  {
    title: `
Semiconductor Materials and Fabrication`,
    markdown: `
Common semiconductor materials include:

- Silicon: Most used in electronics and photovoltaics
- Gallium arsenide: High-speed and optoelectronics
- Indium phosphide: Telecom and high-frequency
- Silicon carbide and GaN: High-power and high-temperature

Fabrication steps:

- Crystal growth (Czochralski method)
- Wafer slicing and polishing
- Oxidation, diffusion, and ion implantation
- Lithography, etching, and metallization
`
  },
  {
    title: `
Transistors and Integrated Circuits`,
    markdown: `
Transistors are the building blocks of modern electronics.

- Bipolar Junction Transistors (BJTs): Current-controlled devices
- Field Effect Transistors (FETs): Voltage-controlled; includes MOSFETs
- MOSFETs: Gate voltage modulates conductivity of a channel
- CMOS technology: Uses complementary n-type and p-type MOSFETs
- Scaling and Moore’s Law
- Integration into complex ICs: Processors, memory, logic gates
`
  },
  {
    title: `
Quantum and Nano-scale Effects`,
    markdown: `
At nanometer scales, classical models break down.

- Quantum tunneling: Electrons penetrate potential barriers
- Quantum wells, wires, and dots: Confinement in one or more dimensions
- Ballistic transport and quantum conductance
- Single-electron transistors and nanowires
- Effects of defects, surface states, and dielectric breakdown
`
  },
  {
    title: `
Semiconductor Applications and Technologies`,
    markdown: `
Semiconductors are used in a vast array of applications:

- Consumer electronics: Smartphones, TVs, computers
- Renewable energy: Photovoltaic cells
- Communications: High-frequency and optoelectronic devices
- Automotive: Sensors and power electronics
- Medical: Imaging, diagnostics, and implantable devices

Emerging areas:

- Flexible electronics
- Organic semiconductors
- Quantum computing elements
- Photonic integrated circuits
`
  },
  {
    title: `
Summary`,
    markdown: `
Semiconductors are essential for modern technology, combining physics, materials science, and electrical engineering. Understanding their electronic structure, carrier behavior, and device principles enables the development of high-performance, efficient, and compact technologies.

This course covered:

- Band theory and carrier physics
- Junctions and optoelectronics
- Transistors and integrated devices
- Nanostructures and quantum effects
- Manufacturing and applications

Semiconductors lie at the heart of both classical and quantum-era innovation.
`
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
    )
}