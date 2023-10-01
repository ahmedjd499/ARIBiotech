import React from 'react'
import './partners.css'
import p15 from '../../assets/halqeloued.jpg'
import p14 from '../../assets/direction.jpg'
import p13 from '../../assets/Siracusa-Stemma.svg.png'
import p12 from '../../assets/tun.png'
import p11 from '../../assets/repv.png'
import p10 from '../../assets/logo-union-europeenne.jpg'
import p9 from '../../assets/Italie-Tunisie-1.jpg'
import p8 from '../../assets/regionesicilia.jpg'
import p7 from '../../assets/consorzio-universita-trapani.jpg'
import p6 from '../../assets/ministere.jpg'
import p5 from '../../assets/cnrias.png'
import p4 from '../../assets/sidithabetbiotechpole.jpg'
import p3 from '../../assets/apip.jpg'
import p2 from '../../assets/institutozoo.png'
import p1 from '../../assets/instm.png'


const Partners = () => {
    const partners=[
        {
            logo :p1,
            name :'Institut National des Sciences et Technologies de la Mer I.N.S.T.M.',
        },
        {
          logo :p2,
          name :'Istituto Zooprofilattico Sperimentale delle Sicillia',
        },
        {
          logo :p3,
          name :"L'Agence des Ports et des Installations de Pêche (A.P.I.P)",
        },
        {
          logo :p4,
          name :"BiotechPole Sidi Thabet",
        },
        {
          logo :p5,
          name :"ISTITUTO PER LO STUDIO DEGLI IMPATTI ANTROPICI E SOSTENIBILITÀ IN AMBIENTE MARINO",
        },
        {
          logo :p6,
          name :"Ministère de l’Enseignement Supérieur et de la Recherche Scientifique",
        },
        {
          logo :p7,
          name :"CONSORZIO UNIVERSITARIO DELLA PROVINCIA DI TRAPANI",
        },
        {
          logo :p8,
          name :"Regione Sicilia",
        },
        {
          logo :p9,
          name :"La coopération transfrontalière ITALIETUNISIE",
        },
        {
          logo :p10,
          name :"L'union Européenne",
        },
        {
          logo :p11,
          name :"REPVBBLICA ITALIANA",
        },
        {
          logo :p12,
          name :"République Tunisienne",
        },
        {
          logo :p13,
          name :"Siracusa Stemma",
        },
        {
          logo :p14,
          name :"direction générale des services vétérinaires",
        },
        {
          logo :p15,
          name :"Municipalité La Goulette بلدية حلق الوادي",
        },
    ]

    const partnersView=partners.map((item,index)=>{
        return(
          <div className='partner' key={index}>
              <img src={item.logo} alt="partner"className="partnerImg" />
              <span className='partnerName'>{item.name}</span>
          </div>
        );
    })
  return (
    <section id='partners'>
      <h2 className='partnersTitle'>🤝 Nos Partenaires 🤝</h2>
      {partnersView}
    </section>
  )
}

export default Partners