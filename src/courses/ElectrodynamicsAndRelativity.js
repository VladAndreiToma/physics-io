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
      title: `Electromagnetic Waves in Vacuum`,
      markdown: `
Electromagnetic waves emerge naturally from Maxwell's equations when there are no free charges or currents:

  ∇² E = μ₀ ε₀ ∂² E / ∂t²,   ∇² B = μ₀ ε₀ ∂² B / ∂t²
  
These are wave equations whose solutions are transverse, propagating waves traveling at:
  
  c = 1 / √(μ₀ ε₀) ≈ 3 × 10⁸ m/s
      `
    },
    {
      title: `Plane Wave Solutions`,
      markdown: `
- Electric field:
    E(r, t) = E₀ cos(k · r - ωt)
- Magnetic field:
    B = (1/c) (k × E)
- Fields are mutually perpendicular: E ⊥ B ⊥ k
      `
    },
    {
      title: `Energy and Power in EM Waves`,
      markdown: `
- Energy density:
    u = ½ ε₀ E² + ½ μ₀ B² = ε₀ E²
- Poynting vector (energy flux):
    S = (1/μ₀) E × B
- Intensity (time-averaged Poynting magnitude):
    I = ⟨ |S| ⟩ = ½ ε₀ c E₀²
      `
    },
    {
      title: `Electromagnetic Waves and Special Relativity`,
      markdown: `
Why EM Waves Require Relativity
  - Maxwell's equations predict a constant speed of light in vacuum, c, in all inertial frames.
  - This contradicts Galilean transformations → leads to Einstein's special relativity.
      `
    },
    {
      title: `Lorentz Transformations of Fields`,
      markdown: `
When observing a moving frame:
  - Electric and magnetic fields mix under Lorentz transformation:
    E'ₗ = Eₗ,   E'⊥ = γ(E⊥ + v × B)
    B'ₗ = Bₗ,   B'⊥ = γ(B⊥ - (v × E) / c²)
  
  This unifies E and B as components of the electromagnetic field tensor Fᵢⱼ.
      `
    },
    {
      title: `Relativistic Charge Dynamics: Liénard–Wiechert Potentials`,
      markdown: `
These describe the electromagnetic fields of a point charge moving at relativistic speed:  
  φ(r, t) = [ q / (4π ε₀) (1 / (1 - n · β) R) ]ₗ
  A(r, t) = [ μ₀ q v / (4π (1 - n · β) R) ]ₗ
Where:
  - β = v/c
  - n: direction from charge to observer
  - R: distance to the charge at retarded time
  
Fields are computed by taking derivatives of these potentials.
      `
    },
    {
      title: `Radiation from Accelerated Charges`,
      markdown: `
Accelerated charges emit EM radiation:
- Power radiated (non-relativistic case):
    P = (μ₀ q² a²) / (6π c)
- In the relativistic regime, radiation becomes highly directional (beamed forward).
      `
    },
    {
      title: `Synchrotron and Bremsstrahlung Radiation`,
      markdown: `
- Synchrotron: Radiation from relativistic particles in magnetic fields (e.g. particle accelerators, astrophysics).
- Bremsstrahlung: Radiation from decelerating charges, relevant in X-ray generation and high-energy physics.
      `
    },
    {
      title: `Electromagnetic Wave Four-Vector and Tensor Formulation: Field Strength Tensor`,
      markdown: `
In special relativity, electric and magnetic fields are unified into:
1. Field Strength Tensor Fᵢⱼ  
  Fᵢⱼ =
  [ 0  -Eₓ/c  -Eᵧ/c  -E𝓏/c ]
  [ Eₓ/c  0  -B𝓏  Bᵧ ]
  [ Eᵧ/c  B𝓏  0  -Bₓ ]
  [ E𝓏/c  -Bᵧ  Bₓ  0 ]
This compactly expresses Maxwell's equations in covariant form.
      `
    },
    {
      title: `Covariant Maxwell Equations`,
      markdown: `
  ∂ᵢ Fᵢⱼ = μ₀ Jⱼ
  ∂σ Fᵢⱼ + ∂ᵢ Fⱼσ + ∂ⱼ Fσᵢ = 0
  
Where Jᵱ is the four-current and ∂ᵢ the four-gradient.
      `
    },
    {
      title: `Applications`,
      markdown: `
- GPS satellites: require relativistic corrections due to both motion and gravity.
- Particle accelerators: use synchrotron radiation and relativistic energy-momentum.
- Astrophysics: EM wave propagation and radiation from cosmic jets.
- Plasma physics: Relativistic electron dynamics in fusion and astrophysical contexts.
      `
    },
    {
      title: `Summary`,
      markdown: `
Electrodynamics and Relativity are deeply linked. Maxwell's equations predict light speed and require Lorentz invariance. Moving and accelerated charges demand relativistic treatment to accurately model radiation, energy flow, and field transformations. This framework is the foundation for modern electromagnetism, particle physics, and astrophysics.
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