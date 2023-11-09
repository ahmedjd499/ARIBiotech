import React from 'react'
import './coProduits.css'
import co2 from '../../assets/co2.png'
import cop1 from '../../assets/cop1.png'
import cop2 from '../../assets/cop2.jpg'
import cop3 from '../../assets/cop3.png'
import cop4 from '../../assets/cop4.png'


import cop5 from '../../assets/cop5.jpg'
import cop6 from '../../assets/cop6.jpg'
import cop7 from '../../assets/cop7.jpg'
import cop8 from '../../assets/cop8.jpg'


import cop9 from '../../assets/cop9.jpg'
import cop10 from '../../assets/cop10.jpg'
import cop11 from '../../assets/cop11.jpg'

import cop12 from '../../assets/cop12.png'
import cop13 from '../../assets/cop13.jpg'
import cop14 from '../../assets/cop14.png'
import cop15 from '../../assets/cop15.png'


import cop16 from '../../assets/cop16.jpg'
import cop17 from '../../assets/cop18.jpg'
import cop18 from '../../assets/cop19.jpg'


import cop20 from '../../assets/cop20.png'
import cop21 from '../../assets/cop21.jpg'
import cop22 from '../../assets/cop22.jpg'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-scroll'

const CoProducts = () => {
  return (
    <>
    <Navbar active='cop' />
  <section id='CoProducts'>
    <div className='coproductMarin'>
      <div>
        <h2>
          Coproduits Marins
        </h2>
      </div>
    </div>
    <img src={co2} alt="coproduits" className='co2' />
    <div className='coproductMarin2'>
      <div>
        <h2>
          Coproduits Marins
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='1' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Déchets de Crevettes </Link>
        </div>

  
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='2' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Déchets de Crustacés </Link>
        </div>


      
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='3' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Déchets de Mollusques</Link>

        </div>
      
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='4' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Déchets de Poissons</Link>

        </div>

      
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='6' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Effluents</Link>

      
        </div>

   
      
        <div>
          <span className='s1'>⬇️</span>
        <Link activeClass='active' to='5' spy={true} smooth={true} offset={-100} duration={500} className='prod'>Déchets Végétaux</Link>

        </div>

    </div>

    <div className='coproductMarin3' id='1'>
      <div>
        <h2>
          Déchets de Crevettes
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Industries</h4>
          <img src={cop1} alt=" Déchets de Crevettes" />
        </div>

  
        <div>
          <span className='s1'>⬇️</span>
          <h4>Restaurants & Hôtels</h4>
          <img src={cop2} alt=" Déchets de Crevettes" />

        </div>


      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Port / Filets</h4>
          <img src={cop3} alt=" Déchets de Crevettes" />

        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Marchés</h4>
          <img src={cop4} alt=" Déchets de Crevettes" />

        </div>


    </div>

    <div className='coproductMarin3' id='2'>
      <div>
        <h2>
          Déchets de Crustacés
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Industries</h4>
          <img src={cop5} alt=" Déchets de Crevettes" />
        </div>

  
        <div>
          <span className='s1'>⬇️</span>
          <h4>Restaurants & Hôtels</h4>
          <img src={cop6} alt=" Déchets de Crevettes" />

        </div>


      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Port / Filets</h4>
          <img src={cop7} alt=" Déchets de Crevettes" />

        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Marchés</h4>
          <img src={cop8} alt=" Déchets de Crevettes" />

        </div>


    </div>

    <div className='coproductMarin3' id='3'>
      <div>
        <h2>
          Déchets de Mollusques
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Industries</h4>
          <img src={cop9} alt=" Déchets de Crevettes" />
        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Port / Filets</h4>
          <img src={cop10} alt=" Déchets de Crevettes" />

        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Marchés</h4>
          <img src={cop11} alt=" Déchets de Crevettes" />

        </div>


    </div>

    <div className='coproductMarin3' id='4'>
      <div>
        <h2>
          Déchets de Poissons
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Industries</h4>
          <img src={cop12} alt=" Déchets de Crevettes" />
        </div>

  
        <div>
          <span className='s1'>⬇️</span>
          <h4>Restaurants & Hôtels</h4>
          <img src={cop13} alt=" Déchets de Crevettes" />

        </div>


      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Port / Filets</h4>
          <img src={cop14} alt=" Déchets de Crevettes" />

        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Marchés</h4>
          <img src={cop15} alt=" Déchets de Crevettes" />

        </div>


    </div>

    <div className='coproductMarin3' id='5'>
      <div>
        <h2>
          Déchets Végétaux
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Algues</h4>
          <img src={cop16} alt=" Déchets de Crevettes" />
        </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Posidonies</h4>
          <img src={cop17} alt=" Déchets de Crevettes" />

        </div>
      
       

        <div>
        <span className='s1'>⬇️</span>
          <h4>Sédiments</h4>
          <span className='s1'>⬇️</span>
          <h4>Déchets issus de dragage</h4>
          <img src={cop18} alt=" Déchets de Crevettes" />

        </div>

    </div>

    <div className='coproductMarin3' id='6'>
      <div>
        <h2>
          Effluents Liquides
        </h2>
      </div>
      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Industries</h4>
          <img src={cop20} alt=" Déchets de Crevettes" />
        </div>

  
        <div>
          <span className='s1'>⬇️</span>
          <h4> Eaux de lavage</h4>
          <img src={cop21} alt=" Déchets de Crevettes" />

        </div>


      
        <div>
          <span className='s1'>⬇️</span>
          <h4>Eaux usées</h4>
          <img src={cop22} alt=" Déchets de Crevettes" />

        </div>

    </div>
  </section>

  </>

  )
}

export default CoProducts