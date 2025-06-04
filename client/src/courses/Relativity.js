import { useLocation } from "react-router-dom";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import TopBar from "../TopBar";
import ChatBotBox from "../ChatBotBox";
import useTrackCourseVisit from "./visitCourseApi";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";


export default function Relativity(){

    //custom hook for page tracking calling
    useTrackCourseVisit();

    // comm with newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose(()=>setTalkToNewtonium(false));

    const specialRelativityContent = [
      {
        title: "Postulates of Special Relativity",
        markdown: `
    Einstein’s theory is based on two postulates:
    
    1. The laws of physics are identical in all inertial frames.
    2. The speed of light in vacuum is constant \\( c \\), independent of the motion of source or observer.
        `
      },
      {
        title: "Galilean Transformation Limitation",
        markdown: `
    Galilean transformation assumes time is absolute:
    
    \\[
    x' = x - vt, \\quad t' = t
    \\]
    
    This contradicts the invariance of the speed of light predicted by Maxwell’s equations.
        `
      },
      {
        title: "Lorentz Transformations",
        markdown: `
    Coordinates transform as:
    
    \\[
    t' = \\gamma \\left(t - \\frac{v x}{c^2}\\right), \\quad x' = \\gamma (x - v t), \\quad y' = y, \\quad z' = z
    \\]
    
    with
    
    \\[
    \\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}
    \\]
    
    which mixes space and time coordinates.
        `
      },
      {
        title: "Time Dilation",
        markdown: `
    Proper time interval \\( \\Delta t_0 \\) measured in the moving frame relates to \\( \\Delta t \\) in the lab frame:
    
    \\[
    \\Delta t = \\gamma \\Delta t_0
    \\]
    
    Moving clocks run slower compared to stationary observers.
        `
      },
      {
        title: "Length Contraction",
        markdown: `
    Proper length \\( L_0 \\) measured in the object’s rest frame contracts in the lab frame:
    
    \\[
    L = \\frac{L_0}{\\gamma}
    \\]
    
    Objects appear shorter along the direction of motion.
        `
      },
      {
        title: "Relativity of Simultaneity",
        markdown: `
    Events simultaneous in one frame may not be simultaneous in another:
    
    \\[
    \\Delta t' = \\gamma \\left( \\Delta t - \\frac{v \\Delta x}{c^2} \\right)
    \\]
    
    Time order depends on the frame.
        `
      },
      {
        title: "Spacetime Interval",
        markdown: `
    Between two events, the invariant interval is:
    
    \\[
    s^2 = c^2 \\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2
    \\]
    
    Invariant under Lorentz transformations.
        `
      },
      {
        title: "Four-Vectors",
        markdown: `
    Four-position vector:
    
    \\[
    X^\\mu = (ct, x, y, z)
    \\]
    
    Four-velocity and four-momentum generalize classical vectors in Minkowski space.
        `
      },
      {
        title: "Relativistic Energy and Momentum",
        markdown: `
    Energy and momentum relate via:
    
    \\[
    E^2 = (pc)^2 + (m_0 c^2)^2
    \\]
    
    Total energy includes rest energy \\( m_0 c^2 \\).
        `
      },
      {
        title: "Velocity Addition",
        markdown: `
    Relativistic addition of velocities \\( u \\) and \\( v \\):
    
    \\[
    u' = \\frac{u + v}{1 + \\frac{uv}{c^2}}
    \\]
    
    No velocity can exceed the speed of light.
        `
      },
      {
        title: "Mass-Energy Equivalence",
        markdown: `
    Rest mass is equivalent to energy:
    
    \\[
    E = m c^2
    \\]
    
    Fundamental to nuclear and particle physics.
        `
      },
      {
        title: "Relativistic Doppler Effect",
        markdown: `
    Observed frequency for source moving at velocity \\( v \\):
    
    \\[
    f' = f \\sqrt{\\frac{1 + \\frac{v}{c}}{1 - \\frac{v}{c}}}
    \\]
    
    Explains redshift and blueshift.
        `
      },
      {
        title: "Applications",
        markdown: `
    - Particle accelerators use relativistic dynamics.
    - GPS satellites require time dilation corrections.
    - Astrophysics studies jets and cosmic phenomena.
    - Nuclear reactions convert mass to energy.
        `
      }
    ];
    
    

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];


    return(
        <div className="course-page">
            <TopBar />
            <div className="content-for-course">
            {!talkToNewtonium ? 
                (<>
                <CreateCoursePage hereProps={specialRelativityContent} />
                <CreateGoToProblems where_id={topic} />
                <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                </>) : 
                (<PageOfChatBox />)
            }
            </div>
        </div>
    );
}