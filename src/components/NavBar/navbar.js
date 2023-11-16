import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from "../../assets/contactImg.png"
import menu from '../../assets/menu.png'

const Navbar = () =>  {
  const[showMenu, setShowMenu] = useState(false);
  return  (
    <nav className="navbar">
      <Link to='intro' smooth={true} offset={-100} duration={500}>
      <img src={logo} alt='Logo' className='logo'  />
      </Link>
      <div className= "desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className= "desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className= "desktopMenuListItem">About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500}className= "desktopMenuListItem">Portfolio</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="ContactImg" className="desktopMenuImg" /> Contact Me </button>

      <img src={menu} alt='Menu' className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className= "navMenu" style={{display: showMenu? 'flex' :'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className= "listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className= "listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500}className= "listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className= "listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;