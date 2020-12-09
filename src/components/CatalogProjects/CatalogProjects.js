import React from 'react'

import { CatalogProject } from './CatalogProject/CatalogProject'

import './CatalogProjects.css'

export const CatalogProjects = ({ modal, modificator, catalogProjects, setActive, setContent }) => {
  return (
    <div className="mt-100">
      {
        catalogProjects && catalogProjects.map((catalogProject, index) => {
          return <CatalogProject modal={modal} setActive={setActive} setContent={setContent} modificator={modificator} odd={(index + 1) % 2 === 0} catalogProject={catalogProject} key={catalogProject.id} />
        })
      }
    </div>
  )
}
