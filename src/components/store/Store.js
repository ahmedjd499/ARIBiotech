import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
          toast.success('the Email has been sent successfully')
          document.getElementById('name').value=''
          document.getElementById('email').value=''
          document.getElementById('telephone').value=''
          document.getElementById('quantite').value=''
  
        }, (error) => {
          toast.error('an error  has occured, please try again')
        });
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        🛒 Acheter
        </Button>
  
        <Modal show={show} onHide={handleClose} className='modal'>
          <Modal.Header closeButton className='modalHead'>
          <Button variant="secondary" onClick={handleClose} className='modalClose'>
            ◀️ Retourner
            </Button>
            <Modal.Title className='modalTitle'>Bienvenue dans notre boutique 😁 </Modal.Title>
          </Modal.Header>
          <Modal.Body className='store'>
          <Toaster></Toaster>
 
              <div class="product-card">
      <div class="product-img-container">
          <img src={crevete} alt="crevete" class="product-img"></img>
      </div>
      <div class="product-info">
          <h2 class="product-title">Crevettes chevrette</h2>
          <p class="product-description">dechéts de pêche : crevettes</p>
          <p class="product-price">0.300 dt / Kg</p>
       
      </div>
      <form  ref={form} onSubmit={sendEmail}>
        <input type='text' required placeholder='Votre nom...' name='name' id='name'/>
        <input type='email' required placeholder='Votre email...'name='email'id='email'/>
        <input type="number" required placeholder='votre téléphone...'name='telephone'id='telephone'/>
        <input type="number"placeholder='Quantité en KG ?' name='quantite'id='quantite'/>
        <input type="hidden"value="crevettes" name='produit'id='produit'/>
        <button className='com-btn' type='submit'value='send'>Commander</button>
       
        </form>
    </div>
          
          </Modal.Body>

        </Modal>
      </>
    );
}

export default Store ;

 