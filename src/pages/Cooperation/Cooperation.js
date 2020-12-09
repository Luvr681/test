import React from 'react'

import logo from '../../assets/logo.webp'
import { cooperation } from '../../localDB/cooperation'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CooperationCategories } from '../../components/CooperationCategories/CooperationCategories'

export const Cooperation = () => {
  return (
    <>
      <Header />
      <section className="section cooperation">
        <div className="section__header">
          <div className="section__logo"><img className="section__img" src={logo} alt="" /></div>
          <h2 className="section__title">Успех бизнеса это честные партнёры</h2>
          <p className="section__subtitle">Главное это люди.</p>
          <div className="section__text">
            <p>«Авенир фито»— это команда профессионалов любящих свое дело. Мы высоко ценим наших партнёров и предлагаем Вам отличный сервис и продукты высокого качества. Мы развиваем удалённую работу и заказать продукцию Вы можете не посещая наш офис, наши специалисты компетентно ответят на все Ваши вопросы.</p>
          </div>
        </div>	
      </section>

      <CooperationCategories cooperations={cooperation} />

      <Footer />
    </>
  )
}
