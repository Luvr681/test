import React from 'react'

import { people } from '../../localDB/people'
import { Person } from './Person/Person'

import './Team.css'

export const Team = () => {
  return (
  	<section className="section">
      <div className="section__header">
        <h2 className="section__title">Our Team Member</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>	

      <div className="team">
        <div className="container">
          <div className="team__inner">

            {
              people && people.map(person => {
                return <Person person={person} key={person.id} />
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}
