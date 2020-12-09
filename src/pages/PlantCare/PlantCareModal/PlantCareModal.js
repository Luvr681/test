import React from 'react'

export const PlantCareModal = ({ setActive, active, content }) => {
  return (
    <div className={active ? "modal care__modal active" : "modal care__modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content w-900 active" : "modal__content w-900"} onClick={e => e.stopPropagation()}>

        <div className="modal__inner">
          <div className="modal__img__block"><img className="modal__img" src={content.image} alt="" /></div>

          <div className="modal__description no__scroll">

            <div className="modal__header">
              <div className="modal__title">{ content.title }</div>
              <a href={content?.link}><img src={content.icon} alt="instagram" className="modal__icon" /></a>
            </div>
            <hr />

            <div className="modal__body">
              <p>{ content.description }</p>
            </div>

          </div>
        </div>

      </div>
    </div>    
  )
}
