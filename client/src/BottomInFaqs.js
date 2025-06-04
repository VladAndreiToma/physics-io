import KeyElementsInSimulation from './style_components/KeyElementsInSimulation';
export default function BottomInFaqs(){
    const physicsKeywords = [
  "Laser Coherence",
  "Population Inversion",
  "Quantum Superposition",
  "Wavefunction Collapse",
  "Photon Emission",
  "Phase Matching",
  "Bose-Einstein Condensate",
  "Quantum Entanglement",
  "Heisenberg Uncertainty",
  "Photoelectric Effect",
  "Relativity",
  "Special Relativity",
  "Spacetime Curvature",
  "Time Dilation",
  "Wave-Particle Duality",
  "Thermal Radiation",
  "Blackbody Radiation",
  "Harmonic Oscillator",
  "Energy Quantization",
  "Atomic Orbitals",
  "Pauli Exclusion Principle",
  "Spectral Lines",
  "Electron Transitions",
  "Magnetic Moment",
  "Spin States",
  "Nuclear Decay",
  "Tunneling Effect",
  "Planck Constant",
  "Light Amplification",
  "Interference & Diffraction"
];
    return(
        <div className="bottom-in-faqs">
            <b>The main ideas are meant to help paint a picture</b>
            <KeyElementsInSimulation items={physicsKeywords} rowsConfig={[4,5,5,5,5,4,2]}/>
            <l>Send us questions in Basehub section and we ll update the FAQs for future users</l>
            <l>Or just contact us if you have any questions</l>
        </div>
    );
}