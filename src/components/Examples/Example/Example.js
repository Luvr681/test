import React from 'react'
import { Link } from 'react-router-dom'

export const Example = ({ example, number }) => {
  return (

    <section className={`section examples${number}`}>
      <div className="section__header">
        <h2 className="section__title">Contact Us</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
      </div>
{/*      <div className="container">*/}
        <div>

        <div className={`example__inner`}>
          <div className="example__img__block">
            <img className="example__img" src={example.image} alt="" />
          </div>
          <div className="example__info">
            <h1 className="example__title">{ example.title }</h1>
            <div className="example__subtitle">
              <p>{ example.subTitle }</p>
            </div>
            <div className="example__text">
              <p>{ example.text }</p>
            </div>
            <div className="example__btn">
              <Link to={`${example.link}`} className="example__link">Подробнее</Link>
            </div>
          </div>
        </div>

{/*        </div>*/}
      </div>  
    </section>
  )
}
