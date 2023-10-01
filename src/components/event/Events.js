import React from 'react'
import './events.css'
import { EmbeddedPost, FacebookProvider } from 'react-facebook';

const Events = () => {
  return (
    <section id='events'>
        <h2 className='eventsTitle'>📆 Événements/Journées 📆</h2>
        <div className='events'>
          
         
           <FacebookProvider appId="1008763690392486" >
               <EmbeddedPost  href="https://www.facebook.com/ARIBiotech/posts/pfbid0RZY7Rsze2PjKkxi6PFMvD3M7LS9pVxaVurvDZdv9J5vzaTAm1UMXhN9YcAaVvQGTl" />
          </FacebookProvider>
          <FacebookProvider appId="1008763690392486">
              
              <EmbeddedPost href="https://www.facebook.com/ARIBiotech/posts/pfbid05Q1JyWYA7h3N64mWr4xGUiv5D6vjD9JtsyaGEYQQJFUmP7FgCsDSUKqza3HGYyAkl"  />

         </FacebookProvider>
         <FacebookProvider appId="1008763690392486">
              
              <EmbeddedPost href="https://www.facebook.com/ARIBiotech/posts/pfbid0NMLMBtfmCLZFrsEpUyV7Tq7nH3Xa7wa34kwzhaiaDtKraxcYafomNCdzpqUTeC7Kl" />

         </FacebookProvider>

        
        </div>

        <div className='eventsSmall'>
          
        <a href="https://www.facebook.com/ARIBiotech/posts/pfbid0RZY7Rsze2PjKkxi6PFMvD3M7LS9pVxaVurvDZdv9J5vzaTAm1UMXhN9YcAaVvQGTl" >🌐Journée de sensibilisation- 𝗕𝗶𝘇𝗲𝗿𝘁𝗲 - 𝟯𝟭 août 𝟮𝟬𝟮𝟯</a>
        <a href="https://www.facebook.com/ARIBiotech/posts/pfbid05Q1JyWYA7h3N64mWr4xGUiv5D6vjD9JtsyaGEYQQJFUmP7FgCsDSUKqza3HGYyAkl"  >🌐Journée de sensibilisation- 𝗞𝗲́𝗹𝗶𝗯𝗶𝗮 - 21 août 𝟮𝟬𝟮𝟯</a>
         <a  href="https://www.facebook.com/ARIBiotech/posts/pfbid0NMLMBtfmCLZFrsEpUyV7Tq7nH3Xa7wa34kwzhaiaDtKraxcYafomNCdzpqUTeC7Kl" >🌐Journée de sensibilisation- 𝗟𝗮 𝗚𝗼𝘂𝗹𝗲𝘁𝘁𝗲 - 𝟭𝟲 août 𝟮𝟬𝟮𝟯</a>
         
         

          

       </div>


  </section>
  )
}

export default Events