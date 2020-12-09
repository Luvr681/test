import React from 'react'

export const Project = ({ project }) => {
  if (project.length === 2) {
    return (
      <div className="projects__col">
        <div className="projects__item">
          <img className="projects__img" src={project[0].image} alt="" />
          <div className="projects__info">
            <div className="projects__title">{ project[0].text }</div>
            <div className="projects__text">{ project[0].text }</div>
          </div>
        </div>
        <div className="projects__item">
          <img className="projects__img" src={project[1].image} alt="" />
          <div className="projects__info">
            <div className="projects__title">{ project[1].text }</div>
            <div className="projects__text">{ project[1].text }</div>
          </div>
        </div>
      </div>        
    )
  } else {
    return (
      <div className="projects__col">
        <div className="projects__item">
          <img className="projects__img" src={project[0].image} alt="" />
          <div className="projects__info">
            <div className="projects__title">{ project[0].text }</div>
            <div className="projects__text">{ project[0].text }</div>
          </div>
        </div>
      </div> 
    )
  }
}
