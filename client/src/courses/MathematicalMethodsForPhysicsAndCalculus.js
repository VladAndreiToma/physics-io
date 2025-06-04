import TopBar from "../TopBar";
import CreateCoursePage from './CreateCoursePage';
import { useLocation } from 'react-router-dom';
import CreateGoToProblems from './CreateGoToProblems';
import useTrackCourseVisit from './visitCourseApi';
import { useNewtoniumClose } from "./useNewtoniumClose";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";

export default function MathematicalMethodsForPhysicsAndCalculus(){

        // calling the custom tracking hook for courses
        useTrackCourseVisit();
    
        //talk to newtonium 
        const[talkToNewtonium, setTalkToNewtonium] = useState(false);
        useNewtoniumClose(()=>setTalkToNewtonium(false));
        
    // course content
    const content = [
      {
        title: `Derivatives`,
        markdown: `
    Definition  
    The derivative of a function measures its rate of change.  
    If \\( f(x) \\) is a function, its derivative is:
    
    \\[
    f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
    \\]
    
    It represents the instantaneous rate of change or the slope of the tangent line at \\( x \\).
    
    Basic Rules  
    - Power Rule: \\( \\frac{d}{dx}(x^n) = n \\cdot x^{n-1} \\)
    - Product Rule: \\( \\frac{d}{dx}[u \\cdot v] = u'v + uv' \\)
    - Quotient Rule: \\( \\frac{d}{dx}[u/v] = \\frac{u'v - uv'}{v^2} \\)
    - Chain Rule: \\( \\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\)
    
    Examples  
    1. \\( f(x) = x^3 - 2x^2 + 4x \\)  
       → \\( f'(x) = 3x^2 - 4x + 4 \\)
    
    2. \\( g(x) = e^{x^2} \\)  
       → \\( g'(x) = 2x \\cdot e^{x^2} \\)
        `,
      },
      {
        title: `Integrals`,
        markdown: `
    Definition  
    An integral reverses the process of differentiation and measures accumulation (area under the curve).
    
    The indefinite integral of \\( f(x) \\) is:
    
    \\[
    \\int f(x) \\, dx = F(x) + C
    \\]
    
    Where \\( F(x) \\) is the antiderivative and \\( C \\) is a constant.
    
    Basic Rules  
    - Power Rule: \\( \\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\), for \\( n \\neq -1 \\)
    - Sum Rule: \\( \\int [f(x) + g(x)] \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx \\)
    - Constant Multiple: \\( \\int c \\cdot f(x) \\, dx = c \\cdot \\int f(x) \\, dx \\)
    - Substitution: \\( \\int f(g(x)) \\cdot g'(x) \\, dx = \\int f(u) \\, du \\)
    - By Parts: \\( \\int u \\, dv = uv - \\int v \\, du \\)
    
    Examples  
    1. \\( \\int x^2 \\, dx = \\frac{x^3}{3} + C \\)  
    2. \\( \\int e^x \\, dx = e^x + C \\)  
    3. \\( \\int \\frac{1}{x} \\, dx = \\ln|x| + C \\)  
    4. \\( \\int \\sin(x) \\, dx = -\\cos(x) + C \\)
        `,
      },
      {
        title: `Series and Convergence`,
        markdown: `
    Definition  
    A series is the sum of terms in a sequence.  
    Convergence means the sum approaches a finite value.
    
    Types of Series  
    - Geometric Series: Each term is multiplied by a constant \\( r \\)  
      \\[
      \\sum_{n=0}^{\\infty} ar^n, \\quad |r| < 1 \\Rightarrow \\text{Sum} = \\frac{a}{1 - r}
      \\]
    
    - Harmonic Series: Reciprocal of integers  
      \\[
      \\sum_{n=1}^{\\infty} \\frac{1}{n} \\Rightarrow \\text{Diverges}
      \\]
    
    - Taylor Series: Function expanded around a point \\( a \\)  
      \\[
      f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots
      \\]
    
    Convergence  
    - A series converges if its partial sums approach a finite limit.  
    - A series diverges if it grows without bound.
    
    Examples  
    1. Geometric: \\( \\sum r^n, \\ |r| < 1 \\Rightarrow \\frac{1}{1 - r} \\)  
    2. Harmonic: \\( \\sum \\frac{1}{n} \\Rightarrow \\) Diverges
        `,
      },
      {
        title: `Limits`,
        markdown: `
    Definition  
    The limit describes how a function behaves near a point.
    
    \\[
    \\lim_{x \\to a} f(x) = L
    \\]
    
    Basic Rules  
    - Constant: \\( \\lim_{x \\to a} c = c \\)  
    - Power: \\( \\lim_{x \\to a} x^n = a^n \\)  
    - Sum: \\( \\lim_{x \\to a} [f(x) + g(x)] = \\lim f(x) + \\lim g(x) \\)  
    - Product: \\( \\lim f(x)g(x) = \\lim f(x) \\cdot \\lim g(x) \\)  
    - Quotient: \\( \\lim \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)} \\), if denominator ≠ 0
    
    Examples  
    1. \\( \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim (x + 3) = 6 \\)  
    2. \\( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1 \\)  
    3. \\( \\lim_{x \\to \\infty} \\frac{1}{x} = 0 \\)
        `,
      },
      {
        title: `Fundamental Theorem of Calculus`,
        markdown: `
    Statement  
    The Fundamental Theorem of Calculus connects derivatives and integrals.
    
    Part 1  
    If \\( f(x) \\) is continuous on \\( [a, b] \\), then:
    
    \\[
    \\int_a^b f'(x) \\, dx = f(b) - f(a)
    \\]
    
    Part 2  
    If \\( F'(x) = f(x) \\), then:
    
    \\[
    \\int_a^b f(x) \\, dx = F(b) - F(a)
    \\]
    
    Examples  
    1. \\( \\int_0^1 2x \\, dx = [x^2]_0^1 = 1 - 0 = 1 \\)  
    2. \\( \\int_1^2 x^2 \\, dx = [\\frac{x^3}{3}]_1^2 = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3} \\)
        `,
      },
    ];
    
    
      const location = useLocation();
      const pathSegments = location.pathname.split("/");
      const topic = pathSegments[ pathSegments.length-1 ];

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