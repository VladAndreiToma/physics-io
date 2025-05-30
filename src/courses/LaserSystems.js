import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import CreateGoToProblems from "./CreateGoToProblems";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";
import useTrackCourseVisit from "./visitCourseApi";
import TopBar from "../TopBar";

export default function LasersSystems(){
    const content = [
  {
    title: "Fundamentals of Laser Physics",
    markdown: `
- Stimulated vs Spontaneous Emission:  
  Spontaneous emission occurs randomly when an excited electron decays, emitting a photon with random direction and phase.  
  Stimulated emission happens when an incoming photon with energy hν causes an excited electron to drop energy level, releasing a photon of identical energy, phase, and direction.

- Einstein Coefficients:  
  The transition rates between energy levels are governed by:
    A₁₂ (spontaneous emission), B₁₂ (stimulated emission), B₂₁ (absorption).
  The net optical gain depends on population inversion and these coefficients.

- Population Inversion:  
  Required for lasing. Population of higher energy level N₂ exceeds lower level N₁:
    N₂ > N₁  
  This condition enables amplification through stimulated emission.

- Line Broadening Mechanisms:  
  - Natural (lifetime-based)  
  - Doppler broadening (thermal motion)  
  - Pressure broadening (collisions)  
  These affect spectral width and gain profile.
`
  },
  {
    title: "Pumping Mechanisms",
    markdown: `
- Optical Pumping:  
  Atoms absorb energy from an external light source (flashlamp or another laser). This excites electrons to higher states. Used in ruby, Nd:YAG, and dye lasers.

- Electrical Pumping:  
  Electric discharge excites atoms or electrons. Used in gas lasers (like HeNe, CO₂) and semiconductor lasers.

- Chemical Pumping:  
  Energy from a chemical reaction populates the upper laser level. Used in high-energy applications like chemical oxygen iodine lasers (COIL).

- Gas Dynamic Pumping:  
  Utilizes adiabatic expansion of hot gases. The rapid cooling leads to population inversion. Implemented in some military-grade CO₂ lasers.

- Semiconductor Injection:  
  Forward biasing a p-n junction causes electron-hole recombination, emitting photons (used in diode lasers).
`
  },
  {
    title: "Laser Types and Operating Principles",
    markdown: `
- Solid-State Lasers:  
  Use doped crystal or glass as the gain medium (e.g., Nd:YAG). Optical pumping by flashlamp or laser diode. Emission wavelength depends on dopant energy levels.

- Gas Lasers:  
  Examples: HeNe, Argon-ion, CO₂. Excited atoms or ions produce laser emission. CO₂ lasers operate at 10.6 µm, useful in cutting/welding.

- Dye Lasers:  
  Use organic dye in liquid solution. Tunable across broad wavelengths. Require optical pumping.

- Semiconductor Lasers (Diode Lasers):  
  Gain from electron-hole recombination. Extremely compact and efficient. Widely used in telecom, sensors, and CD/DVD drives.

- Fiber Lasers:  
  A doped optical fiber (e.g., Yb-doped) serves as gain medium. High beam quality, excellent heat dissipation, compact and robust.

- Free Electron Lasers (FELs):  
  Electrons travel through an undulator magnet. The emitted synchrotron radiation forms coherent laser-like light, tunable across a huge spectrum.
`
  },
  {
    title: "Resonator Design and Mode Structure",
    markdown: `
- Optical Cavities:  
  Formed by two or more mirrors. Feedback loop for light to pass through gain medium multiple times.

- Fabry–Pérot Resonators:  
  Standard configuration with two parallel mirrors. The cavity selects resonant frequencies (longitudinal modes).

- Transverse Electromagnetic Modes (TEM):  
  Characterize beam spatial profiles: TEM₀₀ is the Gaussian mode with highest quality and lowest divergence.

- Stability Condition:  
  Resonator is stable if:
    0 ≤ g₁g₂ ≤ 1  
  where g = 1 - L/R (L = cavity length, R = mirror radius).
`
  },
  {
    title: "Laser Beam Properties and Control",
    markdown: `
- Coherence:  
  Temporal coherence: phase stability over time.  
  Spatial coherence: uniform phase across wavefront.

- Divergence and Beam Waist:  
  Gaussian beams have minimum waist w₀ and diverge over distance z.  
  Beam divergence θ ≈ λ / (π w₀)

- Pulse Duration and Q-Switching:  
  Q-switching stores energy then releases it in a short, intense burst.  
  Pulse energy E = P_avg / repetition rate.

- Mode Locking:  
  Produces ultrashort pulses (femtoseconds) by locking phases of multiple longitudinal modes.

- Power and Energy:  
  - Continuous Wave (CW): constant output  
  - Pulsed: defined energy per pulse (E = ∫ P(t) dt)
`
  },
  {
    title: "Applications of Laser Systems",
    markdown: `
- Manufacturing:  
  Laser cutting, drilling, engraving, 3D printing, lithography.

- Medical:  
  Laser surgery, dermatology (skin resurfacing), ophthalmology (LASIK), cancer therapy (PDT).

- Communications:  
  Fiber-optic links using semiconductor lasers, enabling high-bandwidth data transmission.

- Spectroscopy:  
  Raman, absorption, and fluorescence spectroscopy use lasers for high-resolution material analysis.

- Metrology:  
  Interferometric distance measurements, optical clocks, LIDAR, gravitational wave detection.

- Military and Aerospace:  
  Rangefinding, target designation, directed energy weapons.
`
  },
  {
    title: "Safety and Regulations",
    markdown: `
- Laser Hazard Classification:  
  Class 1 (safe), Class 2 (visible only), Class 3R/3B, Class 4 (hazardous to eyes and skin).

- Eye Safety Limits:  
  Exposure limits depend on wavelength and power. Use of protective goggles required for Class 3B and 4.

- Beam Enclosure and Interlock Systems:  
  Prevent accidental exposure by enclosing high-power beams and using access controls.

- International Standards:  
  Compliance with ISO and ANSI Z136.1 laser safety standards is mandatory in industrial and research settings.
`
  },
  {
    title: "Laser System Engineering and Integration",
    markdown: `
- Thermal Management:  
  Use of heat sinks, water cooling, thermoelectric cooling to maintain stable operation.

- Power Supply Design:  
  Must provide regulated and pulsed power with low noise. Capacitor banks used in Q-switched systems.

- Alignment and Beam Steering:  
  Mirror mounts, beam splitters, and lenses align beam with sub-millimeter precision.

- Control Electronics:  
  Microcontrollers or FPGAs interface with temperature sensors, photodiodes, and actuators for real-time feedback.

- System Modeling and Simulation:  
  Ray-tracing software, Gaussian beam optics, and thermal FEM simulations help optimize design.
`
  },
  {
    title: "Advanced Topics in Laser Engineering",
    markdown: `
- Nonlinear Optics:  
  Second Harmonic Generation (SHG), sum-frequency and difference-frequency generation, optical parametric oscillators.

- Ultrafast Lasers:  
  Generate pulses <100 fs using mode locking. Key in pump-probe experiments, micromachining, time-resolved spectroscopy.

- Laser Amplifiers:  
  MOPA (Master Oscillator Power Amplifier) architecture scales output while preserving beam quality.

- Chirped Pulse Amplification (CPA):  
  Stretch–amplify–compress method to achieve petawatt peak powers without damaging gain media.

- Laser-Plasma Interaction:  
  Intense pulses ionize targets, enabling x-ray generation, particle acceleration, and inertial confinement fusion (ICF).
`
  },
  {
    title: "Summary",
    markdown: `
  Laser systems rely on quantum mechanical principles of light-matter interaction, where population inversion and stimulated emission create coherent, monochromatic, and high-intensity beams. By varying pumping mechanisms, resonator design, gain media, and modulation techniques, engineers can tailor laser output for applications ranging from precise metrology to industrial fabrication and medical treatment.

  Understanding laser physics, safety, beam dynamics, and thermal/electrical engineering is essential for building and deploying reliable laser systems across scientific, commercial, and defense domains.
`
  }
];

    //generating the location
    const location = useLocation();     const topic = location.pathname.split("/").pop();
    //talking to newtonium
    const[talkToNewtonium, setTalkToNewtonium] = useState( false );
    useNewtoniumClose( ()=>setTalkToNewtonium(false) );
    //mark as visited 
    useTrackCourseVisit();

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
    );
}