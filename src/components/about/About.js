import React from 'react'
import './about.css'
import plan from '../../assets/plan.png'




const About = () => {
  return (
    <section id='about'>
         <div className='brandTitle'>
            <span className='brandTitle1'>ARI</span>
            <span className='brandTitle2'>Biotech</span>
            <p className='aboutDesc1'>« Déchets de la pêche : quelles solutions offrir »</p>
            <p className='aboutDesc1'> est le sujet des journées de sensibilisation organisée par le projet ARIBIOTECH.</p>
            <p className='aboutDesc2'> ARIBiotech est un projet transfrontalier, cofinancé par l’Union européenne dans le cadre du programme de coopération Italie-Tunisie 2014-2020, qui vise à renforcer les écosystèmes de la recherche et de l’innovation en biotechnologie marine en synergie avec le milieu entrepreneurial pour promouvoir le traitement et la valorisation des biomasses marines et en particulier les déchets dans les ports de pêche.</p>
         </div>
         <span className='separetor'></span>
        <div className='objectif'>
            <h2 className='objTitle'>
                Objectif global 
            </h2>
            <h3 className='objGlobTitle'>
                 Initiative pour le soutien à l’éducation, la recherche, le développement technologique et l’innovation.
            </h3>
            <p className='objGlobDesc'>Le projet vise à renforcer les écosystèmes de la R&I en biotechnologie marine en synergie avec le milieu entrepreneurial pour promouvoir le traitement et la valorisation des biomasses marines et en particulier les déchets dans les ports de pêche.</p>

            <h2 className='objTitle'>Objectifs spécifiques </h2>
                <ul className='objSpec'>
                    <li className='objSpecLI'>
                        
                        <p className='objGlobDesc'><span className='objSpecLITitle'>1. Accroître</span> la sensibilisation des territoires aux solutions innovantes de valorisations des déchets marins et les rendre utilisables par la société.</p>
                    </li>
                    <li className='objSpecLI'>
                       
                        <p className='objGlobDesc'> <span className='objSpecLITitle'>2. Favoriser</span> une meilleure collaboration de recherche et d’enseignement entre les laboratoires dans la région transfrontalière sur les outils biotechnologiques.</p>
                    </li>
                    <li className='objSpecLI'>
                       
                        <p className='objGlobDesc'> <span className='objSpecLITitle'>3. Faire</span> la communication sur l’état des lieux relatif à la recherche et l’innovation en biotechnologie appliquée à la valorisation des déchets et des sédiments de dragages.</p>
                    </li>
                    <li className='objSpecLI'>
                        
                        <p className='objGlobDesc'><span className='objSpecLITitle'>4. Créer </span> une alliance transfrontalière de R&I en biotechnologie bleue (BB) pour la valorisation durable des déchets marins.</p>
                    </li>
                </ul>
        </div>
        <span className='separetor'></span>
        <div className='plan'>
        <h2 className='objTitle planTitle'>
        📝 Plannification des journées de sensibilisation 📝
        </h2>
        <img src={plan} alt="PLAN" className='planImg' />

      
        </div>

    </section>
  )
}

export default About