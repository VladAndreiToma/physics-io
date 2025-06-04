import TopBar from "./TopBar";
import CollabsableExplanation from "./CollabsableExplanation";
import { Link } from "react-router-dom";
import InsertPictureBackgroundInCourses from "./InsertPictureBackgroundInCourses";
import cherenkovReactor from './images/nuclear-reactors.jpeg';
import laserOpticsBlue from "./images/laser-optic-system-blue.jpeg";
import tokamak from './images/tokamak.jpeg';
import blackHole from './images/black-hole-red-grey.jpg';
import InsertBottom from "./userDashes/visual_components/InsertBottom";

function ConstructLinkTitle( {where , title} ){
    return(
        <Link className="which-course" to={where}>{title}</Link>
    )
}


function AnimatedTitle({ text }) {
  return (
    <b className="course-class-title">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="letter"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </b>
  );
}



export default function Courses(){
    return(
        <div className="courses">
            <TopBar/>
            <div className="courses-content">
                <div className="course-class-type">
                    <AnimatedTitle text={"Mathematics"}/>
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
                </div>
                <div className="course-class-type">
                        <AnimatedTitle text={"Mechanics"}/>
                        <CollabsableExplanation style={{ padding: '10px' }}
                            title={<Link className="which-course" to="/courses/newtonian-mechanics">Newtonian Mechanics</Link>}
                            content={"Kinematics & Dynamics, Laws of motion, Mass and mass distributions, Center of mass, Inertia, Forces, Applied forces & central forces, Composed forces, Limit cases, Complex systems: trolleys planes, Moment of inertia. Translation rotation equivalence, Speed, Acceleration, Angular Speed, Angular acceleration, Torques. Momentum and angular momentum. Force derivation from momentum. Work. Energy: potential and kinetic. Conservation laws. Friction. Accelerated and dampend motions. Periodic movement and oscillations"}/>
                        
                        <CollabsableExplanation style={{ padding: '10px' }}
                            title={<Link className="which-course" to="/courses/analytical-mechanics">Analytical Mechanics</Link>}
                            content={"Generalized coordinates, speeds and accelerations. Phase space. Generalized momenta. Lagrange formalism. Hamilton formalism. Louville theorem in phase space for fields. Von Neumann formalism. Neother theorme and symmetries. Advanced systems and problem solving. Equivalence between formalisms"}/>
                        
                        <CollabsableExplanation style={{ padding: '10px' }}
                            title={<Link className="which-course" to="/courses/oscillations-and-waves">Oscillations and Waves</Link>}
                            content={"Simple Harmonic Motion, Damped and Forced Oscillations, Perturbation theory in waves. Coupled oscillations. Interference: constructive/destructive, Beats phenomena"}/>
                </div>

                <InsertPictureBackgroundInCourses 
                    text={"🔬 On Lasers in Modern Research:In today’s scientific landscape, lasers are not just tools — they are gateways to precision and discovery. Whether it's trapping individual atoms in quantum experiments, performing ultra-precise surgery, or probing the edges of the universe through spectroscopy, lasers have become the backbone of advanced research. Their coherence and power have redefined what we can see, measure, and manipulate."} picture={laserOpticsBlue} rowFlexMode={"to-right"}/>
                
                <div className="course-class-type">
                    <AnimatedTitle text={"Electro-Magnetism"}/>
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
                </div>
                <div className="course-class-type">
                    <AnimatedTitle text={ "Thermodynamics & Statistics" }/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={<ConstructLinkTitle where={"/courses/thermodynamics-and-statistics"} title={"Thermodynamics and Statistics"}/>}
                        content="Laws of thermodynamics. Pressure. Volume. Temperature. Transformations. Engines. Heat Exchangers. Entropy and Thermodynamics Potentials. Kinetic theory of gases. Partition functions and Quantum Statistics"/>
                    <CollabsableExplanation
                        style={{ padding: '10px' }}
                        title={<ConstructLinkTitle where={"/courses/thermodynamic-potentials"} title={"Thermodynamic Potentials"} />}
                        content="Internal energy, Enthalpy, Helmholtz and Gibbs free energies. Legendre transforms and natural variables. Chemical potential. Grand potential and statistical ensembles. Maxwell relations. Thermodynamic stability. Applications to engines, phase transitions, and chemical equilibria."
                    />
                    <CollabsableExplanation
                        style={{ padding: '10px' }}
                        title={<ConstructLinkTitle where={"/courses/heat-engines"} title={"Heat Engines"} />}
                        content="Thermal energy units and conversions. Heat engines and their efficiency. Carnot cycle and theoretical limits. Real-world engines (Otto, Diesel, Rankine). Refrigerators and heat pumps. Entropy generation and irreversibility. Free energies and work extraction in cyclic processes."
                    />
                    <CollabsableExplanation
                        style={{ padding: '10px' }}
                        title={<ConstructLinkTitle where={"/courses/cryogenics"} title={"Cryogenic Technologies"} />}
                        content="Cryogenic principles and industrial production. Liquefaction of gases: Linde, Claude, and JT cycles. Cryocoolers: Stirling, Gifford-McMahon, and pulse-tube systems. Storage and transfer systems. Low-temperature materials. Applications in superconductivity, quantum computing, medical imaging, and space technologies."
                    />
                </div>

                <InsertPictureBackgroundInCourses text={"Well Einstein was wrong. At least in some media. Where particles can travel faster than the light. Big refractive index slows down the light quite an amount, and light particles usually H derivatives might acchieve speed greater than c in those mediums and that leads to emission through blue. That phenomena is called Cherenkov radiation"} picture={cherenkovReactor} rowFlexMode={"to-left"}/>

                <div className="course-class-type">
                    <AnimatedTitle text={"Quantum Verse"}/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={  <ConstructLinkTitle where={"/courses/quantum-mechanics"} title={"Quantum Mechanics"}/>  }
                        content="Black body radiation quantization. UV catastrophe. Schrodinger Equation. Particle wave duality. Dynamics in certain geometries: 1,2,3 D and atoms. Time dependent and time independent SE. Wells and barriers. Tunelation. Transitions and probabilities. Momentum and position wave function. Heisenberg uncertainty. Energy. Eigen values and eigen states for a quantum system. Spin. Quantum operators. Dirac formalism. Bra ket notation. Conversion to scalar products for measurement in Dirac formalism. Transitions, momentum and angular momentum. Energy and eigenstates. Spin. Perturbation theory"/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={
                            <ConstructLinkTitle where={"/courses/quantum-field-theory"} title={"Quantum Field Theory"} />
                        }
                        content="Unifies quantum mechanics and special relativity through fields. Particles are excitations of quantized fields. Describes interactions via gauge symmetries (like U(1), SU(2), SU(3)). Core concepts include field operators, Feynman diagrams, creation and annihilation operators, and Lagrangian densities. Key applications: quantum electrodynamics (QED), quantum chromodynamics (QCD), and the Standard Model. Renormalization handles infinities. Spin-statistics connection, vacuum fluctuations, and virtual particles emerge naturally. Basis for modern particle physics and high-energy theory."/>
                    <CollabsableExplanation
                        style={{ padding: '10px' }} title={
                            <ConstructLinkTitle where="/courses/statistical-quantum-mechanics" title="Statistical Quantum Mechanics"/>
                        }
                        content="Extends quantum mechanics to large ensembles. Uses density matrices and partition functions to link microscopic states to macroscopic thermodynamics. Introduces Fermi-Dirac and Bose-Einstein statistics, entropy (von Neumann), and quantum gases. Key phenomena: black-body radiation, Bose-Einstein condensation, superconductivity, and degeneracy pressure in Fermi gases."
                    />
                </div>
                <div className="course-class-type">
                    <AnimatedTitle text={"Relativity"}/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={  <ConstructLinkTitle where={"/courses/relativity"} title={"Relativity"}/>   }
                        content="Special Relativity (Lorentz Transformations, Time Dilation). General Relativity (Equivalence Principle, Einstein Field Equations - intro level)"/>
                </div>

                <InsertPictureBackgroundInCourses text={"Did you know you can achieve sun conditions in a lab. Tokamak is a device that aims to recreate stelar atmosphere usign electromagnetic confinement in toroidal geometry. Temperatures at the confinement zone can reach 15 mil degrees"} picture={tokamak} rowFlexMode={"to-right"}/>

                <div className="course-class-type">
                    <AnimatedTitle text={ "Optics Verse" }/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={  <ConstructLinkTitle where={"/courses/optics-and-waves"} title={"Optics and waves"} />  }
                        content={"Geometric Optics (Lenses, Mirrors)+Matrix analysis. Wave Optics (Diffraction, Interference). Quantum Optics. Lagrangian treatment of light paths in variational refractive index environments. Metamaterials"}
                    />
                    <CollabsableExplanation
                        style={{ padding: '10px' }}
                        title={ <ConstructLinkTitle where="/courses/laser-systems"   title="Laser Systems and Engineering"/>    }
                        content="Laser systems involve the engineering and understanding of coherent light sources based on quantum mechanical principles of emission. Topics include stimulated and spontaneous emission, Einstein coefficients, population inversion, and line broadening effects. Students will explore optical, electrical, and chemical pumping mechanisms such as those used in Nd:YAG, CO₂, and dye lasers. The course covers types of lasers—solid-state, gas, dye, fiber, semiconductor, and free-electron—detailing their operating principles, gain media, and emission characteristics. Core design aspects include optical resonators, Fabry–Pérot cavities, Gaussian beam propagation, transverse modes, and cavity stability conditions.
                        Beam shaping, mode locking, Q-switching, and pulse characterization are introduced. Applications span industrial cutting, spectroscopy, optical communication, and precision metrology. Safety classifications (Class 1 to 4), protective measures, and compliance with international laser safety standards are emphasized. Engineering aspects include thermal management, driver design, system modeling, and optical alignment. The course concludes with advanced topics like nonlinear optics (e.g. SHG), ultrafast lasers, CPA, and high-intensity laser–plasma interactions, preparing students for real-world system design and high-tech applications."
                    />
                    <CollabsableExplanation
                        style={{padding:'10px'}}
                        title={<ConstructLinkTitle where={"/courses/advanced-optics-for-laser-systems"} title={"Advanced optic for laser systems"}/>}
                        content={"Advanced concepts. Matrix optics for laser systems. Pumping systems. Extreme fields. Paraxial approximation. Gaussian distribution of fields. Chirping mechanisms. Power diagrams"}
                    />
                </div>
                <div className="course-class-type">
                    <AnimatedTitle text={"Solid State & Conductors"}/>
                    <CollabsableExplanation style={{ padding: '10px' }}
                        title={   <ConstructLinkTitle where={"/courses/solid-state-and-semiconductors"} title={"Solid State and Semiconductors"} />  }
                        content={"Lattice & Basis. Definition of crystal lattice. Unit cells (Primitive, Conventional). Bravais lattices (2D and 3D classification). Basis and crystal structures (FCC, BCC, HCP). Miller indices. X-ray diffraction (Bragg’s Law). Reciprocal Lattice & Brillouin Zones. Concept of reciprocal lattice. First Brillouin Zone. Free electron model (Drude & Sommerfeld). Density of states (1D, 2D, 3D). Fermi level and Fermi surface. Bloch's Theorem & Electron Behavior in Periodic Potentials. Kronig-Penney Model (1D potential well). Energy bands and band gaps. Effective Mass & Density of States. Intrinsic & Extrinsic Semiconductors. Doping: n-type and p-type semiconductors. Carrier concentration and Fermi level shift. PN Junction & Diodes. Breakdown mechanisms (Zener and Avalanche). LED and Photodiodes. Bipolar Junction Transistor (BJT) operation. Field-Effect Transistor (FET) types (MOSFET, JFET). CMOS technology. Semiconductor fabrication techniques (Lithography, Doping, Etching)."}
                    />
                    <CollabsableExplanation style={{ padding: '10px' }} 
                        title={ <ConstructLinkTitle where="/courses/semiconductors-advanced" title="Semiconductors Advanced"/> }
                        content="This course explores the physical principles, electronic behavior, and engineering of semiconductors. Topics include intrinsic and extrinsic semiconductors, band theory, charge carriers, doping techniques, PN junctions, and advanced optoelectronic devices like LEDs, laser diodes, and solar cells. Emphasis is placed on semiconductor materials (Si, GaAs, InP), fabrication processes (lithography, doping, metallization), and the operation of transistors (BJTs, FETs, CMOS). The course also introduces quantum effects at the nanoscale, including tunneling, quantum wells, and single-electron devices. Applications in electronics, energy, and communications are highlighted, along with emerging tech like organic semiconductors and photonic circuits."
                    />
                    <CollabsableExplanation
                        style={{ padding: '10px' }}
                        title={<ConstructLinkTitle where={"/courses/conductors-and-metals"} title={"Conductors and Metals"} />}
                        content="Drude model of electron conduction. Ohm's law derivation. Limitations of classical transport theory. Band theory and metallic conduction. Density of states. Fermi energy and Fermi-Dirac statistics. Wiedemann–Franz law and thermal conductivity. Electron-phonon interactions and resistivity. Quantum corrections and Sommerfeld model. Foundations for understanding superconductors and semiconductors."
                    />

                </div>
                <InsertPictureBackgroundInCourses text={"It all comes down to the event of black holes. Here time itself stops, and freezing phenomena occurs for the observers outside of it. Space time is bend so violently towards singularity that even photons get sucked in. So no matter or particle shall escape. Some think they are gates to other universes via a connected white hole on the other side, others just go with the idea that here laws of physics break. Black holes are amazing cosmic objects to be studied..."} picture={blackHole} rowFlexMode={"to-left"}/>
                <InsertBottom/>
            </div>
        </div>
    )
}