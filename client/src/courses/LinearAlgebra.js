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
        title: `Vectors`,
        markdown: `
    Definition
    A vector is an ordered list of numbers, which can represent a point in space, a direction, or a magnitude. 
    Vectors are often represented in column or row form.
    
    - Notation: A vector \\(\\mathbf{v}\\) in n-dimensional space is often written as:  
    \\[
    \\mathbf{v} = [v_1, v_2, \\ldots, v_n]
    \\]
    
    Vector Operations
    - Addition: The sum of two vectors is performed component-wise.
      - Example: \\(\\mathbf{v} = [v_1, v_2], \\mathbf{w} = [w_1, w_2]\\) → \\(\\mathbf{v} + \\mathbf{w} = [v_1 + w_1, v_2 + w_2]\\)
    - Scalar Multiplication: A vector can be multiplied by a scalar \\(k\\), multiplying each component by \\(k\\).
      - Example: \\(k \\times \\mathbf{v} = [k v_1, k v_2]\\)
    - Dot Product: The dot product of two vectors is the sum of the products of their corresponding components.
      - Example: \\(\\mathbf{v} \\cdot \\mathbf{w} = v_1 w_1 + v_2 w_2\\)
    - Cross Product: The cross product is only defined in three dimensions and results in a vector perpendicular to both input vectors.
      - Example: \\[
    \\mathbf{v} \\times \\mathbf{w} = [v_2 w_3 - v_3 w_2,\\; v_3 w_1 - v_1 w_3,\\; v_1 w_2 - v_2 w_1]
    \\]
    `
      },
      {
        title: `Matrices`,
        markdown: `
    Definition
    A matrix is a rectangular array of numbers arranged in rows and columns. It can represent linear transformations,
    systems of equations, or data.
    
    - Notation: A matrix \\(A\\) with \\(m\\) rows and \\(n\\) columns is written as:  
    \\[
    A = \\begin{bmatrix}
    a_{11} & a_{12} & \\ldots & a_{1n} \\\\
    a_{21} & a_{22} & \\ldots & a_{2n} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    a_{m1} & a_{m2} & \\ldots & a_{mn}
    \\end{bmatrix}
    \\]
    
    Matrix Operations
    - Addition: Two matrices can be added if they have the same dimensions. The sum is the matrix whose 
      entries are the sums of the corresponding entries of the original matrices.
      - Example: \\[
      A + B = \\begin{bmatrix}
      a_{11} + b_{11} & a_{12} + b_{12} \\\\
      a_{21} + b_{21} & a_{22} + b_{22}
      \\end{bmatrix}
      \\]
    - Scalar Multiplication: Each element of the matrix is multiplied by the scalar.
      - Example: \\[
      k \\times A = \\begin{bmatrix}
      k a_{11} & k a_{12} \\\\
      k a_{21} & k a_{22}
      \\end{bmatrix}
      \\]
    - Matrix Multiplication: The product of two matrices \\(A\\) and \\(B\\) is defined if the number of columns of \\(A\\) 
      is equal to the number of rows of \\(B\\).
      - Example: \\[
      AB = \\begin{bmatrix}
      a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\\\
      a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22}
      \\end{bmatrix}
      \\]
    `
      },
      {
        title: `Determinants`,
        markdown: `
    Definition
    The determinant of a square matrix is a scalar value that can be computed from its elements and provides useful 
    information about the matrix, such as whether it is invertible.
    
    - Notation: The determinant of a matrix \\(A\\) is written as \\(\\det(A)\\) or \\(|A|\\).
    - Properties: 
      - A matrix is invertible (i.e., has an inverse) if and only if its determinant is non-zero.
      - The determinant of a diagonal matrix is the product of its diagonal elements.
    
    Example
    For a 2x2 matrix \\(A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}\\),  
    \\[
    \\det(A) = a_{11} a_{22} - a_{12} a_{21}
    \\]
    
    For a 3x3 matrix \\(A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix}\\),  
    \\[
    \\det(A) = a_{11} (a_{22} a_{33} - a_{23} a_{32}) - a_{12} (a_{21} a_{33} - a_{23} a_{31}) + a_{13} (a_{21} a_{32} - a_{22} a_{31})
    \\]
    `
      },
      {
        title: `Eigenvalues and Eigenvectors`,
        markdown: `
    Definition
    Eigenvalues and eigenvectors are fundamental in linear algebra. They are used to analyze matrix properties,
    especially for solving systems of linear equations and understanding transformations.
    
    - Eigenvalue: A scalar \\(\\lambda\\) is called an eigenvalue of a matrix \\(A\\) if there exists a non-zero vector \\(\\mathbf{v}\\) such that \\(A \\mathbf{v} = \\lambda \\mathbf{v}\\).
      This means that multiplying the matrix by the vector just scales the vector by \\(\\lambda\\).
    - Eigenvector: A non-zero vector \\(\\mathbf{v}\\) that satisfies the equation \\(A \\mathbf{v} = \\lambda \\mathbf{v}\\) for some scalar \\(\\lambda\\) is called an eigenvector of \\(A\\).
    
    Finding Eigenvalues and Eigenvectors
    1. To find eigenvalues, solve the characteristic equation:
    \\[
    \\det(A - \\lambda I) = 0,
    \\]
    where \\(I\\) is the identity matrix.
    2. Substitute the eigenvalue \\(\\lambda\\) into the equation \\((A - \\lambda I) \\mathbf{v} = 0\\) to find the eigenvectors.
    
    Example
    For a matrix \\(A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}\\),  
    the characteristic equation is:  
    \\[
    \\det \\left( \\begin{bmatrix} 2 - \\lambda & 1 \\\\ 1 & 2 - \\lambda \\end{bmatrix} \\right) = (2 - \\lambda)(2 - \\lambda) - 1 \\times 1 = \\lambda^2 - 4\\lambda + 3 = 0
    \\]
    Solving this gives eigenvalues \\(\\lambda_1 = 3\\) and \\(\\lambda_2 = 1\\).
    `
      },
      {
        title: `Systems of Linear Equations`,
        markdown: `
    Definition
    A system of linear equations is a set of equations in which each equation is linear. These systems can be solved using various 
    methods, including substitution, elimination, or matrix operations.
    
    Matrix Representation
    A system of linear equations can be written in matrix form as \\(Ax = b\\), where:
    - \\(A\\) is the coefficient matrix
    - \\(x\\) is the column vector of unknowns
    - \\(b\\) is the column vector of constants
    
    Gaussian Elimination
    Gaussian elimination is a method for solving a system of linear equations by transforming the system into
    an upper triangular form using row operations, then back-substituting to find the solution.
    
    Example
    For the system of equations:
    \\[
    2x + y = 5 \\\\
    3x + 2y = 7
    \\]
    
    The matrix form is:  
    \\[
    \\begin{bmatrix}
    2 & 1 \\\\
    3 & 2
    \\end{bmatrix}
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix}
    =
    \\begin{bmatrix}
    5 \\\\
    7
    \\end{bmatrix}
    \\]
    
    You can use Gaussian elimination to solve this system and find the values of \\(x\\) and \\(y\\).
    `
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