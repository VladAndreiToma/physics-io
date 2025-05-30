import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from './CreateGoToProblems';
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";
import AskNewtonium from '../AskNewtonium';
import PageOfChatBox from '../PageOfChatBox';
import { useState } from "react";
import {useNewtoniumClose} from "./useNewtoniumClose";

export default function MethodsInMathematicalPhysics(){
    
    //calling custom hook for course tracking
    useTrackCourseVisit();

    //talk to newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState( false );
    useNewtoniumClose( ()=>setTalkToNewtonium(false) );
    
    // theory inside
    const content = [
        {
            title: `
# Complex Analysis`,
            markdown: `
### Definition
    Complex analysis is the study of functions that operate on complex numbers. A complex number has the form \( z = x + iy \),
where \( x \) and \( y \) are real numbers, and \( i \) is the imaginary unit (\( i^2 = -1 \)).
### Contours and Contour Integrals
    In complex analysis, a contour is a path in the complex plane along which a function is integrated. 
The contour integral of a complex function \( f(z) \) over a path \( C \) is given by:
            \[
            \int_C f(z) \, dz
            \]
            This can be used to evaluate integrals involving complex functions by transforming the problem into one over a simpler path.
    
### Residues and Residue Theorem
    The residue of a function at a point is the coefficient of the \( \frac{1}{z} \) term in its Laurent series expansion around that point.
    The Residue Theorem states that the integral of a function around a closed contour is \( 2\pi i \) times the sum of the residues inside the contour:
            \[
            \int_C f(z) \, dz = 2\pi i \sum \text{Residues inside } C
            \]
    
### Complex Integrals
            Complex integrals are integrals over functions defined in the complex plane. These are useful in many areas of physics, 
            especially in solving problems related to wave functions, electromagnetism, and fluid dynamics.
            `
        },
        {
            title: `
# Series Expansions`,
            markdown: `
### Taylor Series
    The Taylor series is an infinite sum of terms used to approximate a function around a point \( x = a \):
            \[
            f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f^{(n)}(a)}{n!}(x - a)^n + \dots
            \]
    It is widely used to approximate functions in mathematical physics and solve differential equations.
### Fourier Series
    A Fourier series represents a function as a sum of sines and cosines:
            \[
            f(x) = a_0 + \sum_{n=1}^{\infty} (a_n \cos(nx) + b_n \sin(nx))
            \]
    It is used for analyzing periodic functions and is fundamental in solving problems in signal processing, heat conduction, 
and quantum mechanics.
### Laplace Transform
    The Laplace transform is an integral transform used to convert a function of time \( f(t) \) into a function of complex frequency \( s \):
            \[
            F(s) = \int_0^{\infty} e^{-st} f(t) \, dt
            \]
    It is widely used in the study of systems and differential equations in physics and engineering.
            `
        },
        {
            title: `
# Polynomials`,
            markdown: `
### Legendre Polynomials
    Legendre polynomials \( P_n(x) \) are solutions to Legendre’s differential equation:
            \[
            (1 - x^2) \frac{d^2 P_n(x)}{dx^2} - 2x \frac{d P_n(x)}{dx} + n(n+1) P_n(x) = 0
            \]
    They are often used in physics in problems involving spherical symmetry, such as gravitational and electrostatic potentials.
### Laguerre Polynomials
    Laguerre polynomials \( L_n(x) \) are solutions to the Laguerre differential equation:
            \[
            x \frac{d^2 L_n(x)}{dx^2} - (2x - 2n + 1) \frac{d L_n(x)}{dx} + n L_n(x) = 0
            \]
    These polynomials appear in quantum mechanics, particularly in the solution of the radial part of the Schrödinger equation for the hydrogen atom.
### Hermite Polynomials
    Hermite polynomials \( H_n(x) \) are solutions to Hermite’s differential equation:
            \[
            \frac{d^2 H_n(x)}{dx^2} - 2x \frac{d H_n(x)}{dx} + 2n H_n(x) = 0
            \]
    These polynomials arise in problems related to Gaussian integrals, the harmonic oscillator in quantum mechanics, and heat conduction.
            `
        },
        {
            title: 
`# Differential Equations`,
            markdown: `
### Ordinary Differential Equations (ODEs)
    An ODE is an equation involving a function and its derivatives. They are used extensively in physics to model systems such as
    mechanical oscillations, electrical circuits, and population dynamics.
### Partial Differential Equations (PDEs)
    PDEs involve partial derivatives of a function with respect to multiple variables. They describe phenomena like heat conduction,
    wave propagation, and fluid dynamics.
- **Example**: The heat equation:
            \[
            \frac{\partial u(x,t)}{\partial t} = \alpha \frac{\partial^2 u(x,t)}{\partial x^2}
            \]
            where \( u(x,t) \) is the temperature at position \( x \) and time \( t \), and \( \alpha \) is the thermal diffusivity.
- **Example**: The wave equation:
            \[
            \frac{\partial^2 u(x,t)}{\partial t^2} = c^2 \frac{\partial^2 u(x,t)}{\partial x^2}
            \]
            which describes wave motion in a medium.
            `
        },
        {
            title: `
# Fourier and Laplace Transforms`,
            markdown: `
### Fourier Transform
    The Fourier transform is an integral transform that expresses a function \( f(x) \) as an integral of sine and cosine functions:
            \[
            \hat{f}(k) = \int_{-\infty}^{\infty} f(x) e^{-ikx} \, dx
            \]
    It is used in signal processing, quantum mechanics, and solving differential equations by converting them to algebraic equations in the
    frequency domain.
### Laplace Transform
    As mentioned earlier, the Laplace transform converts a time-domain function \( f(t) \) to a complex frequency-domain function \( F(s) \).
    It is particularly useful for solving linear ordinary differential equations and analyzing linear systems in engineering and physics.
            `
        },
        {
            title: `
# Methods for Solving Physical Problems`,
            markdown: `
### Green’s Function
    Green’s functions are used to solve inhomogeneous differential equations subject to specific boundary conditions. They represent the
    response of a system to a point source and are used extensively in electrodynamics and quantum field theory.
### Variational Methods
    Variational methods involve finding functions that minimize or maximize a given functional. They are commonly used in classical mechanics
    (to derive equations of motion) and quantum mechanics (in the principle of least action and the Schrödinger equation).
### Perturbation Theory
    Perturbation theory is used to find an approximate solution to a problem by starting with a known solution and adding corrections due
    to a small perturbation. It is frequently used in quantum mechanics and statistical mechanics.
### Numerical Methods
    In many physical problems, exact solutions to equations are difficult or impossible to obtain. Numerical methods like the finite
    difference method, finite element method, and Monte Carlo simulations are used to approximate solutions to complex differential equations in physics.
            `
        }
    ];


    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[pathSegments.length - 1]; 
    console.log( "location: " , topic );


    return(
        <div className="course-page" >
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
    );
}