import React,{useState, useRef} from 'react'
import './Navbar.css'
import infinity from './assets/infinity.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu,setMenu] = useState("Home");
     const menuRef = useRef();

     const openMenu = () =>{
        menuRef.current.style.right="0";
     }
     const closeMenu = () =>{
      menuRef.current.style.right="-350px";
   } 
    return (
        <div className='navbar' id="">
          <img src={infinity} alt="" />
          <FontAwesomeIcon  icon={faBars} onClick={openMenu}  size="4x"  className='nav-mob-open'  />
          <ul ref={menuRef} className="nav-menu">
          <FontAwesomeIcon className='nav-mob-close' icon={faTimes} onClick={closeMenu}  size="4x" />
           <li><AnchorLink className='anchor-link' offset={50} href="#Home">Home</AnchorLink></li>
           <li><AnchorLink className='anchor-link' offset={50} href="#About">About</AnchorLink></li>
           <li><AnchorLink className='anchor-link' offset={50} href="#Sk">Skills</AnchorLink></li>
           <li><AnchorLink className='anchor-link' offfset={50} href="#Portfolio">Portfolio</AnchorLink></li>
           <li><AnchorLink className='anchor-link' offset={50} href="#Contact">Contact</AnchorLink></li>
          </ul>
          <div className="nav-connect" ><AnchorLink className='anchor-link' offset={50} href="#Contact" id="AS">Connect With Me</AnchorLink></div>
        </div>
    )

}
export default Navbar 