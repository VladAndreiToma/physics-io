import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import useTrackCourseVisit from "./visitCourseApi";
import { useNewtoniumClose } from "./useNewtoniumClose";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";
import AskNewtonium from "../AskNewtonium";

export default function ConductorsAndMetals(){
    
    const location = useLocation();
    useTrackCourseVisit();
    const[talkToNewtonium , setTalkToNewtonium ] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));
      
    const conductorsAndMetalsContent = [
        {
          title: "Drude Model of Electrical Conduction",
          markdown: `
      The Drude model, proposed by Paul Drude in 1900, treats conduction electrons in a metal as classical particles that move under the influence of an electric field and undergo random collisions.
      
      Assumptions:
      
      - Electrons behave as classical particles.
      - Collisions randomize velocity direction.
      - Between collisions, electrons accelerate under the applied electric field \\( \\mathbf{E} \\).
      
      Equation of Motion:
      
      \\[
      m \\frac{d\\mathbf{v}}{dt} = -e \\mathbf{E}
      \\]
      
      Introducing the relaxation time \\( \\tau \\), the drift velocity is
      
      \\[
      \\mathbf{v}_d = -\\frac{e \\tau}{m} \\mathbf{E}
      \\]
      
      Current Density:
      
      \\[
      \\mathbf{J} = n e \\mathbf{v}_d = \\frac{n e^2 \\tau}{m} \\mathbf{E}
      \\]
      
      which gives the conductivity
      
      \\[
      \\sigma = \\frac{n e^2 \\tau}{m}
      \\]
      
      Limitations:
      
      - Does not account for quantum effects.
      - Fails to explain electronic heat capacity.
      - Inaccurate for magnetic transport phenomena like the Hall effect.
      `
        },
      
        {
          title: "Band Theory of Solids",
          markdown: `
      Band theory explains the electronic structure of solids by considering energy bands formed by overlapping atomic orbitals due to the crystal lattice periodicity.
      
      - Conductors have partially filled or overlapping conduction and valence bands.
      - Insulators have a large band gap between valence and conduction bands.
      - Semiconductors have a small band gap allowing thermally excited carriers.
      
      Density of States (3D free electrons):
      
      \\[
      g(E) = \\frac{1}{2\\pi^2} \\left( \\frac{2m}{\\hbar^2} \\right)^{3/2} \\sqrt{E}
      \\]
      `
        },
      
        {
          title: "Fermi Energy and Fermi–Dirac Statistics",
          markdown: `
      At absolute zero, electrons fill states up to the Fermi energy \\( E_F \\):
      
      \\[
      E_F = \\frac{\\hbar^2}{2m} (3 \\pi^2 n)^{2/3}
      \\]
      
      The probability of occupation at energy \\( E \\) is given by the Fermi–Dirac distribution:
      
      \\[
      f(E) = \\frac{1}{e^{(E - \\mu)/k_B T} + 1}
      \\]
      
      where \\( \\mu \\approx E_F \\) at low temperature. 
      
      Associated quantities include:
      
      - Fermi velocity:
      
      \\[
      v_F = \\sqrt{\\frac{2 E_F}{m}}
      \\]
      
      - Fermi temperature:
      
      \\[
      T_F = \\frac{E_F}{k_B}
      \\]
      `
        },
      
        {
          title: "Wiedemann–Franz Law and Thermal Conductivity",
          markdown: `
      Electrons conduct both electric current and heat. The Wiedemann–Franz law relates electrical conductivity \\( \\sigma \\) and thermal conductivity \\( \\kappa \\):
      
      \\[
      \\frac{\\kappa}{\\sigma} = L T
      \\]
      
      where the Lorenz number is
      
      \\[
      L = \\frac{\\pi^2}{3} \\left( \\frac{k_B}{e} \\right)^2 \\approx 2.45 \\times 10^{-8} \\text{ W} \\Omega \\text{ K}^{-2}
      \\]
      
      This shows thermal and electrical conduction are tightly connected in metals.
      `
        },
      
        {
          title: "Electron–Phonon Interactions",
          markdown: `
      Electron scattering by lattice vibrations (phonons) increases resistivity as temperature rises.
      
      Matthiessen’s rule states total resistivity as
      
      \\[
      \\rho(T) = \\rho_0 + \\rho_{phonon}(T)
      \\]
      
      where \\( \\rho_0 \\) is the residual resistivity from impurities and defects, and \\( \\rho_{phonon}(T) \\) typically increases approximately linearly at higher temperatures.
      
      This interaction explains temperature-dependent resistivity behavior in metals.
      `
        },
      
        {
          title: "Quantum Corrections and Beyond",
          markdown: `
      The Sommerfeld model improves the Drude model by incorporating Fermi–Dirac statistics, correctly predicting the electronic heat capacity magnitude.
      
      Further refinements:
      
      - Bloch theorem describes electron wavefunctions in a periodic potential.
      - Brillouin zones define allowed energy bands.
      - Tight-binding and nearly free-electron models calculate band structures.
      
      These concepts form the basis for modern semiconductor physics and superconductivity theories.
      `
        }
      ];
      
      
    const topic = location.pathname.split("/").pop();
    
    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
            {
                !talkToNewtonium ? 
                (<>
                    <CreateCoursePage hereProps={conductorsAndMetalsContent} />
                    <CreateGoToProblems where_id={topic} />
                    <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                </>) : 
                (<PageOfChatBox />)
            }
            </div>
        </div>
    );
}