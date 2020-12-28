import React from 'react'

import earth from '../../assets/about/earth.png'
import people from '../../assets/about/people.png'
import forest from '../../assets/about/forest.png'

import './About.css'

export const About = React.memo(() => {
  return (
    <section className="section about">
      <div className="section__header">
        <h2 className="section__title">«Авенир фито»</h2>
        <p className="section__subtitle">С 2014 года команда специалистов Авенир-Фито занимается профессиональной реализацией проектов интерьерного озеленения. Для своих клиентов мы предлагаем обдуманные решения. Специалисты компании регулярно проходят внешнее и внутреннее обучение направленное на повышение профессионализма и сервиса</p>
      </div>
      
      <div className="container">
        <div className="about">
          <div className="about__item">
            <img alt="planet" className="about__img" src={earth} />
            <h4 className="about__title">Транснациональность</h4>
            <p className="about__text">Компания Авенир-Фито работает с многими компаниями по всему миру</p>
          </div>

          <div className="about__item">
            <img alt="park" className="about__img" src={people}/>
            <h4 className="about__title">Внимательность</h4>
            <p className="about__text">Мы внимательно относимся к пожеланиям заказчика и к своей работе</p>
          </div>

          <div className="about__item">
            <img alt="national-park" className="about__img" src={forest} />
            <h4 className="about__title">Гармония</h4>
            <p className="about__text">Наши дизайнеры умеют совмещать современные технологии и природу</p>
          </div>
        </div>
      </div>
    </section>
  )
})
