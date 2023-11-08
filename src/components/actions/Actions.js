import React from 'react'
import './../home/home.css' 
import bot from '../../assets/jellyfishbot.jpg'
import bac from '../../assets/bac2.jpg'


const Actions = () => {
  return (
    <article id="home">
    <h1 className='actionsTitle'>Actions</h1>

    <section className="section">
      <h2 className='sectionTitle'>La technologie au service de la propreté des ports</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={bot} alt="Technologie" />
      <p className='sectionDivPARA'>
        Un robot, collecteur de déchets, au niveau des bassins portuaires, conçu par notre groupe d’experts tunisiens, fera le ménage ! Une démonstration est au programme, au port de la Goulette, le 16 août 2023, dans le cadre de la journée de sensibilisation, organisée par l’APIP.
      </p>
      </div>
    </section>
    <section className="section">
      <h2 className='sectionTitle'>Bac de conservation</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={bac} alt="Technologie" />
      <p className='sectionDivPARA'>
        Un bac de conservation des coproduits marins afin de garantir une meilleure qualité de produit valorisé.
      </p>
      </div>
    </section>
 


    </article>
  )
}

export default Actions

