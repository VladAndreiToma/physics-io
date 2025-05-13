import react from "react";
import TopBar from "./TopBar";
import CollabsableExplanation from "./CollabsableExplanation";
import { Link } from "react-router-dom";
import { image, title } from "framer-motion/client";
import BottomZone from "./BottomZone";
import blackHoleColored from "./images/black-hole-colored.jpg";
import blackHoleRedGray from "./images/black-hole-red-grey.jpg";
import quantumNature from "./images/qunatum-nature.jpg";
import blackHolePink from "./images/black-hole-pink.jpg";

function ConstructLinkTitle( {where , title} ){
    return(
        <Link className="which-course" to={where}>{title}</Link>
    )
}

export default function Courses(){
    return(
        <div className="courses">
            <TopBar/>
            <div className="courses-content">
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={ <Link className="which-course" to="/courses/mathematical-methods-for-physics-and-calculus">Mathematical Methods for Physics & Calculus</Link>}
                    content={"Advanced functions, asymptotic analysis, differential calculus, Integral calculus, complex analysis"}/>

                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/linear-algebra">Linear Algebra</Link>}
                    content={"Vector spaces, eigenvalues, Hilbert spaces , Systems of Equations, Advanced solving methods, Levi Civita, Orthogonalization"}/>
                    
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/methods-in-mathematical-physics">Methods in mathematical physics</Link>}
                    content={"Complex analysis, Contours, Residuals, Complex Integrals, Series, Ploynomials, Differential equations, Legendre Polynomials, Laguere Polynomials, Hermite Polynomials, Taylor Series, Fourier and Laplace transformations and anakysis"}/>

                <CollabsableExplanation style={{ padding: '10px' }}
                    title={ <Link className="which-course" to="/courses/vector-calculus">Vector Calculus</Link> }
                    content={"Gradients, Curls, Divergences, Stokes’ Theorem, Gauss’s Theorem, Fluxes, Fields, Sources, Sinks, Volume surface equivalances,Incompressibilty and Louville theorem"}/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/newtonian-mechanics">Newtonian Mechanics</Link>}
                    content={"Kinematics & Dynamics, Laws of motion, Mass and mass distributions, Center of mass, Inertia, Forces, Applied forces & central forces, Composed forces, Limit cases, Complex systems: trolleys planes, Moment of inertia. Translation rotation equivalence, Speed, Acceleration, Angular Speed, Angular acceleration, Torques. Momentum and angular momentum. Force derivation from momentum. Work. Energy: potential and kinetic. Conservation laws. Friction. Accelerated and dampend motions. Periodic movement and oscillations"}/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/analytical-mechanics">Analytical Mechanics</Link>}
                    content={"Generalized coordinates, speeds and accelerations. Phase space. Generalized momenta. Lagrange formalism. Hamilton formalism. Louville theorem in phase space for fields. Von Neumann formalism. Neother theorme and symmetries. Advanced systems and problem solving. Equivalence between formalisms"}/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/oscillations-and-waves">Oscillations and Waves</Link>}
                    content={"Simple Harmonic Motion, Damped and Forced Oscillations, Perturbation theory in waves. Coupled oscillations. Interference: constructive/destructive, Beats phenomena"}/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/electrostatics">Electrostatics</Link>}
                    content="Gauss Law. Charges. Distribution. Fluxes. Electrical force. Electric field. Potentials."/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to='/courses/magnetostatics'>Magnetostatics</Link>}
                    content="Ampere Law. Biot-Savart Law. Differential geometry charge distribution and field distribution. Magnetic field. Potentials."/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to='/courses/extended-electro-magnetism'>Extended Electro-Magnetism</Link>}
                    content="Maxwell equations - differential form - integral form. Special phenomena"/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<Link className="which-course" to="/courses/electrodynamics-and-relativity">Electrodynamics and Relativity</Link>}
                    content="Electromagnetic waves, special cases of relativistic charge movement"/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={<ConstructLinkTitle where={"/courses/thermodynamics-and-statistics"} title={"Thermodynamics and Statistics"}/>}
                    content="Laws of thermodynamics. Pressure. Volume. Temperature. Transformations. Engines. Heat Exchangers. Entropy and Thermodynamics Potentials. Kinetic theory of gases. Partition functions and Quantum Statistics"/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={  <ConstructLinkTitle where={"/courses/quantum-mechanics"} title={"Quantum Mechanics"}/>  }
                    content="Black body radiation quantization. UV catastrophe. Schrodinger Equation. Particle wave duality. Dynamics in certain geometries: 1,2,3 D and atoms. Time dependent and time independent SE. Wells and barriers. Tunelation. Transitions and probabilities. Momentum and position wave function. Heisenberg uncertainty. Energy. Eigen values and eigen states for a quantum system. Spin. Quantum operators. Dirac formalism. Bra ket notation. Conversion to scalar products for measurement in Dirac formalism. Transitions, momentum and angular momentum. Energy and eigenstates. Spin. Perturbation theory"/>
                
                <CollabsableExplanation style={{ padding: '10px' }}
                    title={  <ConstructLinkTitle where={"/courses/relativity"} title={"Relativity"}/>   }
                    content="Special Relativity (Lorentz Transformations, Time Dilation). General Relativity (Equivalence Principle, Einstein Field Equations - intro level)"/>

                <CollabsableExplanation style={{ padding: '10px' }}
                    title={  <ConstructLinkTitle where={"/courses/optics-and-waves"} title={"Optics and waves"} />  }
                    content={"Geometric Optics (Lenses, Mirrors)+Matrix analysis. Wave Optics (Diffraction, Interference). Quantum Optics. Lagrangian treatment of light paths in variational refractive index environments. Metamaterials"}
                />

                <CollabsableExplanation style={{ padding: '10px' }}
                    title={   <ConstructLinkTitle where={"/courses/solid-state-and-semiconductors"} title={"Solid State and Semiconductors"} />  }
                    content={"Lattice & Basis. Definition of crystal lattice. Unit cells (Primitive, Conventional). Bravais lattices (2D and 3D classification). Basis and crystal structures (FCC, BCC, HCP). Miller indices. X-ray diffraction (Bragg’s Law). Reciprocal Lattice & Brillouin Zones. Concept of reciprocal lattice. First Brillouin Zone. Free electron model (Drude & Sommerfeld). Density of states (1D, 2D, 3D). Fermi level and Fermi surface. Bloch's Theorem & Electron Behavior in Periodic Potentials. Kronig-Penney Model (1D potential well). Energy bands and band gaps. Effective Mass & Density of States. Intrinsic & Extrinsic Semiconductors. Doping: n-type and p-type semiconductors. Carrier concentration and Fermi level shift. PN Junction & Diodes. Breakdown mechanisms (Zener and Avalanche). LED and Photodiodes. Bipolar Junction Transistor (BJT) operation. Field-Effect Transistor (FET) types (MOSFET, JFET). CMOS technology. Semiconductor fabrication techniques (Lithography, Doping, Etching)."}
                />
                <div className="take-a-dive-in-physics">
                    <label style={{ backgroundColor:"rgba(88, 24, 124, 0.7)" , padding: "1%" }}>
                        As you aproach the event horizon of whats 
                        intuitive, mathematics and phenomena will 
                        pull you towards the singularity of the unknown or less imaginable
                    </label>
                </div> 
            </div>
        </div>
    )
}