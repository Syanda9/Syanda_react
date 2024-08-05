import React from 'react'
import './about.css'
import bro from './assets/bro.jpg'
import Cartoon from './assets/Cartoon.jpg'

const about =() =>{
    return (
    <div className='About' id="About">
        <div className="about-title">
            <h1> About</h1>
            <img src='' alt=''/>
        </div>
        <div className="sections">
            <div className="left">
                <img src={bro} alt=''/>
            </div>
            <div className="right">
                <div className="para">
                    <p>I am a final student in Univerity of KwaZulu-Natal pursuing a degree in Ethics and Computer Science.
                    I have both practical and theoretical knowledge. I am well prepared to start my career in web development 
                     or Software development. I spent a lot of my academic years coding mostly in Java and C++.</p> 
                   <p> I decided to expand my knowledge by taking on HTML, JavaScript, CSS and React. I am not yet done as I am looking forward 
                    to also complete back end part as I already leant database management system which are MySql and MongoDB.</p>
                </div>
{/*  <div className="skills">
                    <div className="aSkills"><p>JavaScript</p><hr style={{width: "50%"}} /></div>
                    <div className="aSkills"><p>HTML & CSS</p><hr style={{width: "60%"}} /></div>
                    <div className="aSkills"><p>React</p><hr style={{width: "70%"}} /></div>
                    <div className="aSkills"><p>Java</p><hr style={{width: "75%"}} /></div>
                    <div className="aSkills"><p>C++</p><hr style={{width: "70%"}} /></div>
                    <div className="aSkills"><p>MySql</p><hr style={{width: "50%"}} /></div> 
                </div> */}
            </div>
        </div>
        <div className='achieve'>
            <div className='achievement'>
                <h1>""</h1>
                <p> ll</p>
            </div>
            <hr />
            <div className="achievement">
                <h1>13/09</h1>
                <img src={Cartoon} alt="" />
                <p>THERE IS NO SUBSTITUTE FOR HARD WORK</p>
            </div>
            <hr />
            <div className="achievement">
                <h1>""</h1>
                <p>ll</p>
            </div>
     </div>
    </div>
    )
}
export default about