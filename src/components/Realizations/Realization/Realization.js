import React from 'react'

export const Realization = ({ odd, realization }) => {
  if (odd) {
    return (
      <div className="realization__step">
        <div className="realization__step__image__block"><img className="realization__step__img" src={realization.image} alt="" /></div>
        <div className="realization__step__description">
          <h3 className="realization__step__title">{ realization.title }</h3>
          <div className="realization__step__text">
            <p>{ realization.description }</p>
          </div>
        </div>
      </div>
    )
  } 
  return (
    <div className="realization__step">
      <div className="realization__step__description">
        <h3 className="realization__step__title">{ realization.title }</h3>
        <div className="realization__step__text">
          <p>{ realization.description }</p>
        </div>
      </div>
      <div className="realization__step__image__block"><img className="realization__step__img" src={realization.image} alt="" /></div>
    </div>
  )
}
