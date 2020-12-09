import React from 'react'

import { Member } from './Member/Member'

import './Members.css'

export const Members = ({ members, modificator }) => {
  return (
  	<section className="section pricing">
      <div className="section__header">
        <h2 className="section__title">Pricing Plan</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>

      <div className="container">
        <div className={ "members " + modificator}>

          {
            members && members.map(member => {
              return <Member member={member} key={member.id} />
            })
          }

        </div>
      </div>
    </section>
  )
}
