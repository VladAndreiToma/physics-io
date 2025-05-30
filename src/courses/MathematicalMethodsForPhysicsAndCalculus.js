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
          title: `
# Derivatives`,
          markdown: `
**Definition**  
    The derivative of a function measures its rate of change. If f(x) is a function,  
its derivative is given by:  
f'(x) = lim(h → 0) [f(x + h) - f(x)] / h  
This represents the instantaneous rate of change or the slope of the tangent line at x.      
**Basic Rules** 
- **Power Rule**: d/dx (x^n) = n * x^(n-1)  
- **Product Rule**: d/dx [u * v] = u' * v + u * v'  
- **Quotient Rule**: d/dx [u/v] = (u' * v - u * v') / v^2  
- **Chain Rule**: d/dx [f(g(x))] = f'(g(x)) * g'(x)
**Examples**  
              1. f(x) = x^3 - 2x^2 + 4x  
              → f'(x) = 3x^2 - 4x + 4  
              2. g(x) = e^(x^2)  
              → g'(x) = 2x * e^(x^2)
          `,
        },
        {
          title: `
# Integrals`,
          markdown: `
**Definition**  
    An integral is a mathematical operation that, in a sense, "reverses" the process of differentiation. It measures the accumulation  
of quantities and is represented as the area under a curve. The indefinite integral of a function f(x) is represented as:  
∫ f(x) dx = F(x) + C  
where F(x) is the antiderivative of f(x) and C is the constant of integration.
**Basic Rules**  
- **Power Rule**: ∫ x^n dx = (x^(n+1)) / (n+1) + C (for n ≠ -1)  
- **Sum Rule**: ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx  
- **Constant Multiple Rule**: ∫ c * f(x) dx = c * ∫ f(x) dx  
- **Integration by Substitution**: ∫ f(g(x)) * g'(x) dx = ∫ f(u) du, where u = g(x)  
- **Integration by Parts**: ∫ u dv = uv - ∫ v du
**Example**  
1. ∫ x^2 dx  
    → (x^3) / 3 + C  
2. ∫ e^x dx  
    → e^x + C  
3. ∫ 1/x dx  
    → ln|x| + C  
4. ∫ sin(x) dx  
    → -cos(x) + C
          `,
        },
        {
          title: `
# Series and Convergence`,
          markdown: `
**Definition**  
    A series is the sum of the terms of a sequence. If the sequence is represented by a function f(x),  
the series is the sum of the values of f(x) at discrete points. A series can be finite or infinite.  
The convergence of a series determines whether it has a finite sum.
** Types of Series **  
- **Geometric Series**: A series where each term is a constant multiple of the previous term.  
              - Example: ∑ (ar^n) from n=0 to ∞, where r is the common ratio.  
- **Harmonic Series**: A series where each term is the reciprocal of an integer.  
              - Example: ∑ (1/n) from n=1 to ∞  
- **Taylor Series**: A series representation of a function f(x) around a point a.  
              - Example: f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2 / 2! + ...
              => Convergence of Series  
              - A series converges if the sum of its terms approaches a finite value as the number of terms goes to infinity.  
              - A series diverges if the sum of its terms does not approach a finite value.
              => Examples  
              1. Geometric Series: ∑ (r^n) from n=0 to ∞, where |r| < 1.  
              → Sum = 1 / (1 - r) (if |r| < 1)  
              2. Harmonic Series: ∑ (1/n) from n=1 to ∞.  
              → Diverges (this series grows without bound).
          `,
        },
        {
          title: `
# Limits`,
          markdown: `
#### Definition  
              The limit of a function at a point describes the behavior of the function as it approaches that point. It is defined as:  
              lim (x → a) f(x) = L  
              where L is the value the function approaches as x approaches a.
#### Basic Rules  
- **Limit of a Constant**: lim (x → a) c = c  
- **Limit of x^n**: lim (x → a) x^n = a^n  
- **Sum Rule**: lim (x → a) [f(x) + g(x)] = lim (x → a) f(x) + lim (x → a) g(x)  
- **Product Rule**: lim (x → a) [f(x) * g(x)] = lim (x → a) f(x) * lim (x → a) g(x)  
- **Quotient Rule**: lim (x → a) [f(x) / g(x)] = lim (x → a) f(x) / lim (x → a) g(x), if g(a) ≠ 0
#### Examples  
1. lim (x → 3) (x^2 - 9) / (x - 3)  
    → lim (x → 3) (x + 3) = 6  
2. lim (x → 0) sin(x) / x  
    → 1  
3. lim (x → ∞) 1/x  
    → 0
          `,
        },
        {
          title: `
# Fundamental Theorem of Calculus`,
          markdown: `
#### Statement  
              The Fundamental Theorem of Calculus connects differentiation and integration. It has two parts:  
- **First Part**: If a function f(x) is continuous on a closed interval [a, b],  
              then the integral of its derivative over that interval is equal to the change in the function's values:  
              ∫ from a to b f'(x) dx = f(b) - f(a)  
- **Second Part**: If F(x) is an antiderivative of f(x) (i.e., F'(x) = f(x)), then:  
              ∫ from a to b f(x) dx = F(b) - F(a)
#### Examples  
              1. ∫ from 0 to 1 (2x) dx  
              → [x^2] from 0 to 1 = 1 - 0 = 1  
              2. ∫ from 1 to 2 (x^2) dx  
              → [x^3 / 3] from 1 to 2 = (8 / 3) - (1 / 3) = 7 / 3
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