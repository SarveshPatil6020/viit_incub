import React from 'react'
import Herosection from './components/HeroSection'

const About = () => {
  const data={
    name: "VIIT Pune",
    image:"./images/viit1img.jpeg",
  };
  return (
    <Herosection {...data}/>
  )
}

export default About