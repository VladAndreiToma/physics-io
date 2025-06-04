import React from "react";
import { Link } from "react-router-dom";
import useClickSplash from "./style_components/useClickSplash";

export default function TopBar(){
    // using cool click effect
    useClickSplash();

    //list of app services
    const services = [ 'BaseHub' , 'Courses', 'Simulations' , 'About' , 'FAQ' , 'User' , 'Login' ];
    
    return(
        <div className="top-bar-info">
            <div className="services-bar">
                {services.map((service, index) => (
                <Link key={index} to={ service.includes('BaseHub') ? '/' : `/${service.toLowerCase()}`} className="service-link">
                    {service}
                </Link>
                ))}
            </div>
        <label className="app-name">{`<`}learn with | physics-io{`>`}</label>
        </div>
    );
}