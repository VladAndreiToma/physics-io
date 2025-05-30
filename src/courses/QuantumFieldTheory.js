import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import { useNewtoniumClose } from "./useNewtoniumClose";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useTrackCourseVisit from "./visitCourseApi";
import TopBar from "../TopBar";


export default function QuantumFieldTheory(){
    const content = [
  {
    title: `Origins of Quantum Field Theory`,
    markdown: `
Classical field theories like electromagnetism couldn't explain particle creation and annihilation.

Quantum Field Theory (QFT) unifies quantum mechanics with special relativity.  
Particles are excitations of underlying fields, and energy is expressed as:
E = ∫ ℋ(x) d³x
where ℋ(x) is the Hamiltonian density.`
  },
  {
    title: `The Schrödinger Equation`,
    markdown: `
In QFT, the Schrödinger equation is generalized to field equations.
- Klein-Gordon equation for scalar fields:
(□ + m²)ϕ(x) = 0

- Dirac equation for spin-½ particles:
(iγ^μ ∂_μ − m)ψ(x) = 0

Here, □ = ∂²/∂t² − ∇² is the d'Alembert operator.`
  },
  {
    title: `Quantum Dynamics in 1D, 2D, 3D`,
    markdown: `
Fields exist and evolve in space-time. The dimensionality affects the field behavior and solutions.
- In 1+1D: simple models like scalar field theory
- In 3+1D: realistic physical theories like QED and QCD
Quantization introduces discrete energy modes in confined spaces or periodic boundaries.`
  },
  {
    title: `Wells, Barriers and Tunnel Effect`,
    markdown: `Potential wells and barriers are generalized in field theory via interaction terms in the Lagrangian.
Quantum tunneling persists, but is now described by field amplitudes and path integrals.
Used in vacuum decay, instantons, and early-universe cosmology.`
  },
  {
    title: `Operators and Measurements`,
    markdown: `
Observables are still represented by Hermitian operators, now acting on quantum fields.
Examples:
- Field operator: ϕ(x)
- Canonical momentum: π(x) = ∂ℒ/∂(∂₀ϕ)
Commutation relations:
[ϕ(x), π(y)] = iδ³(x − y)
Measurements extract particle number, momentum, or charge at given spacetime points.`
  },
  {
    title: `Heisenberg Uncertainty Principle`,
    markdown: `
The uncertainty principle extends to field operators.

Δϕ(x) Δπ(x) ≥ ℏ / 2

It reflects quantum fluctuations of fields, even in vacuum, giving rise to effects like the Casimir force.`
  },
  {
    title: `Quantum States and Dirac Formalism`,
    markdown: `States are vectors in Fock space, built from creation and annihilation operators.
|ψ⟩ = a₁† a₂† ... |0⟩
- Bra-ket notation still applies: ⟨ϕ|ψ⟩
- Probability amplitudes: |⟨ϕ|ψ⟩|²
Operators act on these states to evolve or measure them.`
  },
  {
    title: `Spin and Angular Momentum`,
    markdown: `
Spin arises naturally from representations of the Lorentz group.
- Spin-0: scalar fields
- Spin-½: Dirac spinors
- Spin-1: gauge bosons
Angular momentum operators follow from Noether’s theorem applied to rotational symmetry.`
  },
  {
    title: `Time Evolution and Transition Probabilities`,
    markdown: `
Time evolution is governed by the Hamiltonian through the operator:
|ψ(t)⟩ = e^(−iHt/ℏ) |ψ(0)⟩
Transition probabilities are computed as:
P = |⟨ϕ|ψ(t)⟩|²
Used in calculating scattering cross-sections.`
  },
  {
    title: `Perturbation Theory`,
    markdown: `Field interactions are treated using perturbation theory.
H = H₀ + λH'
Corrections are calculated via Feynman diagrams.
- Time-independent: energy corrections
- Time-dependent: transition amplitudes due to external interactions
Path integral formulation gives amplitudes as:
Amplitude ∝ ∫ Dϕ e^(iS[ϕ]/ℏ)`
  },
  {
    title: `Summary`,
    markdown: `Quantum Field Theory describes particles as quantized fields over spacetime.
- Merges quantum mechanics and special relativity
- Fields like ϕ(x) and ψ(x) replace classical particles
- Particle interactions modeled through exchange of quanta
- Foundation of the Standard Model and modern particle physics
Includes tools like:
- Lagrangians and Hamiltonians
- Path integrals
- Feynman diagrams
- Gauge theories`
  }
];

    //getting the topic
    let location = useLocation();
    let topic = location.pathname.split("/").pop();

    //talk to newtonium
    const [talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium( false ));
    
    // visit the course
    useTrackCourseVisit();  // mark it on server

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
    )
}