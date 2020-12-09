import React from 'react'

import { members } from '../../localDB/members'
import { plantWall } from '../../localDB/plantWall'
import { advantages } from '../../localDB/advantages'
import { CatalogProjects } from '../../components/CatalogProjects/CatalogProjects'
import { AdvantagesPlantWall } from '../../components/AdvantagesPlantWall/AdvantagesPlantWall'
import { Members } from '../../components/Members/Members'
import { Projects } from '../../components/Projects/Projects'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export const PlantWall = () => {
  return (
    <>
      <Header /> 
      <section className="section green--walls">
        <div className="section__header">
          <h2 className="section__title">Зелёные стены</h2>
          <h3 className="section__subtitle">Экономичная красота</h3>
          <p className="section__text">Зелёные стены достаточно экономичный способ придать своему интерьеру изысканную неповторимость. Монтаж зелёных стен возможен уже в отремонтированном помещении.</p>
        </div>
      </section>        
      <CatalogProjects catalogProjects={plantWall} /> 
      <AdvantagesPlantWall advantages={advantages} />
      <Members members={members} />
      <Projects />
      <Footer /> 
    </>
  )
}
