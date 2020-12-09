import React from 'react'

export const FlowerPot = ({ setActive, setContent, clipNumber, flowerPot }) => {
  return (
    <div onClick={() => {
      setContent(flowerPot)
      setActive(true)
    }} className={ `clip clip${clipNumber}` }>
      <div className="flower__content">
        <h2 className="flower__title">{ flowerPot.title }</h2>
        <p className="flower__text">{ flowerPot.subTitle }</p>
      </div>
    </div>
  )
}
