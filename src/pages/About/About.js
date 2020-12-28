import React from 'react'

import { Team } from '../../components/Team/Team'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

import './About.css'

function About() { 
  return (
    <>
      <Header />
      <section className="about__page">
        <div className="about__page__bg">
          <div className="about__page__inner">
            <h1 className="about__page__title">«Авенир фито»: кто мы</h1>
            <h3 className="about__page__subtitle">«Авенир фито» — это команда специалистов любящих своё дело. Стремление к лучшему сервису вдохновляет нас на новые решения и новые продукты для наших клиентов. Мы понимаем что для клиентов Важен наш продукт и стремимся сделать процесс покупки максимально удобным и комфортным.</h3>
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </>
  )
}

export default About;
