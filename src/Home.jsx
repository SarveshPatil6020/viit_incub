import React from 'react'
import Herosection from './components/HeroSection'
import Thrust from './components/Thrust'
import Contact from './Contact'

const home = () => {
  const data={
    name:"VIItsiic",
    image:"./images/hero.svg"

  }
  return (
    <>
   <Herosection {...data} />
   <Thrust />
   <Contact />

  </>
  )
}


export default home