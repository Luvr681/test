import React from 'react'

import { greenWalls } from '../../localDB/greenWalls'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CatalogProjects } from '../../components/CatalogProjects/CatalogProjects'

export const GreenWalls = () => {
  return (
    <>
      <Header />
      <CatalogProjects catalogProjects={greenWalls} />
      <Footer />
    </>
  )
}
