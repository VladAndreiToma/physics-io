import Markdown from "react-markdown";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";

export default function AnalyticalMechanics(){

      // getting generic location  ------ to be used for multiple stuff here
      const location = useLocation();

      useTrackCourseVisit();


  const analyticalMechanicsContent = [
    {
      title: `
# Generalized Coordinates, Speeds, and Accelerations`,
      markdown: `
- **Generalized Coordinates**: 
- In classical mechanics, generalized coordinates are a set of independent variables used to describe the configuration of a system. These coordinates are not necessarily the usual Cartesian coordinates but can include any variables that appropriately describe the system. For example, in a pendulum, instead of using \( x \) and \( y \) coordinates, the generalized coordinate could be the angle \( \theta \).
- **Speeds and Accelerations**: 
- The speed of a system's generalized coordinates is the time derivative of the generalized coordinate:  
      \( \dot{q}_i = \frac{dq_i}{dt} \), where \( q_i \) represents the generalized coordinates.
- The generalized acceleration is the second time derivative of the generalized coordinates:  
      \( \ddot{q}_i = \frac{d^2q_i}{dt^2} \).
  `
    },
    {
      title: `
# Generalized Momenta`,
      markdown: `
- **Generalized Momenta**: 
- Defined as the partial derivative of the Lagrangian with respect to the generalized velocity:  
      \( p_i = \frac{\partial L}{\partial \dot{q}_i} \), where \( L \) is the Lagrangian of the system.
- Generalized momentum generalizes the classical concept of momentum and is crucial in the formulation of Lagrangian and Hamiltonian mechanics.
  `
    },
    {
      title: `
# Phase Space`,
      markdown: `
- **Phase Space**: The space of all possible states of a system, typically described by positions and momenta (or velocities). It is a 2n-dimensional space for a system of \( n \) generalized coordinates. Each point in phase space corresponds to a unique state of the system.
- For example, a system with position \( q_i \) and momentum \( p_i \) will have a phase space with coordinates \( (q_1, p_1, q_2, p_2, \dots) \).
  `
    },
    {
      title: `
# Lagrange Formalism`,
      markdown: `
- **Lagrangian Mechanics**:
- The Lagrangian \( L \) is defined as the difference between the kinetic energy \( T \) and potential energy \( V \):  
      \( L = T - V \).
- The motion of a system is derived from the **Euler-Lagrange equations**:  
      \[
      \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) - \frac{\partial L}{\partial q_i} = 0
      \]
- These equations provide a set of second-order differential equations describing the dynamics of a system.
  `
    },
    {
      title: `
# Hamilton Formalism`,
      markdown: `
- **Hamiltonian Mechanics**:
- The Hamiltonian \( H \) is the total energy of the system, expressed in terms of generalized coordinates \( q_i \) and generalized momenta \( p_i \):  
      \( H(q_i, p_i, t) = \sum_i p_i \dot{q}_i - L \).
- The equations of motion are described by **Hamilton’s equations**:  
      \[
      \frac{dq_i}{dt} = \frac{\partial H}{\partial p_i}, \quad \frac{dp_i}{dt} = -\frac{\partial H}{\partial q_i}
      \]
  `
    },
    {
      title: `
# Equivalence Between Formulations`,
      markdown: `
- The **Lagrangian** and **Hamiltonian** formalisms are mathematically equivalent in terms of their ability to describe the same physics. However, they offer different perspectives:
- **Lagrangian Mechanics** is useful when dealing with systems that have constraints and for formulating equations in generalized coordinates.
  `
    },
    {
      title: `
# Liouville's Theorem in Phase Space for Fields`,
      markdown: `
- **Liouville’s Theorem**: This theorem states that the phase-space volume is conserved in a Hamiltonian system. Specifically, the flow in phase space (i.e., the trajectories of the system in phase space) preserves the volume.
- Mathematically, for a system with \( n \) generalized coordinates and momenta, the phase space volume \( \Omega \) is preserved under the evolution of the system:  
      \[
      \frac{d\Omega}{dt} = 0
      \]
- This implies that the probability distribution in phase space remains constant in time.
  `
    },
    {
      title: `
# Von Neumann Formalism`,
      markdown: `
- **Von Neumann Formalism**:
- In quantum mechanics, the **Von Neumann equation** describes the time evolution of the density matrix \( \rho \) for a closed quantum system:  
      \[
      i \hbar \frac{d\rho}{dt} = [H, \rho]
      \]
- This formalism is the quantum analog of the classical Liouville equation, governing the evolution of the system's state in phase space.
  `
    },
    {
      title: `
# Noether’s Theorem and Symmetries`,
      markdown: `
- **Noether’s Theorem**: A fundamental result in theoretical physics, Noether’s theorem states that every differentiable symmetry of the action of a physical system corresponds to a conservation law.
- **Time Translation Symmetry** (no explicit dependence on time): Conserves **Energy**.
- **Space Translation Symmetry** (no explicit dependence on position): Conserves **Momentum**.
- **Rotational Symmetry** (no explicit dependence on orientation): Conserves **Angular Momentum**.
- Noether’s theorem provides a powerful connection between symmetries and conservation laws, which are central to understanding the behavior of physical systems.
  `
    },
    {
      title: `
# Advanced Systems and Problem Solving & Applications`,
      markdown: `
- **Advanced Systems** often involve multiple interacting particles or fields and may require the use of generalized coordinates, constraints, and symmetries. Common techniques include:
- **Lagrange multipliers** for systems with constraints.
- **Hamilton-Jacobi Equation** for more complex dynamical systems.
- **Canonical Transformations** for simplifying the Hamiltonian in certain systems.
- **Quantum Field Theory (QFT)**: The Hamiltonian and Lagrangian formulations are fundamental in the development of QFT, where fields are treated as dynamical variables.
- **Classical Field Theory**: The dynamics of fields (e.g., electromagnetic fields, fluid dynamics) are often analyzed using these formalisms, incorporating symmetries and conservation laws.
  `
    }
  ];

  const pathSegments = location.pathname.split("/");
  const topic = pathSegments[pathSegments.length - 1];
  console.log( "location: " , topic );

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
                  <CreateCoursePage hereProps={ analyticalMechanicsContent }/>
                  <CreateGoToProblems where_id={ topic }/>
                  <ChatBotBox/>
            </div>
        </div>
    );
}