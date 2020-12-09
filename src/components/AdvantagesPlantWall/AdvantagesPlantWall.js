import React from 'react'

import { Advantage } from './Advantage/Advantage'

import './Advantages.css'

export const AdvantagesPlantWall = ({ advantages }) => {
  return (
      <div className='section gold'>
      <div className="container">

        <div className="section__header">
          <h2 className='section__title white'>Преимущества фито стены из живых растений</h2>
          <div className='section__subtitle white'>
            <p>
             Чистый воздух круглый год 
            </p>
          </div>
        </div>

        <div className="advantages">
          {
            advantages && advantages.map(advantage => {
              return <Advantage advantage={advantage} key={advantage.id} /> 
            })
          }
        </div>

      </div>
    </div>
  )
}
