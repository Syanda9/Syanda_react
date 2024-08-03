import React,{useState} from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contacts = ()=>{
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3df26591-24fa-46b3-a63b-f19e1c76d843");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(result);
      event.target.reset();
    } else {
      setResult(data.message);
      
    }
  };


    return (
        <div className="contact" id="Contact"> 
          <div className="cTitle">
            <h1>Get In Touch</h1>
            <img src='' alt='' />
          </div>
          <div className="cSection">
            <div className="cLeft">
              <h1>Let's talk</h1>
              <p>I'm currently available to take any projects.</p>
             <div className="cDetails">
             <div className="cD">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/><p>syandan083@gmail.com</p>
            </div>
            <div className="cD">
                <FontAwesomeIcon icon={faPhone} size="2x"/><p>+27760892899</p>
            </div>
            <div className="cD">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/><p>Scottsville, Pietermaritzburg, South Africa</p>
            </div>
         </div>
     </div>
     <form onSubmit={onSubmit} className="cRight">
            <label htmlFor="">Your Name</label> 
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <textarea name="message" rows="8" placeholder="Enter your message" />
            <button type="submit" className="cSubmit" >Submit</button>
            <span>{result}</span>
      </form> 
    </div>
</div>
      
    )
}

export default Contacts
