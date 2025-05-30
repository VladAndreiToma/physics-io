import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function SolidStateAndSemiconductors(){
    
    //calling the custom hook for trackign courses
    useTrackCourseVisit();

    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    const content = [
        {
          title: `
# Crystal Lattices and Unit Cells`,
          markdown: `
### Lattice & Basis
  - A **lattice** is a periodic array of points in space.
  - A **basis** is a group of atoms attached to each lattice point.
### Unit Cells
  - **Primitive cell**: smallest unit cell that repeats to build the entire lattice.
  - **Conventional cell**: often larger, chosen for symmetry.
### Bravais Lattices
  - 2D: oblique, rectangular, square, hexagonal, centered rectangular.
  - 3D: 14 types including cubic, tetragonal, orthorhombic.
### Common Crystal Structures
  - **Face-Centered Cubic (FCC)**
  - **Body-Centered Cubic (BCC)**
  - **Hexagonal Close-Packed (HCP)**`
        },
        {
          title: `
# Crystallographic Notation and X-Ray Diffraction`,
          markdown: `
### Miller Indices
  - Notation for planes: \\( (hkl) \\)
  - Procedure: intercept → reciprocal → reduce
### X-ray Diffraction & Bragg's Law
  - Constructive interference condition:
        \\[
        n\\lambda = 2d \\sin \\theta
        \\]
  - Used to determine crystal structure via diffraction patterns`
        },
        {
          title: `
# Reciprocal Lattice and Brillouin Zones`,
          markdown: `
### Reciprocal Lattice
  - Constructed using:
        \\[
        \\vec{b}_1 = 2\\pi \\frac{\\vec{a}_2 \\times \\vec{a}_3}{\\vec{a}_1 \\cdot (\\vec{a}_2 \\times \\vec{a}_3)}
        \\]
  - Useful for analyzing diffraction and wave behavior
### Brillouin Zones
  - Constructed as Wigner-Seitz cell in reciprocal space
  - **First Brillouin Zone** contains critical points for band structure`
        },
        {
          title: `
# Free Electron Models`,
          markdown: `
### Drude Model (Classical)
  - Treats electrons as classical particles with scattering
  - Explains electrical conductivity and Ohm’s Law
### Sommerfeld Model (Quantum)
  - Incorporates Pauli Exclusion and Fermi-Dirac statistics
  - Introduces **Fermi level** and energy distributions
### Density of States (DOS)
  - Number of states per energy interval
  - DOS varies with dimensionality:
        - 1D: \\( \\propto \\frac{1}{\\sqrt{E}} \\)
        - 2D: constant
        - 3D: \\( \\propto \\sqrt{E} \\)`
        },
        {
          title: `
# Bloch’s Theorem and Energy Bands`,
          markdown: `
# Bloch’s Theorem
  - Electron wavefunction in periodic potential:
        \\[
        \\psi_k(x) = u_k(x) e^{ikx}
        \\]
### Kronig-Penney Model
  - 1D periodic potential
  - Leads to **allowed and forbidden energy bands**
### Band Structure Concepts
  - **Band gap**: energy difference between valence and conduction band
  - **Effective mass**: curvature of energy band
        \\[
        m^* = \\hbar^2 \\left( \\frac{d^2E}{dk^2} \\right)^{-1}
        \\]`
        },
        {
          title: `
# Semiconductors: Intrinsic and Extrinsic`,
          markdown: `
### Intrinsic Semiconductors
  - Pure materials (e.g., Si, Ge)
  - Equal electron and hole concentrations
### Extrinsic Semiconductors
  - Doped with donor or acceptor atoms
  - **n-type**: extra electrons
  - **p-type**: extra holes
### Carrier Concentration and Fermi Level
  - Temperature and doping affect Fermi level location
  - Determines conductivity`
        },
        {
          title: `
# PN Junctions and Diodes`,
          markdown: `
### PN Junction
  - Depletion region, built-in potential
  - Forward vs reverse bias behavior
### Breakdown Mechanisms
  - **Zener**: tunneling at high reverse voltages
  - **Avalanche**: impact ionization  
### Light-Emitting Devices
  - **LED**: Radiative recombination of electrons and holes
  - **Photodiodes**: Light absorption creates carriers`
        },
        {
          title: `
# Transistors and CMOS Technology`,
          markdown: `
### Bipolar Junction Transistor (BJT)
  - npn and pnp types
  - Operation modes: cutoff, active, saturation
### Field-Effect Transistors (FETs)
  - **MOSFET**: Metal-Oxide-Semiconductor FET
  - **JFET**: Junction FET
  - Voltage-controlled devices
### CMOS Logic
  - Complementary nMOS and pMOS transistors
  - Low power digital circuits`
        },
        {
          title: `
# Semiconductor Fabrication`,
          markdown: `
### Lithography
  - Patterning techniques (UV, EUV, electron beam)
### Doping
  - Introducing impurities by diffusion or ion implantation
### Etching
  - Wet and dry etching for material removal
### Cleanroom Techniques
  - Classifications and contamination control for nanoscale fabrication`
        },
        {
          title: `
# Summary`,
          markdown: `
This course explores the structure and behavior of solids, focusing on crystals, electrons in periodic potentials, and semiconductors. Topics include:
  - Lattice theory and Bravais classifications
  - X-ray diffraction and reciprocal space
  - Free electron and quantum models
  - Energy bands and semiconductors
  - Diodes, transistors, and modern fabrication methods
      
It builds foundational knowledge for electronics, materials science, and device physics.`
        }
      ];
    
      const location = useLocation();     let pathway = location . pathname . split( "/" );  let topic = pathway[ pathway.length-1 ];

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