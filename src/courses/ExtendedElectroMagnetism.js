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

   const contentArray = [
      {
        title: `
# Maxwell’s Equations`,
        markdown: `
Maxwell’s Equations unify **electric and magnetic fields**, describing how charges and currents generate electromagnetic fields.
### **Integral Form**
1.**Gauss’s Law for Electricity** (Electric Flux Theorem):  
       \[
       \oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}
       \]  
       - Electric flux is proportional to enclosed charge.
2. **Gauss’s Law for Magnetism** (No Magnetic Monopoles):  
       \[
       \oint_S \mathbf{B} \cdot d\mathbf{A} = 0
       \]  
       - No isolated magnetic charges exist; field lines form closed loops.
3. **Faraday’s Law of Induction**:  
       \[
       \oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d}{dt} \int_S \mathbf{B} \cdot d\mathbf{A}
       \]  
       - A changing magnetic field **induces an electric field** (basis for transformers, generators).
4. **Ampère-Maxwell Law** (Modified Ampère’s Law):  
       \[
       \oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}} + \mu_0 \varepsilon_0 \frac{d}{dt} \int_S \mathbf{E} \cdot d\mathbf{A}
       \]  
       - Electric currents **and changing electric fields** generate magnetic fields.
    `
      },
      {
        title: `
# Displacement Current and the Unification of Electromagnetism`,
        markdown: `
- **Maxwell added the displacement current term** \( \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \) to Ampère’s Law.  
- This term **allows continuity of current** in circuits with capacitors.  
- Predicted **self-sustaining electromagnetic waves**, leading to **electromagnetic wave theory**.
    `
      },
      {
        title: `
# Electromagnetic Waves`,
        markdown: `
- Maxwell’s equations in free space predict **wave solutions**:  
      \[
      \nabla^2 \mathbf{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0
      \]  
      \[
      \nabla^2 \mathbf{B} - \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} = 0
      \]  
- **Wave speed in vacuum**:  
      \[
      c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 3 \times 10^8 \text{ m/s}
      \]  
- **Electric and magnetic fields oscillate perpendicularly** to each other and the direction of propagation (**transverse waves**).
    `
      },
      {
        title: `
# Gauge Freedom and Potentials`,
        markdown: `
Instead of working with \( \mathbf{E} \) and \( \mathbf{B} \) directly, we use:
- **Electric Potential \( V \)** and **Vector Potential \( \mathbf{A} \)**:
      \[
      \mathbf{B} = \nabla \times \mathbf{A}
      \]
      \[
      \mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t}
      \]
- These potentials have **gauge freedom**, meaning they can be transformed without changing physics:  
      \[
      \mathbf{A}' = \mathbf{A} + \nabla \Lambda, \quad V' = V - \frac{\partial \Lambda}{\partial t}
      \]
- **Lorenz Gauge**:
      \[
      \nabla \cdot \mathbf{A} + \frac{1}{c^2} \frac{\partial V}{\partial t} = 0
      \]
- **Coulomb Gauge**:
      \[
      \nabla \cdot \mathbf{A} = 0
      \]
    `
      },
      {
        title: `
# Special Phenomena in Extended Electromagnetism`,
        markdown: `
### **Electromagnetic Radiation**  
   - Accelerating charges **emit radiation**.  
   - Energy flux described by the **Poynting Vector**:
      \[
      \mathbf{S} = \frac{1}{\mu_0} (\mathbf{E} \times \mathbf{B})
      \]
    
### **Light as an Electromagnetic Wave**  
   - Maxwell’s equations predict light is an **EM wave**.
   - **Polarization**: Direction of **\( \mathbf{E} \)** field oscillation.
   - **Reflection, Refraction, Diffraction, and Interference** follow from **wave equations**.
    
### **Relativistic Electrodynamics**  
   - Maxwell’s equations transform correctly under **special relativity**.
   - Electric and magnetic fields **mix** in different frames.
   - Energy-momentum tensor \( T^{\mu\nu} \) encodes field energy.
    `
      },
      {
        title: `# Summary`,
        markdown: `
Maxwell’s equations **unify electromagnetism** and predict **light as an EM wave**. The addition of **displacement current** allowed for **wave propagation**, connecting optics and electricity. These equations also form the basis of **relativistic electrodynamics** and quantum electrodynamics (QED).
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
                      <CreateCoursePage hereProps={contentArray} />
                      <CreateGoToProblems where_id={topic} />
                      <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                    </>) : 
                    (<PageOfChatBox />)
          }
        </div>
      </div>
   )
}