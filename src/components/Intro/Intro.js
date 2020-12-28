import React from 'react'
import { Link } from 'react-router-dom'

import './Intro.css'

export const Intro = () => {
  return (
    <>
    <section className="intro">
      <div className="intro__bg"></div>
        <div className="intro__inner">
          <h1 className="intro__title">Растения, кашпо,  сервисный уход</h1>
          <h3 className="intro__subtitle">Делаем дома и офисы уютными</h3>


          <div className="intro__get__started">
            <Link to="/catalog" className="intro__btn">КАТАЛОГ</Link>
            <Link to="/contacts" className="intro__btn">КОНТАКТЫ</Link>
          </div>

        </div>
    </section>
    </>
  )
}
