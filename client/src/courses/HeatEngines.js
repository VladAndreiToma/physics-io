import { useState } from "react";
import TopBar from "../TopBar";
import { useNewtoniumClose } from "./useNewtoniumClose";
import AskNewtonium from "../AskNewtonium";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";

export default function HeatEngines(){
    
    const[talkToNewtonium,setTalkToNewtonium] = useState( false );
    useNewtoniumClose(()=>setTalkToNewtonium(false));
    
    const enginesAndHeatUnitsContent = [
        {
          title: "Thermal Energy and Units",
          markdown: `
      Thermal energy refers to the internal energy present in a system due to the random motion of its molecules.
      
      - SI unit of heat: the joule (J)
      - Calorie:  
        \\[
        1\\ \\text{cal} = 4.184\\ \\text{J}
        \\]
      - British Thermal Unit (BTU):  
        \\[
        1\\ \\text{BTU} \\approx 1055\\ \\text{J}
        \\]
      
      Other thermal units include kilowatt-hours (kWh), often used in engineering systems.
      
      \\[
      1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}
      \\]
      `
        },
      
        {
          title: "Heat Engines and Cycles",
          markdown: `
      A heat engine is a system that converts heat (thermal energy) into mechanical work by exploiting a temperature difference.
      
      Basic components:
      - A hot reservoir at temperature \\(T_H\\)
      - A cold reservoir at \\(T_C\\)
      - A working substance undergoing cyclic transformations
      
      The engine absorbs heat \\(Q_H\\), performs work \\(W\\), and releases \\(Q_C\\) to the cold reservoir.
      
      \\[
      W = Q_H - Q_C
      \\]
      
      Efficiency:
      \\[
      \\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H}
      \\]
      `
        },
      
        {
          title: "Carnot Engine and Theoretical Limit",
          markdown: `
      The Carnot engine represents the ideal, reversible engine cycle.
      
      Efficiency:
      \\[
      \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}
      \\]
      
      This sets the upper bound for the efficiency of any real engine operating between two temperatures.
      
      Cycle:
      1. Isothermal expansion at \\(T_H\\)  
      2. Adiabatic expansion  
      3. Isothermal compression at \\(T_C\\)  
      4. Adiabatic compression
      `
        },
      
        {
          title: "Real-World Engines",
          markdown: `
      Internal combustion engines (gasoline/diesel) and steam turbines are real-world implementations of heat engines.
      
      Typical processes:
      - Intake
      - Compression
      - Combustion
      - Expansion (power stroke)
      - Exhaust
      
      These are modeled using Otto (gasoline) or Diesel thermodynamic cycles. Turbines often use the Rankine cycle.
      
      Real engines involve:
      - Friction losses  
      - Heat dissipation  
      - Irreversibilities  
      - Non-ideal gas behavior
      `
        },
      
        {
          title: "Refrigerators and Heat Pumps",
          markdown: `
      A refrigerator is a heat engine operating in reverse: work is used to extract heat from a cold reservoir.
      
      Coefficient of performance (COP):
      \\[
      \\text{COP}_{\\text{cooling}} = \\frac{Q_C}{W}, \\quad
      \\text{COP}_{\\text{heating}} = \\frac{Q_H}{W}
      \\]
      
      These are used in air conditioning, cryogenics, and industrial refrigeration.
      `
        },
      
        {
          title: "Second Law and Engine Irreversibility",
          markdown: `
      The Second Law of Thermodynamics implies that no engine can be 100% efficient.
      
      Entropy considerations:
      \\[
      \\Delta S_{\\text{universe}} \\geq 0
      \\]
      
      Real engines produce entropy due to:
      - Heat transfer through finite temperature differences  
      - Friction  
      - Rapid, non-equilibrium processes
      `
        },
      
        {
          title: "Entropy, Work, and Free Energies",
          markdown: `
      Work from an engine is related to changes in free energies in closed systems.
      
      - Helmholtz free energy \\(F = U - TS\\): constant \\(T, V\\)
      - Gibbs free energy \\(G = H - TS\\): constant \\(T, P\\)
      
      Max work extractable:
      \\[
      W_{\\text{max}} = -\\Delta G
      \\]
      
      Engine efficiency thus depends on thermodynamic potentials and how far the system is from equilibrium.
      `
        }
      ];
      
    const topic = useLocation().pathname.split("/").pop();

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                {
                   !talkToNewtonium ?
                   (<>
                        <CreateCoursePage hereProps={enginesAndHeatUnitsContent}/>
                        <CreateGoToProblems where_id={topic}/>
                        <AskNewtonium onClick={()=>setTalkToNewtonium(prev=>!prev)}/>
                   </>):
                   (<AskNewtonium/>)
                }
            </div>
        </div>
    );
}