import React from "react";

export default function BottomZone(){

    const options = ["Privacy" ,"Policy", "Manage My Privacy", "Do Not Sell or Share My Data", "Terms of Service" ,
        "Accessibility", "Corporate Policies", "Product", "Security" ]

    return(
        <div className="bottom-zone">
            <div className="contact-follows-support">
                <div className="socials">
                    <label style={{ color: "whitesmoke" , fontFamily: "Orbitron" , fontWeight: "bold" , fontSize:"120%"}}>Feel free to visit us on socials: </label>
                    <div className="contact-area">
                    
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style={{ backgroundColor: "#CCC" }} className="contact-icon" alt="GitHub" />
                    </a>

                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="contact-icon" alt="LinkedIn" />
                    </a>

                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="contact-icon" alt="Instagram" />
                    </a>

                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" className="contact-icon" alt="Discord" />
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="contact-icon" alt="Facebook" />
                    </a>

                    </div>
                    <label style={{color: "whitesmoke", fontSize: "calc(0.5*(1.7vw + 1.7vh))" , marginTop: "0px"}}>
                        All rigths reserved to |physics-io{`>`}.<br/>
                        Every material inside is copyrighted.<br/>
                        Any attempt of using this material fraudulously will be punished .
                        in conformity with the active laws stipulated by the agencies of intelectual proerpty safety.
                    </label>
                </div>
                <div className="feedback-zone">
                    <label style={{ fontSize: 'calc(0.5*(2vw + 2vh))' , fontFamily: "Orbitron" , fontWeight: "bold" , color: "whitesmoke" }}>Send a feedback or ask a question</label>
                    <textarea placeholder="write something. Support team will reach for you" className="feedback-input"></textarea>
                </div>
                <div className="reaching">
                    <a href="mailto:contact@physics.io" className="contact-ref-hook">
                        <div className="contact-method-div">
                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" className="reach-picture" alt="Email"></img>
                            <label style={{ textDecoration: "none" , color:"inherit"}}>contact@physics-io.com</label>
                        </div>
                    </a>

                    <a href="tel:+12345678099999111111" className="contact-ref-hook">
                        <div className="contact-method-div">
                            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" className="reach-picture"></img>
                            <label>+12345678909999911111</label>
                        </div>
                    </a>

                    <a href="mailto:contact@physics.io" className="contact-ref-hook">
                        <div className="contact-method-div">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Icon" className="reach-picture"></img>
                            <label>tutor1@physics-io.com</label>
                        </div>
                    </a>

                    <a href="mailto:contact@physics.io" className="contact-ref-hook">
                        <div className="contact-method-div">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Icon" className="reach-picture"></img>
                            <label>tutor2@physics-io.com</label>
                        </div>
                    </a>

                    <a href="mailto:contact@physics.io" className="contact-ref-hook">
                        <div className="contact-method-div">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Icon" className="reach-picture"></img>
                            <p>tutor3@physics-io.com</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="horizontal-service-footer">
            {
                options.map( ( option , index ) =>(
                    <label style={{ cursor:"pointer" }} key={index}> {option}{index < options.length-1 ?  "\u00A0\u00A0|\u00A0\u00A0": ''}</label>
                ) )
            }
            </div>
        </div>
    );
}