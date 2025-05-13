import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(){
    const services = [ 'BaseHub' , 'Courses' , 'About' , 'FAQ' , 'User' , 'Login' ];
    return(
        <div className="top-bar-info">
        {services.map((service, index) => (
        <Link key={index} to={ service.includes('BaseHub') ? '/' : `/${service.toLowerCase()}`} className="service-link">
            {service}
        </Link>
        ))}
        <label style={{position:"absolute" , fontSize: '25px' , right: "60px" , boxSizing:"border-box" , padding:'5px'}}>{`<`}learn with | physics-io{`>`}</label>
        </div>
    );
}