import React from 'react'
import { NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button} from "../Styles/Button";

const Herosection = (props) => {
  return (
    <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
        <p className="hero-top-data">This is ME</p>
        <h1 className="hero-heading">{props.name}</h1>
        <p className="hero-para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <Button className="btn hireme-btn">
         <NavLink to="/about">Read more</NavLink>

       </Button>
       </div>
     
       {/* for image*/}
       <div className="section-hero-image">
         <picture>
            <img src={props.image} alt="hero image"className="hero-img"/>
         </picture>
        </div>
    </div>
   </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    {/*change*/}
    max-width: 10rem;

  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 3rem;
  }

  .hero-para {
    margin-top: 1rem;
    {/*change*/}
    margin-bottom: 2rem;
    max-width: 60rem;
    {/*change*/}
    font-size: 1.3rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    {/*change- img size*/}
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;


export default Herosection