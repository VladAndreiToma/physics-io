import ChatBotBox from "../ChatBotBox";
import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from './CreateGoToProblems';
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";

export default function NewtonianMechanics(){

        //calling the custom hook for course tracking
        useTrackCourseVisit();

  const newtonianMechanicsContentArray = [
    {
        title: `
# Kinematics & Dynamics`,
        markdown: `
- **Kinematics** studies the motion of objects without considering the forces that cause the motion. Key quantities include:
- **Position**, **Velocity**, and **Acceleration**.
- **Displacement**: The change in position of an object.
- **Velocity**: The rate of change of displacement.
- **Acceleration**: The rate of change of velocity.
- **Dynamics** is concerned with the forces and torques that cause motion. It focuses on:
- **Newton's Laws of Motion**.
        `
    },
    {
        title: `
  # Newton's Laws of Motion`,
        markdown: `
1. **First Law (Inertia)**: An object remains at rest or in uniform motion unless acted upon by an external force.
2. **Second Law**: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.  
           - \( F = ma \) (Force = mass × acceleration)
3. **Third Law**: For every action, there is an equal and opposite reaction.
        `
    },
    {
        title: `
# Mass and Mass Distributions`,
        markdown: `
- **Mass** is a measure of the amount of matter in an object. It is invariant and does not change based on location.
- **Mass Distributions** describe how mass is spread across an object or system (e.g., rigid bodies, extended objects).
- **Center of Mass**: The point at which the mass of an object or system can be considered to be concentrated.
        `
    },
    {
        title: `
# Center of Mass and Inertia`,
        markdown: `
- The **center of mass (COM)** is the weighted average position of the mass distribution.
- The **moment of inertia** is the rotational equivalent of mass, describing an object's resistance to angular acceleration.
        `
    },
    {
        title: `
# Forces`,
        markdown: `
- **Applied Forces**: Forces that are applied to an object (e.g., pushes or pulls).
- **Central Forces**: Forces that act along the line connecting the center of mass of an object and the point of application (e.g., gravitational force).
- **Composed Forces**: Forces that result from the combination of multiple forces acting on an object.
        `
    },
    {
        title: `
# Limit Cases`,
        markdown: `
- **Free Fall**: When the only force acting on an object is gravity (ignoring air resistance).
- **Equilibrium**: A system where all forces and torques cancel out, resulting in no acceleration.
        `
    },
    {
        title: `
# Complex Systems`,
        markdown: `
- **Trolleys, Planes, and Other Systems**: Understanding motion in more complex systems, where multiple objects interact (e.g., in the case of trolleys or planes, multiple forces and constraints affect motion).
        `
    },
    {
        title: `
# Moment of Inertia`,
        markdown: `
- The **moment of inertia** describes how the mass of an object is distributed relative to its axis of rotation.
- The moment of inertia depends on the shape, mass distribution, and the axis of rotation.
- **Parallel Axis Theorem**: Used to calculate the moment of inertia of an object about any axis.
        `
    },
    {
        title: `
# Translation and Rotation Equivalence`,
        markdown: `
- **Translational motion and rotational motion** are similar in terms of the equations that govern them.
- For translational motion:  
          **F = ma**  
- For rotational motion:  
          \( \tau = I\alpha \) (Torque = Moment of inertia × Angular acceleration)
        `
    },
    {
        title: `
# Speed, Acceleration, Angular Speed, and Angular Acceleration`,
        markdown: `
- **Speed**: The magnitude of velocity, defined as \( v = \frac{dx}{dt} \).
- **Angular Speed**: The rate at which an object rotates, given by \( \omega = \frac{d\theta}{dt} \).
- **Acceleration**: The rate of change of velocity, \( a = \frac{dv}{dt} \).
- **Angular Acceleration**: The rate of change of angular speed, \( \alpha = \frac{d\omega}{dt} \).
        `
    },
    {
        title: `
# Torques`,
        markdown: `
- **Torque** (\( \tau \)) is the rotational equivalent of force. It causes an object to rotate about an axis and is given by:  
          \( \tau = r \times F \), where \( r \) is the position vector and \( F \) is the applied force.
        `
    },
    {
        title: `
# Momentum and Angular Momentum`,
        markdown: `
- **Linear Momentum**: The product of an object's mass and its velocity, \( p = mv \).
- **Angular Momentum**: The rotational equivalent of linear momentum, given by \( L = I\omega \), where \( I \) is the moment of inertia and \( \omega \) is the angular velocity.
        `
    },
    {
        title: `
# Force Derivation from Momentum`,
        markdown: `
- The force acting on an object can be derived from the rate of change of momentum.  
        \[
        F = \frac{dp}{dt}
        \]
        `
    },
    {
        title: `
# Work and Energy`,
        markdown: `
- **Work**: The transfer of energy through force applied over a distance, \( W = F \cdot d \).
- **Kinetic Energy**: The energy associated with an object's motion, \( K = \frac{1}{2}mv^2 \).
- **Potential Energy**: The energy stored in an object due to its position or configuration, e.g., gravitational potential energy \( U = mgh \).
        `
    },
    {
        title: `
# Conservation Laws`,
        markdown: `
- **Conservation of Momentum**: In an isolated system, the total momentum remains constant.
- **Conservation of Energy**: In an isolated system, the total energy remains constant.
        `
    },
    {
        title: `
# Friction`,
        markdown: `
- **Friction**: The force that resists relative motion between two surfaces in contact.
- **Static Friction**: The friction that resists the initiation of sliding motion.
- **Kinetic Friction**: The friction that resists the relative motion of objects sliding against each other.
        `
    },
    {
        title: `
# Accelerated and Damped Motion`,
        markdown: `
- **Accelerated Motion**: Motion where the velocity of an object increases or decreases over time.
- **Damped Motion**: Motion where the velocity of an object decreases due to resistive forces (e.g., friction or air resistance), eventually leading to the object coming to rest.
        `
    },
    {
        title: `
# Periodic Motion and Oscillations`,
        markdown: `
- **Periodic Motion**: Motion that repeats itself at regular intervals, such as the motion of a pendulum or a spring.
- **Simple Harmonic Motion**: A type of periodic motion where the restoring force is directly proportional to displacement, given by:  
        \[
        F = -kx
        \]
        where \( k \) is the spring constant and \( x \) is the displacement.
- **Oscillations**: Repetitive back-and-forth motion, often described by sinusoidal functions.
- **Frequency** and **Period**:  
- **Frequency** \( f \) is the number of oscillations per unit time.  
- **Period** \( T \) is the time taken for one complete oscillation.
        `
    }
];
  
const location = useLocation();
const pathSegments = location.pathname.split("/");
const topic = pathSegments[pathSegments.length - 1]; 
console.log( "location: " , topic );

        return(
                <div className="course-page">
                        <TopBar />
                <div className="content-for-course">
                        <CreateCoursePage hereProps={ newtonianMechanicsContentArray }/>
                        <CreateGoToProblems  where_id={topic}/>
                        <ChatBotBox/>
                </div>
                </div>
        );
}