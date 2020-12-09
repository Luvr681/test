import React from 'react'

import star from '../../../assets/advantages/star.png'

export const Advantage = ({ advantage }) => {
  return (
    <div className="advantage">
      <div className="advantage__image__block"><img className="advantage__image" src={star} alt="" /></div>
      <div className="advantage__info">
        <h3 className="advantage__title">{ advantage.title }</h3>
        <div className="advantage__description">
          <p>{ advantage.description }</p>
        </div>
      </div>
    </div>
  )
}
