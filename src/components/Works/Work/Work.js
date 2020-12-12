import React from 'react'

import './Work.css'

export const Work = ({ setModal, work, setActive }) => {
  return (
    <div onClick={() => {
      setActive(true)
      setModal(work)
    }} className="works__item">
      <div className="works__img">
        <img className="work__photo" src={work.image} alt="" />
      </div>
      <div className="work__info">
        <h1 className="works__title">{ work.title }</h1>
        <div className="works__text">
          <p>{ work.description }</p>
        </div>
      </div>
    </div>
  )
}
