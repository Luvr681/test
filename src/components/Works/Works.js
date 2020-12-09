import React from 'react'

import { works } from '../../localDB/works'
import { Work } from './Work/Work'
// import { WorkModal } from './WorkModal/WorkModal'
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
  	<section className="section">
      <div className="section__header">
        <h2 className="section__title">Latest Works</h2>
        <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
      </div>

      <div className="container">
        <div className="works">

          <div className="works__categories">
            <div className="works__category">
              <a className="works__btn">ALL</a>
            </div>
            <div className="works__category">
              <a className="works__btn">WEB DESIGN</a>
            </div>
            <div className="works__category">
              <a className="works__btn">UI/UX DESIGN</a>
            </div>
            <div className="works__category">
              <a className="works__btn">MOCKUPS</a>
            </div>
          </div>

          <div className="works__inner">

            {
              items && items.map(work => {
                return <Work setModal={setModalContent} setActive={setModalActive} work={work} key={work.id} />
              })
            }

            <ModalWindow content={modalContent && modalContent} active={modalActive} setActive={setModalActive} />

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
