import TopBar from "../TopBar";
import CreateCoursePage from "./CreateCoursePage";
import CreateGoToProblems from "./CreateGoToProblems";
import { useLocation } from "react-router-dom";
import useTrackCourseVisit from "./visitCourseApi";
import AskNewtonium from "../AskNewtonium";
import PageOfChatBox from "../PageOfChatBox";
import { useState } from "react";
import { useNewtoniumClose } from "./useNewtoniumClose";


export default function LinearAlgebra(){

      //calling the custom hook for tracking courses
      useTrackCourseVisit();
      
      //talk to newtonium
      const[talkToNewtonium, setTalkToNewtonium] = useState(false);
      useNewtoniumClose(()=>setTalkToNewtonium(false));

    // theoretical content
    const content = [
        {
          title: `
# Vectors`,
          markdown: `
#### Definition
      A vector is an ordered list of numbers, which can represent a point in space, a direction, or a magnitude. 
      Vectors are often represented in column or row form.
      
- **Notation**: A vector v in n-dimensional space is often written as:  
      v = [v₁, v₂, ..., vₙ]
      
#### Vector Operations
- **Addition**: The sum of two vectors is performed component-wise.
      - Example: v = [v₁, v₂], w = [w₁, w₂] → v + w = [v₁ + w₁, v₂ + w₂]
- **Scalar Multiplication**: A vector can be multiplied by a scalar (a real number), multiplying each component by the scalar.
      - Example: k * v = [k * v₁, k * v₂]
- **Dot Product**: The dot product of two vectors is the sum of the products of their corresponding components.
      - Example: v • w = v₁ * w₁ + v₂ * w₂
- **Cross Product**: The cross product is only defined in three dimensions and results in a vector perpendicular to both input vectors.
      - Example: v × w = [v₂w₃ - v₃w₂, v₃w₁ - v₁w₃, v₁w₂ - v₂w₁]`
        },
        {
          title: `
# Matrices`,
          markdown: `
#### Definition
      A matrix is a rectangular array of numbers arranged in rows and columns. It can represent linear transformations,
      systems of equations, or data.
      
- **Notation**: A matrix A with m rows and n columns is written as:  
      A = [a₁₁ a₁₂ ... a₁ₙ]  
          [a₂₁ a₂₂ ... a₂ₙ]  
          ⋮  
          [aₘ₁ aₘ₂ ... aₘₙ]
      
#### Matrix Operations
- **Addition**: Two matrices can be added if they have the same dimensions. The sum is the matrix whose 
      entries are the sums of the corresponding entries of the original matrices.
      - Example: A + B = [a₁₁ + b₁₁, a₁₂ + b₁₂]  
      [a₂₁ + b₂₁, a₂₂ + b₂₂]
- **Scalar Multiplication**: Each element of the matrix is multiplied by the scalar.
      - Example: k * A = [k * a₁₁, k * a₁₂]  
      [k * a₂₁, k * a₂₂]
- **Matrix Multiplication**: The product of two matrices A and B is defined if the number of columns of A 
      is equal to the number of rows of B.
      - Example: AB = [a₁₁b₁₁ + a₁₂b₂₁, a₁₁b₁₂ + a₁₂b₂₂]  
      [a₂₁b₁₁ + a₂₂b₂₁, a₂₁b₁₂ + a₂₂b₂₂]`
        },
        {
          title: `
# Determinants`,
          markdown: `
#### Definition
      The determinant of a square matrix is a scalar value that can be computed from its elements and provides useful 
      information about the matrix, such as whether it is invertible.
      
- **Notation**: The determinant of a matrix A is written as det(A) or |A|.
- **Properties**: 
      - A matrix is invertible (i.e., has an inverse) if and only if its determinant is non-zero.
      - The determinant of a diagonal matrix is the product of its diagonal elements.
      
#### Example
      For a 2x2 matrix A = [a₁₁ a₁₂]  
                                  [a₂₁ a₂₂]  
      det(A) = a₁₁ * a₂₂ - a₁₂ * a₂₁
      
      For a 3x3 matrix A = [a₁₁ a₁₂ a₁₃]  
                                  [a₂₁ a₂₂ a₂₃]  
                                  [a₃₁ a₃₂ a₃₃]  
      det(A) = a₁₁ * (a₂₂ * a₃₃ - a₂₃ * a₃₂)  
              - a₁₂ * (a₂₁ * a₃₃ - a₂₃ * a₃₁)  
              + a₁₃ * (a₂₁ * a₃₂ - a₂₂ * a₃₁)`
        },
        {
          title: `
# Eigenvalues and Eigenvectors`,
          markdown: `
#### Definition
      Eigenvalues and eigenvectors are fundamental in linear algebra. They are used to analyze matrix properties,
      especially for solving systems of linear equations and understanding transformations.
      
- **Eigenvalue**: A scalar λ is called an eigenvalue of a matrix A if there exists a non-zero vector v such that Av = λv.
      This means that multiplying the matrix by the vector just scales the vector by λ.
- **Eigenvector**: A non-zero vector v that satisfies the equation Av = λv for some scalar λ is called an eigenvector of A.
      
#### Finding Eigenvalues and Eigenvectors
      1. To find eigenvalues, solve the characteristic equation:
      det(A - λI) = 0, where I is the identity matrix.
      2. Substitute the eigenvalue λ into the equation (A - λI)v = 0 to find the eigenvectors.
      
#### Example
      For a matrix A = [2 1]  
                              [1 2]  
      The characteristic equation is:  
      det(A - λI) = det([2-λ 1]  
                                  [1 2-λ])  
                          = (2 - λ)(2 - λ) - 1 * 1  
                          = λ² - 4λ + 3 = 0  
      Solving this gives eigenvalues λ₁ = 3 and λ₂ = 1.`
        },
        {
          title: `
# Systems of Linear Equations`,
          markdown: `
#### Definition
      A system of linear equations is a set of equations in which each equation is linear. These systems can be solved using various 
      methods, including substitution, elimination, or matrix operations.
      
#### Matrix Representation
      A system of linear equations can be written in matrix form as Ax = b, where:
      - A is the coefficient matrix
      - x is the column vector of unknowns
      - b is the column vector of constants
      
#### Gaussian Elimination
      Gaussian elimination is a method for solving a system of linear equations by transforming the system into
      an upper triangular form using row operations, then back-substituting to find the solution.
      
#### Example
      For the system of equations:
      2x + y = 5  
      3x + 2y = 7
      
      The matrix form is:  
      [2 1] [x] = [5]  
      [3 2] [y] = [7]
      
      You can use Gaussian elimination to solve this system and find the values of x and y.`
        }
      ];
      
      const location = useLocation();
      const pathSegments = location.pathname.split("/");
      const topic = pathSegments[pathSegments.length - 1]; 
      console.log( "location: " , topic );

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
      )
}