import React, { useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import location from '../../assets/location.png'

const Form = (props) => {

    const produit = props.produit
    const form = useRef();
    const [url ,setUrl ]=useState('')
    const [spin ,setSpin ]=useState('')
    const [desable ,setDesable ]=useState(false)
    const [details ,setDetails ]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
     setSpin('spin')
  setDesable(true)
  
      emailjs
        .sendForm(
          "service_qp7pkom",
          "template_bvbkt1v",
          form.current,
          "9_ZsgNTs9fwwm3Qi0"
        )
        .then(
          (result) => {
            toast.success("la demande a été envoyer avec succés.");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("telephone").value = "";
            document.getElementById("quantite").value = "";
            document.getElementById("prix").value = "";
            if(!isBuy)
               document.getElementById("localisation").value = "";
            setSpin('');
            setDesable(false)
          },
          (error) => {
            toast.error("an error  has occured, please try again");
          }
        );
    };
      const handleLocationClick = () => {
        if(!isBuy)
       { if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
             setUrl( `https://www.google.com/maps?q=${latitude},${longitude}`);
  
            const location = await reverseGeocode(latitude, longitude);
            document.getElementById('localisation').value = location;
          });
        } else {
          alert('Geolocation is not supported by your browser.');
        }}
      };
    
      const reverseGeocode = async (latitude, longitude) => {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (data.display_name) {
            return data.display_name;
          } else {
            throw new Error('Geocoding failed');
          }
        } catch (error) {
          console.error(error);
          return 'Location not found';
        }
      };
  
    const [isBuy, setIsBuy] = useState(false);
    const [show, setShow] = useState(true);
  return (
    <form ref={form} onSubmit={sendEmail} className="form-store">
    {show ? (
      <>
        <button
          className="com-btn"
          style={{ "backgroundColor": " rgb(25, 201, 43)" }}
          onClick={()=>{
            setShow(false)
            setIsBuy(false)
          }}
        >
         💵 Vendre
        </button>
        <button className="com-btn"
         onClick={()=>{
          setShow(false)
          setIsBuy(true)
        }}
        >🛒 Acheter</button>
      </>
    ) : (
      <>
        {isBuy === true && isBuy ? (
          <>
         
            <input
              type="text"
              required
              placeholder="Votre nom..."
              name="name"
              id="name"
            />
            <input
              type="email"
              placeholder="Votre email..."
              name="email"
              id="email"
            />
            <input
              type="number"
              required
              placeholder="votre téléphone..."
              name="telephone"
              id="telephone"
            />
            
             <input
              type="number"
              placeholder="Proposer un prix dt..."
              name="prix"
              id="prix"
            />
            <input
              type="number"
              placeholder="Quantité en KG ?"
              name="quantite"
              id="quantite"
            />
            <input
              type="hidden"
              value={produit}
              name="produit"
              id="produit"
            />
            <button className="com-btn " type="submit" value="send" id="action-btn" disabled={desable}>
               {spin=="spin" ? <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div> : "🛒 Commander"}
            </button>
          
        
          </>
        ) : (
               
          <>
          <input
          type="text"
          required
          placeholder="Votre nom..."
          name="name"
          id="name"
        />
        <input
          type="email"
          placeholder="Votre email..."
          name="email"
          id="email"
        /><div className="loc">
        <input
          type="text"
          placeholder="Votre localisation..."
          name="localisation"
          id="localisation"
        />
        <input type="hidden" value={url} name="maps_url"/>
        <span onClick={handleLocationClick} className="location"><img src={location} alt="lo" /></span>
        </div>
        <input
          type="number"
          required
          placeholder="votre téléphone..."
          name="telephone"
          id="telephone"
        />
         <input
              type="number"
              placeholder="Proposer un prix dt..."
              name="prix"
              id="prix"
            />
        <input
          type="number"
          placeholder="Quantité en KG ?"
          name="quantite"
          id="quantite"
        />
        <input
          type="hidden"
          value={produit}
          name="produit"
          id="produit"
        />
        <button  disabled={desable} id="action-btn" className="com-btn sell" type="submit" value="send" > 
         {spin==="spin" ? <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div> : " 💵 Vendre"}
        </button></>
        )}
      </>
    )}

   
    {
      !show && ( <span
        className="com-btn"
        style={{ "backgroundColor" :"transparent",'fontSize': '2rem' }}
        onClick={()=>{
          setShow(false)
          setIsBuy(!isBuy)
        }}
      >
       🔁
      </span>)
    }
   <input type="hidden" value={isBuy? "une nouvelle commande d'achat" : "un nouvel offre de vente"} name="action" />
   { show && (<>
    <span className="com-a" onClick={()=>setDetails(!details)}>
              ➕ En savoir +
              </span>
            <p className="details" style={{'display':details?"inline-block":'none'}}>Si vous produisez ce type de déchets. Merci d'indiquer la quantité et la localisation. Ainsi, vous pouvez proposer le prix qui vous convient. 
                  L'achat de coproduits dépend de la disponibilité dans le marché.
            </p>
   
   
   </>)}
 
   
   <Toaster></Toaster>

  </form>
  )
}

export default Form