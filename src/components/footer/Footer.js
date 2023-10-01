import React from 'react'
import './footer.css'

import fb from '../../assets/facebook-icon.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.256x256.png'
import insta from '../../assets/instagram.png'


const Footer = () => {
  return (
    <footer className='footer'>
     
      <div className='wave'></div>
      <div className='wave'></div>
      <div className='wave'></div>
      <span className='content'>
        <span>
             Copyright &#169; 2023 ARIBiotech
        </span>
        <div className='linksSocial'>
                <a href="https://www.facebook.com/ARIBiotech" target='_blank' rel='noreferrer'><img src={fb} alt="Fb" className='linkSoc' /></a>
                <a href="https://www.instagram.com/aribiotech/" target='_blank' rel='noreferrer'><img src={insta} alt="insta" className='linkSoc' /></a>
                <a href="tel:71 276 121" target='_blank' rel='noreferrer'><img src={phone} alt="GH" className='linkSoc' /></a>
                <a href="mailto:aribiotech@alliance-cc.com" target='_blank' rel="noreferrer" ><img src={email} alt="Email" className='linkSoc' /></a>
        </div>
      
      </span>
    </footer>
  )
}

export default Footer