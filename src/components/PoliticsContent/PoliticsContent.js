import React from 'react'

export const PoliticsContent = ({ text }) => {
  if (text === 'hr') {
    return <hr />
  }
  return (
    <>
      <p className="politics__content">{ text }</p>
      <br/>
    </>
  )
}
