import React from 'react'

export const SupplyFlower = ({ supply, odd }) => {
  if (odd) {
    return (
      <div className="supply__flower">
        <div className="supply__flower__image__block"><img className="supply__flower__image" src={supply.image} alt="" /></div>
        <div className="supply__flower__description">
          <div className="supply__flower__content">
            <h3 className="supply__flower__title">{ supply.title }</h3>
            <div className="supply__flower__text">
              <p>{ supply.description }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="supply__flower">
      <div className="supply__flower__description">
        <div className="supply__flower__content">
          <h3 className="supply__flower__title">{ supply.title }</h3>
          <div className="supply__flower__text">
            <p>{ supply.description }</p>
          </div>
        </div>
      </div>
      <div className="supply__flower__image__block"><img className="supply__flower__image" src={supply.image} alt="" /></div>
    </div>
  )
}
