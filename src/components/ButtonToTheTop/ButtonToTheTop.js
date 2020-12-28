import React from 'react'

import top from '../../assets/to__top.png'

import './ButtonToTheTop.css'

export const ButtonToTheTop = ({ toTheTop }) => {
  const offset = 400
  let classesForToTopButton = document.body.scrollTop > offset ? ['button__to__the__top', 'visible'] : ['button__to__the__top']
  document.body.addEventListener('scroll', () => {
    console.log(document.body.scrollTop)
    classesForToTopButton = document.body.scrollTop > offset ? ['button__to__the__top', 'visible'] : ['button__to__the__top'] 
  }) 

  React.useEffect(() => {
    classesForToTopButton = document.body.scrollTop > offset ? ['button__to__the__top', 'visible'] : ['button__to__the__top'] 
  }, [document.body.scrollTop])

  return (
    <button onClick={() => toTheTop()} className={classesForToTopButton.join(' ')}>
      <img className='button__to__the__top__img' src={top} alt="top" />
    </button>
  )
}
