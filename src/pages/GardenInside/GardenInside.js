import React from 'react'

import { Header } from '../../components/Header/Header'
import { Realizations } from '../../components/Realizations/Realizations'
import { HowToBuy } from '../../components/HowToBuy/HowToBuy'
import { Footer } from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'

import './GardenInside.css'

export const GardenInside = () => {
  return (
    <>
      <Header />
      <Slider />
      <section className="section garden__inside">
        <div className="section__header">
          <h2 className="section__title">Garden Inside</h2>
          <h3 className="section__subtitle">Стильное решения для серьезного бизнеса</h3>
          <p className="section__text">Создание сада нужно проектировать еще на стадии строительства (ремонта) помещения. Для создания необходимо учесть наличие и подвод коммуникаций: вентиляция, водоснабжение, освещение. Инженеры нашей компании разрабатывают техническую документацию,  специалисты производят качественный монтаж, биологи осуществляют заботливый уход. Полный цикл позволяет нам контролировать весь процесс создания, нести за него ответственность и давать гарантии на работы и сервисный уход.</p>
        </div>
      </section>   
      <Realizations />
      <HowToBuy color={'dark'} />
      <Footer />
    </>
  )
}
