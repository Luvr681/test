import React from 'react'

import './Service.css'

export const Service = ({ service }) => {
  return (
    <div className="services__item">
      <div className="services__content">
        <div className="services__icon">
          <img src={service.img} alt="phone" />
        </div>
          <div className="services__title">
            <h4>{ service.title }</h4>
          </div>
          <div className="services__text">
            <p>{ service.description }</p>
          </div>
          <div className="services__btn">
            <a className="services__btn__icon" href="/">{ service.btn }</a>
          </div>
        </div>
    </div>
  )
}
