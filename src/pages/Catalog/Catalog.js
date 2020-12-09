import React from 'react'

import { catalogProjects } from '../../localDB/catalog'
import { CatalogProjects } from '../../components/CatalogProjects/CatalogProjects'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

export const Catalog = () => {
  return (
    <>
      <Header />
      <CatalogProjects catalogProjects={catalogProjects} />
      <Footer />
    </>
  )
}
