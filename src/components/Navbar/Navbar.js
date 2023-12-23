import React, { useState } from 'react';
import './navbar.css' ;
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import brand from '../../assets/logoSen.png'
import { Link as LinkNav } from 'react-router-dom';


const Navbar = (props) => {
const [showMenu ,setShowMenu]=useState(false)
  const activeLink=props.active

  return (
   <nav className='navbar'>
    <img src={brand} className='logo' alt='ARIBiotech' />
    <div className='desktopmenu'>
     
       <LinkNav to={`/Accueil`} className={activeLink==='acc'?'active desktopMenulistItem' : 'desktopMenulistItem'}>Accueil</LinkNav>
       <LinkNav to={`/Co-Produits`} className={activeLink==='cop'?'active desktopMenulistItem' : 'desktopMenulistItem'}>Co Produits</LinkNav>
       <LinkNav to={`/Partners`} className={activeLink==='part'?'active desktopMenulistItem' : 'desktopMenulistItem'}>Partenaires</LinkNav>
       <LinkNav to={`/E-Souk-Waste`}className='desktopMenuBtn' >🛒 E-Souk</LinkNav>

    </div>



    <img src={showMenu?close:menu} className='mobMenu' alt='menu'  onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
        <LinkNav to={`/Accueil`}  className='listItem' onClick={()=>setShowMenu(false)}>Accueil </LinkNav>
        <LinkNav to={`/Co-Produits`} className='listItem' onClick={()=>setShowMenu(false)}>Co Produits</LinkNav>
        <LinkNav to={`/Partners`} className='listItem' onClick={()=>setShowMenu(false)}>Partenaires </LinkNav>
        <span className="break"></span>
        <LinkNav to={`/E-souk-Waste`}className='Buy' >🛒 E-Souk</LinkNav>

    </div>

   </nav>
  )
}

export default Navbar