import React from 'react'
import { Link } from 'react-router-dom'

import './Intro.css'

export const Intro = () => {
  return (
    <>
    <section className="intro">
      <div className="intro__inner">
        <h1 className="intro__title">Web development project</h1>
        <h3 className="intro__subtitle">Very suitable to support all web development projects</h3>


        <div className="intro__get__started">
          <Link to="/" className="intro__btn">OUR SERVICES</Link>
          <Link to="/" className="intro__btn">HIRE IS NOW</Link>
        </div>

      </div>
    </section>
    </>
  )
}
