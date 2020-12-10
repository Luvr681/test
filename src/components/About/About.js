import React from 'react'

import itemImg from '../../assets/about/transfer.png'

import './About.css'

export const About = () => {
  return (
    <section className="section about">
      <div className="section__header">
        <h2 className="section__title">About Us</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>
      
      <div className="about">
        <div className="about__item">
          <img alt="planet" className="about__img" src="https://img.icons8.com/pastel-glyph/64/000000/earth-planet.png"/>
          <h4 className="about__title">Awesome Icons</h4>
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>

        <div className="about__item">
          <img alt="park" className="about__img" src={itemImg}/>
          <h4 className="about__title">One Page</h4>
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>

        <div className="about__item">
          <img alt="national-park" className="about__img" src="https://img.icons8.com/ios/50/000000/national-park.png"/>
          <h4 className="about__title">Fully Responsive</h4>
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </div>
      </div>
    </section>
  )
}

