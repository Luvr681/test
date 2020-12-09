import React from 'react'
import { Link } from 'react-router-dom'

import { Project } from './Project'

export const CatalogProject = ({ setActive, setContent, modificator, odd, catalogProject, modal = false }) => {
  return (    
    <div className={odd ? 'section catalog gold ' + modificator : 'section catalog ' + modificator}>
      <div className="container">

        <div className="section__header">
          <h2 className={odd ? 'section__title white' : 'section__title'}>{ catalogProject.title }</h2>
          <div class={odd ? 'section__subtitle white' : 'section__subtitle'}>
            <p>
              { catalogProject.description }
            </p>
          </div>
        </div>

        <div className="catalog__projects">
          {	
            catalogProject.projects && catalogProject.projects.map((project, index) => {
              return <Project modal={modal} setActive={setActive} setContent={setContent} link={catalogProject.link} odd={odd} project={project} key={index} />
            })
          }
        </div>

      </div>
  	</div>
  )
}
