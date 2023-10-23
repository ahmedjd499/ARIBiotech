import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css' ;
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import brand from '../../assets/logoSen.png'
import { Link as LinkNav } from 'react-router-dom';


const Navbar = () => {
const [showMenu ,setShowMenu]=useState(false)


  return (
   <nav className='navbar'>
    <img src={brand} className='logo' alt='ARIBiotech' />
    <div className='desktopmenu'>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Accueil </Link>
        <Link activeClass='active' to='#' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenulistItem'>Co Produits</Link>
        <Link activeClass='active' to='partners' spy={true} smooth={true} offset={-100} duration={500}className='desktopMenulistItem'>Partenaires </Link>
       
       <LinkNav to={`/E-Souk-Waste`}className='desktopMenuBtn' >🛒 E-Souk</LinkNav>

    </div>



    <img src={showMenu?close:menu} className='mobMenu' alt='menu'  onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Accueil </Link>
        <Link activeClass='active' to='#' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Co Produits</Link>
        <Link activeClass='active' to='partners' spy={true} smooth={true} offset={-100} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Partenaires </Link>
        <span className="break"></span>
        <LinkNav to={`/E-souk-Waste`}className='Buy' >🛒 E-Souk</LinkNav>

    </div>

   </nav>
  )
}

export default Navbar