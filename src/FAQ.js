import React from "react";
import TopBar from "./TopBar";
import CollabsableExplanation from "./CollabsableExplanation";
import BottomInFaqs from "./BottomInFaqs";

export default function FAQs(){
    
    // since FAQs is not too fast modified or updated its ok to make it FSR not SSR
    const physicsFaqs = [
        {
            topic: "What makes laser light special?",
            explanation: "Laser light consists of photons that are coherent, meaning their wavefunctions propagate synchronously in time and space. They share the same wave vector and phase, leading to constructive interference and significant amplification of the light signal's amplitude. Additionally, laser photons have identical wavelength and frequency, producing a monoenergetic and monochromatic beam. Although no laser is perfect, deviations from these ideal parameters are minimal."
        },
        {
            topic: "What is quantum entanglement?",
            explanation: "Quantum entanglement links two or more particles so their quantum states cannot be described independently. Measuring one instantly determines the state of the other, regardless of distance. This nonlocal correlation defies classical intuition but does not enable faster-than-light communication. Entangled particles share correlated properties like spin or polarization, crucial for quantum computing and cryptography."
        },
        {
            topic: "What does the Heisenberg uncertainty principle mean?",
            explanation: "This principle states it is impossible to simultaneously know both the exact position and momentum of a particle with perfect accuracy. Increasing precision in measuring one property inherently increases uncertainty in the other due to the wave-like nature of particles and the limits of quantum mechanics."
        },
        {
            topic: "What is quantum superposition?",
            explanation: "Quantum particles exist in a superposition of multiple states simultaneously until measured. Their wavefunction encodes probabilities for each state, and upon measurement, the system 'collapses' into one definite state. Superposition enables quantum parallelism essential in quantum computing."
        },
        {
            topic: "What is wave-particle duality?",
            explanation: "Particles such as electrons and photons exhibit both wave-like and particle-like behavior depending on the experiment. This duality challenges classical physics, showing entities behave like waves in some contexts and like particles in others."
        },
        {
            topic: "What is Schrödinger's cat thought experiment?",
            explanation: "A thought experiment illustrating superposition and measurement in quantum mechanics. A cat in a sealed box is simultaneously alive and dead until observed, highlighting how quantum states depend on observation."
        },
        {
            topic: "What is the theory of relativity?",
            explanation: "Einstein's theory shows that space and time are relative, changing with the observer's velocity. It unifies space and time into spacetime and introduces phenomena like time dilation and length contraction at speeds near light."
        },
        {
            topic: "What are black holes?",
            explanation: "Black holes are regions where gravity is so strong that nothing, not even light, can escape. They form from collapsed massive stars and are described by event horizons beyond which information cannot return."
        },
        {
            topic: "What is cosmology?",
            explanation: "The study of the universe's origin, structure, evolution, and eventual fate. It covers topics like the Big Bang, cosmic microwave background, and dark energy."
        },
        {
            topic: "What is dark matter?",
            explanation: "A form of matter that does not emit or absorb light but exerts gravitational effects on visible matter. It explains galaxy rotation curves and large-scale structure formation."
        },
        {
            topic: "What is dark energy?",
            explanation: "A mysterious form of energy causing the accelerated expansion of the universe, counteracting gravity on cosmic scales."
        },
        {
            topic: "What is the photoelectric effect?",
            explanation: "The emission of electrons from a material when exposed to light of sufficient frequency. It demonstrates the particle nature of light and was pivotal in quantum theory development."
        },
        {
            topic: "What are atomic orbitals?",
            explanation: "Regions in an atom where electrons are likely to be found, described by probability distributions derived from quantum mechanics."
        },
        {
            topic: "What is the Pauli exclusion principle?",
            explanation: "No two fermions, such as electrons, can occupy the same quantum state simultaneously within a quantum system. This principle explains the structure of the periodic table and chemical behavior."
        },
        {
            topic: "What is entropy?",
            explanation: "A thermodynamic measure of disorder or randomness in a system. Entropy tends to increase over time in isolated systems, reflecting the second law of thermodynamics."
        },
        {
            topic: "What is thermodynamics?",
            explanation: "The study of energy, heat, work, and how they relate in physical systems. It governs engines, refrigerators, and fundamental physical processes."
        },
        {
            topic: "What is electromagnetism?",
            explanation: "The interaction of electric and magnetic fields with charged particles. It unifies electricity, magnetism, and light as aspects of the electromagnetic force."
        },
        {
            topic: "What is a wavefunction?",
            explanation: "A mathematical description of the quantum state of a system, encoding the probabilities of possible outcomes when measured."
        },
        {
            topic: "What is momentum?",
            explanation: "A vector quantity defined as mass times velocity. It is conserved in isolated systems and fundamental in analyzing collisions."
        },
        {
            topic: "What is energy conservation?",
            explanation: "The principle that total energy in an isolated system remains constant over time, transforming between forms but never created or destroyed."
        },
        {
            topic: "What is force?",
            explanation: "An interaction that causes an object to accelerate or deform, described by Newton's laws."
        },
        {
            topic: "What is acceleration?",
            explanation: "The rate of change of velocity with respect to time."
        },
        {
            topic: "What are Newton's laws of motion?",
            explanation: "Three fundamental laws describing motion: inertia, F=ma, and action-reaction."
        },
        {
            topic: "What are magnetic fields?",
            explanation: "Fields produced by moving electric charges and magnets, affecting other charges and magnetic materials."
        },
        {
            topic: "What is optics?",
            explanation: "The study of light behavior including reflection, refraction, and diffraction."
        },
        {
            topic: "What is refraction?",
            explanation: "The bending of light when it passes between materials with different refractive indices."
        },
        {
            topic: "What is nuclear physics?",
            explanation: "The study of atomic nuclei, nuclear reactions, and radiation."
        },
        {
            topic: "What is particle physics?",
            explanation: "The branch investigating fundamental particles like quarks and leptons and their interactions."
        },
        {
            topic: "What is string theory?",
            explanation: "A theoretical framework proposing that fundamental particles are one-dimensional strings vibrating at different frequencies."
        },
        {
            topic: "What is superconductivity?",
            explanation: "A state where certain materials conduct electricity without resistance below a critical temperature."
        },
        {
            topic: "What is quantum tunneling?",
            explanation: "A quantum effect where particles pass through energy barriers that would be impossible classically."
        }
    ];

    return(
        <div className="faqs">
            <TopBar/>
            {
                physicsFaqs.map(({topic,explanation},index) => {
                    return <CollabsableExplanation key={index} title={topic} content={explanation}/>
                })
            }
            <BottomInFaqs/>
        </div>
    );
}