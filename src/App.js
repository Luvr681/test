import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { FlowerPots } from './pages/FlowerPots/FlowerPots'
import { GardenInside } from './pages/GardenInside/GardenInside'
import { GreenWalls } from './pages/GreenWalls/GreenWalls'
import { PlantWall } from './pages/PlantWall/PlantWall'
import { SupplyFlowers } from './pages/SupplyFlowers/SupplyFlowers'
import { PlantCare } from './pages/PlantCare/PlantCare'
import { FeedBack } from './pages/FeedBack/FeedBack'
import { About } from './pages/About/About'
import { Politics } from './pages/Politics/Politics'
import { Cooperation } from './pages/Cooperation/Cooperation'
import { ButtonToTheTop } from './components/ButtonToTheTop/ButtonToTheTop'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const toTheTop = () => {
    document.body.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Router>
      <ScrollToTop>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/flower__pot" exact component={FlowerPots} />
        <Route path="/garden__inside" exact component={GardenInside} />
        <Route path="/green__walls" exact component={GreenWalls} />
        <Route path="/plant__wall" exact component={PlantWall} />
        <Route path="/supply__flowers" exact component={SupplyFlowers} />
        <Route path="/plant__care" exact component={PlantCare} />
        <Route path="/contacts" exact component={FeedBack} />
        <Route path="/about-us" exact component={About} />
        <Route path="/politics" exact component={Politics} />
        <Route path="/cooperation" exact component={Cooperation} />
        <ButtonToTheTop toTheTop={toTheTop} />
      </ScrollToTop>
    </Router>  
  )
}

export default App
