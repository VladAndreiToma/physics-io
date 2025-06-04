import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import useTrackCourseVisit from "./visitCourseApi";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function Electrostatics(){

      //get location ----- to be used in multiple scenarios
      const location = useLocation();
      // call the visiting course api the link keeps also so i dont need to send the locaiton via props
      useTrackCourseVisit();  // creates electrostatics entry
      
      // talk to newtonium
      const[ talkToNewtonium , setTalkToNewtonium ] = useState(false);
      useNewtoniumClose( ()=>setTalkToNewtonium(false) );

      const content = [
            {
              title: `Electric Charge and Its Properties`,
              markdown: `
          - Electric charge (\\(q\\)) is a fundamental property of matter.  
          - Two types: positive and negative.  
          - Quantization:  
            \\[
            q = n \\cdot e, \\quad \\text{where } e = 1.602 \\times 10^{-19} \\text{ C}
            \\]  
          - Conservation: total charge in an isolated system remains constant.
          `
            },
            {
              title: `Coulomb's Law`,
              markdown: `
          Describes the electrostatic force between two point charges:  
          \\[
          \\mathbf{F} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{\\mathbf{r}}
          \\]
          
          - Force is attractive or repulsive depending on the signs of charges.  
          - Inverse-square dependence on distance.  
          - \\(\\varepsilon_0 = 8.854 \\times 10^{-12} \\ \\text{C}^2/(\\text{N}\\cdot\\text{m}^2)\\).
          `
            },
            {
              title: `Electric Field`,
              markdown: `
          Defines force per unit positive test charge:  
          \\[
          \\mathbf{E} = \\frac{\\mathbf{F}}{q}
          \\]
          
          - For a point charge:  
            \\[
            \\mathbf{E} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} \\hat{\\mathbf{r}}
            \\]  
          - Direction: outward from positive charges, inward toward negative charges.  
          - Principle of superposition: total field is vector sum of individual fields.
          `
            },
            {
              title: `Electric Flux`,
              markdown: `
          Measures the amount of electric field passing through a surface:  
          \\[
          \\Phi_E = \\mathbf{E} \\cdot \\mathbf{A} = EA \\cos\\theta
          \\]
          
          - For a closed surface:  
            \\[
            \\Phi_E = \\oint \\mathbf{E} \\cdot d\\mathbf{A}
            \\]  
          - Related to the number of field lines penetrating the surface.
          `
            },
            {
              title: `Gauss's Law`,
              markdown: `
          A powerful tool for calculating electric fields:  
          \\[
          \\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{inside}}}{\\varepsilon_0}
          \\]
          
          - Valid for any closed surface.  
          - Useful for symmetrical charge distributions (spherical, cylindrical, planar).
          
          Examples:  
          - Point charge:  
            \\[
            E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2}
            \\]  
          - Infinite line charge:  
            \\[
            E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}
            \\]  
          - Infinite plane charge:  
            \\[
            E = \\frac{\\sigma}{2\\varepsilon_0}
            \\]
          `
            },
            {
              title: `Charge Distributions`,
              markdown: `
          - Line charge density:  
            \\[
            \\lambda = \\frac{dq}{dl}
            \\]  
          - Surface charge density:  
            \\[
            \\sigma = \\frac{dq}{dA}
            \\]  
          - Volume charge density:  
            \\[
            \\rho = \\frac{dq}{dV}
            \\]
          
          - Continuous charge distributions allow use of calculus for field computations.
          `
            },
            {
              title: `Electric Potential`,
              markdown: `
          Electric potential \\(V\\) is work done per unit charge to bring a test charge from infinity:  
          \\[
          V = - \\int \\mathbf{E} \\cdot d\\mathbf{r}
          \\]
          
          - For a point charge:  
            \\[
            V = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}
            \\]  
          - Electric field relates to potential by:  
            \\[
            \\mathbf{E} = - \\nabla V
            \\]  
          - Equipotential surfaces are perpendicular to electric field lines.
          `
            },
            {
              title: `Potential Energy and Field Energy`,
              markdown: `
          - Potential energy between two point charges:  
            \\[
            U = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r}
            \\]
          
          - Energy stored in the electric field (energy density):  
            \\[
            u = \\frac{1}{2} \\varepsilon_0 E^2
            \\]
          
          - Total field energy obtained by integrating \\(u\\) over volume.
          `
            },
            {
              title: `Summary`,
              markdown: `
          Electrostatics studies electric charges at rest. Using Coulomb’s and Gauss’s laws, it describes electric fields and potentials. Concepts like charge distributions, field lines, and potential energy enable analysis of interactions from atomic to macroscopic scales. These principles underpin electromagnetism and circuit theory.
          `
            }
          ];
          

      
      const pathSegments = location.pathname.split("/");
      const topic = pathSegments.pop();

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