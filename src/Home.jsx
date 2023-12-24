import React from 'react'
import Thrust from './components/Thrust'
import Contact from './Contact'
import Slider from './components/slider/Slider'
import Navigation from './components/Navigation/Navigation'


const home = () => {
  const data={
    name:"VIItsiic",
    image:"./images/hero.svg"

  }
  return (
    <>
   
   <Slider />
   <Thrust />
   <Contact />

  </>
  )
}


export default home