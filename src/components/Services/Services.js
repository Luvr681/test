import React from 'react'

import { services } from '../../localDB/services'
import { Service } from './Service/Service'

import './Services.css'

export const Services = () => {
  return (
  	<section className="section services">
      <div className="section__header">
        <h2 className="section__title">Our Services</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>

      <div className="services">
        <div className="container">
          <div className="services__inner">

            {
              services && services.map(service => {
                return <Service service={service} key={service.id} />
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}
