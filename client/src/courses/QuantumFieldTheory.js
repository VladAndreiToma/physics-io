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
      title: `1. Origins of Quantum Field Theory`,
      markdown: `
  Classical field theories like electromagnetism could not explain particle creation and annihilation.
  
  Quantum Field Theory (QFT) unifies quantum mechanics and special relativity.  
  Particles are seen as excitations of underlying fields.  
  Energy is expressed as:
  \\[
  E = \\int \\mathcal{H}(x) \\, d^3x
  \\]
  where
  \\[
  \\mathcal{H}(x)
  \\]
  is the Hamiltonian density.
  `
    },
    {
      title: `2. The Schrödinger Equation in QFT`,
      markdown: `
  The Schrödinger equation generalizes to relativistic fields:
  
  - Klein-Gordon equation (scalar fields):
  \\[
  (\\Box + m^2) \\, \\phi(x) = 0
  \\]
  
  - Dirac equation (spin-\\(\\frac{1}{2}\\) fields):
  \\[
  (i \\gamma^\\mu \\partial_\\mu - m) \\, \\psi(x) = 0
  \\]
  
  Here, \\(\\Box = \\partial_t^2 - \\nabla^2\\) is the d'Alembert operator.
  `
    },
    {
      title: `3. Quantum Dynamics in 1D, 2D, and 3D`,
      markdown: `
  Fields evolve over spacetime, and dimensionality impacts their behavior:
  - In 1+1 dimensions: simple scalar field models.
  - In 3+1 dimensions: realistic theories like QED and QCD.
  
  Quantization leads to discrete energy modes in confined or periodic spaces.
  `
    },
    {
      title: `4. Potential Wells, Barriers, and Quantum Tunneling`,
      markdown: `
  Potential wells and barriers extend to field theory through interaction terms in the Lagrangian.
  
  Quantum tunneling persists, described now via field amplitudes and path integrals.  
  Applications include vacuum decay, instantons, and early universe cosmology.
  `
    },
    {
      title: `5. Operators and Measurement in QFT`,
      markdown: `
  Observables correspond to Hermitian operators acting on quantum fields.
  
  Examples:
  - Field operator: \\(\\phi(x)\\)
  - Canonical momentum: \\(\\pi(x) = \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_0 \\phi)}\\)
  
  Commutation relation:
  \\[
  [\\phi(x), \\pi(y)] = i \\delta^3(x - y)
  \\]
  
  Measurements yield particle number, momentum, or charge at spacetime points.
  `
    },
    {
      title: `6. Heisenberg Uncertainty Principle for Fields`,
      markdown: `
  Uncertainty relations extend to field operators:
  
  \\[
  \\Delta \\phi(x) \\, \\Delta \\pi(x) \\geq \\frac{\\hbar}{2}
  \\]
  
  This reflects intrinsic quantum fluctuations of the vacuum, causing effects like the Casimir force.
  `
    },
    {
      title: `7. Quantum States and Dirac Notation`,
      markdown: `
  Quantum states reside in Fock space, constructed by creation \\((a^\\dagger)\\) and annihilation \\((a)\\) operators:
  
  \\[
  |\\psi\\rangle = a_1^\\dagger a_2^\\dagger \\cdots |0\\rangle
  \\]
  
  Bra-ket notation applies: \\(\\langle \\phi | \\psi \\rangle\\) gives probability amplitudes \\(|\\langle \\phi | \\psi \\rangle|^2\\).
  
  Operators act on states to evolve or measure them.
  `
    },
    {
      title: `8. Spin and Angular Momentum`,
      markdown: `
  Spin arises from Lorentz group representations:
  - Spin-0: scalar fields
  - Spin-\\(\\frac{1}{2}\\): Dirac spinors
  - Spin-1: gauge bosons
  
  Angular momentum operators follow from Noether’s theorem applied to rotational symmetry.
  `
    },
    {
      title: `9. Time Evolution and Transition Probabilities`,
      markdown: `
  Time evolution operator:
  
  \\[
  |\\psi(t)\\rangle = e^{-i H t / \\hbar} |\\psi(0)\\rangle
  \\]
  
  Transition probability between states:
  
  \\[
  P = |\\langle \\phi | \\psi(t) \\rangle|^2
  \\]
  
  Used extensively in scattering theory.
  `
    },
    {
      title: `10. Perturbation Theory in QFT`,
      markdown: `
  Interactions treated perturbatively:
  
  \\[
  H = H_0 + \\lambda H'
  \\]
  
  Corrections calculated using Feynman diagrams:
  - Time-independent perturbations give energy corrections.
  - Time-dependent perturbations yield transition amplitudes.
  
  Path integral formulation:
  
  \\[
  \\text{Amplitude} \\propto \\int \\mathcal{D}\\phi \\, e^{i S[\\phi]/\\hbar}
  \\]
  `
    },
    {
      title: `Summary`,
      markdown: `
  Quantum Field Theory:
  - Combines quantum mechanics and special relativity
  - Describes particles as quantized fields \\(\\phi(x), \\psi(x)\\)
  - Models interactions as exchange of quanta
  - Foundation of the Standard Model and modern particle physics
  
  Tools and concepts include:
  - Lagrangians and Hamiltonians
  - Path integrals
  - Feynman diagrams
  - Gauge theories
  `
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