import React from 'react'
import { Link } from 'react-router-dom'

export const CooperationCategory = ({ cooperation }) => {
  return (
    <div className="cooperation__block">
      <div className="cooperation__bg">
        <Link to="/contacts">
      <div className="cooperation__image__block"><img className="cooperation__image" src={cooperation.image} alt="" />
        <div className="cooperation__content">
          <h2 className="cooperation__title">{ cooperation.subTitle }</h2>
          <div className="cooperation__text">
            <p>{ cooperation.content }</p>
          </div>
        </div>
      </div>
      </Link>
      </div>
      <div className="cooperation__description">
        <h3 className="cooperation__description__title">{ cooperation.title }</h3>
        <div className="cooperation__description__text">{ cooperation.description }</div>
        <Link to="/contacts" className="cooperation__description__button">Контакты</Link>
      </div>
    </div>
  )
}
