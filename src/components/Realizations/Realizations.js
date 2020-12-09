import React from 'react'

import { realizations } from '../../localDB/realizations'
import { Realization } from './Realization/Realization'

import './Realizations.css'

export const Realizations = () => {
  return (
    <section className="section realization">
      <div className="section__header">
        <h2 className="section__title">Этапы реализации</h2>
        <h3 className="section__subtitle">Очень важно соблюсти этапы для получения качественного продукта</h3>
      </div>
      <div className="realizations">
        <div class="container">
          {
            realizations && realizations.map((realization, index) => {
              return <Realization odd={(index + 1) % 2 === 0} realization={realization} key={realization.id} />
            })
          }
        </div>
      </div>
    </section>   
  )
}
