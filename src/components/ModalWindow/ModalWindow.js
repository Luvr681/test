import React from 'react'

import './ModalWindow.css'

export const ModalWindow = ({ classes = '', active, setActive, content }) => {
  return (
    <div className={active ? "modal active " + classes : "modal " + classes} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active " : "modal__content"} onClick={e => e.stopPropagation()}>

        <div className="modal__inner">
          <div className="modal__img__block"><img className="modal__img" src={content.image} alt="" /></div>

          <div className="modal__description">

            <div className="modal__header">
              <div className="modal__title">{ content?.moreInfo?.title }</div>
              <div className="modal__link">
                <a rel="noreferrer" target="_blank" href={content?.moreInfo?.link}><img src={content.icon} alt="instagram" className="modal__icon" /></a>
              </div>
            </div>

            <hr />

            <div className="modal__body">
              <p>{ content?.moreInfo?.description }</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
