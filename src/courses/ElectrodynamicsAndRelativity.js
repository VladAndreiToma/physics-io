import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import ChatBotBox from "../ChatBotBox";
import { useContext , useEffect } from "react";
import UserLoginContext from "../AppContexts";

export default function ElectrodynamicsAndRelativity(){
    
    //getting the current location
    const location = useLocation();
    //destructuring the general flags
    const {isUserLoggedIn , userid} = useContext( UserLoginContext );
    useEffect(()=>{
      const trackVisit = async() =>{
        if(!isUserLoggedIn || !userid) return;
          // get the last item of the absolute url path
        let courseSlug = location.pathname.split("/").pop();
        try{
          const response = await fetch( "/visited-courses",{
            method: "POST", headers: {"Content-Type" : "application/json"},
            body: JSON.stringify( {id:userid, course:courseSlug} ),
          });
          if( !response.ok ){
            console.log("Tracking failed/ or youre not logged in" , await response.text());
          }
        }catch(err){
          console.error( `Tracking error: ${err}` );
        }
      }
      // deploy the function
      trackVisit();
      
    },[isUserLoggedIn , location.pathname, userid]);

  const content = [
    {
      title: `
# Electromagnetic Waves in Vacuum`,
      markdown: `
Electromagnetic waves emerge naturally from Maxwell’s equations when there are no free charges or currents:
  
  \\[
  \\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}, \\quad 
  \\nabla^2 \\vec{B} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2}
  \\]
  
These are wave equations whose solutions are transverse, propagating waves traveling at:
  
  \\[
  c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8 \\, \\text{m/s}
  \\]
  `
    },
    {
      title: `
# Plane Wave Solutions`,
      markdown: `
- **Electric field**:
    \\[
    \\vec{E}(\\vec{r}, t) = \\vec{E}_0 \\cos(\\vec{k} \\cdot \\vec{r} - \\omega t)
    \\]
- **Magnetic field**:
    \\[
    \\vec{B} = \\frac{1}{c} \\hat{k} \\times \\vec{E}
    \\]
- Fields are mutually perpendicular: \\( \\vec{E} \\perp \\vec{B} \\perp \\vec{k} \\)
  `
    },
    {
      title: `
# Energy and Power in EM Waves`,
      markdown: `
- **Energy density**:
    \\[
    u = \\frac{1}{2} \\varepsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2 = \\varepsilon_0 E^2
    \\]
- **Poynting vector** (energy flux):
    \\[
    \\vec{S} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}
    \\]
- **Intensity** (time-averaged Poynting magnitude):
    \\[
    I = \\langle |\\vec{S}| \\rangle = \\frac{1}{2} \\varepsilon_0 c E_0^2
    \\]
  `
    },
    {
      title: `
# Electromagnetic Waves and Special Relativity`,
      markdown: `
### Why EM Waves Require Relativity
  - Maxwell's equations predict a constant speed of light in vacuum, \\( c \\), in all inertial frames.
  - This contradicts Galilean transformations → leads to **Einstein's special relativity**.
  `
    },
    {
      title: `
# Lorentz Transformations of Fields`,
      markdown: `
When observing a moving frame:
  - Electric and magnetic fields **mix** under Lorentz transformation:
    \\[
    \\vec{E}'_\\parallel = \\vec{E}_\\parallel, \\quad \\vec{E}'_\\perp = \\gamma (\\vec{E}_\\perp + \\vec{v} \\times \\vec{B})
    \\]
    \\[
    \\vec{B}'_\\parallel = \\vec{B}_\\parallel, \\quad \\vec{B}'_\\perp = \\gamma (\\vec{B}_\\perp - \\frac{\\vec{v} \\times \\vec{E}}{c^2})
    \\]
  
  This unifies E and B as components of the **electromagnetic field tensor** \\( F^{\\mu\\nu} \\).
  `
    },
    {
      title: `
# Relativistic Charge Dynamics: Liénard–Wiechert Potentials`,
      markdown: `
These describe the electromagnetic fields of a **point charge moving at relativistic speed**:  
  \\[
  \\phi(\\vec{r}, t) = \\left[ \\frac{q}{4\\pi \\varepsilon_0} \\cdot \\frac{1}{(1 - \\vec{n} \\cdot \\vec{\\beta}) R} \\right]_{\\text{ret}}
  \\]
  \\[
  \\vec{A}(\\vec{r}, t) = \\left[ \\frac{\\mu_0 q \\vec{v}}{4\\pi (1 - \\vec{n} \\cdot \\vec{\\beta}) R} \\right]_{\\text{ret}}
  \\]
Where:
  - \\( \\vec{\\beta} = \\vec{v}/c \\)
  - \\( \\vec{n} \\): direction from charge to observer
  - \\( R \\): distance to the charge at retarded time
  
Fields are computed by taking derivatives of these potentials.
  `
    },
    {
      title: `
# Radiation from Accelerated Charges`,
      markdown: `
Accelerated charges emit EM radiation:
- Power radiated (non-relativistic case):
    \\[
    P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}
    \\]
- In the relativistic regime, radiation becomes **highly directional** (beamed forward).
  `
    },
    {
      title: `
# Synchrotron and Bremsstrahlung Radiation`,
      markdown: `
- **Synchrotron**: Radiation from relativistic particles in magnetic fields (e.g. particle accelerators, astrophysics).
- **Bremsstrahlung**: Radiation from decelerating charges, relevant in X-ray generation and high-energy physics.
  `
    },
    {
      title: `
# Electromagnetic Wave Four-Vector and Tensor Formulation: Field Strength Tensor`,
      markdown: `
In special relativity, electric and magnetic fields are unified into:
### 1. **Field Strength Tensor \\( F^{\\mu\\nu} \\)**  
  \\[
  F^{\\mu\\nu} =
  \\begin{bmatrix}
  0 & -E_x/c & -E_y/c & -E_z/c \\\\
  E_x/c & 0 & -B_z & B_y \\\\
  E_y/c & B_z & 0 & -B_x \\\\
  E_z/c & -B_y & B_x & 0 \\\\
  \\end{bmatrix}
  \\]
This compactly expresses Maxwell's equations in covariant form.
  `
    },
    {
      title: `
# Covariant Maxwell Equations`,
      markdown: `
  \\[
  \\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu
  \\]
  \\[
  \\partial_\\sigma F_{\\mu\\nu} + \\partial_\\mu F_{\\nu\\sigma} + \\partial_\\nu F_{\\sigma\\mu} = 0
  \\]
  
Where \\( J^\\nu \\) is the four-current and \\( \\partial_\\mu \\) the four-gradient.
  `
    },
    {
      title: `
# Applications`,
      markdown: `
- **GPS satellites**: require relativistic corrections due to both motion and gravity.
- **Particle accelerators**: use synchrotron radiation and relativistic energy-momentum.
- **Astrophysics**: EM wave propagation and radiation from cosmic jets.
- **Plasma physics**: Relativistic electron dynamics in fusion and astrophysical contexts.
  `
    },
    {
      title: `
# Summary`,
      markdown: `
Electrodynamics and Relativity are deeply linked. Maxwell’s equations predict light speed and require Lorentz invariance. Moving and accelerated charges demand relativistic treatment to accurately model radiation, energy flow, and field transformations. This framework is the foundation for modern electromagnetism, particle physics, and astrophysics.
  `
    }
  ];    

    const pathSegments = location.pathname.split("/")
    const topic = pathSegments[pathSegments.length-1];

    return(
    <div className="course-page">
        <TopBar/>
        <div className="content-for-course">
          <CreateCoursePage hereProps={ content }/>
          <CreateGoToProblems where_id={topic}/>
          <ChatBotBox/>
        </div>
    </div>);
}