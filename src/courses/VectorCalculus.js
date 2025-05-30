import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import { useLocation } from "react-router-dom";
import CreateGoToProblems from "./CreateGoToProblems";
import PageOfChatBox from "../PageOfChatBox";
import AskNewtonium from "../AskNewtonium";
import useTrackCourseVisit from "./visitCourseApi";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";

export default function VectorCalculus(){

      //custom hook for courses tracking calling here
      useTrackCourseVisit();

      const [talkToNewtonium, setTalkToNewtonium] = useState(false);
      useNewtoniumClose(()=>setTalkToNewtonium(false));

    const content = [
        {
          title: `
# Gradient`,
          markdown: `
The gradient of a scalar function \\( f(x, y, z) \\) gives the direction and rate of fastest increase of the function. It is a vector field.
**Notation**:  
      \\[
      \\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right)
      \\]
      
      The gradient points in the direction of the maximum increase of \\( f \\), and its magnitude is the rate of increase.
      `,
        },
        {
          title: `
# Divergence`,
          markdown: `
The divergence of a vector field \\( \\mathbf{F} = (F_x, F_y, F_z) \\) is a scalar that measures the "outflow" or "spread" of the vector field.      
**Notation**:  
      \\[
      \\nabla \\cdot \\mathbf{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}
      \\]
      
      If \\( \\nabla \\cdot \\mathbf{F} > 0 \\), the field is diverging; if \\( \\nabla \\cdot \\mathbf{F} < 0 \\), it is converging.
      `,
        },
        {
          title: 
`# Curl`,
          markdown: `
The curl of a vector field \\( \\mathbf{F} = (F_x, F_y, F_z) \\) measures the rotation of the field at a point. It is a vector.      
**Notation**:  
      \\[
      \\nabla \\times \\mathbf{F} = \\left( 
      \\frac{\\partial F_z}{\\partial y} - \\frac{\\partial F_y}{\\partial z}, 
      \\frac{\\partial F_x}{\\partial z} - \\frac{\\partial F_z}{\\partial x}, 
      \\frac{\\partial F_y}{\\partial x} - \\frac{\\partial F_x}{\\partial y} 
      \\right)
      \\]
      
      The curl represents the rotational behavior of the vector field at a given point.
      `,
        },
        {
          title: `
# Laplacian`,
          markdown: `
The Laplacian is a scalar operator that combines the divergence and gradient operators.      
**Notation**:  
      \\[
      \\nabla^2 f = \\nabla \\cdot (\\nabla f)
      \\]
      
      The Laplacian is often used in physics for studying heat, fluid flow, and wave propagation.
      `,
        },
        {
          title: `
# Example: Gradient of a Scalar Function`,
          markdown: `
Let \\( f(x, y, z) = x^2 + y^2 + z^2 \\). The gradient is:      
\\[
\\nabla f = \\left( 
\\frac{\\partial}{\\partial x}(x^2 + y^2 + z^2), 
\\frac{\\partial}{\\partial y}(x^2 + y^2 + z^2), 
\\frac{\\partial}{\\partial z}(x^2 + y^2 + z^2) 
\\right) = (2x, 2y, 2z)
\\]      
      The gradient points in the direction of the maximum rate of increase of \\( f \\).
      `,
        },
        {
          title: `
# Example: Divergence of a Vector Field`,
          markdown: `
Let \\( \\mathbf{F} = (x^2, y^2, z^2) \\). The divergence is:      
\\[
\\nabla \\cdot \\mathbf{F} = 
\\frac{\\partial}{\\partial x}(x^2) + 
\\frac{\\partial}{\\partial y}(y^2) + 
\\frac{\\partial}{\\partial z}(z^2) = 
2x + 2y + 2z
\\] 
      If the divergence is positive at a point, the field is "spreading out" from that point.
      `,
        },
        {
          title: `
# Example: Curl of a Vector Field`,
          markdown: `
Let \\( \\mathbf{F} = (y, -x, 0) \\). The curl is:      
      \\[
      \\nabla \\times \\mathbf{F} = \\left( 
      \\frac{\\partial 0}{\\partial y} - \\frac{\\partial (-x)}{\\partial z}, 
      \\frac{\\partial y}{\\partial z} - \\frac{\\partial 0}{\\partial x}, 
      \\frac{\\partial (-x)}{\\partial y} - \\frac{\\partial y}{\\partial x} 
      \\right) = (0, 0, -2)
      \\]
      The curl indicates a rotational movement around the z-axis.
      `,
        },
      ];

      let location = useLocation();
      let pathComposition = location.pathname.split("/");
      let topic = pathComposition[ pathComposition.length-1 ];

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
    )
}