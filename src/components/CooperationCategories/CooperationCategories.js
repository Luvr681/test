import React from 'react'

import { CooperationCategory } from './CooperationCategory/CooperationCategory'

import './CooperationCategories.css'

export const CooperationCategories = ({ cooperations }) => {
  return (
    <>
      <section className="section cooperation__categories">
        <div className="section__header">
          <h2 className="section__title">Приглашаем к сотрудничеству</h2>
        </div>	

        <div className="container">
          <div className="cooperation__category">
            {
              cooperations && cooperations.map(cooperation => {
                return <CooperationCategory key={cooperation.id} cooperation={cooperation} />
              })
            }
          </div>
        </div>

      </section>
    </>
  )
}
