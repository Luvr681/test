import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Spinner from './components/Spinner/Spinner'

const Home = React.lazy(() => import('./pages/Home/Home'))
const About = React.lazy(() => import('./pages/About/About'))
const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'))
const FlowerPots = React.lazy(() => import('./pages/FlowerPots/FlowerPots'))
const GardenInside = React.lazy(() => import('./pages/GardenInside/GardenInside'))
const GreenWalls = React.lazy(() => import('./pages/GreenWalls/GreenWalls'))
const PlantWall = React.lazy(() => import('./pages/PlantWall/PlantWall'))
const SupplyFlowers = React.lazy(() => import('./pages/SupplyFlowers/SupplyFlowers'))
const PlantCare = React.lazy(() => import('./pages/PlantCare/PlantCare'))
const FeedBack = React.lazy(() => import('./pages/FeedBack/FeedBack'))
const Politics = React.lazy(() => import('./pages/Politics/Politics'))
const Cooperation = React.lazy(() => import('./pages/Cooperation/Cooperation'))

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Route path="/" exact component={Home} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/catalog" exact component={Catalog} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/flower__pot" exact component={FlowerPots} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/garden__inside" exact component={GardenInside} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/green__walls" exact component={GreenWalls} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/plant__wall" exact component={PlantWall} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/supply__flowers" exact component={SupplyFlowers} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/plant__care" exact component={PlantCare} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/contacts" exact component={FeedBack} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/about-us" exact component={About} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/politics" exact component={Politics} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route path="/cooperation" exact component={Cooperation} />
        </Suspense>
      </ScrollToTop>
    </Router>  
  )
}

export default App
