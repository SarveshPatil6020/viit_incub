import React from 'react'
import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components';
import { Button } from './Styles/Button';
const Error = () => {
  return (
   <Wrapper>
    
     <img src="../images/error.jpg" alt="error" />
     <NavLink to="/">
     <Button className="btn"> GO BACK</Button>
     </NavLink> 
    
   </Wrapper>
  )
}
const Wrapper=styled.section`
 padding: 0rem 0;
 display:flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;


 .btn{
    font-size: 2rem;
     margin-top:3rem;
 }
`;
export default Error