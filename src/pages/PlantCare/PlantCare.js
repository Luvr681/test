import React from 'react'

import { plantCare } from '../../localDB/plantCare'
import { care } from '../../localDB/care'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Members } from '../../components/Members/Members'
import { CareRules } from '../../components/CareRules/CareRules'
import { CatalogProjects } from '../../components/CatalogProjects/CatalogProjects'
import { ModalWindow } from '../../components/ModalWindow/ModalWindow'

import './PlantCare.css'

export const PlantCare = () => {
  const [modalActive, setModalActive] = React.useState(false)
  const [modalContent, setModalContent] = React.useState({})
  const [scrollHidden, setScrollHidden] = React.useState(false)
  return (
  	<div className={scrollHidden ? 'scroll__hidden' : ''}>
	  	<Header />
	    <section className="plant__care">
	      <div className="plant__care__inner">
	        <h1 className="plant__care__title">Профессиональный уход за растениями</h1>
	        <h3 className="plant__care__subtitle">Лучшие специалисты</h3>
	      </div>
	    </section>
	    <Members members={plantCare} modificator={'care'} />
      <CatalogProjects modal={true} setActive={setModalActive} setContent={setModalContent} modificator={'care__with__plants'} catalogProjects={care} />
      <ModalWindow classes={'care__modal'} setActive={setModalActive} active={modalActive} content={modalContent} />
      <CareRules />
      <Footer />
    </div>
  )
}
