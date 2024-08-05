import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faJava, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import cplus from './assets/cplus.png'
import MySql from './assets/MySql.png'



const Service = () =>{
    return (
        <div className='services' id="Sk">
            <div className="services-title">
             <h1>Skills</h1>
             <img src='' alt="" />
            </div>
            <div className="skills">
                <div className="aSkills">
                        <FontAwesomeIcon icon={faJsSquare} size="3x" /> 
                        <hr style={{width: "25%"}} />
                    </div>
                   <div className="aSkills">
                          <FontAwesomeIcon icon={faHtml5} size="3x" id="FO" /> 
                          <hr style={{width: "30%"}} />
                    </div> 
                    <div className="aSkills">
                         <FontAwesomeIcon icon={faCss3Alt} size="3x" id="FO" /> 
                         <hr style={{width: "30%"}} />
                    </div>
                    <div className="aSkills">  
                        <FontAwesomeIcon icon={faReact} size="3x" id="FO" /> 
                         <hr style={{width: "30%"}} />
                    </div>
                    <div className="aSkills">
                         <FontAwesomeIcon icon={faJava} size="3x" ID="FO"/> 
                         <hr style={{width: "40%"}} />
                    </div>
                    <div className="aSkills">
                        <img src={cplus} alt='' /> 
                        <hr style={{width: "35%"}} />
                    </div>
                    <div className="aSkills">
                        <img src={MySql} alt='' /> 
                         <hr style={{width: "25%"}} />
                    </div> 
            </div> 
         
         </div>
        
    )
}

export default Service