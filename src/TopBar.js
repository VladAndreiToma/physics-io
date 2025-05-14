import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(){
    const services = [ 'BaseHub' , 'Courses' , 'About' , 'FAQ' , 'User' , 'Login' ];
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