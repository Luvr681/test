import React, { useState } from 'react'

import { About } from '../../components/About/About'
import { Contacts } from '../../components/Contacts/Contacts'
import { Footer } from '../../components/Footer/Footer'
import { Intro } from '../../components/Intro/Intro'
import { Header } from '../../components/Header/Header'
import { Members } from '../../components/Members/Members'
import { Team } from '../../components/Team/Team'
import { Examples } from '../../components/Examples/Examples'
import { Projects } from '../../components/Projects/Projects'
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
