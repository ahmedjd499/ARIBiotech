import React from 'react'
import './home.css'

import portTun from '../../assets/port.jpg'
import compSens from '../../assets/compagnedesensibilisation.jpg'
import dechets from '../../assets/dechets.jpg'
import plat from '../../assets/plats2.jpg'
import project from '../../assets/projet.jpg'
import events from '../../assets/events.jpg'

import dechetSolide from '../../assets/dechetsolide.jpg'
import dechetLiquide from '../../assets/dechetliquide.jpg'

import pecheurs from '../../assets/pecheurs.jpg'
import industriel from '../../assets/industriel.jpg'
import individus from '../../assets/individus.jpg'

import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'


import About from './../about/About';
import Actions from '../actions/Actions'
import Navbar from '../Navbar/Navbar'



const Home = () => {
  return (
    <>
     <Navbar active='acc' />
    <article id="home">
    <section className="section">
      <h2 className='sectionTitle'>Déchets marins au  niveau des ports</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={portTun} alt="Ports tunisiens" />
      <p className='sectionDivPARA'>
        Les déchets. On en a plein les yeux... et le nez ! Dans les ports tunisiens c’est l’un des problèmes majeurs, insolubles même dans l’eau ! Heureusement, des solutions sont en cours.
      </p>
      </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Campagne de sensibilisation</h2>
     <div className='sectionDiv'>
     <img className='sectionDivIMG'src={compSens} alt="Campagne de sensibilisation" />
      <p className='sectionDivPARA'>
        Une large campagne de sensibilisation au profit des acteurs générateurs de déchets au niveau des ports de pêche est lancée par l’APIP, Agence des Ports et des Installations de Pêche, dans le cadre du projet transfrontalier ARIBiotech.
      </p>
     </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Utiliser les déchets des activités de pêche</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={dechets} alt="Déchets de pêche" />
      <p className='sectionDivPARA'>
        Utiliser les déchets des activités de pêche et les valoriser est la meilleure solution pour minimiser l’impact environnemental. C’est l’un des objectifs du projet ARIBiotech : une solution lucrative et bénéfique pour tous les intervenants.
      </p>
      </div>
      
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Qu'est-ce que ça veut dire pour l'avenir ?</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={plat} alt="Avenir" />
      <p className='sectionDivPARA'>
        Pour commencer, les industriels et les marchés de poisson qui n’attendent que cette solution miracle qui les débarrasserait des tonnes de déchets de nettoyage et de transformation des produits de pêche, pour les recycler et les utiliser dans l’alimentation animale ou les cosmétiques, leur offrant ainsi une seconde vie.
      </p>
      </div>
     
    </section>

    


    <section className="section">
      <h2 className='sectionTitle'>Projet ARIBiotech dans son ensemble</h2>
     <div className='sectionDiv'>
     <img className='sectionDivIMG' src={project} alt="Projet ARIBiotech" />
      <p className='sectionDivPARA'>
        Le projet ARIBiotech ne se limite pas à la gestion des déchets de pêche. Il prévoit également le recyclage des filets des pêcheurs en collaboration avec des associations locales. Cette activité est déjà proposée du côté sicilien.
      </p>
     </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Événements de sensibilisation</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={events} alt="Événements de sensibilisation" />
      <p className='sectionDivPARA'>
        6 Événements seront organisés dans les ports de pêche de la Goulette, Kélibia, Bizerte, Mahdia, Teboulba et Sfax visant à sensibiliser les pêcheurs, les industriels spécialisés dans la transformation des produits de pêche et les distributeurs, à utiliser les déchets des activités de pêche pour les recycler.
      </p>
      </div>
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Les déchets générés</h2>
      <ul className='sectionUl'>
          <li className='sectionUlLi'>
            
                 Déchets solides 
                 <span className='sectionUlLiSpan'>( plus de 1000 m²/an)</span>
           <img src={dechetSolide} className='sectionUlLiImg' alt="" />
          </li>
          <li className='sectionUlLi'>

                  Déchets liquides 
                  <span className='sectionUlLiSpan'>(Entre 1000 et 2000 m²/an)</span>
            <img src={dechetLiquide} className='sectionUlLiImg' alt="" />
          </li>
      </ul>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Les générateurs de déchets </h2>
      <ul className='sectionUl'>
        <li className='sectionUlGen'>
          <span className='sectionGenTitle'>Pêcheurs</span>
           <img src={pecheurs} className='sectionGenImg' alt="" />
        </li>

        <li className='sectionUlGen'>
          <span className='sectionGenTitle'>Industriels</span>
           <img src={industriel} className='sectionGenImg' alt="" />
        </li>

        <li className='sectionUlGen'>
          <span className='sectionGenTitle'>individuels</span>
           <img src={individus} className='sectionGenImg' alt="" />
        </li>
      </ul>
      <br/>
      <h2 className='sectionTitle'>Les Solutions Proposées</h2>

      <img src={s2} className='sectionSolImg' alt="" />
      <img src={s3} className='sectionSolImg' alt="" />
      <img src={s4} className='sectionSolImg' alt="" />
      <img src={s5} className='sectionSolImg' alt="" />
      <img src={s6} className='sectionSolImg' alt="" />

    </section>

  
    
    <About />
    <Actions />


  </article>
  </>
  )
}

export default Home
