import React from 'react'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Navbar from './component/ui/Navbar'
import FoodArray from './component/props/Props'
import HomeHero from './component/HomeHero'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Menu/> */}
      <HomeHero/>
       <FoodArray/>
    </div>
  )
}

export default App