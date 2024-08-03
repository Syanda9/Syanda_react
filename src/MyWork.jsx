import React from 'react'
import './MyWork.css'
import abolone from './assets/abolone.jpg'
import bank from './assets/bank.png'
const MyWork = () => {
    return (
        <div className='work' id="Portfolio">
            <div className="work-title">
             <h1>Some of My Programming Work</h1>
             <p>THESE IMAGES ARE LINKS CLICK THEM</p>
             
            </div>

           <div className="container">
                 <a href="https://github.com/Syanda9/futureC-" target="_blank" rel="noopener noreferrer">
                   <img src={abolone} alt='' />
               </a>
            
               <a href="https://github.com/Syanda9/Future" target="_blank" rel="noopener noreferrer">
                   <img src={bank} alt='' />
               </a>
            </div>
            <div className="showmore">

            </div> 
        </div>

    )
}

export default MyWork