import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function Electrostatics(){

      //get location ----- to be used in multiple scenarios
      const location = useLocation();

      // call the visiting course api the link keeps also so i dont need to send the locaiton via props
      useTrackCourseVisit();  // creates electrostatics entry

    const content = [
        {
          title: `
# 1.Electric Charge and Its Properties`,
          markdown: `
- **Charge (q)** is a fundamental property of matter.
- **Quantized**: \( q = n e \), \( e = 1.602 \times 10^{-19} \, C \)
- **Conservation**: Total charge in an isolated system is constant.
- Two types: **Positive** and **Negative**.
      `
        },
        {
          title: `
# 2.Coulomb’s Law`,
          markdown: `
The electrostatic force between two point charges is given by:
      \[
      \vec{F} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \hat{r}
      \]
- Inverse square law.
- Direction: Along the line joining charges.
- \( \varepsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \)
      `
        },
        {
          title: `
# 3.Electric Field`,
          markdown: `
**Definition**: Force per unit positive test charge.
      \[
      \vec{E} = \frac{\vec{F}}{q}
      \]
- For a point charge:
      \[
      \vec{E} = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2} \hat{r}
      \]
- **Vector field** with superposition principle:
      \[
      \vec{E}_{\text{total}} = \sum_i \vec{E}_i
      \]
      `
        },
        {
          title: `
# 4.Electric Flux`,
          markdown: `
**Definition**: Measure of electric field lines passing through a surface.
      \[
      \Phi_E = \vec{E} \cdot \vec{A} = EA \cos\theta
      \]
- For a closed surface: \( \Phi_E = \oint \vec{E} \cdot d\vec{A} \)
      `
        },
        {
          title: `# 5.Gauss’s Law"`,
          markdown: `
**Statement**:
      \[
      \oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{inside}}}{\varepsilon_0}
      \]
- Applicable to **high symmetry** cases: spherical, cylindrical, planar
- Useful for evaluating **electric fields** due to symmetric charge distributions.
### Examples:
- **Point Charge** (spherical symmetry): 
      \[
      E = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2}
      \]
- **Infinite Line Charge**:
      \[
      E = \frac{\lambda}{2\pi\varepsilon_0 r}
      \]
- **Infinite Plane Sheet**:
      \[
      E = \frac{\sigma}{2\varepsilon_0}
      \]
      `
        },
        {
          title: `
# 6.Charge Distributions`,
          markdown: `
- **Point Charge**: Discrete
- **Line Charge**: Linear density \( \lambda = \frac{dq}{dl} \)
- **Surface Charge**: Surface density \( \sigma = \frac{dq}{dA} \)
- **Volume Charge**: Volume density \( \rho = \frac{dq}{dV} \)
      `
        },
        {
          title: `
# 7.Electric Potential`,
          markdown: `
**Definition**: Work done per unit charge to bring a test charge from infinity to a point in the field.
      \[
      V = - \int_{\infty}^{r} \vec{E} \cdot d\vec{r}
      \]
- For a point charge:
      \[
      V(r) = \frac{1}{4\pi\varepsilon_0} \frac{q}{r}
      \]
- **Relation to E-field**:
      \[
      \vec{E} = -\nabla V
      \]
- Electric field lines point from **high potential to low potential**.
      `
        },
        {
          title: `
# 8.Energy and Potential Energy`,
          markdown: `
- **Potential Energy of two charges**:
      \[
      U = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r}
      \]
- **Energy density in electric field**:
      \[
      u = \frac{1}{2} \varepsilon_0 E^2
      \]
      `
        },
        {
          title: `
# Summary`,
          markdown: `
Electrostatics governs the behavior of electric charges at rest. The foundational principles — Coulomb's law, Gauss’s law, and the concept of potential — enable the analysis of electric fields and forces in both discrete and continuous systems. These tools are essential in understanding capacitors, insulators, and the field structure of charged objects.
      `
        }
      ];
      
      const pathSegments = location.pathname.split("/");
      const topic = pathSegments[ pathSegments.length-1];

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