import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function QuantumMechanics(){ 

    //calling the custom hook to track courses
    useTrackCourseVisit();

  const contentArray = [
    {
      title: `
# Origins of Quantum Theory`,
      markdown: `
### Blackbody Radiation and Planck Quantization
  The classical theory predicted **ultraviolet catastrophe**: infinite energy emitted at high frequencies.  
  Planck introduced quantized energy:
  \\[
  E = nh\\nu
  \\]
  where \\( n \\in \\mathbb{N} \\), \\( h \\) is Planck’s constant, and \\( \\nu \\) is frequency.
### Photoelectric Effect and Particle-Wave Duality
  - Light exhibits both particle and wave nature.
  - Einstein explained photoelectric effect with photons:
  \\[
  E = h\\nu = \\phi + \\frac{1}{2}mv^2
  \\]`
    },
    {
      title: `
# The Schrödinger Equation`,
      markdown: `
### Time-Dependent Schrödinger Equation (TDSE)
  \\[
  i\\hbar \\frac{\\partial}{\\partial t} \\Psi(x,t) = \\hat{H} \\Psi(x,t)
  \\]  
### Time-Independent Schrödinger Equation (TISE)
  \\[
  \\hat{H} \\psi(x) = E \\psi(x)
  \\]
  where \\( \\hat{H} = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(x) \\) is the **Hamiltonian operator**.`
    },
    {
      title: `
# Quantum Dynamics in 1D, 2D, 3D`,
      markdown: `
- **1D Infinite Well**: Quantized energy levels
    \\[
    E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}
    \\]
- **Harmonic Oscillator**:
    \\[
    E_n = \\left(n + \\frac{1}{2}\\right)\\hbar \\omega
    \\]
- **Hydrogen Atom** (3D, spherical symmetry):
    \\[
    E_n = -\\frac{13.6 \\text{ eV}}{n^2}
    \\]`
    },
    {
      title: `
# Wells, Barriers and Tunnel Effect`,
      markdown: `
- **Finite Well**: Partial penetration of wavefunction outside  
- **Quantum Tunneling**: Non-zero probability of crossing potential barriers  
Important in nuclear decay, STM, and quantum computing.`
    },
    {
      title: `
# Operators and Measurements`,
      markdown: `
- **Observable quantities** → Hermitian operators  
- **Measurement outcomes** = **Eigenvalues**  
If \\( \\hat{A} \\psi = a \\psi \\), then \\( a \\) is a **measurable value**.
**Key operators:**
  - **Position**: \\( \\hat{x} = x \\)
  - **Momentum**: \\( \\hat{p} = -i\\hbar \\frac{\\partial}{\\partial x} \\)
  - **Energy**: \\( \\hat{H} \\)
  - **Angular momentum**: \\( \\hat{L} = \\vec{r} \\times \\vec{p} \\)`
    },
    {
      title: `
# Heisenberg Uncertainty Principle`,
      markdown: `
  \\[
  \\Delta x \\, \\Delta p \\geq \\frac{\\hbar}{2}
  \\]
  Limits the precision with which position and momentum can be known simultaneously. Fundamentally non-deterministic nature.`
    },
    {
      title: `
# Quantum States and Dirac Formalism`,
      markdown: `
  - Quantum states written as **kets**: \\( |\\psi\\rangle \\)  
  - Dual vector: **bra**: \\( \\langle \\psi | \\)  
  - Measurement: \\( \\langle \\phi | \\hat{A} | \\psi \\rangle \\)  
  - **Probability amplitude**: \\( |\\langle \\phi | \\psi \\rangle|^2 \\)`
    },
    {
      title: `
# Spin and Angular Momentum`,
      markdown: `
  - Intrinsic spin: \\( s = 1/2 \\) for electrons  
  - **Spin-1/2 States**: |↑⟩, |↓⟩  
  - **Spin Operators**: Sₓ, Sᵧ, S𝓏  
  - Commutation:
  \\[
  [\\hat{S}_x, \\hat{S}_y] = i\\hbar \\hat{S}_z
  \\]
  
  Spin couples with orbital angular momentum in **fine structure**.`
    },
    {
      title: `
# Time Evolution and Transition Probabilities`,
      markdown: `
  Given initial state \\( |\\psi(0)\\rangle \\), evolution:
  \\[
  |\\psi(t)\\rangle = e^{-i\\hat{H}t/\\hbar} |\\psi(0)\\rangle
  \\]
  Transition probability to another state \\( |\\phi\\rangle \\):
  \\[
  P = |\\langle \\phi | \\psi(t) \\rangle|^2
  \\]`
    },
    {
      title: `
# Perturbation Theory`,
      markdown: `
  Used when Hamiltonian is split:  
  \\[
  \\hat{H} = \\hat{H}_0 + \\lambda \\hat{H}'
  \\]
### Time-Independent Perturbation (Non-degenerate):
  Corrects energy levels:
  \\[
  E_n^{(1)} = \\langle \\psi_n^{(0)} | \\hat{H}' | \\psi_n^{(0)} \\rangle
  \\]
### Time-Dependent Perturbation:
Applies to transitions caused by external fields, e.g., light absorption/emission.`
    },
    {
      title: `
# Summary`,
      markdown: `
  Quantum Mechanics describes the physical world at small scales using wavefunctions and operators. Measurement introduces probabilistic outcomes, and quantities like energy, momentum, and spin are quantized. The formalism includes:
  - Schrödinger equations
  - Operators and eigenstates
  - Uncertainty principles
  - Dirac notation for transitions
  - Perturbative methods for complex systems
  
  These principles underpin all modern physics, chemistry, and emerging quantum technologies.`
    }
  ];
  
    const location = useLocation();
    const pathSegments = location . pathname . split("/");
    const topic = pathSegments[pathSegments.length-1];

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                <CreateCoursePage hereProps={ contentArray }/>
                <CreateGoToProblems where_id={topic}/>
                <ChatBotBox/>
            </div>
        </div>
    );
}