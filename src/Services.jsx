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
                        <FontAwesomeIcon icon={faJsSquare} size="4x" /> 
                        <hr style={{width: "50%"}} />
                    </div>
                   <div className="aSkills">
                          <FontAwesomeIcon icon={faHtml5} size="4x" id="FO" /> 
                          <hr style={{width: "60%"}} />
                    </div> 
                    <div className="aSkills">
                         <FontAwesomeIcon icon={faCss3Alt} size="4x" id="FO" /> 
                         <hr style={{width: "60%"}} />
                    </div>
                    <div className="aSkills">  
                        <FontAwesomeIcon icon={faReact} size="4x" id="FO" /> 
                         <hr style={{width: "60%"}} />
                    </div>
                    <div className="aSkills">
                         <FontAwesomeIcon icon={faJava} size="4x" ID="FO"/> 
                         <hr style={{width: "75%"}} />
                    </div>
                    <div className="aSkills">
                        <img src={cplus} alt='' /> 
                        <hr style={{width: "70%"}} />
                    </div>
                    <div className="aSkills">
                        <img src={MySql} alt='' /> 
                         <hr style={{width: "50%"}} />
                    </div> 
            </div> 
         
         </div>
        
    )
}

export default Service