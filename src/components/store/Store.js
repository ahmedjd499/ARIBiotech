import { useRef, useState } from 'react';

import './store.css'
import crevete from '../../assets/crevete.jpg'
import toast,{ Toaster } from 'react-hot-toast'

import emailjs from '@emailjs/browser';



function Store() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qp7pkom', 'template_bvbkt1v', form.current, '9_ZsgNTs9fwwm3Qi0')
        .then((result) => {
          toast.success('la commander a été envoyer avec succés.')
          document.getElementById('name').value=''
          document.getElementById('email').value=''
          document.getElementById('telephone').value=''
          document.getElementById('quantite').value=''
  
        }, (error) => {
          toast.error('an error  has occured, please try again')
        });
    };


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
  
    return (
      <>
        <button  onClick={handleShow} className='open' >
        🛒 Acheter 
        </button>
        <button  onClick={handleShow} className=' open-mobile' >
        🛒 Acheter 
        </button>
  
        <div style={{display: show ?  'flex' : 'none' }} className='modal'>
          <div closeButton className='modalHead'>
          <button  onClick={handleShow} className='modalClose'>
            ◀️ Retourner
            </button>
            <div className='modalTitle'>Bienvenue dans notre boutique 😁 </div>
          </div>
          <div className='store'>
         
          <Toaster></Toaster>
 
              <div class="product-card">
      <div class="product-img-container">
          <img src={crevete} alt="crevete" class="product-img"></img>
      </div>
      <div class="product-info">
          <h2 class="product-title">
            Déchets de crevettes</h2>
          <p class="product-description">Déchets issus des industries de crevettes</p>
          <p class="product-price">0.300 dt / Kg</p>
       
      </div>
      <form  ref={form} onSubmit={sendEmail} className='form-store'>
        <input type='text' required placeholder='Votre nom...' name='name' id='name'/>
        <input type='email' required placeholder='Votre email...'name='email'id='email'/>
        <input type="number" required placeholder='votre téléphone...'name='telephone'id='telephone'/>
        <input type="number"placeholder='Quantité en KG ?' name='quantite'id='quantite'/>
        <input type="hidden"value="crevettes" name='produit'id='produit'/>
        <button className='com-btn' type='submit'value='send'>🛒 Commander</button>
        <a className='com-a' href='tel:25379751'>✆ Appeler</a>
       
        </form>
    </div>
          
          </div>

        </div>
      </>
    );
}

export default Store ;

 