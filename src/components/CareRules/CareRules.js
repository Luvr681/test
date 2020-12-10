import React from 'react'

import image from '../../assets/care/bg.jpg'

import './CareRules.css'

export const CareRules = () => {
  return (
    <div className="care__rules">
        <div className="care__rules__inner">
          <div className="care__rules__info">
            <h3 className="care__rules__title">Правила предоставления услуг в компании «Авенир фито»</h3>
            <h4 className="care__rules__subtitle">Нам не все равно</h4>
            <div className="care__rules__text">
              <p>Мы считаем, что честность — это лучшая стратегия на нашем рынке. Поэтому мы разработали самую справедливую и прозрачную политику предоставления услуг. Ознакомьтесь с информацией, приведенной в данном разделе, чтобы узнать о правилах и условиях доставки, возврата и обмена товара, а также о способах защиты персональных данных. Если у вас возникли какие-либо вопросы, свяжитесь с нами.</p>
            </div>
          </div>
          <div className="care__rules__img__block"><img className="care__rules__img" src={image} alt="" /></div>
        </div>
    </div>
  )
}
