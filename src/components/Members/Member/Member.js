import React from 'react'
import { Link } from 'react-router-dom'

import { Description } from './Description'

export const Member = ({ member }) => {
  return (
    <div className="member">
      <div className="member__bg">
      </div>

      <div className="member__info">
        <div className="member__title"><h1>{ member.title }</h1></div>
        <div className="member__text">
          <p><span className="member__span">{ member.cost.currency }</span><span className="member__nums">{ member.cost.sum }</span>{ member.cost.period }</p>
        </div>

        <div className="member__conditions">
          {
            member.descriptions && member.descriptions.map((description, index) => {
              return <Description description={description} key={index} />
            })
          }
        </div>
        <div className="member__btn">
          <Link to="/contacts" className="member__link">{ member.btn }</Link>
        </div>

      </div>
    </div>
  )
}
