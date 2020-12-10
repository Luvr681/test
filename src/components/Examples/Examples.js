import React from 'react'

import { examples } from '../../localDB/examples'
import { Example } from './Example/Example'
import './Examples.css'

export const Examples = () => {
  return (
    <>
    {
      examples && examples.map((example, index) => {
        return <Example number={index + 1} example={example} key={example.id} />
      })
    }
    </>
  )
}
