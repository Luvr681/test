import React from 'react'

import { Social } from './Social'

export const Person = ({ person }) => {
  return (
    <div className="person">
      <div className="person__img"><img src={person.image} alt="" /></div>
      <div className="person__name"><h3>{ person.name }</h3></div>
      <div className="person__job"><p>{ person.job }</p></div>
      <div className="person__social">
        {
          person.social && person.social.map((icon, index) => {
            return <Social icon={icon} key={index} />
          })
        }
      </div>
    </div>
  )
}
