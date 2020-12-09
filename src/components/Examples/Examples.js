import React from 'react'

import { examples } from '../../localDB/examples'
import { Example } from './Example/Example'
import './Examples.css'

export const Examples = () => {
  return (
    <section className="section examples">
      <div className="section__header">
        <h2 className="section__title">Contact Us</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
      </div>
      <div className="container">
      	<div>
	        {
	          examples && examples.map(example => {
	            return <Example example={example} key={example.id} />
	          })
	        }
        </div>
      </div>  
    </section>
  )
}
