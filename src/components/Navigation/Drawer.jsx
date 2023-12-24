import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ExpandMenu from './ExpandMenu'

const Drawer = ({isOpen, toggleDrawer,routes}) => {
  return (
    <>
    {isOpen && <Backdrop onClick={toggleDrawer}/>}
    
    <SDrawer isOpen={isOpen}>
    
    <RightNav>
    <SNavbarBrand>LOGO</SNavbarBrand>
          <NavRoutes>
             {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute onClick={toggleDrawer} to={route.link} key={route.name} >
                  {route.name}
                </NavRoute>
              );
            })}

          </NavRoutes>
        </RightNav>

    </SDrawer>

    </>
  )
}

export default Drawer
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  z-index: 1;
  background-color: white;
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;
const SNavbarBrand = styled.div`
font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 0.5rem;
`;
