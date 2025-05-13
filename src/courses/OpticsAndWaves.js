import ChatBotBox from "../ChatBotBox";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";

export default function OpticsAndWaves(){
    
    //calling custom made tracking hook for courses
    useTrackCourseVisit();

    const opticsContent = [
        {
          title: `
# Geometric Optics`,
          markdown: `
### Reflection and Refraction
    - **Snell’s Law**: \\( n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2 \\)
    - **Laws of reflection**
    - **Total Internal Reflection** and critical angle
### Lenses and Mirrors
    - Thin lens and mirror equations:
        \\[
        \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}
        \\]
    - Ray tracing techniques  
    - Optical power: \\( P = \\frac{1}{f} \\)
### Matrix Optics (ABCD Formalism)
    - Ray represented as vector \\( \\begin{bmatrix} x \\\\ \\theta \\end{bmatrix} \\)
    - System transformations:
        \\[
        \\begin{bmatrix}
        x_2 \\\\
        \\theta_2
        \\end{bmatrix}
        =
        \\begin{bmatrix}
        A & B \\\\
        C & D
        \\end{bmatrix}
        \\begin{bmatrix}
        x_1 \\\\
        \\theta_1
        \\end{bmatrix}
        \\]
    - Applications to lens systems and stability of optical cavities`
        },
        {
          title: `
# Wave Optics`,
          markdown: `
### Huygens-Fresnel Principle
    - Light as secondary wavelets  
    - Wavefront reconstruction
### Interference
    - Young’s Double Slit Experiment
    - Constructive and destructive interference
    - Path difference and phase relationships
### Diffraction
    - Single slit diffraction pattern
    - Diffraction gratings
    - Fraunhofer and Fresnel diffraction
### Polarization
    - Linear, circular, and elliptical polarization
    - Malus’ Law
    - Polarizers and wave plates`
        },
        {
          title: `
# Quantum Optics`,
          markdown: `
### Photons and Light Quantization
    - Energy quanta: \\( E = h\\nu \\)
    - Photon number states
### Coherence and Interference at Quantum Scale
    - First-order and second-order coherence
    - Hanbury Brown and Twiss experiment
### Quantum Entanglement and Non-Classical Light
    - Bell's theorem and violations of local realism
    - Squeezed states, single-photon sources
### Cavity QED and Atom-Photon Interactions
    - Jaynes-Cummings model
    - Spontaneous vs stimulated emission`
        },
        {
          title: `
# Lagrangian Optics and Fermat's Principle`,
          markdown: `
### Fermat’s Principle of Least Time
    - Light follows paths minimizing travel time
### Lagrangian Formulation of Optics
    - Light paths as geodesics in refractive media
    - Variational principle:
        \\[
        \\delta \\int n(x)\\, ds = 0
        \\]
    - Application in graded-index (GRIN) media`  
        },
        {
          title: `
# Metamaterials and Modern Applications`,
          markdown: `
### Negative Index Materials
    - Concept of negative permittivity and permeability
    - Reversed Snell’s Law
### Superlenses and Cloaking
    - Sub-wavelength imaging
    - Transformation optics
### Plasmonics and Nanophotonics
    - Surface plasmons and light confinement
    - Applications in sensors and photonic circuits`
        },
        {
          title: `
# Summary`,
          markdown: `
This course covers a full spectrum of optical physics from classical ray optics to modern quantum and metamaterial technologies. Key concepts include:
    - Geometric optics and ray tracing
    - Matrix formalism for optical systems
    - Interference, diffraction, and polarization
    - Quantum properties of light and entangled photons
    - Lagrangian variational treatment of light in inhomogeneous media
    - Cutting-edge topics: metamaterials, cloaking, and plasmonics`
        }
      ];
    
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                <CreateCoursePage hereProps={ opticsContent }/>
                <CreateGoToProblems where_id={ topic }/>
                <ChatBotBox/>
            </div>
        </div>
    )
}