import TopBar from "../TopBar"
import CreateCoursePage from "./CreateCoursePage"
import { useLocation } from "react-router-dom"
import CreateGoToProblems from "./CreateGoToProblems"
import useTrackCourseVisit from "./visitCourseApi"
import { useNewtoniumClose } from "./useNewtoniumClose"
import PageOfChatBox from "../PageOfChatBox"
import { useState } from "react"
import AskNewtonium from "../AskNewtonium"

export default function AdvancedOpticsForLaserSystems(){
    //1. process location for further problems dynamic fetching based on course subject
    const location = useLocation();
    //2. mark course visited
    useTrackCourseVisit();
    //control newtonium
    const [talkToNewtonium, setTalkToNewtonium] = useState( false );
    useNewtoniumClose( ()=>setTalkToNewtonium(false) );
    // define my content here as its not changing fast
    const opticsContent = [
        {
          title: "Gaussian Beams and Focal Distributions",
          markdown: `
      Gaussian beams describe the electric field profile of many laser systems.
      
      - Field amplitude in the paraxial approximation:  
        \\[
        E(r,z) = E_0 \\frac{w_0}{w(z)} \\exp\\left(-\\frac{r^2}{w^2(z)}\\right) \\exp\\left[i(kz - \\omega t + \\phi(z) - \\frac{kr^2}{2R(z)})\\right]
        \\]
      
      Where:
      - \\(w(z)\\): beam waist evolution  
      - \\(R(z)\\): radius of curvature  
      - \\(\\phi(z)\\): Gouy phase  
      - \\(r\\): radial distance from beam center
      `
        },
      
        {
          title: "Polarization States of Light",
          markdown: `
      Polarization describes the vector orientation of the electric field.
      
      - Linear polarization: field oscillates in one fixed direction  
      - Circular polarization: field rotates in a helix  
      - Elliptical polarization: general case of varying amplitude/phase
      
      Stokes parameters can quantify polarization experimentally.
      `
        },
      
        {
          title: "Paraxial Approximation and Beam Propagation",
          markdown: `
      The paraxial approximation simplifies Maxwell’s equations for slowly varying transverse profiles.
      
      - Assumes small angles with respect to the optical axis  
      - Valid when  
        \\[
        \\left|\\frac{\\partial^2 E}{\\partial z^2}\\right| \\ll \\left|k\\frac{\\partial E}{\\partial z}\\right|
        \\]
      
      This allows derivation of the Gaussian beam solution from the Helmholtz equation.
      `
        },
      
        {
          title: "Chirped Pulses and Pulse Compression",
          markdown: `
      In ultrafast lasers, pulses are often chirped — frequency varies over time.
      
      - Positive chirp: frequency increases with time  
      - Negative chirp: frequency decreases with time
      
      **Chirped Pulse Amplification (CPA)** stretches, amplifies, and compresses a pulse to avoid damage:
      
      \\[
      \\text{Stretch} \\rightarrow \\text{Amplify} \\rightarrow \\text{Compress}
      \\]
      
      This technique is key for generating femtosecond, petawatt-class pulses.
      `
        },
      
        {
          title: "Pump-Probe and Amplification Systems",
          markdown: `
      Laser gain media are pumped optically or electrically.
      
      - **Pumping** excites atoms to upper levels  
      - **Population inversion** enables stimulated emission  
      - **Probing** allows time-resolved measurement of dynamics
      
      Used in Ti:Sapphire or Nd:YAG laser systems, often combined with regenerative or multi-pass amplifiers.
      `
        },
      
        {
          title: "ABCD Matrix Formalism in Optics",
          markdown: `
      Matrix optics uses transfer matrices to model beam propagation.
      
      - Free space:  
        \\[
        M = \\begin{bmatrix} 1 & d \\\\ 0 & 1 \\end{bmatrix}
        \\]
      
      - Thin lens:  
        \\[
        M = \\begin{bmatrix} 1 & 0 \\\\ -1/f & 1 \\end{bmatrix}
        \\]
      
      Propagation of a ray or Gaussian beam:  
      \\[
      \\begin{bmatrix} x_2 \\\\ \\theta_2 \\end{bmatrix} = M \\begin{bmatrix} x_1 \\\\ \\theta_1 \\end{bmatrix}
      \\]
      
      ABCD laws also apply to Gaussian beam parameters.
      `
        },
      
        {
          title: "Ultra-Intense Laser–Matter Interactions",
          markdown: `
      At extreme intensities (\\(>10^{18} \\;\\text{W/cm}^2\\)), nonlinear and relativistic effects occur:
      
      - Relativistic electron motion  
      - Ionization and wakefield acceleration  
      - High harmonic generation (HHG)
      
      Described by the dimensionless laser amplitude \\(a_0\\):
      
      \\[
      a_0 = \\frac{eE_0}{m_e c \\omega}
      \\]
      Relativistic effects occur when \\(a_0 > 1\\).
      `
        },
      
        {
          title: "Plasma Optics and Self-Focusing",
          markdown: `
      Plasmas behave as nonlinear optical media at high intensity.
      
      - **Self-focusing** occurs when the nonlinear index increases with intensity  
      - Critical power for self-focusing:  
        \\[
        P_c = \\frac{17 \\lambda^2}{n_0 n_2}
        \\]
      
      Applications include laser-driven acceleration and plasma waveguides.
      `
        },
      
        {
          title: "Nonlinear Optics in Ultra-Fast Systems",
          markdown: `
      Ultrafast systems exploit nonlinear processes:
      
      - Second harmonic generation (SHG)  
      - Third harmonic generation (THG)  
      - Four-wave mixing  
      - Kerr effect (\\(n = n_0 + n_2 I\\))
      
      Nonlinear interactions require phase matching for efficient conversion.
      `
        }
      ];
      
    // i get the topic from the course name
    const topic = location.pathname.split("/").pop();

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                {!talkToNewtonium?
                (<>
                    <CreateCoursePage hereProps={opticsContent}/>
                    <CreateGoToProblems where_id={topic}/>
                    <AskNewtonium onClick={()=>setTalkToNewtonium(prev=>!prev)}/>
                </>)
                :
                (<PageOfChatBox/>)


                }
            </div>
        </div>
    )
}