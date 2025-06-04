import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";


export default function Magnetostatics(){
    
  // calling the tracking custom hook for courses
    useTrackCourseVisit();

    // talk to newtonium
    const [talkToNewtonium, setTalkToNewtonium] = useState(false);
    useNewtoniumClose( ()=>setTalkToNewtonium(false) );

    const magnetostaticsContent = [
      {
        title: "Magnetostatic Maxwell's Equations",
        markdown: `
    Magnetostatics studiază câmpurile magnetice statice generate de curenți stabili:
    
    \\[
    \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{B} = \\mu_0 \\mathbf{J}
    \\]
    
    unde \\( \\mathbf{J} \\) este densitatea curentului electric constant în timp.
        `
      },
      {
        title: "Biot-Savart Law",
        markdown: `
    Câmpul magnetic \\( \\mathbf{B} \\) creat de un element de curent \\( I d\\mathbf{l} \\) la o distanță \\( \\mathbf{r} \\) este dat de:
    
    \\[
    \\mathbf{B}(\\mathbf{r}) = \\frac{\\mu_0}{4\\pi} I \\int \\frac{d\\mathbf{l}' \\times (\\mathbf{r} - \\mathbf{r}')}{|\\mathbf{r} - \\mathbf{r}'|^3}
    \\]
    
    Această lege este fundamentală pentru calcularea câmpurilor magnetice statice.
        `
      },
      {
        title: "Ampère's Law (Integral Form)",
        markdown: `
    Legea lui Ampère exprimă legătura dintre câmpul magnetic și curentul care-l generează:
    
    \\[
    \\oint_{C} \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{enc}
    \\]
    
    unde \\( I_{enc} \\) este curentul închis de conturul \\( C \\).
        `
      },
      {
        title: "Magnetic Vector Potential in Magnetostatics",
        markdown: `
    Câmpul magnetic poate fi exprimat folosind potențialul vector \\( \\mathbf{A} \\):
    
    \\[
    \\mathbf{B} = \\nabla \\times \\mathbf{A}
    \\]
    
    Cu condiția \\( \\nabla \\cdot \\mathbf{A} = 0 \\) (gauge Coulomb), \\( \\mathbf{A} \\) satisface:
    
    \\[
    \\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}
    \\]
        `
      },
      {
        title: "Magnetostatic Energy",
        markdown: `
    Energia stocată într-un câmp magnetic este:
    
    \\[
    U = \\frac{1}{2\\mu_0} \\int B^2 \\, dV
    \\]
    
    Aceasta reprezintă energia necesară pentru a crea câmpul magnetic în spațiu.
        `
      },
      {
        title: "Force on a Current-Carrying Wire",
        markdown: `
    Forța exercitată de un câmp magnetic asupra unui segment de conductor cu curent \\( I \\) este:
    
    \\[
    d\\mathbf{F} = I d\\mathbf{l} \\times \\mathbf{B}
    \\]
    
    Aceasta este baza efectului motor în electromagnetism.
        `
      },
      {
        title: "Magnetostatic Boundary Conditions",
        markdown: `
    La interfața dintre două medii, componentele câmpului magnetic respectă:
    
    - Continuitatea componentei normale a lui \\( \\mathbf{B} \\):
    
    \\[
    B_{1\\perp} = B_{2\\perp}
    \\]
    
    - Continuitatea componentei tangente a lui \\( \\mathbf{H} = \\frac{1}{\\mu} \\mathbf{B} \\):
    
    \\[
    H_{1\\parallel} = H_{2\\parallel}
    \\]
    
    Aceste condiții determină cum se comportă câmpul la marginile materialelor magnetice.
        `
      },
      {
        title: "Magnetic Materials and Permeability",
        markdown: `
    În materiale magnetice lineare, câmpurile \\( \\mathbf{B} \\) și \\( \\mathbf{H} \\) sunt legate prin permeabilitatea magnetică \\( \\mu \\):
    
    \\[
    \\mathbf{B} = \\mu \\mathbf{H}
    \\]
    
    unde \\( \\mu = \\mu_0 \\mu_r \\), cu \\( \\mu_r \\) permeabilitatea relativă a materialului.
        `
      }
    ];
    

    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const topic = pathSegments[ pathSegments.length-1 ];

    return(
        <div className="course-page">
            <TopBar/>
            <div className="content-for-course">
            {!talkToNewtonium ? 
                        (<>
                          <CreateCoursePage hereProps={magnetostaticsContent} />
                          <CreateGoToProblems where_id={topic} />
                          <AskNewtonium onClick={() => setTalkToNewtonium(prev => !prev)} />
                        </>) : 
                        (<PageOfChatBox />)
            }
            </div>
        </div>
    );
}