import React from "react"
import './Hero.css'
import dope from './assets/dope.jpg'
import SyandaCv from './assets/SyandaCv.pdf'
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
    return (
    <div id="Home" className="hero">
    <img src={dope} alt="My Icon" />
    <h1><span>I am Syanda Ngcobo</span></h1>
    <p>Front End Developer</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink href="#Contact" id="OF">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href='./assets/SyandaCv.pdf' download={SyandaCv} id="RE">Resume</a></div>
    </div>
    </div>

  )
}

export default Hero