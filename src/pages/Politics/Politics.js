import React from 'react'

import { politics } from '../../localDB/politics'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { PoliticsContent } from '../../components/PoliticsContent/PoliticsContent'

import './Politics.css'

function Politics() {
  return (
    <>
      <Header />
      <section className="section politics">
        <div className="section__header">
          <h2 className="section__title">Политика обработки персональных данных</h2>
          <p className="section__text">Забота о вас — наша цель</p>
        </div>

        <div className="container">
          <div className="politics__text">
            {
              politics && politics.map((text, index) => {
                return <PoliticsContent key={index} text={text} />
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Politics
