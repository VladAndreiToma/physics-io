import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function ExtendedElectroMagnetism(){

    //calling custom hook of tracking courses
    useTrackCourseVisit();
    //talk to newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose( () => setTalkToNewtonium(false) );

    const extendedElectromagnetismContent = [
      {
        title: "Maxwell's Equations in Vacuum",
        markdown: `
    Maxwell's equations describe the behavior of electric and magnetic fields:
    
    \\[
    \\nabla \\cdot \\mathbf{E} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}
    \\]
    
    \\[
    \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\epsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}
    \\]
    
    These equations predict electromagnetic waves traveling at speed \\( c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\).
        `
      },
      {
        title: "Electromagnetic Potentials",
        markdown: `
    Electric and magnetic fields can be derived from potentials:
    
    \\[
    \\mathbf{E} = -\\nabla \\phi - \\frac{\\partial \\mathbf{A}}{\\partial t}, \\quad \\mathbf{B} = \\nabla \\times \\mathbf{A}
    \\]
    
    where \\( \\phi \\) is the scalar potential and \\( \\mathbf{A} \\) is the vector potential.
        `
      },
      {
        title: "Gauge Freedom",
        markdown: `
    Potentials are not unique. Under a gauge transformation:
    
    \\[
    \\phi' = \\phi - \\frac{\\partial \\chi}{\\partial t}, \\quad \\mathbf{A}' = \\mathbf{A} + \\nabla \\chi
    \\]
    
    for arbitrary scalar function \\( \\chi \\), the fields \\( \\mathbf{E} \\) and \\( \\mathbf{B} \\) remain unchanged.
        `
      },
      {
        title: "Lorentz Gauge Condition",
        markdown: `
    Choosing the Lorentz gauge simplifies Maxwell’s equations:
    
    \\[
    \\nabla \\cdot \\mathbf{A} + \\frac{1}{c^2} \\frac{\\partial \\phi}{\\partial t} = 0
    \\]
    
    which allows wave equations for potentials:
    
    \\[
    \\Box \\phi = 0, \\quad \\Box \\mathbf{A} = 0
    \\]
    
    where \\( \\Box = \\nabla^2 - \\frac{1}{c^2} \\frac{\\partial^2}{\\partial t^2} \\) is the d'Alembertian operator.
        `
      },
      {
        title: "Extended Maxwell's Equations with Sources",
        markdown: `
    In the presence of charge density \\( \\rho \\) and current density \\( \\mathbf{J} \\):
    
    \\[
    \\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0}, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}
    \\]
    
    \\[
    \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}
    \\]
    
    These govern how charges and currents generate fields.
        `
      },
      {
        title: "Energy and Momentum in Electromagnetic Fields",
        markdown: `
    The energy density \\( u \\) and Poynting vector \\( \\mathbf{S} \\) describe energy flow:
    
    \\[
    u = \\frac{1}{2} \\epsilon_0 E^2 + \\frac{1}{2 \\mu_0} B^2
    \\]
    
    \\[
    \\mathbf{S} = \\frac{1}{\\mu_0} \\mathbf{E} \\times \\mathbf{B}
    \\]
    
    Poynting's theorem expresses conservation of electromagnetic energy.
        `
      },
      {
        title: "Electromagnetic Stress Tensor",
        markdown: `
    The Maxwell stress tensor \\( \\mathbf{T} \\) describes momentum flow:
    
    \\[
    T_{ij} = \\epsilon_0 \\left(E_i E_j - \\frac{1}{2} \\delta_{ij} E^2\\right) + \\frac{1}{\\mu_0} \\left(B_i B_j - \\frac{1}{2} \\delta_{ij} B^2\\right)
    \\]
    
    It accounts for forces on charges and currents.
        `
      },
      {
        title: "Electromagnetic Waves in Media",
        markdown: `
    In a linear medium with permittivity \\( \\epsilon \\) and permeability \\( \\mu \\):
    
    \\[
    \\nabla \\times \\mathbf{E} = -\\mu \\frac{\\partial \\mathbf{H}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\epsilon \\frac{\\partial \\mathbf{E}}{\\partial t}
    \\]
    
    Wave speed is:
    
    \\[
    v = \\frac{1}{\\sqrt{\\mu \\epsilon}}
    \\]
    
    which differs from speed in vacuum.
        `
      },
      {
        title: "Nonlinear and Extended Effects",
        markdown: `
    Extended electromagnetism considers:
    
    - Nonlinear response of materials.
    - Magnetic monopoles (hypothetical).
    - Quantum corrections (QED effects).
    - Topological effects in advanced materials.
        `
      }
    ];
    
    
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[pathSegments.length-1]; 

   return(
      <div className="course-page">
        <TopBar/>
        <div className="content-for-course">
        {!talkToNewtonium ? 
                    (<>
                      <CreateCoursePage hereProps={extendedElectromagnetismContent} />
                      <CreateGoToProblems where_id={topic} />
                      <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                    </>) : 
                    (<PageOfChatBox />)
          }
        </div>
      </div>
   )
}