import React from 'react'

import { projects } from '../../localDB/projects'
import { Project } from './Project/Project'

import './Project1.css'

export const Projects = () => {
  const [items, setItems] = React.useState(projects.slice(0, 4))
  let [quantiti, setQuantiti] = React.useState(8)

  const moreItems = () => {
    if (projects.length <= quantiti) {
      setItems(items => {
        return [
          ...items,
          ...projects.slice(quantiti - 4, quantiti)
        ]
      })
      setQuantiti(quantiti => quantiti += 4)
    }
  }

  return (
    <section className="section section--projects">
      <div className="section__header">
        <h2 className="section__title">Blog</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>	

      <div className="projects">

        {
          items && items.map((project, index) => {
            return <Project project={project} key={index} />
          })
        }

      </div>
      
      <div className="works__view__btn project__btn">
        <button onClick={() => moreItems()} className="works__more__btn">VIEW ALL</button>
      </div>
    </section> 
  )
}
