import React from 'react'

import { flowerPots } from '../../localDB/flowerPots'
import { FlowerPot } from '../../components/FlowerPot/FlowerPot'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { HowToBuy } from '../../components/HowToBuy/HowToBuy'
import { ModalWindow } from '../../components/ModalWindow/ModalWindow'

import './FlowerPots.css'

function FlowerPots() {
  const [modalActive, setModalActive] = React.useState(false)
  const [modalContent, setModalContent] = React.useState({})
  const [scrollHidden, setScrollHidden] = React.useState(false)
  return (
  	<div className={scrollHidden ? 'scroll__hidden' : ''}>
  	  <Header />
      <section className="section flowers">
      	<div className="container">

  	      <div className="section__header">
  	        <h2 className="section__title">About Us</h2>
  	        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
  	      </div>

          <div className="flower__pots">
            {
              flowerPots && flowerPots.map((flowerPot, index) => {
                return <FlowerPot key={flowerPot.id} setActive={setModalActive} setContent={setModalContent} flowerPot={flowerPot} clipNumber={index + 1} />
              })
            }

          </div>
          <ModalWindow classes={'w-900 flower__pot__modal'} active={modalActive} setActive={setModalActive} content={modalContent} />

        </div>
      </section>
      <HowToBuy />
  	  <Footer />
    </div>
  )
}

export default FlowerPots
