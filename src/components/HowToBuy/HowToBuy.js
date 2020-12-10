import React from 'react'
import { Link } from 'react-router-dom'

import flowers from '../../assets/flowers/flowers__on__balcony.jpg'

import './HowToBuy.css'

export const HowToBuy = ({ color }) => {
  return (
    <section className={"section how__to__buy " + color}>
      <div className="section__header">
        <h2 className="section__title">Pricing Plan</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo</p>
      </div>

      <div className="container">
        <div className={"how__to__buy__inner " + color}>
          <div className={"how__to__buy__info " + color}>
            <h2 className={"how__to__buy__title " + color}>Как заказать продукцию «Авенир фито»</h2>
            <div className={"how__to__buy__subtitle " + color}><p>Что вам нужно знать</p></div>
            <div className={"how__to__buy__text " + color}>
                  <p>Компания «Авенир фито» прилагает все усилия, чтобы клиентам нравилось покупать здесь, и они приходили снова и снова.
                  К сожалению, мы работаем только с юридическими лицами.
                  Если Вам не удалось найти интересующую информацию- оставьте заявку и специалисты нашей компании свяжутся 
                  с Вами в удобное для Вас время.</p>
            </div>
            <Link className={"how__to__buy__btn " + color}>Оставить заявку</Link>
          </div>
          <div className={"how__to__buy__image__block " + color}><img className="how__to__buy__image" src={flowers} /></div>
        </div>
      </div>
    </section>  
  )
}
