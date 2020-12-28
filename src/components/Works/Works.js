import React from 'react'
import { Link } from 'react-router-dom'

import { works } from '../../localDB/works'
import { Work } from './Work/Work'
import { ModalWindow } from '../ModalWindow/ModalWindow'

import './Works.css'

export const Works = ({ setHidden }) => {
  const [items, setItems] = React.useState(works.slice(0, 9))
  const [modalActive, setModalActive] = React.useState(false)
  const [modalContent, setModalContent] = React.useState({})
  let [quantiti, setQuantiti] = React.useState(18)
  setHidden(modalActive)

  const moreItems = () => {
    if (works.length <= quantiti * 18) {
      setItems(items => {
        return [
          ...items,
          ...works.slice(quantiti - 9, quantiti)
        ]
      })
      setQuantiti(quantiti => quantiti += 9)
    }
  }

  return (
    <>
  	<section className="section works">
      <div className="section__header">
        <h2 className="section__title">Наши работы</h2>
        <p className="section__subtitle">Мы не скрываем примеры своих работ и считаем, что клиент сам знает, что ему нужно</p>
      </div>

      <div className="container">
        <div className="works">

          <div className="works__categories">
            <div className="works__category">
              <Link to="/" className="works__btn">Все</Link>
            </div>
            <div className="works__category">
              <Link to="/" className="works__btn">Растения</Link>
            </div>
            <div className="works__category">
              <Link to="/" className="works__btn">Мох</Link>
            </div>
            <div className="works__category">
              <Link to="/" className="works__btn">Цветы</Link>
            </div>
          </div>

          <div className="works__inner">

            {
              items && items.map(work => {
                return <Work setModal={setModalContent} setActive={setModalActive} work={work} key={work.id} />
              })
            }

            <ModalWindow classes={"modal__work"} content={modalContent && modalContent} active={modalActive} setActive={setModalActive} />

          </div>
          

          <div className="works__view__btn">
            <button
              onClick={() => {
                moreItems()
              }}
              className="works__more__btn"
            >VIEW ALL</button>
          </div>

        </div>
      </div>
    </section>
    </>)
}
