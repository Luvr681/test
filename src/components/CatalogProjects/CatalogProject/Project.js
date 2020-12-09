import React from 'react'
import { Link } from 'react-router-dom'

import '../CatalogProjects.css'

export const Project = ({ setContent, setActive, modal, link, odd, project }) => {
  if (!modal) {
    return (
      <Link to={link} className={ odd ? "project white__bg" : "project" }>
        <div className="project__img__block"><img className="project__img" src={project.image} alt="" /></div>
        <div className="project__info">
          <h3 className="project__title">{ project.title }</h3>
          <div className="project__subtitle">
            <p>{ project.subTitle }</p>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <div onClick={() => {
      setActive(true)
      setContent(project)
    }} className={ odd ? "project white__bg" : "project" }>
      <div className="project__img__block"><img className="project__img" src={project.image} alt="" /></div>
      <div className="project__info">
        <h3 className="project__title">{ project.title }</h3>
        <div className="project__subtitle">
          <p>{ project.subTitle }</p>
        </div>
      </div>
    </div>
  )
}
