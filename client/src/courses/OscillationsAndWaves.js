import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import useTrackCourseVisit from "./visitCourseApi";
import { useState } from "react";
import AskNewtonium from "../AskNewtonium";
import { useNewtoniumClose } from "./useNewtoniumClose";
import PageOfChatBox from "../PageOfChatBox";

export default function OscillationsAndWaves(){
    
      //calling the custom hook for course tracking
      useTrackCourseVisit();

      //see if user wants to talk with newtonium
      const[ talkToNewtonium, setTalkToNewtonium ] = useState(false);
      console.log(`talk to newtonium ${talkToNewtonium}`);
      useNewtoniumClose( ()=>setTalkToNewtonium(false) );

      const content = [
            {
              title: `
          1. Simple Harmonic Motion (SHM)`,
              markdown: `
          Definition: SHM is a type of periodic motion where the restoring force is directly proportional to the displacement and acts in the direction opposite to that of displacement.
          
          Equation of Motion:
          \\[
          m\\ddot{x} + kx = 0 \\Rightarrow \\ddot{x} + \\omega^2 x = 0
          \\]
          where \\( \\omega = \\sqrt{\\frac{k}{m}} \\)
          
          Solution:
          \\[
          x(t) = A \\cos(\\omega t + \\phi)
          \\]
          
          Energy in SHM:
          - Kinetic Energy: \\( T = \\frac{1}{2}mv^2 \\)
          - Potential Energy: \\( V = \\frac{1}{2}kx^2 \\)
          - Total Energy: \\( E = \\frac{1}{2}kA^2 \\) (constant)
              `
            },
            {
              title: `
          2. Damped Oscillations`,
              markdown: `
          Equation:
          \\[
          m\\ddot{x} + b\\dot{x} + kx = 0
          \\]
          
          - Underdamped: Oscillatory with exponential decay
          - Critically damped: Fastest return to equilibrium without oscillation
          - Overdamped: No oscillation, slow return
          
          General Solution (underdamped case):
          \\[
          x(t) = A e^{-\\gamma t} \\cos(\\omega' t + \\phi), \\quad \\omega' = \\sqrt{\\omega^2 - \\gamma^2}, \\quad \\gamma = \\frac{b}{2m}
          \\]
              `
            },
            {
              title: `
          3. Forced Oscillations and Resonance`,
              markdown: `
          Equation:
          \\[
          m\\ddot{x} + b\\dot{x} + kx = F_0 \\cos(\\omega t)
          \\]
          
          - Particular Solution leads to resonance at driving frequency \\( \\omega \\approx \\omega_0 \\)
          
          Amplitude Response:
          \\[
          A(\\omega) = \\frac{F_0}{\\sqrt{(k - m\\omega^2)^2 + (b\\omega)^2}}
          \\]
          
          - Phase lag between driving force and response increases with frequency.
              `
            },
            {
              title: `
          4. Perturbation Theory in Waves`,
              markdown: `
          Perturbation theory analyzes systems where a small disturbance is added to a solvable system.
          
          - Example: Small damping or nonlinearities in wave/oscillator equations
          - Approach: Expand solution as a series:
          \\[
          x(t) = x_0(t) + \\epsilon x_1(t) + \\epsilon^2 x_2(t) + \\dots
          \\]
          
          - Useful in nonlinear oscillations, modulated wave packets, and quantum wavefunctions.
              `
            },
            {
              title: `
          5. Coupled Oscillations`,
              markdown: `
          System: Two or more oscillators linked by a coupling force (e.g., two masses connected by springs).
          
          Equations:
          \\[
          m \\ddot{x}_1 = -k x_1 + k_c(x_2 - x_1)
          \\]
          \\[
          m \\ddot{x}_2 = -k x_2 + k_c(x_1 - x_2)
          \\]
          
          - Normal Modes: Collective oscillations where each mass oscillates with a common frequency.
          - Symmetric mode (in-phase)
          - Antisymmetric mode (out-of-phase)
          - Beat phenomenon can emerge from initial excitation in non-normal-mode configuration.
              `
            },
            {
              title: `
          6. Interference and Beats`,
              markdown: `
          Constructive and Destructive Interference
          
          - Superposition of waves:
          \\[
          y = y_1 + y_2
          \\]
          
          - Constructive: Waves add up in phase → amplitude increases
          - Destructive: Waves cancel out when out of phase
          
          Beats Phenomenon
          
          - Occurs when two waves of slightly different frequencies interfere:
          \\[
          y(t) = 2A \\cos\\left( \\frac{\\Delta \\omega}{2} t \\right) \\cos\\left( \\omega_{\\text{avg}} t \\right)
          \\]
          
          - Beat frequency: \\( f_{\\text{beat}} = |f_1 - f_2| \\)
              `
            },
            {
              title: `
          Summary`,
              markdown: `
          Oscillations and waves form the backbone of classical physics and engineering applications. From ideal SHM to complex coupled systems and perturbative corrections, understanding these dynamics allows the analysis and design of a wide array of physical systems from molecular vibrations to electrical circuits.
              `
            }
          ];
          

      const location = useLocation();
      const pathSegments = location.pathname.split("/");
      const topic = pathSegments[ pathSegments.length-1 ];
      console.log( "location: " , topic );
          
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