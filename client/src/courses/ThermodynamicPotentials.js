import TopBar from "../TopBar";
import { useLocation } from "react-router-dom";
import { useNewtoniumClose } from "./useNewtoniumClose";
import CreateCoursePage from "./CreateCoursePage";
import CreateChallengesPage from "./CreateChallengesPages";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import useTrackCourseVisit from "./visitCourseApi";
import { useState } from "react";
import InsertBottom from "../userDashes/visual_components/InsertBottom";
import CreateGoToProblems from "./CreateGoToProblems";


export default function ThermodynamicsPotentials(){
    
    const location = useLocation();
    useTrackCourseVisit();
    const [talkToNewtonium,setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    const thermodynamicPotentialsContent = [
        {
          title: "Fundamental Thermodynamic Relations",
          markdown: `
      Thermodynamics starts from the **First** and **Second Laws**:
      
      \\[
      dU = \\delta Q - \\delta W, \\qquad dS \\ge \\frac{\\delta Q}{T}.
      \\]
      
      For a simple compressible system (volume work only)  
      \\[
      dU = T\\,dS - P\\,dV.
      \\]
      
      This **fundamental relation** expresses **internal energy** \\(U\\) in its **natural variables** \\(S,V\\).  
      All other potentials follow by Legendre transforms of \\(U(S,V)\\).
      `
        },
      
        {
          title: "Internal Energy \\(U(S,V,N)\\)",
          markdown: `
      Natural variables: **entropy, volume, composition**.
      
      Full differential for a multicomponent system:
      
      \\[
      dU = T\\,dS - P\\,dV + \\sum_i \\mu_i\\,dN_i,
      \\]
      
      where \\(\\mu_i\\) is the **chemical potential** of species \\(i\\).
      
      > **Key viewpoint:** \(U\) measures total energy stored as heat, work capacity, and chemical work.
      `
        },
      
        {
          title: "Enthalpy \\(H(S,P,N)\\)",
          markdown: `
      Defined by the Legendre transform
      
      \\[
      H = U + PV.
      \\]
      
      Differential and natural variables:
      
      \\[
      dH = T\\,dS + V\\,dP + \\sum_i \\mu_i\\,dN_i.
      \\]
      
      **Useful when pressure (not volume) is controlled**, e.g.\ in steady-flow devices (turbines, compressors).
      `
        },
      
        {
          title: "Helmholtz Free Energy \\(F(T,V,N)\\)",
          markdown: `
      Legendre transform eliminating entropy:
      
      \\[
      F = U - TS.
      \\]
      
      Differential:
      
      \\[
      dF = -S\\,dT - P\\,dV + \\sum_i \\mu_i\\,dN_i.
      \\]
      
      **Minimum principle:** At constant \\(T,V,N\\) a system seeks the minimum \\(F\\).  
      Crucial for **canonical ensemble** and **equation-of-state** modeling.
      `
        },
      
        {
          title: "Gibbs Free Energy \\(G(T,P,N)\\)",
          markdown: `
      The most widely used potential in chemistry and phase equilibrium:
      
      \\[
      G = H - TS = U + PV - TS.
      \\]
      
      Differential:
      
      \\[
      dG = -S\\,dT + V\\,dP + \\sum_i \\mu_i\\,dN_i.
      \\]
      
      **Minimum principle:** Equilibrium at constant \\(T,P,N\\) corresponds to minimum \\(G\\).  
      Phase coexistence satisfies
      
      \\[
      G^{(\\alpha)}(T,P)=G^{(\\beta)}(T,P).
      \\]
      `
        },
      
        {
          title: "Chemical Potential and the Grand Potential",
          markdown: `
      **Chemical potential**:
      
      \\[
      \\mu_i = \\left(\\frac{\\partial G}{\\partial N_i}\\right)_{T,P,N_{j\\ne i}}.
      \\]
      
      Controls **mass transfer** and appears in diffusion, reaction equilibria, and semiconductor physics.
      
      **Grand potential** (Landau potential):
      
      \\[
      \\Omega = F - \\sum_i \\mu_i N_i = -P V \\;\\text{for uniform phases}.
      \\]
      
      Natural variables: \\(T,\\;V,\\;\\mu_i\\).  
      Foundation of the **grand-canonical ensemble** in statistical mechanics.
      `
        },
      
        {
          title: "Legendre Transform & Natural Variables",
          markdown: `
      Legendre transform swaps an extensive variable \\(X\\) for its conjugate intensive \\(x\\):
      
      \\[
      \\Phi = U - x X, \\qquad \\text{with}\\; x = \\left(\\frac{\\partial U}{\\partial X}\\right)_{\\text{others}}.
      \\]
      
      | Potential | Natural Variables |
      |-----------|-------------------|
      | \\(U\\) | \\(S,V,N\\) |
      | \\(H\\) | \\(S,P,N\\) |
      | \\(F\\) | \\(T,V,N\\) |
      | \\(G\\) | \\(T,P,N\\) |
      | \\(\\Omega\\) | \\(T,V,\\mu\\) |
      
      Understanding the **natural variable set** is critical for choosing the right potential in engineering or chemistry problems.
      `
        },
      
        {
          title: "Maxwell Relations",
          markdown: `
      Symmetry of second derivatives yields four classic relations, e.g.\ from \\(G(T,P)\\):
      
      \\[
      \\left(\\frac{\\partial S}{\\partial P}\\right)_T = -\\left(\\frac{\\partial V}{\\partial T}\\right)_P.
      \\]
      
      These relations connect **measurable quantities** (\\(\\alpha\\) thermal expansion, \\(\\kappa_T\\) compressibility) and simplify calorimetry or EOS derivations.
      `
        },
      
        {
          title: "Free Energies & Phase Transitions",
          markdown: `
      **Clapeyron equation** (coexistence curve):
      
      \\[
      \\frac{dP}{dT} = \\frac{\\Delta S}{\\Delta V} = \\frac{L}{T\\,\\Delta V},
      \\]
      
      derived from equality of \\(G\\) for two phases.
      
      At critical points, higher derivatives \\(\\partial^2 G/\\partial T^2\\) or \\(\\partial^2 G/\\partial P^2\\) vanish, leading to **critical exponents** in statistical physics.
      `
        },
      
        {
          title: "Applications: Engines, Refrigeration & Chemical Reactors",
          markdown: `
      - **Carnot engine efficiency** relates to entropy changes  
        \\[
        \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}.
        \\]
      
      - **Reaction spontaneity** at \\(T,P\\):  
        \\[
        \\Delta_r G = \\Delta_r G^{\\circ} + RT \\ln Q, \\quad K = e^{-\\Delta_r G^{\\circ}/RT}.
        \\]
      
      - **Exergy (Available Work)** is essentially the useful part of \\(F\\) or \\(G\\) relative to surroundings.
      
      Thermodynamic potentials thus connect **microscopic statistics**, **macroscopic energy balances**, and **engineering design**.
      `
        }
      ];
    
    const topic = location.pathname.split("/").pop();
    
    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                {
                    !talkToNewtonium ? (<>
                        <CreateCoursePage hereProps={thermodynamicPotentialsContent}/>
                        <CreateGoToProblems where_id={topic}/>
                        <AskNewtonium onClick={()=>setTalkToNewtonium(prev=>!prev)}/>
                    </>):(<PageOfChatBox/>)
                }
                <InsertBottom/>
            </div>
        </div>
    );
}