import { useEffect, useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import React from 'react'
import {sliderData} from "./slider-data"
import "./Slider.css"
const Slider = () => {
    const [currenSlide, setCurrentSlide]= useState(0)
    const slideLength = sliderData.length;
    //slidelength = 1 2 3 
    // currentslide = 0 1 2

    const autoscroll =true;
    let slideInterval;
    let intervalTime = 5000;

    
    const nextSlide  = () =>{
        setCurrentSlide( currenSlide === slideLength -1 ? 0 : currenSlide + 1)
    } 
    const previouSlide =() =>{
        setCurrentSlide( currenSlide === 0 ? slideLength - 1 : currenSlide - 1)
    }
    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    
    }

    useEffect(() =>{
        setCurrentSlide(0)
    },[])
    useEffect(() =>{
        if(autoscroll){
            auto()
        }
        return () => clearInterval(slideInterval)
    },[currenSlide])
    
    return (
        <div className="slider">
            <AiOutlineArrowLeft className ="arrow prev"  onClick={previouSlide}/>
            <AiOutlineArrowRight className ="arrow next" onClick={nextSlide}/>
            
            {sliderData.map((slide,index) => {
                return(
                    <div className={index === currenSlide ? "slide current" : "slide"} key={index}>
                        {index === currenSlide && (
                            <>
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr />
                                <button className="--btn-primary"> Get started</button>
                            </div>
                            </>
                        )} 

                    </div>
                )
            })}
        </div>
  )
}

export default Slider