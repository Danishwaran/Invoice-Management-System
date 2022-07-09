import React from 'react';
import HRLogo from "./highradius-logo-3.png";
import ABCLogo from "./abc.png"
import "../component.css";

function LogoSection() {
    return (
        <div id='Components-logoSection'>
            <div >
                <img id="ABCLOGO" src={ABCLogo} alt="ABC"/>
                <span>ABC Products</span>
            </div>
            
            <img src={HRLogo} alt="highradius" />
            
        </div>
        
    )
}

export default LogoSection;
