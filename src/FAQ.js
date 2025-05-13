import React from "react";
import TopBar from "./TopBar";
import CollabsableExplanation from "./CollabsableExplanation";

export default function FAQs(){
    return(
        <div className="faqs">
            <TopBar/>
                <CollabsableExplanation
                    title = "Is Quantum mechanics transcending into the obserbvable world?"
                    content = "Yes it does. Even though a quantum system represents a superposition of multiple states that happen at the same time with certain probabilities each, the overall thing that you observe is a mixture of state weighted into calculation with their probabilities giving you a unique solution that over time stays the same name expected vlaue.This expected values is the median of a system measured over a long period of time over all the states using algebra and statistics"
                />
                <CollabsableExplanation
                    title="What makes laser light stand apart?"
                    content="Laser light is made by photons that are coherent so there wavefunction propagate in time and space in the same manner. They have the same k vector of wave propagation and the same phase so both spatial and temporal components coincide. This will make huge amplification possible as photons interfere constructively and a consequence is the raise in amplitude of the \'light signal\'. Moreover, photons have the same wave length and frequnecy thus they are made from the same color. The fascicle is monoenergetic. Sure no laser is perfect but it has small deviations +- from these central desired values"
                />
                <CollabsableExplanation 
                    title="Is analytical formalism good in problem solving?"
                    content="Short answer, YES. Its is obviously if you insist on the reasoning behind. So, wether you talk about mechanics, optics, electricity or thermodynamics everything that can be writtne in term of generalized momenta and speeds, forces and energies can be solved with: 1.Lagrangian Formalism , 2.Hamiltonian Formalism , 3.Von Neumann Formalism. These are pompous ways to write the dynamics equations for a system which you solve to get the accelerations relative to speeds and coordinates which make up for the equations of motions that allow you to discove how the system behaves at any time instance."
                />
                <CollabsableExplanation 
                    title="Do I need math in physics?"
                    content="Plenty. Actually its quite impossible to do physics without it. Every equation speaks something and every equation involves algebra, analysis , calculus, differential calculus and integral calculus. Even if its just for understanding the phenomena or to solve what might occur there"
                />
                <CollabsableExplanation 
                    title="Do i need computer science?"
                    content="Nowadays yes. In order to be able to be scientifically competitive you have to know some c and python to do your modelling and computations. Wether its simulations, geant - pic - molecular dynamics - atoms - plasma - phonons - fluka - solidworks you have to know some basic language syntax in order to use mathematical models imported or create your custom ones"
                />
                <CollabsableExplanation
                    title="Thermodynamics vs Statistics - What do I go for?"
                    content="Well it depends, basic thermodynamics is more of an engineering perspective over concepts like energy work entaly gibs and free potential. Laws of motion, diffusion, convections and streams, pressure, volume, temperature, the influence of entropy and it represent, material specific heats and so on pumps, thermal insulator and can be extended altowards cryogenics. While statistics tries to see these things from particles perspective how their behavior and grouping give you these properties from a cvasi quantum state to macroscopic qunatities"
                />
                <CollabsableExplanation 
                    title="Is there a better way to solve complex optic systems?"
                    content="Yes. Its called matrix approach. In optic you can define a matrix under special rules of construction for each physical process that might occur during the pass of light. You write those matrices in order from start to finish meaning from source to the end. Then you just multiply them under algebraeic rules. In the end you ll have information about focal distance, curvature, height, real/imaginary imagine so on. This process reduces the complexity of analysis by just keeping the user under some basic calculations. Pay attention, this is a scenario where algebra beats intuition as intuition might give you false impressions. Just follow the math and even most complex systems will become simple. In the end you solve the system of equation to find your best parameters for different outcomes"
                />
        </div>
    );
}