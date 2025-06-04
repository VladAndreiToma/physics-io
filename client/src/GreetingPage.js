import React from "react";
import TopBar from "./TopBar";
import BottomZone from "./BottomZone";
import WhatYouGet from "./WhatYouGet";
import GeneralPhysiscsElement from "./GeneralPhysicsElement";
import ExploreComponent from "./ExploreComponent";

export default function GreetingsPage(){
    return(
        <div className='physics-io-main-page'>
            <div className="flow-main-page">
                <TopBar/>
                <GeneralPhysiscsElement/>
                <WhatYouGet/>
                <ExploreComponent/>
                <BottomZone/>
            </div>
        </div>
    );
}