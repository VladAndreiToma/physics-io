import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";
import useTrackCourseVisit from "./visitCourseApi";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function ElectrodynamicsAndRelativity(){
    
    //getting the current location
    const location = useLocation();
    
    // visitation metrics
    useTrackCourseVisit();

    //talk to newtonium
    const [talkToNewtonium,setTalkToNewtonium]=useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    const content = [
      {
        title: "Electromagnetic Waves in Vacuum",
        markdown: `
    Maxwell’s equations with no free charge or current give the wave equations  
    
    \\[
    \\nabla^{2}\\mathbf{E}=\\mu_{0}\\varepsilon_{0}\\,\\frac{\\partial^{2}\\mathbf{E}}{\\partial t^{2}},
    \\qquad
    \\nabla^{2}\\mathbf{B}=\\mu_{0}\\varepsilon_{0}\\,\\frac{\\partial^{2}\\mathbf{B}}{\\partial t^{2}}
    \\]
    
    Their transverse solutions propagate at  
    
    \\[
    c=\\frac{1}{\\sqrt{\\mu_{0}\\varepsilon_{0}}}\\approx3\\times10^{8}\\;\\text{m/s}.
    \\]
    `
      },
    
      {
        title: "Plane Wave Solutions",
        markdown: `
    - Electric field  
      \\[
      \\mathbf{E}(\\mathbf{r},t)=\\mathbf{E}_{0}\\cos(\\mathbf{k}\\!\\cdot\\!\\mathbf{r}-\\omega t)
      \\]
    
    - Magnetic field  
      \\[
      \\mathbf{B}=\\frac{1}{c}\\,(\\mathbf{k}\\times\\mathbf{E})
      \\]
    
    - \\(\\mathbf{E}\\perp\\mathbf{B}\\perp\\mathbf{k}\\)
    `
      },
    
      {
        title: "Energy and Power in EM Waves",
        markdown: `
    - Energy density  
      \\[
      u=\\tfrac{1}{2}\\,\\varepsilon_{0}E^{2}+\\tfrac{1}{2}\\,\\mu_{0}B^{2}=\\varepsilon_{0}E^{2}
      \\]
    
    - Poynting vector  
      \\[
      \\mathbf{S}=\\frac{1}{\\mu_{0}}\\,\\mathbf{E}\\times\\mathbf{B}
      \\]
    
    - Time-averaged intensity  
      \\[
      I=\\langle|\\mathbf{S}|\\rangle=\\tfrac12\\,\\varepsilon_{0}cE_{0}^{2}
      \\]
    `
      },
    
      {
        title: "Electromagnetic Waves and Special Relativity",
        markdown: `
    Maxwell predicts the same light speed \\(c\\) in every inertial frame.  
    Galilean transformations cannot keep \\(c\\) constant, so consistency demands Lorentz invariance → special relativity.
    `
      },
    
      {
        title: "Lorentz Transformations of Fields",
        markdown: `
    For a frame moving at velocity \\(\\mathbf{v}\\):
    
    \\[
    E'_{\\parallel}=E_{\\parallel},\\quad
    \\mathbf{E}'_{\\perp}=\\gamma\\,(\\mathbf{E}_{\\perp}+\\mathbf{v}\\times\\mathbf{B})
    \\]
    
    \\[
    B'_{\\parallel}=B_{\\parallel},\\quad
    \\mathbf{B}'_{\\perp}=\\gamma\\!\\left(\\mathbf{B}_{\\perp}-\\frac{\\mathbf{v}\\times\\mathbf{E}}{c^{2}}\\right)
    \\]
    
    Electric and magnetic fields are components of one electromagnetic field tensor \\(F_{\\mu\\nu}\\).
    `
      },
    
      {
        title: "Relativistic Charge Dynamics: Liénard–Wiechert Potentials",
        markdown: `
    Potentials of a point charge moving with velocity \\(\\mathbf{v}(t)\\)
    
    \\[
    \\varphi(\\mathbf{r},t)=
    \\left[
    \\frac{q}{4\\pi\\varepsilon_{0}}\\,\\frac{1}{(1-\\mathbf{n}\\!\\cdot\\!\\boldsymbol{\\beta})R}
    \\right]_{\\text{ret}},
    \\qquad
    \\mathbf{A}(\\mathbf{r},t)=
    \\left[
    \\frac{\\mu_{0}q\\,\\mathbf{v}}{4\\pi(1-\\mathbf{n}\\!\\cdot\\!\\boldsymbol{\\beta})R}
    \\right]_{\\text{ret}}
    \\]
    
    with \\(\\boldsymbol{\\beta}=\\mathbf{v}/c\\), \\(\\mathbf{n}\\) the unit vector to the observation point,  
    and \\(R\\) the retarded distance. Fields follow from spatial and time derivatives of these potentials.
    `
      },
    
      {
        title: "Radiation from Accelerated Charges",
        markdown: `
    A charge with acceleration \\(\\mathbf{a}\\) radiates power (non-relativistic)
    
    \\[
    P=\\frac{\\mu_{0}q^{2}a^{2}}{6\\pi c}.
    \\]
    
    At relativistic speeds the radiation is strongly beamed in the forward direction.
    `
      },
    
      {
        title: "Synchrotron and Bremsstrahlung Radiation",
        markdown: `
    - Synchrotron: emitted by relativistic charges spiralling in magnetic fields (accelerators, cosmic jets).  
    - Bremsstrahlung: produced when charges decelerate in the electric fields of other particles (X-ray tubes, high-energy collisions).
    `
      },
    
      {
        title: "Electromagnetic Wave Four-Vector and Tensor Formulation",
        markdown: `
    Field-strength tensor  
    
    \\[
    F_{\\mu\\nu}=
    \\begin{pmatrix}
    0 & -E_{x}/c & -E_{y}/c & -E_{z}/c \\\\
    E_{x}/c & 0 & -B_{z} & B_{y} \\\\
    E_{y}/c & B_{z} & 0 & -B_{x} \\\\
    E_{z}/c & -B_{y} & B_{x} & 0
    \\end{pmatrix}
    \\]
    
    This unifies \\(\\mathbf{E}\\) and \\(\\mathbf{B}\\) and makes Maxwell’s equations manifestly covariant.
    `
      },
    
      {
        title: "Covariant Maxwell Equations",
        markdown: `
    \\[
    \\partial^{\\mu}F_{\\mu\\nu}=\\mu_{0}J_{\\nu},
    \\qquad
    \\partial_{\\sigma}F_{\\mu\\nu}+\\partial_{\\mu}F_{\\nu\\sigma}+\\partial_{\\nu}F_{\\sigma\\mu}=0.
    \\]
    
    \\(J_{\\nu}\\) is the four-current; \\(\\partial_{\\mu}\\) is the four-gradient.
    `
      },
    
      {
        title: "Applications",
        markdown: `
    - GPS satellites require special- and general-relativistic corrections.  
    - Particle accelerators exploit synchrotron radiation and relativistic dynamics.  
    - Astrophysical jets emit beamed synchrotron radiation observable across the spectrum.  
    - Plasma physics models relativistic electron behaviour in fusion and cosmic plasmas.
    `
      },
    
      {
        title: "Summary",
        markdown: `
    Maxwell’s equations imply a universal light speed and demand Lorentz symmetry.  
    Moving or accelerated charges require relativistic electrodynamics to describe field transformations, energy flow, and radiation.  
    This framework underpins modern electromagnetism, particle physics, astrophysics, and advanced technology.
    `
      }
    ];
    

    const pathSegments = location.pathname.split("/")
    const topic = pathSegments.pop();
    console.log(topic);

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
    </div>);
}