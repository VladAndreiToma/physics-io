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
            - Electric charge (q) is a fundamental property of matter.
            - Two types: positive and negative.
            - Quantization: q = n·e, where e = 1.602 × 10⁻¹⁹ C
            - Conservation: total charge in an isolated system remains constant.
            `
            },
            {
            title: `Coulomb's Law`,
            markdown: `
            Describes the electrostatic force between two point charges:
            
            F = (1 / 4πε₀) · (q₁q₂ / r²) · r̂

            - Force is attractive or repulsive depending on charge signs.
            - Inverse-square dependence on distance.
            - ε₀ = 8.854 × 10⁻¹² C²/(N·m²)
            `
            },
            {
            title: `Electric Field`,
            markdown: `
            Defines the force per unit positive test charge:
            
            E = F / q

            - For a point charge:
            
            E = (1 / 4πε₀) · (q / r²) · r̂

            - Direction: outward from positive charges, inward toward negatives.
            - Principle of superposition: total E is vector sum of individual fields.
            `
            },
            {
            title: `Electric Flux`,
            markdown: `
            Measures how much electric field passes through a surface:

            Φ_E = E · A = E A cosθ

            - For a closed surface:  
            Φ_E = ∮ E · dA

            - Related to the number of field lines through a surface.
            `
            },
            {
            title: `Gauss's Law`,
            markdown: `
            A powerful tool for computing electric fields:

            ∮ E · dA = Q_inside / ε₀

            - Valid for any closed surface.
            - Most useful with symmetrical charge distributions (spherical, cylindrical, planar).

            Examples:

            - Point charge:
            E = (1 / 4πε₀) · (q / r²)

            - Infinite line of charge:
            E = λ / (2πε₀r)

            - Infinite plane of charge:
            E = σ / (2ε₀)
            `
            },
            {
            title: `Charge Distributions`,
            markdown: `
            - Line charge density: λ = dq / dl
            - Surface charge density: σ = dq / dA
            - Volume charge density: ρ = dq / dV

            - These continuous models allow using calculus to compute fields.
            `
            },
            {
            title: `Electric Potential`,
            markdown: `
            Potential (V) is the work done per unit charge to bring a test charge from infinity:

            V = - ∫ E · dr

            - For a point charge:
            V = (1 / 4πε₀) · (q / r)

            - E is related to V:
            E = -∇V

            - Equipotential surfaces are perpendicular to electric field lines.
            `
            },
            {
            title: `Potential Energy and Field Energy`,
            markdown: `
            - Potential energy of a system of two charges:

            U = (1 / 4πε₀) · (q₁q₂ / r)

            - Energy stored in the electric field:
            
            u = ½ ε₀ E²   (energy density)

            - Total energy in space is obtained by integrating u over volume.
            `
            },
            {
            title: `Summary`,
            markdown: `
            Electrostatics governs the behavior of electric charges at rest. Using Coulomb’s law and Gauss’s law, we describe electric fields and potentials. Charge distributions, field lines, and potential energy concepts enable the analysis of interactions in systems from atoms to capacitors. These foundations are essential in understanding electromagnetism and circuit theory.
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