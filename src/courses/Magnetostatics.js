import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function Magnetostatics(){
    
  // calling the tracking custom hook for courses
    useTrackCourseVisit();

  const content = [
    {
      title: `# Magnetic Field and Current`,
      markdown: `
- Moving charges create a **magnetic field** \( \mathbf{B} \).
- **Lorentz Force**:
    \[
    \mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
    \]
- Unlike electrostatics, **magnetic field lines always form closed loops** (no magnetic monopoles).
  `
    },
    {
      title: `
# Biot-Savart Law`,
      markdown: `
Describes the magnetic field \( \mathbf{B} \) due to a small current element \( d\mathbf{l} \):  
  \[
  d\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I \, d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}
  \]
- **Integral Form** (for a current-carrying wire):  
  \[
  \mathbf{B} = \frac{\mu_0}{4\pi} \int \frac{I \, d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}
  \]
### Applications:
- **Magnetic field of a straight current-carrying wire**:
    \[
    B = \frac{\mu_0 I}{2\pi r}
    \]
- **Circular loop (on-axis field at center)**:
    \[
    B = \frac{\mu_0 I}{2R}
    \]
  `
    },
    {
      title: `# Ampère’s Law`,
      markdown: `
Ampère’s Law relates the circulation of \( \mathbf{B} \) around a closed loop to the enclosed current:  
  \[
  \oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}}
  \]
- **Useful for symmetric cases**:
    - Infinite straight wire: \( B = \frac{\mu_0 I}{2\pi r} \)
    - Solenoid: \( B = \mu_0 n I \)
    - Toroid: \( B = \frac{\mu_0 I N}{2\pi r} \)  
- **Differential form** (from Maxwell’s Equations):
    \[
    \nabla \times \mathbf{B} = \mu_0 \mathbf{J}
    \]
  `
    },
    {
      title: `# Differential Geometry in Charge and Field Distributions`,
      markdown: `
- **Current Density (J)**:
- Volume current density: \( \mathbf{J} = \frac{dI}{dA} \)
- Surface current density: \( K = \frac{dI}{dl} \)
- Line current density: \( I \) (for thin wires)
- **Field Distributions**:
- \( \mathbf{B} \) follows **tangential continuity** at boundaries.
- **Discontinuity** in \( \mathbf{B} \) occurs at **surface currents**.
  `
    },
    {
      title: `# Magnetic Scalar and Vector Potentials`,
      markdown: `
- **Vector Potential \( \mathbf{A} \)**:
- Defined such that:
      \[
      \mathbf{B} = \nabla \times \mathbf{A}
      \]
- From Biot-Savart:
      \[
      \mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r'})}{|\mathbf{r} - \mathbf{r'}|} dV'
      \]
  
- **Magnetic Scalar Potential \( \Phi_M \)** (for magnetostatics in regions without current):
    \[
    \mathbf{B} = -\nabla \Phi_M
    \]
  
- **Gauge Freedom**: The vector potential is not unique; it satisfies the **Coulomb gauge**:
    \[
    \nabla \cdot \mathbf{A} = 0
    \]
  `
    },
    {
      title: `
# Energy in Magnetostatics`,
      markdown: `
- **Magnetic Energy Density**:
    \[
    u = \frac{B^2}{2\mu_0}
    \]
- **Total Magnetic Energy**:
    \[
    U = \frac{1}{2} \int \mathbf{J} \cdot \mathbf{A} \, dV
    \]
  `
    },
    {
      title: `# Summary`,
      markdown: `
Magnetostatics governs the behavior of steady currents and their associated magnetic fields. Key principles such as **Biot-Savart’s Law** and **Ampère’s Law** enable the determination of magnetic fields in various geometries. The introduction of **vector potential \( \mathbf{A} \)** provides a deeper mathematical framework for understanding magnetic fields in continuous charge distributions.
  `
    }
  ];

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
              <CreateCoursePage hereProps={ content }/>
              <CreateGoToProblems where_id={ topic }/>
              <ChatBotBox/>
            </div>
        </div>
    );
}