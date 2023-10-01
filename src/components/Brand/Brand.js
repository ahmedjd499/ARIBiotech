import React from 'react'
import './brand.css'
import brand from '../../assets/ARI1.jpg'
const Brand = () => {
  return (
    <div id='brand'>
        <img src={brand} alt="ARIbiotech" className='brandImg'/>
        <div className='brandTitle'>
            <span className='brandTitle1'>ARI</span>
            <span className='brandTitle2'>Biotech</span>
        </div>
        <span className='brandDesc'>Alliance de R&I en Biotechnologie bleue pour la valorisation des déchets marins</span>
    </div>
  )
}

export default Brand