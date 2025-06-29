import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export default function Navbar() {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
   const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }


  return (
    <div className='navbar'>
        <img src={logo} width={125} height={70} alt='logo' className='logo'/>
        <img src={menu_open} alt='' className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef}  className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' href='#home'onClick={() => {
              setMenu("home");
              closeMenu();
            }}
            >
            Home</AnchorLink>{menu==="home" && <img src={underline} alt=''/>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >About</AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'onClick={() => {
              setMenu("skills");
              closeMenu();
            }}
          >Skills</AnchorLink>{menu==="skills"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'onClick={() => {
              setMenu("work");
              closeMenu();
            }}
          >My Work</AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >Contact</AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}