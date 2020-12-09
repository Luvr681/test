import React, { useState } from 'react'

import { About } from '../../components/About/About'
import { Footer } from '../../components/Footer/Footer'
import { Intro } from '../../components/Intro/Intro'
import { Header } from '../../components/Header/Header'
import { Examples } from '../../components/Examples/Examples'
import { Works } from '../../components/Works/Works'

export const Home = () => {
  const [scrollHidden, setScrollHidden] = useState(false)
  document.body.className = scrollHidden ? 'scroll__hidden' : ''
  return (
    <div className="home">
      <Header />
      <Intro />
      <About />
      <Examples />
      <Works setHidden={setScrollHidden} />
      <Footer />
    </div>
  )
}
