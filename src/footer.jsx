import React from 'react'
import './footer.css'

const Footer =() =>{
    return (
       <div className='foter'>
         <div className="fTop">
            <div className="fTop-left">
                <img src='' alt=''/>
                <p> Junior Developer from South Africa</p>
            </div>
            <div className="fTop-right">
                <div className="Email">
                    <img src='' alt=''/>
                    <input type="email" placeholder='Enter' />
                </div>
                <div className="subscribe"> Subscribe </div>
            </div>
         </div>
         <hr/>
         <div className="fBottom">
            <p className="fBottom-left">&copy; 2024 Syanda Ngcobo. All rights Reserved.</p>
            <div className="fBottom-right">
                <p>Term of Services</p>
                <p>Privacy Police</p>
                <p>Connect with me</p>
            </div>
         </div>
      </div>

    )
}
export default Footer