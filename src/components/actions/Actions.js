import React from 'react'
import './../home/home.css' 
import bot from '../../assets/jellyfishbot.jpg'
import qolla from '../../assets/9olla.jpg'
import carapace from '../../assets/carapace.jpg'

const Actions = () => {
  return (
    <article id="home">
    <h1 className='actionsTitle'>Actions</h1>

    <section className="section">
      <h2 className='sectionTitle'>Conservation des déchets :  (Kolla-قلّة)</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={qolla} alt="Technologie" />
      <p className='sectionDivPARA'>
        Conservation des déchets de poissons dans un pot en poterie traditionnelle. <br/>
        Le but est d'avoir une bonne qualité de déchets afin de garantir un meilleur produit à valoriser. </p>
      </div>
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Collection de déchets :  (Carapace de tortue)</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={carapace} alt="Technologie" />
      <p className='sectionDivPARA'>
      Collecteur de déchets fixe sous forme de carapace de tortue <br></br>
        Il s'agit d'une carapace de tortue fabriquée en résine. Ce collecteur est fixé dans chaque navire de pêche et va permettre la collecte des déchets flottants au niveau du navire.
      </p>
      </div>
    </section>

    <section className="section">
      <h2 className='sectionTitle'>La technologie au service de la propreté des ports</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={bot} alt="Technologie" />
      <p className='sectionDivPARA'>
        Un robot, collecteur de déchets, au niveau des bassins portuaires, conçu par notre groupe d’experts tunisiens, fera le ménage ! Une démonstration est au programme, au port de la Goulette, le 16 août 2023, dans le cadre de la journée de sensibilisation, organisée par l’APIP.
      </p>
      </div>
    </section>

 


    </article>
  )
}

export default Actions

