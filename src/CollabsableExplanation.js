import { useState } from "react";
import { motion } from "framer-motion";

export default function CollabsableExplanation( 
    {title , content}
 ){
    const [ isOpen , setIsOpen ] = useState(false);
    return(
        <div className="colabsible-element">
            <div style={{ display: "flex" , flexDirection: "row" }}>
                <label className="course-name">{title}</label>
                <span onClick={()=> setIsOpen( !isOpen )} style={{ cursor: "pointer", fontSize:"calc(0.5*( 1.7vw + 1.7vh ))" }}>{ isOpen ? "▲" : "▼" }</span>
            </div>
        {isOpen &&(
                <motion.div
                initial={{ opacity: 0 , height: 0 }}
                animate={{ opacity: 1 , height: "auto" , fontSize:"calc(0.5*( 1.7vw + 1.7vh ))" }}
                exit={{ opacity: 0 , height: 0 }}
                transition={{ duration: 0.05 }}
                >{content.split("\n").map( (line,index) =>(
                    <p key={index}>{line}</p>
                ))}
                </motion.div>
        )}
        </div>
    )
 }