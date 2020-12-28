import React from 'react'
import { Link } from 'react-router-dom'

import { supplyFlowers } from '../../localDB/supplyFlowers'
import { Header } from '../../components/Header/Header'
import { SupplyFlower } from '../../components/SupplyFlower/SupplyFlower'
import { Footer } from '../../components/Footer/Footer'

import './SupplyFlowers.css'

function SupplyFlowers() {
  return (
    <>
      <Header />
        <section className="section supply">
          <div className="section__header">
            <h2 className="section__title">Поставка растений</h2>
            <h3 className="section__subtitle">Прямые поставки из лучших питомников</h3>
          </div>

          <div className="supply__flowers">
            <div className="container">

              {
                supplyFlowers && supplyFlowers.map((supplyFlower, index) => {
                  return <SupplyFlower odd={(index + 1) % 2 !== 0} key={supplyFlower.id} supply={supplyFlower} />
                })
              }

              <div className="supply__btn">
                <Link to='/contacts' className="supply__link">Заказать</Link>
              </div>
            </div>
          </div>

        </section>
      <Footer />
    </>
  )
}

export default SupplyFlowers
