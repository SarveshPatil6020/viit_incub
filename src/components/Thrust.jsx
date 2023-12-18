import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Styles/Button'
const Thrust = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Our Thrust Areas</h2>
      <div className="container grid grid-three-column">
        <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
      <div className="card">
        <figure>
          <img src="./images/services1.jpeg" alt="services images" className="service-img"/>
        </figure>
        <div className="card-data">
          <h3>Iot</h3>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <NavLink to="/thrust1">
            <Button className="btn">Read more</Button>
          </NavLink>
        </div>
      </div>
  
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 70rem;
}

.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data {
    padding: 0 2rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  p{
    font-size: 1rem;
  }

  .btn {
    margin: 1rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: .8rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 80%;
    margin-top: 1rem;
    height: 10rem;
    transition: all 0.2s linear;
  }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-two-column,
  .grid-three-column {
    grid-template-columns: 1fr;
  }
}
`;


export default Thrust