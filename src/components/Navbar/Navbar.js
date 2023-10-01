import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css' ;
import buy from '../../assets/buy.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import brand from '../../assets/logoSen.png'


const Navbar = () => {
const [showMenu ,setShowMenu]=useState(false)

  return (
   <nav className='navbar'>
    <img src={brand} className='logo' alt='ARIBiotech' />
    <div className='desktopmenu'>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Acceuil </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenulistItem'>Présentation </Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenulistItem'>Événements</Link>
        <Link activeClass='active' to='partners' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenulistItem'>Partenaires </Link>

    </div>
    <button className='desktopMenuBtn'>
        <img src={buy} alt=''className='desktopMenuImg'/> Acheter
    </button>



    <img src={showMenu?close:menu} className='mobMenu' alt='menu'  onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Acceuil </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Présentation </Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Événements</Link>
        <Link activeClass='active' to='partners' spy={true} smooth={true} offset={-100} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Partenaires </Link>
        <span className="break"></span>
        <button className='Buy'>
          <img src={buy} alt=''className='BuyImg'/> Acheter
        </button>
    </div>
    
   </nav>
  )
}

export default Navbar